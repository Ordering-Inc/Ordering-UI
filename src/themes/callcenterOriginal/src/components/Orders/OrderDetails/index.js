import React, { useState, useEffect, useRef } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils, useSession, OrderDetailsDashboard as OrderDetailsController } from 'ordering-components'
import { ProductItemAccordion } from '../ProductItemAccordion'
import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { Messages } from '../Messages'
import { OrderMetaFields } from '../OrderMetaFields'
import { useWindowSize } from '../../../../../../hooks/useWindowSize'
import { OrderDetailsHeader } from '../OrderDetailsHeader'
import { OrderBill } from '../OrderBill'
import { OrderContactInformation } from '../OrderContactInformation'
import { XLg } from 'react-bootstrap-icons'
import { NotFoundSource, Modal } from '../../Shared'
import { IconButton } from '../../../styles'
import { OrderToPrint } from '../OrderToPrint'
import { OrderToPrintTicket } from '../OrderToPrintTicket'
import { getOrderStatuPickUp, getOrderStatus, getCurrenySymbol } from '../../../../../../utils'

import {
  Container,
  SkeletonWrapper,
  OrderDetailsContent,
  OrderDetailsExtraContent,
  ChatContainer,
  OrderStatus,
  StatusBarContainer,
  StatusBar,
  AdvancedLogistic,
  OrderProducts,
  CloseButtonWrapper,
  OrderStatusSelectorWrapper,
  PlaceSpotContainer,
  RejectReasonsContainer,
  RejectReasonWrapper,
  RejectReasonsList,
  DetailBottom
} from './styles'

const OrderDetailsUI = (props) => {
  const {
    isSelectedOrders,
    open,
    handleBackRedirect,
    handleUpdateOrderStatus,
    isTourOpen,
    handleUpdateOrderForUnreadCount,
    messages,
    setCurrentTourStep,
    currentTourStep,
    isTourFlag,
    setIsTourFlag,
    setIsTourOpen,
    actionStatus,
    handleRefundPaymentsStripe,
    handleOrderRefund,
    isServiceOrder
  } = props

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [openMessages, setOpenMessages] = useState({ chat: false, history: false })
  const [showOption, setShowOption] = useState(null)
  const [{ parseDate }] = useUtils()
  const [{ user }] = useSession()
  const printRef = useRef()
  const printTicketRef = useRef()

  const [unreadAlert, setUnreadAlert] = useState({ business: false, driver: false, customer: false })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [extraOpen, setExtraOpen] = useState(false)
  const [isExpand, setIsExpand] = useState(false)
  const placeSpotEnabled = [3, 4]
  const {
    order,
    loading
  } = props.order

  const rejectResonStatuses = [6, 9, 10, 11, 12, 14]

  const getLogisticTag = (status) => {
    switch (parseInt(status)) {
      case 0:
        return t('PENDING', 'Pending')
      case 1:
        return t('IN_PROGRESS', 'In progress')
      case 2:
        return t('IN_QUEUE', 'In queue')
      case 3:
        return t('EXPIRED', 'Expired')
      case 4:
        return t('RESOLVED', 'Resolved')
      default:
        return t('UNKNOWN', 'Unknown')
    }
  }

  const getPriorityTag = (priority) => {
    switch (parseInt(priority)) {
      case -1:
        return t('LOW', 'Low')
      case 0:
        return t('NORMAL', 'Normal')
      case 1:
        return t('HIGH', 'High')
      case 2:
        return t('URGENT', 'Urgent')
      default:
        return t('UNKNOWN', 'Unknown')
    }
  }

  const unreadMessages = () => {
    const unreadedMessages = messages?.messages.filter(message => !message?.read && message?.can_see?.includes(0) && message?.author_id !== user.id)
    const customer = unreadedMessages?.some(message => message?.author?.level === 3)
    const business = unreadedMessages?.some(message => message?.author?.level === 2)
    const driver = unreadedMessages?.some(message => message?.author?.level === 4)
    setUnreadAlert({ business, driver, customer })
  }

  const handleCloseMessages = () => {
    setOpenMessages({ chat: false, history: false })
  }

  const handleShowOption = (option, isInitialRender) => {
    if (option === 'chat') {
      setOpenMessages({ chat: true, history: false })
      setUnreadAlert({ ...unreadAlert, customer: false })
      setShowOption(null)
    } else if (option === 'history') {
      setOpenMessages({ chat: false, history: true })
      setShowOption(null)
    } else {
      setOpenMessages({ chat: false, history: false })
      setShowOption(option)
    }
    setExtraOpen(true)

    if (!isInitialRender) {
      const orderId = query.get('id')
      history.replace(`${location.pathname}?id=${orderId}&section=${option}`)
    }
  }

  useEffect(() => {
    unreadMessages()
  }, [messages?.messages])

  const actionSidebar = (value) => {
    setIsMenuOpen(value)

    if (!value) {
      props.onClose()
    }
  }

  const toggleMainContent = () => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('orderDetails').style.width = '100vw'
      } else {
        if (isExpand) {
          document.getElementById('orderDetails').style.width = '100vw'
        } else {
          if (extraOpen && width >= 1000) {
            document.getElementById('orderDetails').style.width = '1000px'
          } else {
            document.getElementById('orderDetails').style.width = '500px'
          }
        }
      }
    }
  }

  useEffect(() => {
    toggleMainContent()
  }, [extraOpen, isExpand, width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  const handleChangeTour = (evt) => {
    if (!isTourOpen) return

    if (isTourOpen && order?.delivery_type === 1 && currentTourStep !== 2) {
      setCurrentTourStep(2)
      return
    }
    if (evt.target.closest('.driver-select')) return
    if (isTourOpen && setCurrentTourStep) {
      handleShowOption('chat')
      setTimeout(() => {
        isTourOpen && setCurrentTourStep && setCurrentTourStep(3)
      }, 1)
    }
  }

  const handleChangeKeyboard = (evt) => {
    if (evt.keyCode === 37 && currentTourStep === 2) setCurrentTourStep(1)
    if (evt.keyCode === 39 && currentTourStep === 1 && order?.delivery_type === 1) setCurrentTourStep(2)
    if (evt.keyCode === 39 && currentTourStep === 1 && order?.delivery_type !== 1) {
      handleShowOption('chat')
      setTimeout(() => {
        isTourOpen && setCurrentTourStep && setCurrentTourStep(3)
      }, 1)
    }
    if (evt.keyCode === 37 && currentTourStep === 3) {
      handleCloseMessages()
      setExtraOpen(false)
      order?.delivery_type === 1 ? setCurrentTourStep(2) : setCurrentTourStep(1)
      setIsTourFlag(false)
    }
    if ((evt.keyCode === 39 && currentTourStep === 2)) {
      handleShowOption('chat')
      setCurrentTourStep(3)
    }
    if (evt.keyCode === 39 && currentTourStep === 3) {
      setExtraOpen(false)
      props.onClose()
      setCurrentTourStep(4)
    }
  }

  useEffect(() => {
    if (!isTourOpen) return
    document.addEventListener('keydown', handleChangeKeyboard)
    return () => document.removeEventListener('keydown', handleChangeKeyboard)
  }, [isTourOpen, currentTourStep])

  useEffect(() => {
    if (!isTourFlag) return
    handleShowOption('chat')
    setTimeout(() => {
      setCurrentTourStep(3)
    }, 1)
  }, [isTourFlag])

  const onCloseSidebar = (e) => {
    if (e.code === 'Escape') {
      props.onClose() && props.onClose()
      setIsTourOpen && setIsTourOpen(false)
    }
  }

  const handleCloseMoreDetails = () => {
    setExtraOpen(false)
    setOpenMessages({ chat: false, history: false })
    setShowOption(null)
    const orderId = query.get('id')
    history.replace(`${location.pathname}?id=${orderId}`)
  }

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', onCloseSidebar)
    return () => document.removeEventListener('keydown', onCloseSidebar)
  }, [open])

  useEffect(() => {
    if (loading) return
    const section = query.get('section')
    if (section) {
      handleShowOption(section, true)
    }
  }, [loading])

  const progressBarObjt = order?.delivery_type && order?.delivery_type === 2 ? getOrderStatuPickUp : getOrderStatus

  return (
    <Container
      isSelectedOrders={isSelectedOrders}
      id='orderDetails'
      isSkeleton={loading}
      noAnimation={isTourOpen}
    >
      {loading && (
        <SkeletonWrapper>
          <Skeleton height={75} count={3} style={{ marginBottom: '10px' }} />
          <Skeleton height={200} style={{ marginBottom: '10px' }} />
          <Skeleton height={30} style={{ marginBottom: '10px' }} />
          <Skeleton height={50} style={{ marginBottom: '10px' }} />
          <Skeleton height={200} style={{ marginBottom: '10px' }} />
          <Skeleton height={50} style={{ marginBottom: '10px' }} />
        </SkeletonWrapper>
      )}
      {order && Object.keys(order).length > 0 && !loading && (
        <OrderDetailsContent
          data-tour='tour_detail'
          noScroll={isTourOpen && currentTourStep === 2}
          onClick={(e) => handleChangeTour(e)}
        >
          <OrderDetailsHeader
            isServiceOrder={isServiceOrder}
            order={order}
            extraOpen={extraOpen}
            actionSidebar={actionSidebar}
            showOption={showOption}
            openMessage={openMessages}
            handleShowOption={handleShowOption}
            isTourOpen={isTourOpen}
            currentTourStep={currentTourStep}
            setIsTourOpen={setIsTourOpen}
            printRef={printRef}
            printTicketRef={printTicketRef}
            isExpand={isExpand}
            setIsExpand={setIsExpand}
          />
          <OrderStatus isDisabled={isTourOpen && currentTourStep === 1}>
            <div>
              <h2>{t('ORDER_STATUS_TEXT', 'Order status')}</h2>
              <p>
                {
                  order?.delivery_datetime_utc
                    ? parseDate(order?.delivery_datetime_utc)
                    : parseDate(order?.delivery_datetime, { utc: false })
                }
              </p>
              <p>{order?.eta_time} {t('MIN', 'min')}</p>
            </div>
            <OrderStatusSelectorWrapper>
              <OrderStatusTypeSelector
                isFirstSelect
                noPadding
                orderId={order.id}
                deliveryType={order?.delivery_type}
                defaultValue={parseInt(order.status)}
                handleUpdateOrderStatus={handleUpdateOrderStatus}
              />
            </OrderStatusSelectorWrapper>
          </OrderStatus>
          {order?.place && placeSpotEnabled.includes(order?.delivery_type) && (
            <PlaceSpotContainer>
              <p>
                {t('SPOT', 'Spot')}: {order?.place?.name}
              </p>
            </PlaceSpotContainer>
          )}
          <StatusBarContainer>
            <StatusBar percentage={progressBarObjt(order?.status)?.percentage} />
          </StatusBarContainer>
          <AdvancedLogistic>
            <div>
              <p>{t('LOGISTIC', 'Logistic')}</p>
              <p>{getLogisticTag(order?.logistic_status)}</p>
            </div>
            <div>
              <p>{t('ATTEMPTS', 'Attempts')}</p>
              <p>{order?.logistic_attemps}</p>
            </div>
            <div>
              <p>{t('PRIORITY', 'Priority')}</p>
              <p>{getPriorityTag(order?.priority)}</p>
            </div>
          </AdvancedLogistic>
          {rejectResonStatuses.includes(order?.status) && order?.reject_reason && (
            <RejectReasonsContainer>
              <p>{t('REJECT_REASONS', 'Reject reasons')}</p>
              <RejectReasonsList>
                <RejectReasonWrapper>
                  {t(`REJECT_REASON_${order?.reject_reason.toUpperCase()}`, order?.reject_reason.replace(/_/g, ' '))}
                </RejectReasonWrapper>
              </RejectReasonsList>
            </RejectReasonsContainer>
          )}
          <div data-tour='tour_driver'>
            <OrderContactInformation
              isServiceOrder={isServiceOrder}
              order={order}
              extraOpen={extraOpen}
              unreadAlert={unreadAlert}
              isTourOpen={isTourOpen}
              setCurrentTourStep={setCurrentTourStep}
              handleShowOption={handleShowOption}
            />
            <OrderProducts>
              <h2>{t('EXPORT_SUMMARY', 'Summary')}</h2>
              {order?.products?.length && order?.products.map((product) => (
                <ProductItemAccordion
                  key={product.id}
                  product={product}
                  currency={getCurrenySymbol(order?.currency)}
                />
              ))}
            </OrderProducts>
            <OrderBill
              order={order}
              actionStatus={actionStatus}
              handleRefundPaymentsStripe={handleRefundPaymentsStripe}
              handleOrderRefund={handleOrderRefund}
            />
          </div>
          <DetailBottom />
        </OrderDetailsContent>
      )}

      {extraOpen && (
        <>
          {width >= 1000 ? (
            <OrderDetailsExtraContent>
              <CloseButtonWrapper>
                <IconButton color='black' onClick={() => handleCloseMoreDetails()}>
                  <XLg />
                </IconButton>
              </CloseButtonWrapper>
              {(openMessages?.chat) && (
                <ChatContainer data-tour='tour_message'>
                  <Messages
                    orderId={order?.id}
                    order={order}
                    isChat={openMessages?.chat}
                    history={openMessages.history}
                    handleUpdateOrderForUnreadCount={handleUpdateOrderForUnreadCount}
                    onClose={() => handleCloseMessages()}
                    messages={messages}
                    isTourOpen={isTourOpen}
                    setCurrentTourStep={setCurrentTourStep}
                    orderDetailClose={() => props.onClose()}
                  />
                </ChatContainer>
              )}

              {openMessages?.history && (
                <ChatContainer>
                  <Messages
                    orderId={order?.id}
                    order={order}
                    history={openMessages.history}
                    handleUpdateOrderForUnreadCount={handleUpdateOrderForUnreadCount}
                    messages={messages}
                  />
                </ChatContainer>
              )}

              {showOption === 'metafields' && (
                <OrderMetaFields
                  orderId={order?.id}
                />
              )}
            </OrderDetailsExtraContent>
          ) : (
            <>
              <Modal
                width='70%'
                height='90vh'
                open={openMessages?.chat}
                onClose={() => handleCloseMessages()}
              >
                {openMessages?.chat && (
                  <ChatContainer data-tour='tour_message'>
                    <Messages
                      orderId={order?.id}
                      order={order}
                      isChat={openMessages?.chat}
                      history={openMessages.history}
                      handleUpdateOrderForUnreadCount={handleUpdateOrderForUnreadCount}
                      onClose={() => handleCloseMessages()}
                      messages={messages}
                      isTourOpen={isTourOpen}
                      setCurrentTourStep={setCurrentTourStep}
                      orderDetailClose={() => props.onClose()}
                    />
                  </ChatContainer>
                )}
              </Modal>

              <Modal
                width='70%'
                height='70vh'
                open={openMessages.history}
                onClose={() => handleCloseMessages()}
              >
                <Messages
                  orderId={order?.id}
                  order={order}
                  history={openMessages.history}
                  handleUpdateOrderForUnreadCount={handleUpdateOrderForUnreadCount}
                  messages={messages}
                />
              </Modal>

              <Modal
                width='70%'
                height='70vh'
                open={!!showOption}
                onClose={() => setShowOption(null)}
              >
                {showOption === 'metafields' && (
                  <OrderMetaFields
                    orderId={order?.id}
                  />
                )}
              </Modal>
            </>
          )}
        </>
      )}

      {!loading && !order && (
        <NotFoundSource
          content={t('NOT_FOUND_ORDER', 'Sorry, we couldn\'t find the requested order.')}
          btnTitle={t('PROFILE_ORDERS_REDIRECT', 'Go to Orders')}
          onClickButton={handleBackRedirect}
        />
      )}

      {order && Object.keys(order).length > 0 && !loading && (
        <OrderToPrint
          ref={printRef}
          order={order}
          placeSpotEnabled={placeSpotEnabled}
          getOrderStatus={progressBarObjt}
          getLogisticTag={getLogisticTag}
          getPriorityTag={getPriorityTag}
        />
      )}
      {order && Object.keys(order).length > 0 && !loading && (
        <OrderToPrintTicket
          ref={printTicketRef}
          order={order}
          getOrderStatus={progressBarObjt}
        />
      )}
    </Container>
  )
}
export const OrderDetails = (props) => {
  const orderDetailsProps = {
    ...props,
    asDashboard: true,
    isDisableLoadMessages: true,
    UIComponent: OrderDetailsUI
  }

  return (
    <OrderDetailsController {...orderDetailsProps} />
  )
}
