import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils, useSession, OrderDetailsDashbaord as OrderDetailsController } from 'ordering-components'
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
  RejectReasonsList
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
    handleRefundOrder,
    isServiceOrder
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [openMessages, setOpenMessages] = useState({ chat: false, history: false })
  const [showOption, setShowOption] = useState(null)
  const [{ parseDate }] = useUtils()
  const [{ user }] = useSession()
  const printRef = useRef()

  const [unreadAlert, setUnreadAlert] = useState({ business: false, driver: false, customer: false })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [extraOpen, setExtraOpen] = useState(false)
  const placeSpotEnabled = [3, 4]
  const {
    order,
    loading
  } = props.order

  const rejectResonStatuses = [6, 9, 10, 11, 12, 14]
  const getOrderStatus = (status) => {
    const orderStatus = [
      { key: 0, value: 'Pending Order', slug: 'PENDING_ORDER', percentage: 25 },
      { key: 1, value: 'Completed by admin', slug: 'COMPLETED_BY_ADMIN', percentage: 100 },
      { key: 2, value: 'Reject by admin', slug: 'REJECT_BY_ADMIN', percentage: 0 },
      { key: 3, value: 'Driver arrived by business', slug: 'DRIVER_IN_BUSINESS', percentage: 60 },
      { key: 4, value: 'Preparation Completed', slug: 'PREPARATION_COMPLETED', percentage: 70 },
      { key: 5, value: 'Reject by business', slug: 'REJECT_BY_BUSINESS', percentage: 0 },
      { key: 6, value: 'Reject by driver', slug: 'REJECT_BY_DRIVER', percentage: 0 },
      { key: 7, value: 'Accepted by business', slug: 'ACCEPTED_BY_BUSINESS', percentage: 35 },
      { key: 8, value: 'Accepted by driver', slug: 'ACCEPTED_BY_DRIVER', percentage: 45 },
      { key: 9, value: 'Pick up completed by driver', slug: 'PICK_UP_COMPLETED_BY_DRIVER', percentage: 80 },
      { key: 10, value: 'Pick up Failed by driver', slug: 'PICK_UP_FAILED_BY_DRIVER', percentage: 0 },
      { key: 11, value: 'Delivery completed by driver', slug: 'DELIVERY_COMPLETED_BY_DRIVER', percentage: 100 },
      { key: 12, value: 'Delivery Failed by driver', slug: 'DELIVERY_FAILED_BY_DRIVER', percentage: 0 },
      { key: 13, value: 'Preorder', slug: 'PREORDER', percentage: 25 },
      { key: 14, value: 'Order not ready', slug: 'ORDER_NOT_READY', percentage: 65 },
      { key: 15, value: 'Pickup completed by customer', slug: 'PICKUP_COMPLETED_BY_CUSTOMER', percentage: 100 },
      { key: 16, value: 'Canceled by customer', slug: 'CANCELED_BY_CUSTOMER', percentage: 0 },
      { key: 17, value: 'Not picked by customer', slug: 'NOT_PICKED_BY_CUSTOMER', percentage: 0 },
      { key: 18, value: 'Driver almost arrived to business', slug: 'DRIVER_ALMOST_ARRIVED_TO_BUSINESS', percentage: 50 },
      { key: 19, value: 'Driver almost arrived to customer', slug: 'DRIVER_ALMOST_ARRIVED_TO_CUSTOMER', percentage: 90 },
      { key: 20, value: 'Customer almost arrived to business', slug: 'CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS', percentage: 50 },
      { key: 21, value: 'Customer arrived to business', slug: 'CUSTOMER_ARRIVED_TO_BUSINESS', percentage: 60 },
      { key: 22, value: 'Looking for driver', slug: 'ORDER_LOOKING_FOR_DRIVER', percentage: 35 },
      { key: 23, value: 'Driver on way', slug: 'ORDER_DRIVER_ON_WAY', percentage: 45 }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)
    return objectStatus && objectStatus
  }

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

  const handleOpenMessages = (openMessage) => {
    if (openMessage === 'chat') {
      setOpenMessages({ chat: true, history: false })
      setUnreadAlert({ ...unreadAlert, customer: false })
    }
    if (openMessage === 'history') {
      setOpenMessages({ chat: false, history: true })
    }
    setShowOption(null)
    setExtraOpen(true)
  }

  const handleCloseMessages = () => {
    setOpenMessages({ chat: false, history: false })
  }

  const handleShowOption = (option) => {
    handleCloseMessages()
    setExtraOpen(true)
    setShowOption(option)
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
        if (extraOpen && width >= 1000) {
          document.getElementById('orderDetails').style.width = '1000px'
        } else {
          document.getElementById('orderDetails').style.width = '500px'
        }
      }
    }
  }

  useEffect(() => {
    toggleMainContent()
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    if (width < 1000) return
    if (extraOpen) {
      document.getElementById('orderDetails').style.width = '1000px'
    } else {
      toggleMainContent()
    }
  }, [extraOpen])

  const handleChangeTour = (evt) => {
    if (!isTourOpen) return

    if (isTourOpen && order?.delivery_type === 1 && currentTourStep !== 2) {
      setCurrentTourStep(2)
      return
    }
    if (evt.target.closest('.driver-select')) return
    if (isTourOpen && setCurrentTourStep) {
      handleOpenMessages('chat')
      setTimeout(() => {
        isTourOpen && setCurrentTourStep && setCurrentTourStep(3)
      }, 1)
    }
  }

  const handleChangeKeyboard = (evt) => {
    if (evt.keyCode === 37 && currentTourStep === 2) setCurrentTourStep(1)
    if (evt.keyCode === 39 && currentTourStep === 1 && order?.delivery_type === 1) setCurrentTourStep(2)
    if (evt.keyCode === 39 && currentTourStep === 1 && order?.delivery_type !== 1) {
      handleOpenMessages('chat')
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
      handleOpenMessages('chat')
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
    handleOpenMessages('chat')
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
  }

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', onCloseSidebar)
    return () => document.removeEventListener('keydown', onCloseSidebar)
  }, [open])

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
            handleOpenMessages={handleOpenMessages}
            isTourOpen={isTourOpen}
            currentTourStep={currentTourStep}
            setIsTourOpen={setIsTourOpen}
            printRef={printRef}
          />
          <OrderStatus isDisabled={isTourOpen && currentTourStep === 1}>
            <div>
              <h2>{t('ORDER_STATUS_TEXT', 'Order status')}</h2>
              <p>
                {parseDate(order?.delivery_datetime, { utc: false })}
              </p>
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
            <StatusBar percentage={getOrderStatus(order?.status)?.percentage} />
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
              handleOpenMessages={handleOpenMessages}
            />
            <OrderProducts>
              <h2>{t('EXPORT_SUMMARY', 'Summary')}</h2>
              {order?.products?.length && order?.products.map((product) => (
                <ProductItemAccordion
                  key={product.id}
                  product={product}
                  currency={order?.currency}
                />
              ))}
            </OrderProducts>
            <OrderBill
              order={order}
              actionStatus={actionStatus}
              handleRefundOrder={handleRefundOrder}
            />
          </div>
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
          getOrderStatus={getOrderStatus}
          getLogisticTag={getLogisticTag}
          getPriorityTag={getPriorityTag}
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
