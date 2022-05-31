import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  OrderDetails as OrderDetailsController,
  useEvent,
  useUtils,
  useConfig,
  useOrder,
  useCustomer,
  GoogleMapsMap
} from 'ordering-components'
import RiUser2Fill from '@meronex/icons/ri/RiUser2Fill'

import { Button } from '../../styles/Buttons'
import { NotFoundSource } from '../NotFoundSource'

import { ProductItemAccordion } from '../ProductItemAccordion'
import { Modal } from '../Modal'
import { Messages } from '../Messages'
import { ReviewOrder } from '../../../../../components/ReviewOrder'
import { ProductShare } from '../../../../../components/ProductShare'
import { OrderBillSection } from './OrderBillSection'
import { ActionsSection } from './ActionsSection'
import { OrderPreferencesSection } from './OrderPreferencesSections'

import {
  Container,
  WrapperContainer,
  HeaderInfo,
  Content,
  OrderBusiness,
  BusinessWrapper,
  BusinessInfo,
  OrderInfo,
  StatusBar,
  SectionTitle,
  OrderCustomer,
  PhotoBlock,
  Map,
  OrderDriver,
  WrapperDriver,
  OrderProducts,
  SkeletonBlockWrapp,
  SkeletonBlock,
  ShareOrder,
  WrapperLeftContainer,
  WrapperRightContainer,
  Divider,
  MyOrderActions,
  ReviewOrderLink,
  SkeletonWrapper,
  ReviewWrapper,
  NewOrder,
  OrderActions,
  TitleContainer,
  ReOrder,
  BusinessTitle,
  SectionTitleContainer,
  OrderPreferences,
  HeaderTitle,
  PlaceSpotSection
} from './styles'
import { useTheme } from 'styled-components'
import { ReviewProduct } from '../../../../../components/ReviewProduct'
import { ReviewDriver } from '../../../../../components/ReviewDriver'
import { TaxInformation } from '../TaxInformation'

const OrderDetailsUI = (props) => {
  const {
    userCustomerId,
    handleBusinessRedirect,
    handleOrderRedirect,
    googleMapsControls,
    driverLocation,
    urlToShare,
    messages,
    setMessages,
    readMessages,
    messagesReadList,
    reorderState,
    handleReorder,
    isCustomerMode,
    orderTypes
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const [events] = useEvent()
  const [{ parsePrice, parseDate }] = useUtils()
  const [, { deleteUserCustomer }] = useCustomer()
  const [{ carts }, { refreshOrderOptions }] = useOrder()

  const [openMessages, setOpenMessages] = useState({ business: false, driver: false })
  const [isOrderReviewed, setIsOrderReviewed] = useState(false)
  const [isProductReviewed, setIsProductReviewed] = useState(false)
  const [isDriverReviewed, setIsDriverReviewed] = useState(false)
  const [unreadAlert, setUnreadAlert] = useState({ business: false, driver: false })
  const [isReviewOpen, setIsReviewOpen] = useState(false)
  const [reviewStatus, setReviewStatus] = useState({ order: false, product: false, driver: false })
  const [openTaxModal, setOpenTaxModal] = useState({ open: false, tax: null })

  const { order, loading, businessData, error } = props.order
  const yourSpotString = order?.delivery_type === 3 ? t('TABLE_NUMBER', 'Table number') : t('SPOT_NUMBER', 'Spot number')

  const getOrderStatus = (s) => {
    const status = parseInt(s)
    const orderStatus = [
      { key: 0, value: t('PENDING', theme?.defaultLanguages?.PENDING || 'Pending'), slug: 'PENDING', percentage: 25 },
      { key: 1, value: t('COMPLETED', theme?.defaultLanguages?.COMPLETED || 'Completed'), slug: 'COMPLETED', percentage: 100 },
      { key: 2, value: t('REJECTED', theme?.defaultLanguages?.REJECTED || 'Rejected'), slug: 'REJECTED', percentage: 0 },
      { key: 3, value: t('DRIVER_IN_BUSINESS', theme?.defaultLanguages?.DRIVER_IN_BUSINESS || 'Driver in business'), slug: 'DRIVER_IN_BUSINESS', percentage: 60 },
      { key: 4, value: t('PREPARATION_COMPLETED', theme?.defaultLanguages?.PREPARATION_COMPLETED || 'Preparation Completed'), slug: 'PREPARATION_COMPLETED', percentage: 70 },
      { key: 5, value: t('REJECTED_BY_BUSINESS', theme?.defaultLanguages?.REJECTED_BY_BUSINESS || 'Rejected by business'), slug: 'REJECTED_BY_BUSINESS', percentage: 0 },
      { key: 6, value: t('REJECTED_BY_DRIVER', theme?.defaultLanguages?.REJECTED_BY_DRIVER || 'Rejected by Driver'), slug: 'REJECTED_BY_DRIVER', percentage: 0 },
      { key: 7, value: t('ACCEPTED_BY_BUSINESS', theme?.defaultLanguages?.ACCEPTED_BY_BUSINESS || 'Accepted by business'), slug: 'ACCEPTED_BY_BUSINESS', percentage: 35 },
      { key: 8, value: t('ACCEPTED_BY_DRIVER', theme?.defaultLanguages?.ACCEPTED_BY_DRIVER || 'Accepted by driver'), slug: 'ACCEPTED_BY_DRIVER', percentage: 45 },
      { key: 9, value: t('PICK_UP_COMPLETED_BY_DRIVER', theme?.defaultLanguages?.PICK_UP_COMPLETED_BY_DRIVER || 'Pick up completed by driver'), slug: 'PICK_UP_COMPLETED_BY_DRIVER', percentage: 80 },
      { key: 10, value: t('PICK_UP_FAILED_BY_DRIVER', theme?.defaultLanguages?.PICK_UP_FAILED_BY_DRIVER || 'Pick up Failed by driver'), slug: 'PICK_UP_FAILED_BY_DRIVER', percentage: 0 },
      { key: 11, value: t('DELIVERY_COMPLETED_BY_DRIVER', theme?.defaultLanguages?.DELIVERY_COMPLETED_BY_DRIVER || 'Delivery completed by driver'), slug: 'DELIVERY_COMPLETED_BY_DRIVER', percentage: 100 },
      { key: 12, value: t('DELIVERY_FAILED_BY_DRIVER', theme?.defaultLanguages?.DELIVERY_FAILED_BY_DRIVER || 'Delivery Failed by driver'), slug: 'DELIVERY_FAILED_BY_DRIVER', percentage: 0 },
      { key: 13, value: t('PREORDER', theme?.defaultLanguages?.PREORDER || 'PreOrder'), slug: 'PREORDER', percentage: 0 },
      { key: 14, value: t('ORDER_NOT_READY', theme?.defaultLanguages?.ORDER_NOT_READY || 'Order not ready'), slug: 'ORDER_NOT_READY', percentage: 65 },
      { key: 15, value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER || 'Order picked up completed by customer'), slug: 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', percentage: 100 },
      { key: 16, value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_STATUS_CANCELLED_BY_CUSTOMER || 'Order cancelled by customer'), slug: 'ORDER_STATUS_CANCELLED_BY_CUSTOMER', percentage: 0 },
      { key: 17, value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_NOT_PICKEDUP_BY_CUSTOMER || 'Order not picked up by customer'), slug: 'ORDER_NOT_PICKEDUP_BY_CUSTOMER', percentage: 0 },
      { key: 18, value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS || 'Driver almost arrived to business'), slug: 'ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', percentage: 55 },
      { key: 19, value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', theme?.defaultLanguages?.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER || 'Driver almost arrived to customer'), slug: 'ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', percentage: 90 },
      { key: 20, value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS || 'Customer almost arrived to business'), slug: 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', percentage: 90 },
      { key: 21, value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ARRIVED_BUSINESS || 'Customer arrived to business'), slug: 'ORDER_CUSTOMER_ARRIVED_BUSINESS', percentage: 95 },
      { key: 22, value: t('ORDER_LOOKING_FOR_DRIVER', theme?.defaultLanguages?.ORDER_LOOKING_FOR_DRIVER || 'Looking for driver'), slug: 'ORDER_LOOKING_FOR_DRIVER', percentage: 35 },
      { key: 23, value: t('ORDER_DRIVER_ON_WAY', theme?.defaultLanguages?.ORDER_DRIVER_ON_WAY || 'Driver on way'), slug: 'ORDER_DRIVER_ON_WAY', percentage: 45 }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
  }

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  const unreadMessages = () => {
    const length = messages?.messages.length
    const unreadLength = order?.unread_count
    const unreadedMessages = messages.messages.slice(length - unreadLength, length)
    const business = unreadedMessages.some(message => message?.can_see?.includes(2))
    const driver = unreadedMessages.some(message => message?.can_see?.includes(4))
    setUnreadAlert({ business, driver })
  }

  const locations = [
    { location: { lat: order?.driver?.location?.lat, lng: order?.driver?.location?.lng }, icon: order?.driver?.photo || theme.images?.dummies?.driverPhoto },
    { ...order?.business?.location, icon: order?.business?.logo || theme.images?.dummies?.businessLogo },
    { ...order?.customer?.location, icon: order?.customer?.photo || theme.images?.dummies?.customerPhoto }
  ]

  const handleOpenReview = () => {
    if (!order?.review && !isOrderReviewed) setReviewStatus({ order: true, product: false, driver: false })
    else if (!isProductReviewed) setReviewStatus({ order: false, product: true, driver: false })
    else if (order?.driver && !order?.user_review && !isDriverReviewed) setReviewStatus({ order: false, product: false, driver: true })
    else {
      setIsReviewOpen(false)
      return
    }
    setIsReviewOpen(true)
  }

  const handleCloseReivew = () => {
    setReviewStatus({ order: false, product: false, driver: false })
    setIsReviewOpen(false)
  }

  const closeReviewOrder = () => {
    if (!isProductReviewed) setReviewStatus({ order: false, product: true, driver: false })
    else if (order?.driver && !order?.user_review && !isDriverReviewed) setReviewStatus({ order: false, product: false, driver: true })
    else handleCloseReivew()
  }

  const closeReviewProduct = () => {
    if (order?.driver && !order?.user_review && !isDriverReviewed) setReviewStatus({ order: false, product: false, driver: true })
    else {
      setIsDriverReviewed(true)
      handleCloseReivew()
    }
  }

  const closeOrderModal = (e) => {
    const outsideModal = !window.document.getElementById('app-modals') ||
      !window.document.getElementById('app-modals').contains(e.target)
    if (outsideModal) {
      const _businessId = 'businessId:' + businessData?.id
      localStorage.setItem('adjust-businessId', JSON.stringify(_businessId))
      handleBusinessRedirect(businessData?.slug)
    }
  }

  const handleStartNewOrder = () => {
    deleteUserCustomer(true)
    refreshOrderOptions()
    handleGoToPage({ page: 'home' })
  }

  const ActionsSectionProps = {
    order,
    handleBusinessRedirect,
    businessData,
    unreadAlert,
    setOpenMessages,
    readMessages,
    setUnreadAlert
  }

  useEffect(() => {
    if (driverLocation) {
      locations[0] = driverLocation
    }
  }, [driverLocation])

  useEffect(() => {
    unreadMessages()
  }, [messages?.messages])

  useEffect(() => {
    if (messagesReadList?.length) {
      openMessages.business ? setUnreadAlert({ ...unreadAlert, business: false }) : setUnreadAlert({ ...unreadAlert, driver: false })
    }
  }, [messagesReadList])

  useEffect(() => {
    if (reorderState?.error) {
      window.addEventListener('click', closeOrderModal)
      return () => {
        window.removeEventListener('click', closeOrderModal)
      }
    }

    if (!reorderState?.error && reorderState.loading === false && businessData?.id) {
      const _businessId = 'businessId:' + businessData?.id
      const products = carts?.[_businessId]?.products
      const available = products.every(product => product.valid === true)
      if (available && reorderState?.result?.uuid) {
        handleGoToPage({ page: 'checkout', params: { cartUuid: reorderState?.result.uuid } })
      } else {
        localStorage.setItem('adjust-businessId', JSON.stringify(_businessId))
        handleBusinessRedirect(businessData?.slug)
      }
    }
  }, [reorderState])

  const OrderMapSection = () => {
    return (
      <>
        {order?.driver?.location?.lat && order?.driver?.location?.lng && parseInt(order?.status) === 9 && (
          <>
            <Map isCustomerMode={isCustomerMode}>
              <GoogleMapsMap
                apiKey={configs?.google_maps_api_key?.value}
                location={order?.driver?.location}
                locations={locations}
                mapControls={googleMapsControls}
              />
            </Map>
          </>
        )}
      </>
    )
  }

  const OrderHeaderInfoSection = () => {
    return (
      <HeaderInfo>
        <h1>{t('ORDER_MESSAGE_RECEIVED', theme?.defaultLanguages?.ORDER_MESSAGE_RECEIVED || 'Your order has been received')}</h1>
        <p>{t('ORDER_MESSAGE_HEADER_TEXT', theme?.defaultLanguages?.ORDER_MESSAGE_HEADER_TEXT || 'Once business accepts your order, we will send you an email, thank you!')}</p>
      </HeaderInfo>
    )
  }

  const OrderActionsSection = () => {
    return (
      <>
        {!userCustomerId && (
          <MyOrderActions>
            <Button
              color='primary'
              outline
              onClick={() => handleGoToPage({ page: 'orders' })}
            >
              {t('YOUR_ORDERS', theme?.defaultLanguages?.YOUR_ORDERS || 'Your Orders')}
            </Button>
          </MyOrderActions>
        )}
      </>
    )
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container isCustomerMode={isCustomerMode}>
        {!loading && order && Object.keys(order).length > 0 && !(openMessages.driver || openMessages.business) && (
          <WrapperContainer isCustomerMode={isCustomerMode}>
            <WrapperLeftContainer isCustomerMode={isCustomerMode}>
              <OrderInfo>
                {isCustomerMode ? (
                  <TitleContainer>
                    <h1>{t('ORDER', theme?.defaultLanguages?.ORDER || 'Order')} #{order?.id}</h1>
                    {parseInt(configs?.guest_uuid_access?.value, 10) && order?.hash_key && (
                      <Content className='order-content' isCustomerMode={isCustomerMode}>
                        <ShareOrder>
                          <div className='wrap'>
                            <ProductShare
                              defaultUrl={urlToShare(order?.hash_key)}
                            />
                          </div>
                        </ShareOrder>
                      </Content>
                    )}
                    {order?.status !== 0 && order?.integration_id && (
                      <h1>{t('TICKET', 'Ticket')}: {order?.integration_id}</h1>
                    )}
                    <p className='types'>
                      {orderTypes?.find(type => order?.delivery_type === type?.value)?.text}
                    </p>
                    <p className='date'>
                      {
                        order?.delivery_datetime_utc
                          ? parseDate(order?.delivery_datetime_utc)
                          : parseDate(order?.delivery_datetime, { utc: false })
                      }
                    </p>
                    <ReOrder>
                      <Button
                        color='primary'
                        onClick={() => handleStartNewOrder()}
                      >
                        {t('START_NEW_ORDER', 'Start new order')}
                      </Button>
                    </ReOrder>
                  </TitleContainer>
                ) : (
                  <>
                    <h1>{t('ORDER', theme?.defaultLanguages?.ORDER || 'Order')} #{order?.id}</h1>
                    {order?.status !== 0 && order?.integration_id && (
                      <h1>{t('TICKET', 'Ticket')}: {order?.integration_id}</h1>
                    )}
                    <p className='date'>
                      {
                        order?.delivery_datetime_utc
                          ? parseDate(order?.delivery_datetime_utc)
                          : parseDate(order?.delivery_datetime, { utc: false })
                      }
                    </p>
                    <OrderActions>
                      <ReviewOrderLink
                        className='Review-order'
                        active={(
                          parseInt(order?.status) === 1 ||
                          parseInt(order?.status) === 2 ||
                          parseInt(order?.status) === 5 ||
                          parseInt(order?.status) === 6 ||
                          parseInt(order?.status) === 10 ||
                          parseInt(order?.status) === 11 ||
                          parseInt(order?.status) === 12
                        ) && (!order?.review || (order.driver && !order?.user_review)) && (!isOrderReviewed || !isProductReviewed || !isDriverReviewed)}
                      >
                        <span onClick={handleOpenReview}>{t('REVIEW_ORDER', theme?.defaultLanguages?.REVIEW_ORDER || 'Review your Order')}</span>
                      </ReviewOrderLink>
                      {(
                        parseInt(order?.status) === 1 ||
                        parseInt(order?.status) === 2 ||
                        parseInt(order?.status) === 5 ||
                        parseInt(order?.status) === 6 ||
                        parseInt(order?.status) === 10 ||
                        parseInt(order?.status) === 11 ||
                        parseInt(order?.status) === 12
                      ) &&
                        (
                          <NewOrder>
                            <Button
                              color='primary'
                              outline
                              onClick={() => handleReorder(order.id)}
                              disabled={reorderState?.loading}
                            >
                              {reorderState?.loading ? t('LOADING', 'Loading...') : t('START_NEW_ORDER', 'Start new order')}
                            </Button>
                          </NewOrder>
                        )}
                    </OrderActions>
                  </>
                )}
                <StatusBar percentage={getOrderStatus(order?.status)?.percentage} />
                <p className='order-status'>{getOrderStatus(order?.status)?.value}</p>
              </OrderInfo>
              <Divider />
              <OrderBusiness isCustomerMode={isCustomerMode}>
                <BusinessWrapper isCustomerMode={isCustomerMode}>
                  {isCustomerMode && <img src={order?.business?.logo} />}
                  <BusinessInfo isCustomerMode={isCustomerMode}>
                    {isCustomerMode ? (
                      <>
                        <BusinessTitle>
                          <h2>{order?.business?.name}</h2>
                          <ActionsSection
                            {...ActionsSectionProps}
                            actionType='business'
                          />
                        </BusinessTitle>
                        <p>{order?.business?.email}</p>
                        <p>{order?.business?.cellphone}</p>
                        <p>{order?.business?.address}</p>
                      </>
                    ) : (
                      <>
                        <h2>{t('FROM', 'From')}</h2>
                        <p>{order?.business?.name}</p>
                        <p>{order?.business?.email}</p>
                        <p>{order?.business?.cellphone}</p>
                        <p>{order?.business?.address}</p>
                      </>
                    )}
                    {order?.place?.name && (
                      <PlaceSpotSection>
                        <p>
                          {yourSpotString}: {order?.place?.name}
                        </p>
                      </PlaceSpotSection>
                    )}
                  </BusinessInfo>
                </BusinessWrapper>
                {isCustomerMode ? (
                  <OrderMapSection />
                ) : (
                  <ActionsSection
                    {...ActionsSectionProps}
                    actionType='business'
                  />
                )}
              </OrderBusiness>
              <Divider />
              <OrderCustomer isCustomerMode={isCustomerMode}>
                {!isCustomerMode && (
                  <h2>{t('TO', 'To')}</h2>
                )}
                <p>{order?.customer?.name} {order?.customer?.lastname}</p>
                <p>{order?.customer?.email}</p>
                <p>{order?.customer?.cellphone || order?.customer?.phone}</p>
                <p>{order?.customer?.address}</p>
              </OrderCustomer>
              {!isCustomerMode && (
                <OrderPreferencesSection />
              )}
              {order?.driver && (
                <>
                  {isCustomerMode ? (
                    <>
                      <OrderDriver isCustomerMode={isCustomerMode}>
                        <SectionTitleContainer>
                          <h2>{t('DRIVER', theme?.defaultLanguages?.DRIVER || 'Driver')}</h2>
                          <ActionsSection
                            {...ActionsSectionProps}
                            actionType='driver'
                          />
                        </SectionTitleContainer>
                        <WrapperDriver>
                          <div className='photo'>
                            {order?.driver?.photo ? (
                              <PhotoBlock isCustomerMode={isCustomerMode} src={order?.driver?.photo} />
                            ) : (
                              <RiUser2Fill />
                            )}
                          </div>
                          <div>
                            <h2>{order?.driver?.name} {order?.driver?.lastname}</h2>
                            <p>{order?.driver?.email}</p>
                            <p>{order?.driver?.cellphone || order?.driver?.phone}</p>
                          </div>
                        </WrapperDriver>
                      </OrderDriver>
                      <OrderMapSection />
                    </>
                  ) : (
                    <>
                      <Divider />
                      <SectionTitle>
                        {t('DRIVER', theme?.defaultLanguages?.DRIVER || 'Driver')}
                      </SectionTitle>
                      <OrderDriver>
                        <WrapperDriver>
                          <div className='photo'>
                            {order?.driver?.photo ? (
                              <PhotoBlock src={order?.driver?.photo} width='48' height='48' />
                            ) : (
                              <RiUser2Fill />
                            )}
                          </div>
                          <p>{order?.driver?.name} {order?.driver?.lastname}</p>
                        </WrapperDriver>
                        <ActionsSection
                          {...ActionsSectionProps}
                          actionType='driver'
                        />
                      </OrderDriver>
                    </>
                  )}
                </>
              )}
              {isCustomerMode && (
                <OrderPreferences isCustomerMode={isCustomerMode}>
                  <OrderPreferencesSection />
                </OrderPreferences>
              )}
            </WrapperLeftContainer>
            <WrapperRightContainer isCustomerMode={isCustomerMode}>
              {!isCustomerMode && (
                <>
                  <OrderHeaderInfoSection />
                  <OrderActionsSection />
                </>
              )}
              <OrderProducts isCustomerMode={isCustomerMode}>
                {isCustomerMode && (
                  <HeaderTitle>
                    <OrderHeaderInfoSection />
                    <OrderActionsSection />
                  </HeaderTitle>
                )}
                {order?.products?.length && order?.products.map(product => (
                  <ProductItemAccordion
                    key={product.id}
                    product={product}
                  />
                ))}
                {isCustomerMode && (
                  <OrderBillSection
                    order={order}
                    isCustomerMode={isCustomerMode}
                    setOpenTaxModal={setOpenTaxModal}
                  />
                )}
              </OrderProducts>
              {!isCustomerMode && (
                <>
                  <OrderBillSection
                    order={order}
                    setOpenTaxModal={setOpenTaxModal}
                  />
                  <Content className='order-content'>
                    {parseInt(configs?.guest_uuid_access?.value, 10) && order?.hash_key && (
                      <ShareOrder>
                        <div className='text'>
                          <h1>{t('SHARE_THIS_DELIVERY', theme?.defaultLanguages?.SHARE_THIS_DELIVERY || 'Share this delivery')}</h1>
                          <p>{t('LET_SOMEONE_FOLLOW_ALONG', theme?.defaultLanguages?.LET_SOMEONE_FOLLOW_ALONG || 'Let someone follow along')}</p>
                        </div>
                        <div className='wrap'>
                          <ProductShare
                            withBtn
                            btnText={t('SHARE', theme?.defaultLanguages?.SHARE || 'Share')}
                            defaultUrl={urlToShare(order?.hash_key)}
                          />
                        </div>
                      </ShareOrder>
                    )}
                  </Content>
                </>
              )}
            </WrapperRightContainer>
          </WrapperContainer>
        )}

        {
          (openMessages.driver || openMessages.business) && (
            <Messages
              orderId={order?.id}
              order={order}
              business={openMessages.business}
              driver={openMessages.driver}
              messages={messages}
              setMessages={setMessages}
              readMessages={readMessages}
              onMessages={setOpenMessages}
              onClose={() => setOpenMessages({ driver: false, business: false })}
            />
          )
        }

        {loading && !error && !isCustomerMode && (
          <SkeletonWrapper>
            <WrapperLeftContainer>
              <SkeletonBlockWrapp>
                <SkeletonBlock width={90}>
                  <Skeleton height={40} width={230} />
                  <Skeleton height={20} width={80} />
                  <Skeleton height={15} />
                  <Skeleton height={20} width={210} style={{ marginBottom: '50px' }} />
                  <Skeleton height={40} width={230} />
                  <Skeleton height={20} width={180} />
                  <Skeleton height={20} width={210} />
                  <Skeleton height={20} width={150} />
                  <Skeleton height={20} width={170} style={{ marginBottom: '50px' }} />
                  <Skeleton height={40} width={230} />
                  <Skeleton height={20} width={180} />
                  <Skeleton height={20} width={210} />
                  <Skeleton height={20} width={150} />
                  <Skeleton height={20} width={170} style={{ marginBottom: '50px' }} />
                </SkeletonBlock>
              </SkeletonBlockWrapp>
            </WrapperLeftContainer>
            <WrapperRightContainer>
              <SkeletonBlockWrapp>
                <SkeletonBlock width={90}>
                  <Skeleton height={40} width={230} />
                  <Skeleton height={20} />
                  <Skeleton height={45} width={100} />
                  <Skeleton height={60} />
                  <Skeleton height={300} />
                  <Skeleton height={60} />
                  <Skeleton height={25} />
                  <Skeleton height={25} />
                  <Skeleton height={25} />
                </SkeletonBlock>
              </SkeletonBlockWrapp>
            </WrapperRightContainer>
          </SkeletonWrapper>
        )}

        {loading && !error && isCustomerMode && (
          <SkeletonWrapper isCustomerMode={isCustomerMode}>
            <>
              <SkeletonBlockWrapp>
                <SkeletonBlock width={90} isCustomerMode={isCustomerMode}>
                  <Skeleton height={40} width={300} />
                  <Skeleton height={15} width={120} />
                  <Skeleton height={15} />
                  <Skeleton height={20} width={900} style={{ marginBottom: '50px' }} />
                  <Skeleton height={60} width={900} />
                  <Skeleton height={200} width={900} />
                  <Skeleton height={20} width={900} />
                  <Skeleton height={20} width={900} />
                  <Skeleton height={20} width={900} style={{ marginBottom: '50px' }} />
                  <Skeleton height={40} width={900} />
                  <Skeleton height={20} width={900} />
                  <Skeleton height={20} width={900} />
                  <Skeleton height={20} width={900} />
                  <Skeleton height={20} width={900} style={{ marginBottom: '50px' }} />
                </SkeletonBlock>
              </SkeletonBlockWrapp>
            </>
          </SkeletonWrapper>
        )}

        {!loading && error && (
          error.includes('ERROR_ACCESS_EXPIRED') ? (
            <NotFoundSource
              content={t(error[0], 'Sorry, the order has expired.')}
            />
          ) : (
            <NotFoundSource
              content={t('NOT_FOUND_ORDER', theme?.defaultLanguages?.NOT_FOUND_ORDER || 'Sorry, we couldn\'t find the requested order.')}
              btnTitle={t('ORDERS_REDIRECT', theme?.defaultLanguages?.ORDERS_REDIRECT || 'Go to Orders')}
              onClickButton={handleOrderRedirect}
            />
          )
        )}
        {
          isReviewOpen && (
            <Modal
              open={isReviewOpen}
              onClose={handleCloseReivew}
              title={order
                ? (reviewStatus?.order
                  ? t('REVIEW_ORDER', 'Review order')
                  : (reviewStatus?.product
                    ? t('REVIEW_PRODUCT', 'Review Product')
                    : t('REVIEW_DRIVER', 'Review Driver')))
                : t('LOADING', theme?.defaultLanguages?.LOADING || 'Loading...')}
            >
              <ReviewWrapper>
                {
                  reviewStatus?.order
                    ? <ReviewOrder order={order} closeReviewOrder={closeReviewOrder} setIsReviewed={setIsOrderReviewed} />
                    : (reviewStatus?.product
                      ? <ReviewProduct order={order} closeReviewProduct={closeReviewProduct} setIsProductReviewed={setIsProductReviewed} />
                      : <ReviewDriver order={order} closeReviewDriver={handleCloseReivew} setIsDriverReviewed={setIsDriverReviewed} />)
                }
              </ReviewWrapper>

            </Modal>
          )
        }
        <Modal
          width='70%'
          open={openTaxModal.open}
          padding='20px'
          closeOnBackdrop
          title={`${openTaxModal.data?.name ||
            t('INHERIT_FROM_BUSINESS', 'Inherit from business')} ${openTaxModal.data?.rate_type !== 2 ? `(${typeof openTaxModal.data?.rate === 'number' ? `${openTaxModal.data?.rate}%` : `${parsePrice(openTaxModal.data?.fixed ?? 0)} + ${openTaxModal.data?.percentage}%`})` : ''}  `}
          onClose={() => setOpenTaxModal({ open: false, tax: null, type: '' })}
          modalTitleStyle={{ display: 'flex', justifyContent: 'center' }}
        >
          <TaxInformation
            type={openTaxModal.type}
            data={openTaxModal.data}
            products={order?.products}
          />
        </Modal>
      </Container>
      {
        props.afterComponents?.map((AfterComponent, i) => (
          <AfterComponent key={i} {...props} />))
      }
      {
        props.afterElements?.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>))
      }
    </>
  )
}

export const OrderDetails = (props) => {
  const [, t] = useLanguage()
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const orderDetailsProps = {
    ...props,
    userCustomerId: userCustomer?.id,
    googleMapsControls: {
      defaultZoom: 15,
      zoomControl: true,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
      mapTypeControl: true,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite']
      }
    },
    orderTypes: props.orderTypes || [
      {
        value: 1,
        text: t('DELIVERY', 'Delivery')
      },
      {
        value: 2,
        text: t('PICKUP', 'Pickup')
      },
      {
        value: 3,
        text: t('EAT_IN', 'Eat in')
      },
      {
        value: 4,
        text: t('CURBSIDE', 'Curbside')
      },
      {
        value: 5,
        text: t('DRIVE_THRU', 'Drive thru')
      }
    ],
    UIComponent: OrderDetailsUI
  }

  return (
    <OrderDetailsController {...orderDetailsProps} />
  )
}
