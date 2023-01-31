import React from 'react'
import {
  CardWrapper,
  CardsContainer
} from './styles'
import { OrdersContainer } from '../OrdersOption/styles'

import { SingleOrderCard } from '../SingleOrderCard'
import { Pagination } from '../Pagination'

export const HorizontalOrdersLayout = (props) => {
  const {
    pagination,
    isBusinessesPage,
    customArray,
    businessesIds,
    isCustomerMode,
    handleChangePage
  } = props

  const orders = customArray || props.orders

  const ordersToShow = businessesIds && isCustomerMode
    ? orders.filter(order =>
      businessesIds?.includes(order?.business_id))
    : businessesIds
      ? orders.filter(order =>
        businessesIds?.includes(order?.business_id) ||
        JSON.stringify(businessesIds.sort((a, b) => a - b)) === JSON.stringify(order?.business?.map(business => business?.id).sort((a, b) => a - b)))
      : orders

  return (
    orders.length > 0 && ordersToShow.length > 0 ? (
      <OrdersContainer
        id='orders-container'
        activeOrders
        ordersLength={orders?.length <= 1}
        isBusinessesPage={isBusinessesPage}
      >
        <CardWrapper>
          <CardsContainer>
            {orders.length > 0 && ordersToShow.map((order, i) => (
              <SingleOrderCard
                {...props}
                key={order.id || order.id?.[0] || i}
                order={order}
              />
            ))}
          </CardsContainer>
          {orders.length > 0 && ordersToShow.length > 0 && (
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={Math.ceil(pagination?.totalPages)}
              handleChangePage={handleChangePage}
            />
          )}
        </CardWrapper>
      </OrdersContainer>
    ) : null
  )
}
