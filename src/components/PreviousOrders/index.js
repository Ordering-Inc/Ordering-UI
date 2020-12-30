import React, { useState } from 'react'
import { useLanguage, useEvent, useOrder, useUtils } from 'ordering-components'

import { Button } from '../../styles/Buttons'

import {
  SingleCard,
  OrderPastContent,
  PastLogo,
  WrapperBusinessTitle,
  Reorder,
  WrappButton
} from './styles'

import { OrdersContainer, BusinessInformation } from '../OrdersOption/styles'

export const PreviousOrders = (props) => {
  const {
    orders,
    pagination,
    onOrderClick,
    loadMoreOrders,
    getOrderStatus
  } = props

  const [, t] = useLanguage()
  const [events] = useEvent()
  const [, { reorder }] = useOrder()
  const [{ parseDate }] = useUtils()

  const [reorderLoading, setReorderLoading] = useState(false)
  const [orderID, setOrderID] = useState(null)

  const handleReorder = async (orderId) => {
    setReorderLoading(true)
    setOrderID(orderId)
    try {
      const { error, result } = await reorder(orderId)
      if (!error) {
        events.emit('go_to_page', { page: 'checkout', params: { cartUuid: result.uuid } })
      }
    } catch (err) {
      setReorderLoading(false)
    }
  }

  return (
    <>
      <OrdersContainer>
        {orders.map(order => (
          <SingleCard key={order.id}>
            <OrderPastContent>
              <PastLogo>
                <img src={order.business?.logo} alt='business-logo' width='55px' height='64px' />
              </PastLogo>
              <BusinessInformation>
                <WrapperBusinessTitle>
                  <h2>{order.business.name}</h2>
                </WrapperBusinessTitle>
                <p>{parseDate(order.created_at)}</p>
                <p name='view_order' onClick={() => onOrderClick({ page: 'order_detail', params: { orderId: order.id } })}>
                  {t('MOBILE_FRONT_BUTTON_VIEW_ORDER', 'View order')}
                </p>
              </BusinessInformation>
            </OrderPastContent>
            <Reorder>
              <p>{getOrderStatus(order.status).value}</p>
              <Button
                color='primary'
                onClick={() => handleReorder(order.id)}
                disabled={reorderLoading}
              >
                {orderID === order.id && reorderLoading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder')}
              </Button>
            </Reorder>
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
    </>
  )
}
