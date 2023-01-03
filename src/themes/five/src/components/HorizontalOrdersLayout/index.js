import React from 'react'
import { useLanguage } from 'ordering-components'
import {
  Card,
  CardWrapper,
  CardsContainer
} from './styles'
import { OrdersContainer } from '../OrdersOption/styles'

import { Button } from '../../styles/Buttons'
import { SingleOrderCard } from '../SingleOrderCard'
import { Pagination } from '../Pagination'

export const HorizontalOrdersLayout = (props) => {
  const {
    pagination,
    loadMoreOrders,
    isBusinessesPage,
    customArray,
    businessesIds,
    isCustomerMode,
    isProducts,
    isBusiness,
    handleChangePage
  } = props

  const orders = customArray || props.orders

  const [, t] = useLanguage()

  const ordersToShow = businessesIds
    ? orders?.filter(order =>
      businessesIds?.includes(order?.business_id) ??
      JSON.stringify(businessesIds.sort((a, b) => a - b)) === JSON.stringify(order?.business?.map(business => business?.id).sort((a, b) => a - b)))
    : orders

  const notOrders = isProducts || isBusiness

  const Orders = () => {
    return (
      <>
        {props.beforeElements?.map((BeforeElement, i) => (
          <React.Fragment key={i}>
            {BeforeElement}
          </React.Fragment>))}
        {props.beforeComponents?.map((BeforeComponent, i) => (
          <BeforeComponent key={i} {...props} />))}
        {orders.length > 0 && !notOrders && ordersToShow.map(order => (
          <SingleOrderCard
            {...props}
            key={order.id}
            order={order}
          />
        ))}
        {pagination?.totalPages && !notOrders && pagination?.currentPage < pagination?.totalPages && !notOrders && (
          <Card
            flex
            nobg
            isBusinessesPage={isBusinessesPage}
            isCustomerMode={isCustomerMode}
          >
            <Button
              className='load-orders'
              color='primary'
              outline
              onClick={loadMoreOrders}
            >
              {t('LOAD_MORE_ORDERS', 'Load more orders')}
            </Button>
          </Card>
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

  return (
    <OrdersContainer
      id='orders-container'
      activeOrders
      ordersLength={orders?.length <= 1}
      isBusinessesPage={isBusinessesPage}
    >
      <CardWrapper>
        <CardsContainer>
          {orders.length > 0 && ordersToShow.map(order => (
            <SingleOrderCard
              {...props}
              key={order.id || order.id?.[0]}
              order={order}
            />
          ))}
        </CardsContainer>
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={Math.ceil(pagination?.totalPages)}
          handleChangePage={handleChangePage}
        />
      </CardWrapper>
    </OrdersContainer>
  )
}
