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
import FiPhone from '@meronex/icons/fi/FiPhone'
import BsChat from '@meronex/icons/bs/BsChat'
import BsPhone from '@meronex/icons/bs/BsPhone'
import BiStoreAlt from '@meronex/icons/bi/BiStoreAlt'
import AiFillExclamationCircle from '@meronex/icons/ai/AiFillExclamationCircle'
import BsArrowLeft from '@meronex/icons/bs/BsArrowLeft'
import { Button } from '../../styles/Buttons'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { Modal } from '../../../../../components/Modal'
import { Messages } from '../../../../../components/Messages'
import { ReviewOrder } from '../../../../../components/ReviewOrder'
import { ProductShare } from '../../../../../components/ProductShare'
import { ProductItemAccordion } from '../ProductItemAccordion'

import IosCash from '@meronex/icons/ios/IosCash'
import IosCard from '@meronex/icons/ios/IosCard'
import FaStripe from '@meronex/icons/fa/FaStripe'
import FaCcStripe from '@meronex/icons/fa/FaCcStripe'
import FaStripeS from '@meronex/icons/fa/FaStripeS'
import GrStripe from '@meronex/icons/gr/GrStripe'
import EnPaypal from '@meronex/icons/en/EnPaypal'

import {
  Container,
  WrapperContainer,
  Header,
  HeaderInfo,
  HeaderText,
  Content,
  OrderBusiness,
  BusinessWrapper,
  ActionsBlock,
  OrderCustomer,
  InfoBlock,
  Map,
  OrderDriver,
  WrapperDriver,
  OrderProducts,
  OrderBill,
  ReviewsAction,
  FootActions,
  SkeletonBlockWrapp,
  SkeletonBlock,
  HeaderImg,
  ShareOrder,
  MessagesIcon,
  ExclamationWrapper,
  OrderPayInfoWrapper,
  OrderPayInfoContent,
  OrderBillDivider,
  OrderPayMethodIcon,
  SectionContainer,
  OrderBusinessHeaderImage,
  OrderCartInfo
} from './styles'
import { useTheme } from 'styled-components'
import { verifyDecimals } from '../../../../../utils'

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

  const [openMessages, setOpenMessages] = useState({ business: false, driver: false })
  const [openReview, setOpenReview] = useState(false)
  const [isReviewed, setIsReviewed] = useState(false)
  const [unreadAlert, setUnreadAlert] = useState({ business: false, driver: false })

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
      { key: 21, value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ARRIVED_BUSINESS || 'Customer arrived to business'), slug: 'ORDER_CUSTOMER_ARRIVED_BUSINESS', percentage: 95 }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
  }

  const getPayIcon = (method) => {
    switch (method) {
      case 1:
        return <IosCash />
      case 22:
        return <FaStripe />
      case 28:
        return <FaCcStripe />
      case 31:
        return <FaStripeS />
      case 32:
        return <GrStripe />
      case 3:
        return <EnPaypal />
      default:
        return <IosCard />
    }
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
      <Container>
        {order && Object.keys(order).length > 0 && (
          <WrapperContainer>
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
                    <h1>{t('ORDER_THANKS', 'Thanks for your order')}</h1>
                    <p>{t('YOUR_ORDER_IS', 'Your order is :order_status:').replace(':order_status:', getOrderStatus(order?.status)?.value)}</p>
                  </HeaderText>
                  <HeaderImg>
                    <img src={theme.images.general?.shoppingBag} alt='shopping bag' />
                  </HeaderImg>
                </HeaderInfo>
              </Header>
              
              <SectionContainer>
                <OrderProducts>
                  {order?.products?.length && order?.products.map(product => (
                    <ProductItemAccordion
                      key={product.id}
                      isOrderDetails
                      product={product}
                    />
                  ))}
                </OrderProducts>
                <OrderBill>
                  <table>
                    <tbody>
                      <tr>
                        <td>{t('SUBTOTAL', theme?.defaultLanguages?.SUBTOTAL || 'Subtotal')}</td>
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
                            <td>{parsePrice(order?.summary?.tax || order?.totalTax)}</td>
                          </tr>
                        )
                      }
                      {(order?.summary?.delivery_price > 0 || order?.deliveryFee > 0) && (
                        <tr>
                          <td>{t('DELIVERY_FEE', theme?.defaultLanguages?.DELIVERY_FEE || 'Delivery Fee')}</td>
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
                          <td>{parsePrice(order?.summary?.driver_tip || order?.totalDriverTip)}</td>
                        </tr>
                      )}
                      <tr>
                        <td>
                          {t('SERVICE_FEE', theme?.defaultLanguages?.SERVICE_FEE || 'Service Fee')}{' '}
                          <span>{`(${verifyDecimals(order?.service_fee, parseNumber)}%)`}</span>
                        </td>
                        <td>{parsePrice(order?.summary?.service_fee || order?.serviceFee || 0)}</td>
                      </tr>
                    </tbody>
                  </table>
                  <OrderBillDivider />
                  <OrderPayInfoWrapper>
                    <h3>{t('EXPORT_PAYMENT_METHOD', 'Payment Method')}</h3>
                    <OrderPayInfoContent>
                      <OrderPayMethodIcon>
                        {getPayIcon(order?.paymethod?.id)}
                      </OrderPayMethodIcon>
                      <div>
                        <span>{order?.paymethod?.name}</span>
                        <span className='total'>{parsePrice(order?.summary?.total || order?.total)}</span>
                      </div>
                    </OrderPayInfoContent>
                  </OrderPayInfoWrapper>
                </OrderBill>
              </SectionContainer>

              <SectionContainer>
                {parseInt(configs?.guest_uuid_access?.value, 10) && order?.hash_key && (
                  <ShareOrder>
                    <div className='text'>
                      <h1>{t('SHARE_THIS_DELIVERY', theme?.defaultLanguages?.SHARE_THIS_DELIVERY || 'Share this delivery')}</h1>
                      <p>{t('LET_SOMEONE_FOLLOW_ALONG', theme?.defaultLanguages?.LET_SOMEONE_FOLLOW_ALONG || 'Let someone follow along')}</p>
                    </div>
                    <div className='wrap'>
                      <ProductShare
                        defaultUrl={urlToShare(order?.hash_key)}
                      />
                    </div>
                  </ShareOrder>
                )}
              </SectionContainer>

                {order?.driver && (
                  <>
                    <SectionContainer marginBottom='0px'>
                      <OrderDriver>
                        <WrapperDriver>
                          <InfoBlock>
                            <h1>{order?.driver?.name} {order?.driver?.lastname}</h1>
                            <span>{t('DRIVER', theme?.defaultLanguages?.DRIVER || 'Driver')}</span>
                          </InfoBlock>
                        </WrapperDriver>
                        <ActionsBlock>
                          {order.driver && order.driver.phone &&
                            <span onClick={() => window.open(`tel:${order.driver.phone}`)}>
                              <BsPhone />
                            </span>}
                          <MessagesIcon onClick={() => handleOpenMessages({ driver: true, business: false })}>
                            {order?.unread_count > 0 && unreadAlert.driver && (
                              <ExclamationWrapper>
                                <AiFillExclamationCircle />
                              </ExclamationWrapper>
                            )}
                            <BsChat />
                          </MessagesIcon>
                        </ActionsBlock>
                      </OrderDriver>
                    </SectionContainer>
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
                  </>
                )}
              
              <SectionContainer marginBottom='0px'>
                <OrderBusiness>
                  <BusinessWrapper>
                    <InfoBlock>
                      <h1>{t('YOU_MADE_AN_ORDER_IN', 'You made an order in :business_name:.').replace(':business_name:', order?.business?.name)}</h1>
                      <span>{order?.business?.address}</span>
                      <span>{order?.business?.cellphone}</span>
                      <span>{order?.business?.email}</span>
                    </InfoBlock>
                  </BusinessWrapper>
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
                      <BsChat />
                    </MessagesIcon>
                  </ActionsBlock>
                </OrderBusiness>
              </SectionContainer>
              <OrderBusinessHeaderImage>
                <img src={order?.business?.header} alt='business header image' />
              </OrderBusinessHeaderImage>

              {(
                parseInt(order?.status) === 1 ||
                parseInt(order?.status) === 2 ||
                parseInt(order?.status) === 5 ||
                parseInt(order?.status) === 6 ||
                parseInt(order?.status) === 10 ||
                parseInt(order?.status) === 11 ||
                parseInt(order?.status) === 12
              ) && !order.review && !isReviewed && (
                <SectionContainer>
                  <ReviewsAction>
                    <Button color='primary' onClick={() => setOpenReview(true)}>
                      {t('REVIEW_ORDER', theme?.defaultLanguages?.REVIEW_ORDER || 'Review your Order')}
                    </Button>
                  </ReviewsAction>
                </SectionContainer>
              )}

              <SectionContainer>
                <OrderCustomer>
                  <InfoBlock>
                    <h1>{order?.customer?.name} {order?.customer?.lastname}</h1>
                    <span>{order?.customer?.address}</span>
                    <span>{order?.customer?.phone || order?.customer?.cellphone}</span>
                    <span>{order?.customer?.email}</span>
                  </InfoBlock>
                </OrderCustomer>
                {!userCustomerId && (
                  <FootActions>
                    <Button
                      color='primary'
                      outline
                      onClick={() => handleGoToPage({ page: 'orders' })}
                    >
                      {t('MY_ORDERS', theme?.defaultLanguages?.MY_ORDERS || 'My Orders')}
                    </Button>
                  </FootActions>
                )}
              </SectionContainer>

            </Content>
          </WrapperContainer>
        )}

        {loading && !error && (
          <WrapperContainer isLoading className='skeleton-loading'>
            <SkeletonBlockWrapp>
              <SkeletonBlock width={80}>
                <Skeleton height={150} style={{ marginBottom: '40px' }} />
                <Skeleton height={300} style={{ marginBottom: '20px' }} />
                <Skeleton height={100} style={{ marginBottom: '20px' }} />
                <Skeleton height={100} style={{ marginBottom: '20px' }} />
                <Skeleton />
                <Skeleton height={200} />
              </SkeletonBlock>
            </SkeletonBlockWrapp>
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
