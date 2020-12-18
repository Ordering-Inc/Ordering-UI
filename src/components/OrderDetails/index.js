import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, OrderDetails as OrderDetailsController, useEvent, useUtils, GoogleMapsMap } from 'ordering-components'
import FiPhone from '@meronex/icons/fi/FiPhone'
import FaUserCircle from '@meronex/icons/fa/FaUserCircle'
import HiOutlineChat from '@meronex/icons/hi/HiOutlineChat'
import BiCaretUp from '@meronex/icons/bi/BiCaretUp'
import RiUser2Fill from '@meronex/icons/ri/RiUser2Fill'
import BiStoreAlt from '@meronex/icons/bi/BiStoreAlt'

import { Button } from '../../styles/Buttons'
import { NotFoundSource } from '../NotFoundSource'

import { ProductItemAccordion } from '../ProductItemAccordion'
import { Modal } from '../Modal'
import { Messages } from '../Messages'
import { ReviewOrder } from '../ReviewOrder'

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
  HeaderImg
} from './styles'
import { useTheme } from 'styled-components'

const OrderDetailsUI = (props) => {
  const {
    handleBusinessRedirect,
    handleOrderRedirect,
    googleMapsControls,
    driverLocation
  } = props
  const [, t] = useLanguage()
  const [openMessages, setOpenMessages] = useState({ business: false, driver: false })
  const [openReview, setOpenReview] = useState(false)
  const theme = useTheme()
  const [events] = useEvent()
  const [{ parsePrice, parseNumber }] = useUtils()
  const [isReviewed, setIsReviewed] = useState(false)

  const { order, loading, header } = props.order

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

  const locations = [
    { ...order?.driver?.location },
    { ...order?.business?.location },
    { ...order?.customer?.location }
  ]

  useEffect(() => {
    if (driverLocation) {
      locations[0] = driverLocation
    }
  }, [driverLocation])

  return (
    <Container>
      {order && Object.keys(order).length > 0 && (
        <WrapperContainer>
          <Content className='order-content'>
            <Header>
              <HeaderImg>
                <img src={header?.result?.header} alt='business-header' />
              </HeaderImg>
              <HeaderInfo className='order-header'>
                <HeaderText column>
                  <h1>{t('ORDER_MESSAGE_RECEIVED', 'Your order has been received')}</h1>
                  <p>{t('ORDER_MESSAGE_TEXT', 'Once business accepts your order, we will send you and email, thank you!')}</p>
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
                  <BiStoreAlt onClick={() => handleBusinessRedirect('mcbonalds')} />
                </span>
                <span>
                  <HiOutlineChat onClick={() => setOpenMessages({ driver: false, business: true })} />
                </span>
              </ActionsBlock>
            </OrderBusiness>

            <OrderInfo>
              <OrderData>
                <h1>{t('ORDER', 'Order')} #{order?.id}</h1>
                <p>{t('DATE_TIME_FOR_ORDER', 'Date and time for your order')}</p>
                <p className='date'>{order?.delivery_datetime}</p>
                <StatusBar percentage={getOrderStatus(order?.status)?.percentage} />
              </OrderData>
              <OrderStatus>
                <span>{getOrderStatus(order?.status)?.value}</span>
                <StatusImage>
                  <img src={getImage(order?.status || 0)} alt='status' />
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

            {order?.driver && (
              <>
                {order?.driver?.location && parseInt(order?.status) === 9 && (
                  <Map>
                    <GoogleMapsMap
                      apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
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
                      <span>
                        <HiOutlineChat onClick={() => setOpenMessages({ driver: true, business: false })} />
                      </span>
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
                    <td>{parsePrice(order?.subtotal)}</td>
                  </tr>
                  <tr>
                    <td>{t('TAX', 'Tax')} ({parseNumber(order?.tax)}%)</td>
                    <td>{parsePrice(order?.totalTax)}</td>
                  </tr>
                  <tr>
                    <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
                    <td>{parsePrice(order?.deliveryFee)}</td>
                  </tr>
                  <tr>
                    <td>{t('DRIVER_TIP', 'Driver tip')}</td>
                    <td>{parsePrice(order?.driver_tip)}</td>
                  </tr>
                  <tr>
                    <td>{t('SERVICE_FEE', 'Service Fee')} ({parseNumber(order?.service_fee)}%)</td>
                    <td>{parsePrice(order?.serviceFee || 0)}</td>
                  </tr>
                  {order?.discount > 0 && (
                    <tr>
                      {order?.discount_type === 1 ? (
                        <td>{t('DISCOUNT', 'Discount')} ({parseNumber(order?.discount_rate)}%)</td>
                      ) : (
                        <td>{t('DISCOUNT', 'Discount')}</td>
                      )}
                      <td>{parsePrice(order?.discount)}</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <table className='total'>
                <tbody>
                  <tr>
                    <td>{t('TOTAL', 'Total')}</td>
                    <td>{parsePrice(order?.total)}</td>
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

            <FootActions>
              {/* <a>
                Support
                <BiCaretUp />
              </a>
              */}
              <a onClick={() => handleGoToPage({ page: 'orders' })}>
                {t('MY_ORDERS', 'My Orders')}
                <BiCaretUp />
              </a>
            </FootActions>
          </Content>
        </WrapperContainer>
      )}

      {loading && (
        <WrapperContainer isLoading className='skeleton-loading'>
          <SkeletonBlockWrapp>
            <SkeletonBlock width={80}>
              <Skeleton height={200} />
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={200} />
            </SkeletonBlock>
          </SkeletonBlockWrapp>
        </WrapperContainer>
      )}

      {/* {error && error.length > 0 &&
        error.map((e, i) => {
          if (e) {
            return <p key={i}>{t('ERROR', 'ERROR')}: [{e}]</p>
          }
        })} */}

      {!loading && !order && (
        <NotFoundSource
          content={t('NOT_FOUND_ORDER', 'Sorry, we couldn\'t find the requested order.')}
          btnTitle={t('ORDERS_REDIRECT', 'Go to Orders')}
          onClickButton={handleOrderRedirect}
        />
      )}
      {(openMessages.driver || openMessages.business) && (
        <Modal
          open={openMessages.driver || openMessages.business}
          onClose={() => setOpenMessages({ driver: false, business: false })}
          padding='0'
          width='70%'
        >
          <Messages orderId={order?.id} order={order} business={openMessages.business} driver={openMessages.driver} />
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
  )
}

export const OrderDetails = (props) => {
  const orderDetailsProps = {
    ...props,
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
