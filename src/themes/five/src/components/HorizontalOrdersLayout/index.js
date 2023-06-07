import React from 'react'
import {
  CardWrapper,
  CardsContainer,
  CardsContainerWrapper
} from './styles'
import { OrdersContainer } from '../OrdersOption/styles'

import { SingleOrderCard } from '../SingleOrderCard'
import { Pagination } from '../Pagination'
import { AutoScroll } from '../AutoScroll'

export const HorizontalOrdersLayout = (props) => {
  const {
    pagination,
    isBusinessesPage,
    customArray,
    businessesIds,
    isCustomerMode,
    handleChangePage,
    titleContent
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
        id={isBusinessesPage && titleContent ? `${titleContent}-container` : 'orders-container'}
        activeOrders
        ordersLength={orders?.length <= 1}
        isBusinessesPage={isBusinessesPage}
      >
        <CardWrapper>
          <CardsContainerWrapper isBusinessesPage={isBusinessesPage}>
            <CardsContainer isBusinessesPage={isBusinessesPage}>
              <AutoScroll scrollId={isBusinessesPage && titleContent ? `${titleContent}Scroll` : 'orderScroll'}>
                {orders.length > 0 && ordersToShow.map((order, i) => (
                  <SingleOrderCard
                    {...props}
                    key={order.id || order.id?.[0] || i}
                    order={order}
                  />
                ))}
              </AutoScroll>
            </CardsContainer>
          </CardsContainerWrapper>
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
