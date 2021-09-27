import React from 'react'
import { useLanguage, useUtils } from 'ordering-components'
import { useTheme } from 'styled-components'
import { Button } from '../../styles/Buttons'

import {
  SingleCard,
  OrderPastContent,
  PastLogo,
  WrapperBusinessTitle,
  WrappButton,
  OrderDetails,
  OrderPrice,
  Status
} from './styles'

import { OrdersContainer, BusinessInformation } from '../OrdersOption/styles'

export const VerticalOrdersLayout = (props) => {
  const {
    orders,
    pagination,
    onRedirectPage,
    loadMoreOrders,
    getOrderStatus
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parseDate, parsePrice }] = useUtils()

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <OrdersContainer id='orders-container'>
        {orders.map(order => (
          <SingleCard key={order.id} id='order-card' onClick={() => onRedirectPage({ page: 'order_detail', params: { orderId: order.uuid } })}>
            <OrderPastContent>
              {(order.business?.logo || theme.images?.dummies?.businessLogo) && (
                <PastLogo>
                  <img src={order.business?.logo || theme.images?.dummies?.businessLogo} alt='business-logo' width='55px' height='64px' loading='lazy' />
                </PastLogo>
              )}
              <OrderDetails>
                <BusinessInformation>
                  <WrapperBusinessTitle>
                    <h2>{order.business?.name}</h2>
                  </WrapperBusinessTitle>
                  <p>{`${t('ORDER', 'Order')} ${t('No', 'No')}.${order.id}`} {order?.delivery_datetime_utc ? parseDate(order?.delivery_datetime_utc) : parseDate(order?.delivery_datetime, { utc: false })}</p>
                  <p name='order_status'>{getOrderStatus(order.status).value}</p>
                </BusinessInformation>
                <OrderPrice>
                  <h2>{parsePrice(order.total)}</h2>
                </OrderPrice>
              </OrderDetails>
            </OrderPastContent>
          </SingleCard>
        ))}
      </OrdersContainer>
      {pagination.totalPages && pagination.currentPage < pagination.totalPages && (
        <WrappButton>
          <Button
            outline
            color='primary'
            bgtransparent
            onClick={loadMoreOrders}
          >
            {t('LOAD_MORE_ORDERS', 'Load more orders')}
          </Button>
        </WrappButton>
      )}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
