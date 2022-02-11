import React from 'react'
import { useLanguage, useUtils } from 'ordering-components'
import { useTheme } from 'styled-components'
import {
  Content,
  Price,
  Logo,
  Card,
  Reorder,
  TitleContainer
} from './styles'
import { OrdersContainer, BusinessInformation } from '../OrdersOption/styles'

import { AutoScroll } from '../AutoScroll'
import { Tabs } from '../../styles/Tabs'
import { Button } from '../../styles/Buttons'
import BsDot from '@meronex/icons/bs/BsDot'

export const HorizontalOrdersLayout = (props) => {
  const {
    pagination,
    loadMoreOrders,
    getOrderStatus,
    isBusinessesPage,
    handleReorder,
    customArray,
    onRedirectPage,
    businessesIds,
    activeOrders,
    pastOrders
  } = props

  const orders = customArray || props.orders

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parsePrice, parseDate }] = useUtils()

  const ordersToShow = businessesIds
    ? orders.filter(order => businessesIds?.includes(order?.business_id))
    : orders

  const handleClickCard = (uuid) => {
    if (customArray) {
      onRedirectPage({ page: 'checkout', params: { cartUuid: uuid } })
    } else {
      onRedirectPage({ page: 'order_detail', params: { orderId: uuid } })
    }
  }

  const Orders = () => {
    return (
      <>
        {props.beforeElements?.map((BeforeElement, i) => (
          <React.Fragment key={i}>
            {BeforeElement}
          </React.Fragment>))}
        {props.beforeComponents?.map((BeforeComponent, i) => (
          <BeforeComponent key={i} {...props} />))}
        {orders.length > 0 && ordersToShow.map(order => (
          <Card
            key={order.id || order.uuid}
            id='order-card'
            isBusinessesPage={isBusinessesPage}
            onClick={() => handleClickCard(order?.uuid)}
          >
            <Content>
              {(order.business?.logo || theme.images?.dummies?.businessLogo) && (
                <Logo>
                  <img src={order.business?.logo || theme.images?.dummies?.businessLogo} alt='business-logo' width='75px' height='75px' />
                </Logo>
              )}

              <BusinessInformation activeOrders>
                <TitleContainer>
                  <h2>{order.business?.name}</h2>
                  <Price isBusinessesPage={isBusinessesPage}>
                    <h2>
                      {parsePrice(order?.summary?.total || order?.total)}
                    </h2>
                  </Price>
                </TitleContainer>
                <div className='orders-detail'>
                  {order?.id && (
                    <>
                      <p name='order_number'>{t('ORDER_NUM', 'Order No.')} {order.id}</p>
                      <BsDot />
                    </>
                  )}
                  <p>{order?.delivery_datetime_utc
                    ? parseDate(order?.delivery_datetime_utc)
                    : parseDate(order?.delivery_datetime, { utc: false })}
                  </p>
                </div>
                {order?.status !== 0 && (
                  <p className='order-status'>{getOrderStatus(order.status)?.value}</p>
                )}
              </BusinessInformation>
            </Content>
          </Card>
        ))}
        {pagination?.totalPages && pagination?.currentPage < pagination?.totalPages && (
          <Card
            flex
            nobg
            isBusinessesPage={isBusinessesPage}
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
            <Orders />
          </AutoScroll>
        </Tabs>
      ) : <Orders />}
    </OrdersContainer>
  )
}
