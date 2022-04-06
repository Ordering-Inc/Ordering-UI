import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  OrderDetails as OrderDetailsController,
  useEvent,
  useUtils,
  useConfig,
  GoogleMapsMap
} from 'ordering-components'
import AiOutlineLeft from '@meronex/icons/ai/AiOutlineLeft'
import FiPhone from '@meronex/icons/fi/FiPhone'
import HiOutlineChat from '@meronex/icons/hi/HiOutlineChat'
import RiUser2Fill from '@meronex/icons/ri/RiUser2Fill'
import BiStoreAlt from '@meronex/icons/bi/BiStoreAlt'
import AiFillExclamationCircle from '@meronex/icons/ai/AiFillExclamationCircle'
import BsArrowLeft from '@meronex/icons/bs/BsArrowLeft'
import { Button } from '../../../../../styles/Buttons'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { Messages } from '../../../../../components/Messages'
import { ReviewOrder } from '../../../../../components/ReviewOrder'
import { Modal } from '../Modal'
import { ProductShare } from '../ProductShare'
import { ProductItemAccordion } from '../ProductItemAccordion'
import {
  Container,
  WrapperContainer,
  Header,
  HeaderInfo,
  HeaderText,
  Content,
  OrderBusiness,
  BusinessWrapper,
  BusinessInfo,
  ActionsBlock,
  OrderInfo,
  OrderData,
  StatusBar,
  OrderStatus,
  SectionTitle,
  OrderCustomer,
  PhotoBlock,
  InfoBlock,
  Map,
  OrderDriver,
  WrapperDriver,
  OrderProducts,
  OrderBill,
  ReviewsAction,
  FootActions,
  ShareOrder,
  MessagesIcon,
  ExclamationWrapper,
  LeftPanel,
  RightPanel,
  LeftContentWrapper,
  RightContentWrapper,
  CustomerInfo,
  ShareOrderWrapper,
  DashLine,
  BackHeader,
  Logo,
  LinkText
} from './styles'
import { useTheme } from 'styled-components'
import { verifyDecimals } from '../../../../../utils'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
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
    isCustomerMode
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const [events] = useEvent()
  const [{ parsePrice, parseNumber, parseDate }] = useUtils()
  const windowSize = useWindowSize()
  const [openMessages, setOpenMessages] = useState({ business: false, driver: false })
  const [openReview, setOpenReview] = useState(false)
  const [isReviewed, setIsReviewed] = useState(false)
  const [unreadAlert, setUnreadAlert] = useState({ business: false, driver: false })
  const [showAction, setShowAction] = useState(false)
  const { order, loading, businessData, error } = props.order
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
  const handleOpenMessages = (data) => {
    setOpenMessages(data)
    readMessages()
    if (order?.unread_count > 0) {
      data.business
        ? setUnreadAlert({ ...unreadAlert, business: false })
        : setUnreadAlert({ ...unreadAlert, driver: false })
    }
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
    { ...order?.driver?.location, icon: order?.driver?.photo || theme.images?.dummies?.driverPhoto },
    { ...order?.business?.location, icon: order?.business?.logo || theme.images?.dummies?.businessLogo },
    { ...order?.customer?.location, icon: order?.customer?.photo || theme.images?.dummies?.customerPhoto }
  ]
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

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container className='order-detail-page'>
        {order && Object.keys(order).length > 0 && (
          <WrapperContainer>
            <LeftPanel>
              <BackHeader>
                {windowSize.width > 768 && (
                  <Logo>
                    <img alt='Isotype' width='35px' height='45px' src={theme?.images?.logos?.isotype} loading='lazy' />
                  </Logo>
                )}

                <LinkText onClick={() => handleGoToPage({ page: 'search' })}>
                  <AiOutlineLeft />
                  {windowSize.width > 768 && (
                    <>
                      {t('BACK_HOME', 'Back to Home')}
                    </>
                  )}
                </LinkText>
              </BackHeader>
              <LeftContentWrapper className='left-contentwrappre'>
                <OrderInfo>
                  <OrderData>
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
                    <StatusBar percentage={getOrderStatus(order?.status)?.percentage} />
                    <OrderStatus>{getOrderStatus(order?.status)?.value}</OrderStatus>
                  </OrderData>
                </OrderInfo>
                <SectionTitle>
                  {t('FROM', 'From')}
                </SectionTitle>
                <OrderBusiness>
                  <BusinessWrapper>
                    <BusinessInfo>
                      <h1>{order?.business?.name}</h1>
                      <p>{order?.business?.address}</p>
                      <p>{order?.business?.cellphone}</p>
                      <p>{order?.business?.email}</p>
                    </BusinessInfo>
                  </BusinessWrapper>
                  {showAction && (
                    <ActionsBlock>
                      {order.driver && order.driver.phone &&
                        <span onClick={() => window.open(`tel:${order.driver.phone}`)}>
                          <FiPhone />
                        </span>}
                      <span>
                        <BiStoreAlt onClick={() => handleBusinessRedirect(businessData?.slug)} />
                      </span>
                      <MessagesIcon onClick={() => handleOpenMessages({ driver: false, business: true })}>
                        {order?.unread_count > 0 && unreadAlert.business && (
                          <ExclamationWrapper>
                            <AiFillExclamationCircle />
                          </ExclamationWrapper>
                        )}
                        <HiOutlineChat />
                      </MessagesIcon>
                    </ActionsBlock>
                  )}
                </OrderBusiness>
                <SectionTitle>
                  {t('TO', 'To')}
                </SectionTitle>
                <OrderCustomer>
                  <CustomerInfo>
                    <InfoBlock>
                      <h1>{order?.customer?.name} {order?.customer?.lastname}</h1>
                      <span>{order?.customer?.address}</span>
                      <span>{order?.customer?.cellphone}</span>
                      <span>{order?.customer?.email}</span>
                    </InfoBlock>
                  </CustomerInfo>
                  {showAction && (
                    <ShareOrderWrapper>
                      {parseInt(configs?.guest_uuid_access?.value, 10) && order?.hash_key && (
                        <ShareOrder>
                          <ProductShare
                            withBtn
                            defaultUrl={urlToShare(order?.hash_key)}
                          />
                        </ShareOrder>
                      )}
                    </ShareOrderWrapper>
                  )}
                </OrderCustomer>
                {order?.driver && (
                  <>
                    {order?.driver?.location && parseInt(order?.status) === 9 && (
                      <Map>
                        <GoogleMapsMap
                          apiKey={configs?.google_maps_api_key?.value}
                          location={order?.driver?.location}
                          locations={locations}
                          mapControls={googleMapsControls}
                        />
                      </Map>
                    )}
                    <>
                      <OrderDriver>
                        <WrapperDriver>
                          <div className='photo'>
                            {order?.driver?.photo ? (
                              <PhotoBlock src={order?.driver?.photo} width='70' height='70' />
                            ) : (
                              <RiUser2Fill />
                            )}
                          </div>
                          <InfoBlock>
                            <h1>{order?.driver?.name} {order?.driver?.lastname}</h1>
                            <span>{t('DRIVER', theme?.defaultLanguages?.DRIVER || 'Driver')}</span>
                          </InfoBlock>
                        </WrapperDriver>
                        <ActionsBlock>
                          {order.driver && order.driver.phone &&
                            <span onClick={() => window.open(`tel:${order.driver.phone}`)}>
                              <FiPhone />
                            </span>}
                          <MessagesIcon onClick={() => handleOpenMessages({ driver: true, business: false })}>
                            {order?.unread_count > 0 && unreadAlert.driver && (
                              <ExclamationWrapper>
                                <AiFillExclamationCircle />
                              </ExclamationWrapper>
                            )}
                            <HiOutlineChat />
                          </MessagesIcon>
                        </ActionsBlock>
                      </OrderDriver>
                    </>
                  </>
                )}
              </LeftContentWrapper>
            </LeftPanel>
            <RightPanel>
              <RightContentWrapper className='left-contentwrappre'>
                <Content className='order-content'>
                  <Header>
                    {isCustomerMode && (
                      <Button onClick={() => handleGoToPage({ page: 'search' })}>
                        <BsArrowLeft />
                        {t('GO_TO_BUSINESSLIST', 'Go to business list')}
                      </Button>
                    )}

                    <HeaderInfo className='order-header'>
                      <HeaderText column>
                        <h1>{t('ORDER_MESSAGE_RECEIVED', theme?.defaultLanguages?.ORDER_MESSAGE_RECEIVED || 'Your order has been received')}</h1>
                        <p>{t('ORDER_MESSAGE_HEADER_TEXT_FIRSTLINE', 'Once business accepts your order, we will send you an email,')}</p>
                        <p>{t('ORDER_MESSAGE_HEADER_TEXT_SECONDLINE', 'thank you!')}</p>
                      </HeaderText>
                    </HeaderInfo>
                  </Header>
                  {!userCustomerId && (
                    <FootActions>
                      <Button
                        outline
                        color='primary'
                        onClick={() => handleGoToPage({ page: 'orders' })}
                      >
                        {t('MY_ORDERS', theme?.defaultLanguages?.MY_ORDERS || 'My Orders')}
                      </Button>
                    </FootActions>
                  )}
                  <OrderProducts>
                    {order?.products?.length && order?.products.map(product => (
                      <ProductItemAccordion
                        key={product.id}
                        product={product}
                        isOrderPage
                      />
                    ))}
                  </OrderProducts>
                  <OrderBill>
                    <table>
                      <tbody>
                        <tr>
                          <td>{t('SUBTOTAL', theme?.defaultLanguages?.SUBTOTAL || 'Subtotal')}</td>
                          <td><DashLine /></td>
                          <td>{parsePrice(order?.summary?.subtotal || order?.subtotal)}</td>
                        </tr>
                        {(order?.summary?.discount > 0 || order?.discount > 0) && (
                          <tr>
                            {order?.offer_type === 1 ? (
                              <td>
                                {t('DISCOUNT', theme?.defaultLanguages?.DISCOUNT || 'Discount')}{' '}
                                <span>{`(${verifyDecimals(order?.offer_rate, parsePrice)}%)`}</span>
                              </td>
                            ) : (
                              <td>{t('DISCOUNT', theme?.defaultLanguages?.DISCOUNT || 'Discount')}</td>
                            )}
                            <td><DashLine /></td>
                            <td>- {parsePrice(order?.summary?.discount || order?.discount)}</td>
                          </tr>
                        )}
                        {
                          order?.tax_type !== 1 && (
                            <tr>
                              <td>
                                {t('TAX', theme?.defaultLanguages?.TAX || 'Tax')}{' '}
                                <span>{`(${verifyDecimals(order?.tax, parseNumber)}%)`}</span>
                              </td>
                              <td><DashLine /></td>
                              <td>{parsePrice(order?.summary?.tax || order?.totalTax)}</td>
                            </tr>
                          )
                        }
                        {(order?.summary?.delivery_price > 0 || order?.deliveryFee > 0) && (
                          <tr>
                            <td>{t('DELIVERY_FEE', theme?.defaultLanguages?.DELIVERY_FEE || 'Delivery Fee')}</td>
                            <td><DashLine /></td>
                            <td>{parsePrice(order?.summary?.delivery_price || order?.deliveryFee)}</td>
                          </tr>
                        )}
                        {(order?.summary?.driver_tip > 0 || order?.driver_tip > 0) && (
                          <tr>
                            <td>
                              {t('DRIVER_TIP', theme?.defaultLanguages?.DRIVER_TIP || 'Driver tip')}{' '}
                              {(order?.summary?.driver_tip > 0 || order?.driver_tip > 0) &&
                            parseInt(configs?.driver_tip_type?.value, 10) === 2 &&
                            !parseInt(configs?.driver_tip_use_custom?.value, 10) &&
                          (
                            <span>{`(${verifyDecimals(order?.driver_tip, parseNumber)}%)`}</span>
                          )}
                            </td>
                            <td><DashLine /></td>
                            <td>{parsePrice(order?.summary?.driver_tip || order?.totalDriverTip)}</td>
                          </tr>
                        )}
                        <tr>
                          <td>
                            {t('SERVICE_FEE', theme?.defaultLanguages?.SERVICE_FEE || 'Service Fee')}{' '}
                            <span>{`(${verifyDecimals(order?.service_fee, parseNumber)}%)`}</span>
                          </td>
                          <td><DashLine /></td>
                          <td>{parsePrice(order?.summary?.service_fee || order?.serviceFee || 0)}</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className='total'>
                      <tbody>
                        <tr>
                          <td>{t('TOTAL', theme?.defaultLanguages?.TOTAL || 'Total')}</td>
                          <td><DashLine /></td>
                          <td>{parsePrice(order?.summary?.total || order?.total)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </OrderBill>
                  {(
                    parseInt(order?.status) === 1 ||
                    parseInt(order?.status) === 2 ||
                    parseInt(order?.status) === 5 ||
                    parseInt(order?.status) === 6 ||
                    parseInt(order?.status) === 10 ||
                    parseInt(order?.status) === 11 ||
                    parseInt(order?.status) === 12
                  ) && !order.review && !isReviewed && (
                    <ReviewsAction>
                      <Button color='primary' onClick={() => setOpenReview(true)}>
                        {t('REVIEW_ORDER', theme?.defaultLanguages?.REVIEW_ORDER || 'Review your Order')}
                      </Button>
                    </ReviewsAction>
                  )}
                </Content>
              </RightContentWrapper>
            </RightPanel>
          </WrapperContainer>
        )}

        {loading && !error && (
          <WrapperContainer isLoading className='skeleton-loading'>
            <WrapperContainer>
              <LeftPanel>
                <LeftContentWrapper>
                  {windowSize.width < 1020 &&
                    <Skeleton width={400} height={100} />}
                  <OrderInfo>
                    <OrderData>
                      <Skeleton height={30} />
                      <Skeleton width={100} height={15} />
                      <Skeleton width={100} height={15} />
                      <Skeleton width={100} height={15} />
                    </OrderData>
                  </OrderInfo>
                  <SectionTitle>
                    {t('FROM', 'From')}
                  </SectionTitle>
                  <OrderBusiness>
                    <BusinessWrapper>
                      <BusinessInfo>
                        <Skeleton width={200} height={30} />
                        <Skeleton width={100} height={15} />
                        <Skeleton width={100} height={15} />
                        <Skeleton width={100} height={15} />
                      </BusinessInfo>
                    </BusinessWrapper>
                    <ActionsBlock />
                  </OrderBusiness>
                  <SectionTitle>
                    {t('TO', 'To')}
                  </SectionTitle>
                  <OrderBusiness>
                    <BusinessWrapper>
                      <BusinessInfo>
                        <Skeleton width={200} height={30} />
                        <Skeleton width={100} height={15} />
                        <Skeleton width={100} height={15} />
                        <Skeleton width={100} height={15} />
                      </BusinessInfo>
                    </BusinessWrapper>
                    <ActionsBlock />
                  </OrderBusiness>
                </LeftContentWrapper>
              </LeftPanel>
              <RightPanel>
                <RightContentWrapper style={{ paddingTop: '20px' }}>
                  <Content className='order-content'>
                    {windowSize.width > 1020 &&
                      <Skeleton height={100} />}
                    <Skeleton height={100} />
                    <Skeleton height={100} />
                    <Skeleton height={40} />
                  </Content>
                </RightContentWrapper>
              </RightPanel>
            </WrapperContainer>
          </WrapperContainer>
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
        {(openMessages.driver || openMessages.business) && (
          <Modal
            open={openMessages.driver || openMessages.business}
            onClose={() => setOpenMessages({ driver: false, business: false })}
            padding='0'
            width='70%'
          >
            <Messages
              orderId={order?.id}
              order={order}
              business={openMessages.business}
              driver={openMessages.driver}
              messages={messages}
              setMessages={setMessages}
              readMessages={readMessages}
            />
          </Modal>
        )}
        {openReview && (
          <Modal
            open={openReview}
            onClose={() => setOpenReview(false)}
            title={order ? `${t('WRITE_A_REVIEW', theme?.defaultLanguages?.WRITE_A_REVIEW || 'Write a Review')} #${order?.id}` : t('LOADING', theme?.defaultLanguages?.LOADING || 'Loading...')}
          >
            <ReviewOrder order={order} closeReviewOrder={() => setOpenReview(false)} setIsReviewed={setIsReviewed} />
          </Modal>
        )}
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
export const OrderDetails = (props) => {
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
    UIComponent: OrderDetailsUI
  }
  return (
    <OrderDetailsController {...orderDetailsProps} />
  )
}
