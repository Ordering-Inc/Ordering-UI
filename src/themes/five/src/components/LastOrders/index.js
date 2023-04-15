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

export const LastOrdersUI = (props) => {
  const {
    orderList
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [events] = useEvent()
  const [{ optimizeImage, parseDate }] = useUtils()

  const imageFails = theme.images?.general?.emptyPastOrders

  const handleClickOrder = (uuid) => {
    events.emit('go_to_page', { page: 'order_detail', params: { orderId: uuid } })
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {!orderList?.loading && orderList?.orders?.length > 0 && (
        <>
          <h2>{t('LAST_ORDER', 'Last order')}</h2>
          <LastOrdersContainer>
            {orderList?.loading && <Skeleton height={150} />}
            {!orderList?.loading && orderList?.orders?.length > 0 && orderList?.orders.map((order, i) => (
              <BusinessHeader key={i} bgimage={optimizeImage(order?.business?.header || theme.images?.dummies?.businessLogo, 'h_400,c_limit')}>
                <OrderInfoBlock onClick={() => handleClickOrder(order?.uuid)}>
                  {order?.business?.name && (
                    <h4>{order?.business?.name}</h4>
                  )}
                  {(order?.delivery_datetime_utc || order?.delivery_datetime) && (
                    <p>
                      <span>{t('TUTORIAL_ORDER_COMPLETED', 'Order Completed')} {('ON', 'on')} </span>
                      {order?.delivery_datetime_utc
                        ? parseDate(order?.delivery_datetime_utc)
                        : parseDate(order?.delivery_datetime, { utc: false })}
                    </p>
                  )}
                </OrderInfoBlock>
              </BusinessHeader>
            ))}
          </LastOrdersContainer>
        </>
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

export const LastOrders = (props) => {
  const lastOrdersProps = {
    ...props,
    UIComponent: LastOrdersUI,
    orderStatus: [1, 11, 15],
    useDefualtSessionManager: true,
    paginationSettings: {
      initialPage: 1,
      pageSize: 1,
      controlType: 'infinity'
    }
  }
  return <OrderListController {...lastOrdersProps} />
}
