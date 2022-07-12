import React, { useEffect, useState } from 'react'
import { useLanguage, useUtils, MultiOrdersDetails as MultiOrdersDetailsController } from 'ordering-components'
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
  Divider
} from './styles'

const MultiOrdersDetailsUI = (props) => {
  const {
    customer,
    paymentEvents,
    ordersSummary
  } = props

  const { loading, orders, error } = props.ordersList

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const walletName = {
    cash: {
      name: t('PAY_WITH_CASH_WALLET', 'Pay with Cash Wallet')
    },
    credit_point: {
      name: t('PAY_WITH_CREDITS_POINTS_WALLET', 'Pay with Credit Points Wallet')
    }
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
                <td>{t('', 'Total before tax')}:</td>
                <td>{parsePrice(ordersSummary?.subtotal)}</td>
              </tr>
              <tr>
                <td>{t('', 'Estimated tax to be collected')}:</td>
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
            />
          ))}
        </>
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
