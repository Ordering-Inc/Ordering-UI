import React from 'react'
import { useLanguage } from 'ordering-components'
import { Card } from './styles'
import { OrdersContainer } from '../OrdersOption/styles'

import { AutoScroll } from '../AutoScroll'
import { Tabs } from '../../styles/Tabs'
import { Button } from '../../styles/Buttons'
import { SingleOrderCard } from '../SingleOrderCard'

export const HorizontalOrdersLayout = (props) => {
  const {
    pagination,
    loadMoreOrders,
    isBusinessesPage,
    customArray,
    businessesIds,
    activeOrders,
    pastOrders,
    isCustomerMode,
    isProducts,
    isBusiness
  } = props

  const orders = customArray || props.orders

  const [, t] = useLanguage()

  const ordersToShow = businessesIds
    ? orders.filter(order => businessesIds?.includes(order?.business_id))
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
      {!isBusinessesPage ? (
        <Tabs>
          <AutoScroll scrollId={activeOrders ? 'activeOrders' : (pastOrders ? 'pastOrders' : 'prevOrders')}>
            {orders.length > 0 && ordersToShow.map(order => (
              <SingleOrderCard
                {...props}
                key={order.id}
                order={order}
              />
            ))}
            {pagination?.totalPages && pagination?.currentPage < pagination?.totalPages && (
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
          </AutoScroll>
        </Tabs>
      ) : <Orders />}
    </OrdersContainer>
  )
}
