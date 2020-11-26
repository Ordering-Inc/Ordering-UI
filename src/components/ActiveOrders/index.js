import React from 'react'
import { useLanguage, useUtils } from 'ordering-components'

import {
  OpenOrder,
  Content,
  Price,
  Logo,
  Card,
  Map
} from './styles'
import { OrdersContainer, BusinessInformation } from '../OrdersOption/styles'

import { AutoScroll } from '../AutoScroll'
import { Tabs } from '../../styles/Tabs'
import { Button } from '../../styles/Buttons'
import { getGoogleMapImage } from '../../utils'

export const ActiveOrders = (props) => {
  const {
    orders,
    pagination,
    onOrderClick,
    loadMoreOrders
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()

  return (
    <OrdersContainer id='container' activeOrders>
      <Tabs id='orders'>
        <AutoScroll container='container' categories='orders'>
          {orders.map(order => (
            <Card key={order.id}>
              <Map>
                <img src={getGoogleMapImage(order?.business?.location)} alt='google-maps-img' />
              </Map>
              <Content>
                <Logo>
                  <img src={order.business?.logo} alt='business-logo' />
                </Logo>
                <BusinessInformation>
                  <h2>{order.business.name}</h2>
                  <p>{t('ORDER_NUMBER', 'Order No.')} {order.id}</p>
                  <p>{order.created_at}</p>
                </BusinessInformation>
                <Price>
                  <h2>
                    {parsePrice(order.products.reduce((acc, cur) => acc + cur.price, 0))}
                  </h2>
                  {order.status === 0 && (
                    <p>{t('PENDING_ORDER', 'Pending order')}</p>
                  )}
                </Price>
              </Content>
              <OpenOrder>
                <Button color='primary' onClick={() => onOrderClick({ page: 'order_detail', params: { orderId: order.id } })}>
                  {t('OPEN_ORDER', 'Open order')}
                </Button>
              </OpenOrder>
            </Card>
          ))}
          {pagination.totalPages && pagination.currentPage < pagination.totalPages && (
            <Card flex nobg>
              <Button
                className='load-orders'
                bgtransparent
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
    </OrdersContainer>
  )
}
