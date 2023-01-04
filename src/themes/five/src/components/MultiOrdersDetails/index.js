import React, { useEffect, useState } from 'react'
import { useLanguage, useUtils, MultiOrdersDetails as MultiOrdersDetailsController, useConfig } from 'ordering-components'
import { Image } from '../../../../../components/Image'
import Skeleton from 'react-loading-skeleton'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { Alert } from '../Confirm'
import { SingleOrderCard } from './SingleOrderCard'
import {
  Container,
  HeaderContainer,
  CustomerInfoContainer,
  CustomerDetails,
  PaymentDetails,
  CustomerData,
  PhotoWrapper,
  OrderSummary,
  SingleOrderContainer,
  Divider,
  StatusBar,
  StatusBarContainer
} from './styles'
import { NotFoundSource } from '../NotFoundSource'
import { useTheme } from 'styled-components'

const MultiOrdersDetailsUI = (props) => {
  const {
    customer,
    paymentEvents,
    ordersSummary,
    handleOrderRedirect
  } = props

  const { loading, orders, error } = props.ordersList
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [{ configs }] = useConfig()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const progressBarStyle = configs.multi_business_checkout_progress_bar_style?.value
  const showBarInOrder = ['group', 'both']
  const showBarInIndividual = ['individual', 'both']

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

  useEffect(() => {
    if (error) {
      setAlertState({
        open: true,
        content: error
      })
    }
  }, [error])

  return (
    <Container>
      {(orders?.length > 0 || loading) && (
        <>
          <HeaderContainer>
            {loading ? (
              <>
                <Skeleton height={36} width={250} style={{ marginBottom: '6px' }} />
                <Skeleton height={21} />
              </>
            ) : (
              <>
                <h1>
                  <span>{t('HEY', 'Hey')}</span>
                  <span className='name'>{customer?.name} {customer?.lastname}</span>
                </h1>
                <p>{t('ORDER_MESSAGE_HEADER_TEXT', 'Once business accepts your order, we will send you an email, thank you!')}</p>
              </>
            )}
          </HeaderContainer>

          {loading ? (
            <Skeleton height={220} style={{ margin: '50px 0' }} />
          ) : (
            <CustomerInfoContainer>
              <CustomerDetails>
                <h3>{t('CUSTOMER_DETAILS', 'Customer details')}</h3>
                <div>
                  <PhotoWrapper>
                    <Image
                      src={customer?.photo}
                      fallback={<FaUserAlt />}
                    />
                  </PhotoWrapper>
                  <CustomerData>
                    <p>{customer?.name} {customer?.lastname}</p>
                    <p>{customer?.email}</p>
                    <p>{customer?.cellphone || customer?.phone}</p>
                  </CustomerData>
                </div>
              </CustomerDetails>
              <PaymentDetails>
                <h3>{t('PAYMETHOD', 'Payment method')}</h3>
                {paymentEvents.map(event => (
                  <p key={event.id}>
                    {event?.wallet_event
                      ? walletName[event?.wallet_event?.wallet?.type]?.name
                      : event?.paymethod?.name}
                  </p>
                ))}
                <h3 className='address'>{t('DELIVERYA_V21', 'Delivery address')}</h3>
                <p>{customer?.address}</p>
              </PaymentDetails>
            </CustomerInfoContainer>
          )}

          {loading ? (
            <Skeleton height={250} style={{ marginBottom: '50px' }} />
          ) : (
            <OrderSummary>
              <h3>{t('ORDER_SUMMARY', 'Order summary')}</h3>
              {(showBarInOrder.includes(progressBarStyle)) && (
                <StatusBarContainer>
                  <StatusBar percentage={getOrderStatus(orders[0]?.status)?.percentage} />
                  <p className='order-status'>{getOrderStatus(orders[0]?.status)?.value}</p>
                </StatusBarContainer>
              )}
              <table>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td>{t('ORDER', 'Order')} #{order.id}</td>
                      <td>{parsePrice(order?.summary?.total ?? order?.total)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Divider />
              <table>
                <tbody>
                  <tr>
                    <td>{t('TOTAL_BEFORE_TAX', 'Total before tax')}:</td>
                    <td>{parsePrice(ordersSummary?.subtotal)}</td>
                  </tr>
                  <tr>
                    <td>{t('ESTIMATED_TAX_TO_BE_COLLECTED', 'Estimated tax to be collected')}:</td>
                    <td>{parsePrice(ordersSummary?.tax)}</td>
                  </tr>
                </tbody>
              </table>
              <Divider />
              <table>
                <tbody>
                  <tr>
                    <td>{t('PAYMENT_TOTAL', 'Payment total')}:</td>
                    <td>{parsePrice(ordersSummary?.total)}</td>
                  </tr>
                </tbody>
              </table>
            </OrderSummary>
          )}
        </>
      )}

      {loading ? (
        [...Array(3).keys()].map(i => (
          <SingleOrderContainer key={i}>
            <Skeleton height={330} />
          </SingleOrderContainer>
        ))
      ) : (
        <>
          {orders.map(order => (
            <SingleOrderCard
              key={order.id}
              order={order}
              showProgressBar={showBarInIndividual.includes(progressBarStyle)}
              getOrderStatus={getOrderStatus}
            />
          ))}
        </>
      )}
      {!loading && (error || orders?.length === 0) && (
        error?.includes('ERROR_ACCESS_EXPIRED') ? (
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
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </Container>
  )
}

export const MultiOrdersDetails = (props) => {
  const MultiOrdersDetails = {
    ...props,
    UIComponent: MultiOrdersDetailsUI
  }
  return <MultiOrdersDetailsController {...MultiOrdersDetails} />
}
