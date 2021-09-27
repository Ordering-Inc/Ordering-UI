import React from 'react'
import { Container, Divider, Title } from './styles'

import { useLanguage } from 'ordering-components'
import { OrdersOption } from '../OrdersOption'

export const MyOrders = (props) => {
  const [, t] = useLanguage()

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container>
        <Title>
          {t('MY_ORDER', 'My Orders')}
        </Title>
        <OrdersOption {...props} activeOrders />
        <Divider />
        <OrdersOption {...props} />
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
