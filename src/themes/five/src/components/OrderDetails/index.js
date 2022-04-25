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
import RiUser2Fill from '@meronex/icons/ri/RiUser2Fill'
import BiStoreAlt from '@meronex/icons/bi/BiStoreAlt'
import AiFillExclamationCircle from '@meronex/icons/ai/AiFillExclamationCircle'
import BsPhone from '@meronex/icons/bs/BsPhone'
import BiMessageRounded from '@meronex/icons/bi/BiMessageRounded'
import BsInfoCircle from '@meronex/icons/bs/BsInfoCircle'

import { Button } from '../../styles/Buttons'
import { NotFoundSource } from '../NotFoundSource'

import { ProductItemAccordion } from '../ProductItemAccordion'
import { Modal } from '../Modal'
import { Messages } from '../Messages'
import { ReviewOrder } from '../../../../../components/ReviewOrder'
import { ProductShare } from '../../../../../components/ProductShare'

import {
  Container,
  WrapperContainer,
  HeaderInfo,
  Content,
  OrderBusiness,
  BusinessWrapper,
  BusinessInfo,
  ActionsBlock,
  OrderInfo,
  StatusBar,
  SectionTitle,
  OrderCustomer,
  PhotoBlock,
  Map,
  OrderDriver,
  WrapperDriver,
  OrderProducts,
  OrderBill,
  SkeletonBlockWrapp,
  SkeletonBlock,
  ShareOrder,
  MessagesIcon,
  ExclamationWrapper,
  WrapperLeftContainer,
  WrapperRightContainer,
  Divider,
  MyOrderActions,
  ReviewOrderLink,
  SkeletonWrapper,
  ReviewWrapper,
  Exclamation,
  CommentContainer
} from './styles'
import { useTheme } from 'styled-components'
import { verifyDecimals } from '../../../../../utils'
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
    messagesReadList
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const [events] = useEvent()
  const [{ parsePrice, parseNumber, parseDate }] = useUtils()

  const [openMessages, setOpenMessages] = useState({ business: false, driver: false })
  const [isOrderReviewed, setIsOrderReviewed] = useState(false)
  const [isProductReviewed, setIsProductReviewed] = useState(false)
  const [isDriverReviewed, setIsDriverReviewed] = useState(false)
  const [unreadAlert, setUnreadAlert] = useState({ business: false, driver: false })
  const [isReviewOpen, setIsReviewOpen] = useState(false)
  const [reviewStatus, setReviewStatus] = useState({ order: false, product: false, driver: false })
  const [openTaxModal, setOpenTaxModal] = useState({ open: false, tax: null })
  const { order, loading, businessData, error } = props.order
  const placeSpotTypes = [3, 4]

  const walletName = {
    cash: {
      name: t('PAY_WITH_CASH_WALLET', 'Pay with Cash Wallet')
    },
    credit_point: {
      name: t('PAY_WITH_CREDITS_POINTS_WALLET', 'Pay with Credit Points Wallet')
    }
  }

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

  const getIncludedTaxes = () => {
    if (order?.taxes?.length === 0) {
      return order.tax_type === 1 ? order?.summary?.tax ?? 0 : 0
    } else {
      return order?.taxes.reduce((taxIncluded, tax) => {
        return taxIncluded + (tax.type === 1 ? tax.summary?.tax : 0)
      }, 0)
    }
  }

  const getIncludedTaxesDiscounts = () => {
    return order?.taxes?.filter(tax => tax?.type === 1)?.reduce((carry, tax) => carry + (tax?.summary?.tax_after_discount ?? tax?.summary?.tax), 0)
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

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container>
        {!loading && order && Object.keys(order).length > 0 && !(openMessages.driver || openMessages.business) && (
          <WrapperContainer>
            <WrapperLeftContainer>
              <OrderInfo>
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
                <StatusBar percentage={getOrderStatus(order?.status)?.percentage} />
                <p className='order-status'>{getOrderStatus(order?.status)?.value}</p>
              </OrderInfo>
              <Divider />
              <OrderBusiness>
                <BusinessWrapper>
                  <BusinessInfo>
                    <h2>{t('FROM', 'From')}</h2>
                    <p>{order?.business?.name}</p>
                    <p>{order?.business?.email}</p>
                    <p>{order?.business?.cellphone}</p>
                    <p>{order?.business?.address}</p>
                  </BusinessInfo>
                </BusinessWrapper>
                <ActionsBlock>
                  {order.driver && order.driver.phone &&
                    <span onClick={() => window.open(`tel:${order.driver.phone}`)}>
                      <BsPhone />
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
                    <BiMessageRounded />
                  </MessagesIcon>
                </ActionsBlock>
              </OrderBusiness>
              <Divider />
              <OrderCustomer>
                <h2>{t('TO', 'To')}</h2>
                <p>{order?.customer?.name} {order?.customer?.lastname}</p>
                <p>{order?.customer?.email}</p>
                <p>{order?.customer?.cellphone || order?.customer?.phone}</p>
              </OrderCustomer>
              {order?.delivery_type === 1 && (
                <CommentContainer>
                  <h3>{t('DELIVERY_PREFERENCE', 'Delivery preference')}</h3>
                  <span>{order?.delivery_option?.name ? t(order?.delivery_option?.name.toUpperCase().replace(/\s/g, '_'), order?.delivery_option?.name) : t('EITHER_WAY', 'Either way')}</span>
                </CommentContainer>
              )}
              {order?.comment && (
                <CommentContainer>
                  <h3>{t('COMMENT', 'Comment')}</h3>
                  <span>{order?.comment}</span>
                </CommentContainer>
              )}
              {placeSpotTypes.includes(order?.delivery_type) && order?.place && (
                <CommentContainer>
                  <h3>{t('SPOT', 'Spot')}</h3>
                  <span>{order?.place?.name}</span>
                </CommentContainer>
              )}
              {order?.driver && (
                <>
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
                          <BiMessageRounded />
                        </MessagesIcon>
                      </ActionsBlock>
                    </OrderDriver>
                  </>
                  {order?.driver?.location?.lat && order?.driver?.location?.lng && parseInt(order?.status) === 9 && (
                    <>
                      <Map>
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
              )}
            </WrapperLeftContainer>
            <WrapperRightContainer>
              <HeaderInfo>
                <h1>{t('ORDER_MESSAGE_RECEIVED', theme?.defaultLanguages?.ORDER_MESSAGE_RECEIVED || 'Your order has been received')}</h1>
                <p>{t('ORDER_MESSAGE_HEADER_TEXT', theme?.defaultLanguages?.ORDER_MESSAGE_HEADER_TEXT || 'Once business accepts your order, we will send you an email, thank you!')}</p>
              </HeaderInfo>
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
                      <td>{t('SUBTOTAL', theme?.defaultLanguages?.SUBTOTAL || 'Subtotal')}</td>
                      <td>
                        {parsePrice(((order?.summary?.subtotal ?? order?.subtotal) + getIncludedTaxes()))}
                      </td>
                    </tr>
                    {(order?.summary?.discount > 0 ?? order?.discount > 0) && order?.offers?.length === 0 && (
                      <tr>
                        {order?.offer_type === 1 ? (
                          <td>
                            {t('DISCOUNT', theme?.defaultLanguages?.DISCOUNT || 'Discount')}{' '}
                            <span>{`(${verifyDecimals(order?.offer_rate, parsePrice)}%)`}</span>
                          </td>
                        ) : (
                          <td>{t('DISCOUNT', theme?.defaultLanguages?.DISCOUNT || 'Discount')}</td>
                        )}
                        <td>- {parsePrice(order?.summary?.discount ?? order?.discount)}</td>
                      </tr>
                    )}
                    {
                      order?.offers?.length > 0 && order?.offers?.filter(offer => offer?.target === 1)?.map(offer => (
                        <tr key={offer.id}>
                          <td>
                            {offer.name}
                            {offer.rate_type === 1 && (
                              <span>{`(${verifyDecimals(offer?.rate, parsePrice)}%)`}</span>
                            )}
                            <Exclamation onClick={() => setOpenTaxModal({ open: true, data: offer, type: 'offer_target_1' })}>
                              <BsInfoCircle size='20' color={theme.colors.primary} />
                            </Exclamation>
                          </td>
                          <td>
                            - {parsePrice(offer?.summary?.discount)}
                          </td>
                        </tr>
                      ))
                    }
                    <tr>
                      <td>
                        <Divider />
                      </td>
                      <td>
                        <Divider />
                      </td>
                    </tr>
                    {order?.summary?.subtotal_with_discount > 0 && order?.summary?.discount > 0 && order?.summary?.total >= 0 && (
                      <tr>
                        <td>{t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')}</td>
                        {order?.tax_type === 1 ? (
                          <td>{parsePrice((order?.summary?.subtotal_with_discount + getIncludedTaxesDiscounts() ?? 0))}</td>
                        ) : (
                          <td>{parsePrice(order?.summary?.subtotal_with_discount ?? 0)}</td>
                        )}
                      </tr>
                    )}
                    {
                      order?.taxes?.length === 0 && order?.tax_type === 2 && (
                        <tr>
                          <td>
                            {t('TAX', 'Tax')}
                            <span>{`(${verifyDecimals(order?.tax, parseNumber)}%)`}</span>
                          </td>
                          <td>{parsePrice(order?.summary?.tax ?? 0)}</td>
                        </tr>
                      )
                    }
                    {
                      order?.fees?.length === 0 && (
                        <tr>
                          <td>
                            {t('SERVICE_FEE', 'Service fee')}
                            <span>{`(${verifyDecimals(order?.service_fee, parseNumber)}%)`}</span>
                          </td>
                          <td>{parsePrice(order?.summary?.service_fee ?? 0)}</td>
                        </tr>
                      )
                    }
                    {
                      order?.taxes?.length > 0 && order?.taxes?.filter(tax => tax?.type === 2 && tax?.rate !== 0).map(tax => (
                        <tr key={tax?.id}>
                          <td>
                            {tax?.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                            <span>{`(${verifyDecimals(tax?.rate, parseNumber)}%)`}</span>
                            <Exclamation onClick={() => setOpenTaxModal({ open: true, data: tax, type: 'tax' })}>
                              <BsInfoCircle size='20' color={theme.colors.primary} />
                            </Exclamation>
                          </td>
                          <td>{parsePrice(tax?.summary?.tax_after_discount ?? tax?.summary?.tax ?? 0)}</td>
                        </tr>
                      ))
                    }
                    {
                      order?.fees?.length > 0 && order?.fees?.filter(fee => !(fee?.fixed === 0 && fee?.percentage === 0))?.map(fee => (
                        <tr key={fee.id}>
                          <td>
                            {fee?.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                            ({fee?.fixed > 0 && `${parsePrice(fee?.fixed)} + `}{fee.percentage}%)
                            <Exclamation onClick={() => setOpenTaxModal({ open: true, data: fee, type: 'fee' })}>
                              <BsInfoCircle size='20' color={theme.colors.primary} />
                            </Exclamation>
                          </td>
                          <td>{parsePrice(fee?.summary?.fixed + (fee?.summary?.percentage_after_discount ?? fee?.summary?.percentage) ?? 0)}</td>
                        </tr>
                      ))
                    }
                    {
                      order?.offers?.length > 0 && order?.offers?.filter(offer => offer?.target === 3)?.map(offer => (
                        <tr key={offer.id}>
                          <td>
                            {offer.name}
                            {offer.rate_type === 1 && (
                              <span>{`(${verifyDecimals(offer?.rate, parsePrice)}%)`}</span>
                            )}
                            <Exclamation onClick={() => setOpenTaxModal({ open: true, data: offer, type: 'offer_target_3' })}>
                              <BsInfoCircle size='20' color={theme.colors.primary} />
                            </Exclamation>
                          </td>
                          <td>
                            - {parsePrice(offer?.summary?.discount)}
                          </td>
                        </tr>
                      ))
                    }
                    {order?.summary?.delivery_price > 0 && (
                      <tr>
                        <td>{t('DELIVERY_FEE', theme?.defaultLanguages?.DELIVERY_FEE || 'Delivery Fee')}</td>
                        <td>{parsePrice(order?.summary?.delivery_price)}</td>
                      </tr>
                    )}
                    {
                      order?.offers?.length > 0 && order?.offers?.filter(offer => offer?.target === 2)?.map(offer => (
                        <tr key={offer.id}>
                          <td>
                            {offer.name}
                            {offer.rate_type === 1 && (
                              <span>{`(${verifyDecimals(offer?.rate, parsePrice)}%)`}</span>
                            )}
                            <Exclamation onClick={() => setOpenTaxModal({ open: true, data: offer, type: 'offer_target_2' })}>
                              <BsInfoCircle size='20' color={theme.colors.primary} />
                            </Exclamation>
                          </td>
                          <td>
                            - {parsePrice(offer?.summary?.discount)}
                          </td>
                        </tr>
                      ))
                    }
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
                        <td>{parsePrice(order?.summary?.driver_tip ?? order?.totalDriverTip)}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <table className='total'>
                  <tbody>
                    <tr>
                      <td>{t('TOTAL', theme?.defaultLanguages?.TOTAL || 'Total')}</td>
                      <td>{parsePrice(order?.summary?.total ?? order?.total)}</td>
                    </tr>
                  </tbody>
                </table>
                {order?.payment_events?.length > 0 && (
                  <div style={{ marginTop: 10 }}>
                    <span style={{ fontSize: 20 }}>{t('PAYMENTS', 'Payments')}</span>
                    <div
                      style={{
                        width: '100%',
                        marginTop: 10
                      }}
                    >
                      {order?.payment_events?.map(event => event.amount > 0 && (
                        <div
                          key={event.id}
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 10
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column'
                            }}
                          >
                            <span>
                              {event?.wallet_event
                                ? walletName[event?.wallet_event?.wallet?.type]?.name
                                : event?.paymethod?.name}
                            </span>
                            {event?.data?.charge_id && (
                              <span>
                                {`${t('CODE', 'Code')}: ${event?.data?.charge_id}`}
                              </span>
                            )}
                          </div>
                          <span>
                            -{parsePrice(event.amount)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </OrderBill>
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

        {loading && !error && (
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
