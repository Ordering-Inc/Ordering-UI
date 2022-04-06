import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  OrderDetails as OrderDetailsController,
  useUtils,
  useConfig,
  GoogleMapsMap
} from 'ordering-components'
import RiUser2Fill from '@meronex/icons/ri/RiUser2Fill'
import AiFillExclamationCircle from '@meronex/icons/ai/AiFillExclamationCircle'
import BsPhone from '@meronex/icons/bs/BsPhone'
import BiMessageRounded from '@meronex/icons/bi/BiMessageRounded'
import BsArrowLeft from '@meronex/icons/bs/BsArrowLeft'
import RiHome2Line from '@meronex/icons/ri/RiHome2Line'
import AiOutlineExclamationCircle from '@meronex/icons/ai/AiOutlineExclamationCircle'

import { NotFoundSource } from '../../../../../components/NotFoundSource'

import { ProductItemAccordion } from '../ProductItemAccordion'
import { Modal } from '../Modal'
import { Messages } from '../Messages'

import {
  Container,
  WrapperContainer,
  ActionsBlock,
  OrderInfo,
  StatusBar,
  SectionTitle,
  PhotoBlock,
  Map,
  OrderDriver,
  WrapperDriver,
  OrderProducts,
  OrderBill,
  SkeletonBlockWrapp,
  SkeletonBlock,
  MessagesIcon,
  ExclamationWrapper,
  WrapperLeftContainer,
  WrapperRightContainer,
  Divider,
  SkeletonWrapper,
  ModalIcon,
  IconsContainer,
  Exclamation
} from './styles'
import { useTheme } from 'styled-components'
import { verifyDecimals } from '../../../../../utils'
import { TaxInformation } from '../TaxInformation'

const OrderDetailsUI = (props) => {
  const {
    handleOrderRedirect,
    googleMapsControls,
    driverLocation,
    messages,
    setMessages,
    readMessages,
    messagesReadList,
    handleRedirect
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const [{ parsePrice, parseNumber, parseDate }] = useUtils()

  const [openMessages, setOpenMessages] = useState({ business: false, driver: false })
  const [unreadAlert, setUnreadAlert] = useState({ business: false, driver: false })
  const [openTaxModal, setOpenTaxModal] = useState({ open: false, tax: null })

  const { order, loading, error } = props.order

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

  const getIncludedTaxes = () => {
    if (order?.taxes?.length === 0) {
      return order.tax_type === 1 ? order?.summary?.tax ?? 0 : 0
    } else {
      return order?.taxes.reduce((taxIncluded, tax) => {
        return taxIncluded + (tax.type === 1 ? tax.summary?.tax : 0)
      }, 0)
    }
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
        <ModalIcon>
          <BsArrowLeft size={20} onClick={() => handleRedirect('orders')} color={theme.colors.arrowColor} />
          <ActionsBlock>
            <MessagesIcon>
              {order?.unread_count > 0 && unreadAlert.business && !(loading || error) && (
                <ExclamationWrapper>
                  <AiFillExclamationCircle />
                </ExclamationWrapper>
              )}
              <IconsContainer>
                <RiHome2Line size='20' onClick={() => handleRedirect('ordertypes')} color={theme.colors.darkTextColor} />
                <svg onClick={() => handleRedirect('orders')} width='20' height='20' viewBox='0 0 16 16' fill={theme.colors.darkTextColor} xmlns='http://www.w3.org/2000/svg'>
                  <path d='M14.5 3C14.6326 3 14.7598 3.05268 14.8536 3.14645C14.9473 3.24021 15 3.36739 15 3.5V12.5C15 12.6326 14.9473 12.7598 14.8536 12.8536C14.7598 12.9473 14.6326 13 14.5 13H1.5C1.36739 13 1.24021 12.9473 1.14645 12.8536C1.05268 12.7598 1 12.6326 1 12.5V3.5C1 3.36739 1.05268 3.24021 1.14645 3.14645C1.24021 3.05268 1.36739 3 1.5 3H14.5ZM1.5 2C1.10218 2 0.720644 2.15804 0.43934 2.43934C0.158035 2.72064 0 3.10218 0 3.5L0 12.5C0 12.8978 0.158035 13.2794 0.43934 13.5607C0.720644 13.842 1.10218 14 1.5 14H14.5C14.8978 14 15.2794 13.842 15.5607 13.5607C15.842 13.2794 16 12.8978 16 12.5V3.5C16 3.10218 15.842 2.72064 15.5607 2.43934C15.2794 2.15804 14.8978 2 14.5 2H1.5Z' fill={theme.colors.darkTextColor} />
                  <path d='M7.00005 5.50004C7.00005 5.36743 7.05272 5.24025 7.14649 5.14649C7.24026 5.05272 7.36744 5.00004 7.50005 5.00004H12.5C12.6327 5.00004 12.7598 5.05272 12.8536 5.14649C12.9474 5.24025 13 5.36743 13 5.50004C13 5.63265 12.9474 5.75982 12.8536 5.85359C12.7598 5.94736 12.6327 6.00004 12.5 6.00004H7.50005C7.36744 6.00004 7.24026 5.94736 7.14649 5.85359C7.05272 5.75982 7.00005 5.63265 7.00005 5.50004ZM5.50405 4.64604C5.55061 4.69248 5.58755 4.74766 5.61276 4.80841C5.63796 4.86915 5.65094 4.93427 5.65094 5.00004C5.65094 5.06581 5.63796 5.13093 5.61276 5.19167C5.58755 5.25242 5.55061 5.30759 5.50405 5.35404L4.00405 6.85404C3.9576 6.9006 3.90242 6.93755 3.84168 6.96275C3.78093 6.98796 3.71581 7.00093 3.65005 7.00093C3.58428 7.00093 3.51916 6.98796 3.45841 6.96275C3.39767 6.93755 3.34249 6.9006 3.29605 6.85404L2.79605 6.35404C2.74956 6.30755 2.71268 6.25236 2.68752 6.19162C2.66236 6.13088 2.64941 6.06578 2.64941 6.00004C2.64941 5.86726 2.70216 5.73993 2.79605 5.64604C2.88993 5.55215 3.01727 5.49941 3.15005 5.49941C3.28282 5.49941 3.41016 5.55215 3.50405 5.64604L3.65005 5.79304L4.79605 4.64604C4.84249 4.59948 4.89767 4.56253 4.95841 4.53733C5.01916 4.51212 5.08428 4.49915 5.15005 4.49915C5.21581 4.49915 5.28093 4.51212 5.34168 4.53733C5.40242 4.56253 5.4576 4.59948 5.50405 4.64604ZM7.00005 9.50004C7.00005 9.36743 7.05272 9.24025 7.14649 9.14649C7.24026 9.05272 7.36744 9.00004 7.50005 9.00004H12.5C12.6327 9.00004 12.7598 9.05272 12.8536 9.14649C12.9474 9.24025 13 9.36743 13 9.50004C13 9.63265 12.9474 9.75983 12.8536 9.85359C12.7598 9.94736 12.6327 10 12.5 10H7.50005C7.36744 10 7.24026 9.94736 7.14649 9.85359C7.05272 9.75983 7.00005 9.63265 7.00005 9.50004ZM5.50405 8.64604C5.55061 8.69249 5.58755 8.74766 5.61276 8.80841C5.63796 8.86915 5.65094 8.93427 5.65094 9.00004C5.65094 9.06581 5.63796 9.13093 5.61276 9.19167C5.58755 9.25242 5.55061 9.30759 5.50405 9.35404L4.00405 10.854C3.9576 10.9006 3.90242 10.9375 3.84168 10.9628C3.78093 10.988 3.71581 11.0009 3.65005 11.0009C3.58428 11.0009 3.51916 10.988 3.45841 10.9628C3.39767 10.9375 3.34249 10.9006 3.29605 10.854L2.79605 10.354C2.74956 10.3076 2.71268 10.2524 2.68752 10.1916C2.66236 10.1309 2.64941 10.0658 2.64941 10C2.64941 9.9343 2.66236 9.8692 2.68752 9.80846C2.71268 9.74772 2.74956 9.69253 2.79605 9.64604C2.84253 9.59955 2.89772 9.56268 2.95846 9.53752C3.0192 9.51236 3.0843 9.49941 3.15005 9.49941C3.21579 9.49941 3.28089 9.51236 3.34163 9.53752C3.40237 9.56268 3.45756 9.59955 3.50405 9.64604L3.65005 9.79304L4.79605 8.64604C4.84249 8.59948 4.89767 8.56253 4.95841 8.53733C5.01916 8.51212 5.08428 8.49915 5.15005 8.49915C5.21581 8.49915 5.28093 8.51212 5.34168 8.53733C5.40242 8.56253 5.4576 8.59948 5.50405 8.64604Z' fill={theme.colors.darkTextColor} />
                </svg>
                {!(loading || error) && (
                  <BiMessageRounded size='20' color={theme.colors?.darkTextColor} onClick={() => handleOpenMessages({ driver: false, business: true })} />
                )}
              </IconsContainer>
            </MessagesIcon>
          </ActionsBlock>
        </ModalIcon>
        {!loading && order && Object.keys(order).length > 0 && (
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
                <StatusBar percentage={getOrderStatus(order?.status)?.percentage} />
                <p className='order-status'>{getOrderStatus(order?.status)?.value}</p>
              </OrderInfo>
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
                            <ExclamationWrapper driver>
                              <AiFillExclamationCircle />
                            </ExclamationWrapper>
                          )}
                          <BiMessageRounded />
                        </MessagesIcon>
                      </ActionsBlock>
                    </OrderDriver>
                  </>
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
            </WrapperLeftContainer>
            <WrapperRightContainer>
              <OrderProducts>
                {order?.products?.length && order?.products.map(product => (
                  <ProductItemAccordion
                    key={product.id}
                    product={product}
                    isOrderDetails
                  />
                ))}
              </OrderProducts>
              <OrderBill>
                <table>
                  <tbody>
                    <tr>
                      <td>{t('SUBTOTAL', theme?.defaultLanguages?.SUBTOTAL || 'Subtotal')}</td>
                      <td>
                        {parsePrice(((order?.summary?.subtotal || order?.subtotal) + getIncludedTaxes()))}
                      </td>
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
                    {order?.summary?.subtotal_with_discount > 0 && order?.summary?.discount > 0 && order?.summary?.total >= 0 && (
                      <tr>
                        {order?.tax_type === 1 ? (
                          <>
                            <td>{t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')}</td>
                            <td>{parsePrice((order?.summary?.subtotal_with_discount + (order?.summary?.tax || order?.tax)) || 0)}</td>
                          </>
                        ) : (
                          <>
                            <td>{t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')}</td>
                            <td>{parsePrice(order?.summary?.subtotal_with_discount || 0)}</td>
                          </>
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
                          <td>{parsePrice(order?.summary?.tax || 0)}</td>
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
                          <td>{parsePrice(order?.summary?.service_fee || 0)}</td>
                        </tr>
                      )
                    }
                    {
                      order?.taxes?.length > 0 && order?.taxes?.filter(tax => tax?.type === 2 && tax?.rate !== 0).map(tax => (
                        <tr key={tax?.id}>
                          <td>
                            {tax?.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                            <span>{`(${verifyDecimals(tax?.rate, parseNumber)}%)`}</span>
                            <Exclamation onClick={() => setOpenTaxModal({ open: true, data: tax })}>
                              <AiOutlineExclamationCircle size='20' color={theme.colors.primary} />
                            </Exclamation>
                          </td>
                          <td>{parsePrice(tax?.summary?.tax || 0)}</td>
                        </tr>
                      ))
                    }
                    {
                      order?.fees?.length > 0 && order?.fees?.filter(fee => !(fee?.fixed === 0 && fee?.percentage === 0))?.map(fee => (
                        <tr key={fee.id}>
                          <td>
                            {fee?.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                            ({parsePrice(fee?.fixed)} + {fee?.percentage}%)
                            <Exclamation onClick={() => setOpenTaxModal({ open: true, data: fee })}>
                              <AiOutlineExclamationCircle size='20' color={theme.colors.primary} />
                            </Exclamation>
                          </td>
                          <td>{parsePrice(fee?.fixed + fee?.summary?.percentage || 0)}</td>
                        </tr>
                      ))
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
                  </tbody>
                </table>
                <table className='total'>
                  <tbody>
                    <tr>
                      <td>{t('TOTAL', theme?.defaultLanguages?.TOTAL || 'Total')}</td>
                      <td>{parsePrice(order?.summary?.total || order?.total)}</td>
                    </tr>
                  </tbody>
                </table>
              </OrderBill>
            </WrapperRightContainer>
          </WrapperContainer>
        )}

        {loading && !error && (
          <SkeletonWrapper>
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

        {(openMessages.driver || openMessages.business) && (
          <Modal
            open={openMessages.driver || openMessages.business}
            onClose={() => setOpenMessages({ driver: false, business: false })}
            width='70%'
            hideCloseDefault
            padding='0'
            customModal
          >
            <Messages
              onClose={() => setOpenMessages({ driver: false, business: false })}
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
        <Modal
          width='70%'
          open={openTaxModal.open}
          padding='20px'
          closeOnBackdrop
          title={`${openTaxModal.data?.name ||
            t('INHERIT_FROM_BUSINESS', 'Inherit from business')} (${typeof openTaxModal.data?.rate === 'number' ? `${openTaxModal.data?.rate}%` : `${parsePrice(openTaxModal.data?.fixed ?? 0)} + ${openTaxModal.data?.percentage}%`}) `}
          onClose={() => setOpenTaxModal({ open: false, tax: null })}
          modalTitleStyle={{ display: 'flex', justifyContent: 'center' }}
        >
          <TaxInformation data={openTaxModal.data} products={order?.products} />
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
