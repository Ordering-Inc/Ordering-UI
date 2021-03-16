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
import FaUserCircle from '@meronex/icons/fa/FaUserCircle'
import HiOutlineChat from '@meronex/icons/hi/HiOutlineChat'
import BiCaretUp from '@meronex/icons/bi/BiCaretUp'
import RiUser2Fill from '@meronex/icons/ri/RiUser2Fill'
import BiStoreAlt from '@meronex/icons/bi/BiStoreAlt'
import AiFillExclamationCircle from '@meronex/icons/ai/AiFillExclamationCircle'

import { Button } from '../../styles/Buttons'
import { NotFoundSource } from '../NotFoundSource'

import { ProductItemAccordion } from '../ProductItemAccordion'
import { Modal } from '../Modal'
import { Messages } from '../Messages'
import { ReviewOrder } from '../ReviewOrder'
import { ProductShare } from '../ProductShare'

import {
  Container,
  WrapperContainer,
  Header,
  HeaderInfo,
  HeaderText,
  Content,
  OrderBusiness,
  BusinessWrapper,
  LogoWrapper,
  BusinessLogo,
  BusinessInfo,
  ActionsBlock,
  OrderInfo,
  OrderData,
  StatusBar,
  OrderStatus,
  StatusImage,
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
  SkeletonBlockWrapp,
  SkeletonBlock,
  HeaderImg,
  ShareOrder,
  MessagesIcon,
  ExclamationWrapper
} from './styles'
import { useTheme } from 'styled-components'

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
    messagesReadList
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
      { key: 0, value: t('PENDING', 'Pending'), slug: 'PENDING', percentage: 25 },
      { key: 1, value: t('COMPLETED', 'Completed'), slug: 'COMPLETED', percentage: 100 },
      { key: 2, value: t('REJECTED', 'Rejected'), slug: 'REJECTED', percentage: 0 },
      { key: 3, value: t('DRIVER_IN_BUSINESS', 'Driver in business'), slug: 'DRIVER_IN_BUSINESS', percentage: 60 },
      { key: 4, value: t('PREPARATION_COMPLETED', 'Preparation Completed'), slug: 'PREPARATION_COMPLETED', percentage: 70 },
      { key: 5, value: t('REJECTED_BY_BUSINESS', 'Rejected by business'), slug: 'REJECTED_BY_BUSINESS', percentage: 0 },
      { key: 6, value: t('REJECTED_BY_DRIVER', 'Rejected by Driver'), slug: 'REJECTED_BY_DRIVER', percentage: 0 },
      { key: 7, value: t('ACCEPTED_BY_BUSINESS', 'Accepted by business'), slug: 'ACCEPTED_BY_BUSINESS', percentage: 35 },
      { key: 8, value: t('ACCEPTED_BY_DRIVER', 'Accepted by driver'), slug: 'ACCEPTED_BY_DRIVER', percentage: 45 },
      { key: 9, value: t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver'), slug: 'PICK_UP_COMPLETED_BY_DRIVER', percentage: 80 },
      { key: 10, value: t('PICK_UP_FAILED_BY_DRIVER', 'Pick up Failed by driver'), slug: 'PICK_UP_FAILED_BY_DRIVER', percentage: 0 },
      { key: 11, value: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver'), slug: 'DELIVERY_COMPLETED_BY_DRIVER', percentage: 100 },
      { key: 12, value: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by driver'), slug: 'DELIVERY_FAILED_BY_DRIVER', percentage: 0 }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
  }

  const getImage = (status) => {
    try {
      return theme.images?.order?.[`status${status}`]
    } catch (error) {
      return 'https://picsum.photos/75'
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
        </React.Fragment>))
      }
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))
      }
      <Container>
        {order && Object.keys(order).length > 0 && (
          <WrapperContainer>
            <Content className='order-content'>
              <Header>
                <HeaderImg>
                  <img src={businessData?.header} alt='business-header' height='200px' width='355px' loading='lazy' />
                </HeaderImg>
                <HeaderInfo className='order-header'>
                  <HeaderText column>
                    <h1>{t('ORDER_MESSAGE_RECEIVED', 'Your order has been received')}</h1>
                    <p>{t('ORDER_MESSAGE_HEADER_TEXT', 'Once business accepts your order, we will send you an email, thank you!')}</p>
                  </HeaderText>
                </HeaderInfo>
              </Header>
              <OrderBusiness>
                <BusinessWrapper>
                  <LogoWrapper>
                    <BusinessLogo bgimage={order?.business?.logo} />
                  </LogoWrapper>
                  <BusinessInfo>
                    <h1>{order?.business?.name}</h1>
                    <p>{order?.business?.address}</p>
                  </BusinessInfo>
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
                    <HiOutlineChat />
                  </MessagesIcon>
                </ActionsBlock>
              </OrderBusiness>

              <OrderInfo>
                <OrderData>
                  <h1>{t('ORDER', 'Order')} #{order?.id}</h1>
                  <p>{t('DATE_TIME_FOR_ORDER', 'Date and time for your order')}</p>
                  <p className='date'>
                    {
                      order?.delivery_datetime_utc
                        ? parseDate(order?.delivery_datetime_utc)
                        : parseDate(order?.delivery_datetime, { utc: false })
                    }
                  </p>
                  <StatusBar percentage={getOrderStatus(order?.status)?.percentage} />
                </OrderData>
                <OrderStatus>
                  <span>{getOrderStatus(order?.status)?.value}</span>
                  <StatusImage>
                    <img src={getImage(order?.status || 0)} alt='status' width='70px' height='70px' loading='lazy' />
                  </StatusImage>
                </OrderStatus>
              </OrderInfo>

              <SectionTitle>
                {t('CUSTOMER', 'Customer')}
              </SectionTitle>
              <OrderCustomer>
                <div className='photo'>
                  {order?.customer?.photo ? (
                    <PhotoBlock src={order?.customer?.photo} />
                  ) : (
                    <FaUserCircle />
                  )}
                </div>
                <InfoBlock>
                  <h1>{order?.customer?.name} {order?.customer?.lastname}</h1>
                  <span>{order?.customer?.address}</span>
                </InfoBlock>
              </OrderCustomer>

              {configs?.guest_uuid_access && order?.hash_key && (
                <ShareOrder>
                  <div className='text'>
                    <h1>{t('SHARE_THIS_DELIVERY', 'Share this delivery')}</h1>
                    <p>{t('LET_SOMEONE_FOLLOW_ALONG', 'Let someone follow along')}</p>
                  </div>
                  <div className='wrap'>
                    <ProductShare
                      withBtn
                      btnText={t('SHARE', 'Share')}
                      defaultUrl={urlToShare(order?.hash_key)}
                    />
                  </div>
                </ShareOrder>
              )}

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
                    <SectionTitle>
                      {t('YOUR_DRIVER', 'Your Driver')}
                    </SectionTitle>
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
                          <span>{t('DRIVER', 'Driver')}</span>
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

              <SectionTitle>
                {t('YOUR_ORDER', 'Your Order')}
              </SectionTitle>
              <OrderProducts>
                {order?.products?.length && order?.products.map(product => (
                  <ProductItemAccordion
                    key={product.id}
                    product={product}
                  />
                ))}
              </OrderProducts>
              <OrderBill>
                <table>
                  <tbody>
                    <tr>
                      <td>{t('SUBTOTAL', 'Subtotal')}</td>
                      <td>{parsePrice(order?.summary?.subtotal || order?.subtotal)}</td>
                    </tr>
                    <tr>
                      <td>
                        {order?.tax_type === 1
                          ? t('TAX_INCLUDED', 'Tax (included)')
                          : t('TAX', 'Tax')}
                        <span>{`(${parseNumber(order?.tax)}%)`}</span>
                      </td>
                      <td>{parsePrice(order?.summary?.tax || order?.totalTax)}</td>
                    </tr>
                    {(order?.summary?.delivery_price > 0 || order?.deliveryFee > 0) && (
                      <tr>
                        <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
                        <td>{parsePrice(order?.summary?.delivery_price || order?.deliveryFee)}</td>
                      </tr>
                    )}
                    <tr>
                      <td>
                        {t('DRIVER_TIP', 'Driver tip')}
                        {(order?.summary?.driver_tip > 0 || order?.driver_tip > 0) && (
                          <span>{`(${parseNumber(order?.driver_tip)}%)`}</span>
                        )}
                      </td>
                      <td>{parsePrice(order?.summary?.driver_tip || order?.totalDriverTip)}</td>
                    </tr>
                    <tr>
                      <td>
                        {t('SERVICE_FEE', 'Service Fee')}
                        <span>{`(${parseNumber(order?.service_fee)}%)`}</span>
                      </td>
                      <td>{parsePrice(order?.summary?.service_fee || order?.serviceFee || 0)}</td>
                    </tr>
                    {(order?.summary?.discount > 0 || order?.discount > 0) && (
                      <tr>
                        {order?.offer_type === 1 ? (
                          <td>
                            {t('DISCOUNT', 'Discount')}
                            <span>{`(${parseNumber(order?.offer_rate)}%)`}</span>
                          </td>
                        ) : (
                          <td>{t('DISCOUNT', 'Discount')}</td>
                        )}
                        <td>- {parsePrice(order?.summary?.discount || order?.discount)}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <table className='total'>
                  <tbody>
                    <tr>
                      <td>{t('TOTAL', 'Total')}</td>
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
                    {t('REVIEW_ORDER', 'Review your Order')}
                  </Button>
                </ReviewsAction>
              )}

              {!userCustomerId && (
                <FootActions>
                  <a onClick={() => handleGoToPage({ page: 'orders' })}>
                    {t('MY_ORDERS', 'My Orders')}
                    <BiCaretUp />
                  </a>
                </FootActions>
              )}
            </Content>
          </WrapperContainer>
        )}

        {loading && !error && (
          <WrapperContainer isLoading className='skeleton-loading'>
            <SkeletonBlockWrapp>
              <SkeletonBlock width={80}>
                <Skeleton height={300} />
                <Skeleton />
                <Skeleton height={100} />
                <Skeleton height={100} />
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
              content={t('NOT_FOUND_ORDER', 'Sorry, we couldn\'t find the requested order.')}
              btnTitle={t('ORDERS_REDIRECT', 'Go to Orders')}
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
            title={order ? `${t('WRITE_A_REVIEW', 'Write a Review')} #${order?.id}` : t('LOADING', 'Loading...')}
          >
            <ReviewOrder order={order} closeReviewOrder={() => setOpenReview(false)} setIsReviewed={setIsReviewed} />
          </Modal>
        )}
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))
      }
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))
      }
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
