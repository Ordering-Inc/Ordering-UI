import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import {
  useLanguage,
  useUtils,
  useEvent,
  OrderList as OrderListController
} from 'ordering-components'

import {
  LastOrdersContainer,
  OrderInfoBlock,
  BusinessHeader
} from './styles'
import { NotFoundSource } from '../NotFoundSource'

export const LastOrdersUI = (props) => {
  const {
    orderList
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage, parseDate }] = useUtils()
  const [events] = useEvent()

  const imageFails = theme.images?.general?.emptyPastOrders

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <LastOrdersContainer>
        {orderList?.loading && <Skeleton height={150} />}
        {!orderList?.loading && orderList?.orders?.length > 0 && orderList?.orders.map((order, i) => (
          <BusinessHeader
            key={i}
            bgimage={optimizeImage(order?.business?.header || theme.images?.dummies?.businessLogo, 'h_400,c_limit')}
            onClick={() => handleGoToPage({ page: 'order_detail', params: { orderId: order.uuid } })}
          >
            <OrderInfoBlock>
              {order?.business?.name && (
                <h4>{order?.business?.name}</h4>
              )}
              {(order?.delivery_datetime_utc || order?.delivery_datetime) && (
                <p>
                  <span>{t('TUTORIAL_ORDER_COMPLETED', 'Order Completed')} {('ON', 'on')} </span>
                  {order?.delivery_datetime_utc
                    ? parseDate(order?.delivery_datetime_utc, { outputFormat: 'MMM DD, YY - hh:mm A' })
                    : parseDate(order?.delivery_datetime, { utc: false })}
                </p>
              )}
            </OrderInfoBlock>
          </BusinessHeader>
        ))}
        {!orderList?.loading && orderList?.orders?.length === 0 && (
          <NotFoundSource
            image={imageFails}
            content={t('NO_RESULTS_FOUND', 'Sorry, no results found')}
            conditioned
          />
        )}
      </LastOrdersContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const LastOrders = (props) => {
  const lastOrdersProps = {
    ...props,
    UIComponent: LastOrdersUI,
    orderStatus: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    useDefualtSessionManager: true,
    paginationSettings: {
      initialPage: 1,
      pageSize: 1,
      controlType: 'infinity'
    }
  }
  return <OrderListController {...lastOrdersProps} />
}
