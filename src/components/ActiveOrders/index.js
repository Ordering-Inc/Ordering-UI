import React from 'react'
import { useLanguage, useUtils, useConfig } from 'ordering-components'

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
    loadMoreOrders,
    getOrderStatus
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parsePrice, parseDate }] = useUtils()

  return (
    <OrdersContainer activeOrders ordersLength={orders?.length <= 1}>
      <Tabs>
        <AutoScroll special>
          {orders.map(order => (
            <Card key={order.id}>
              {configs?.google_maps_api_key?.value && (
                <Map>
                  <img
                    src={getGoogleMapImage(order?.business?.location, configs?.google_maps_api_key?.value)}
                    alt='google-maps-img'
                    height='100px'
                    width='400px'
                  />
                </Map>
              )}
              <Content>
                <Logo>
                  <img src={order.business?.logo} alt='business-logo' width='75px' height='75px' />
                </Logo>
                <BusinessInformation activeOrders>
                  <h2>{order.business.name}</h2>
                  <p name='order_number'>{t('ORDER_NUMBER', 'Order No.')} {order.id}</p>
                  <p>{order?.delivery_datetime_utc ? parseDate(order?.delivery_datetime_utc) : parseDate(order?.delivery_datetime, { utc: false })}</p>
                </BusinessInformation>
                <Price>
                  <h2>
                    {parsePrice(order.total)}
                  </h2>
                  <p>{getOrderStatus(order.status).value}</p>
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
