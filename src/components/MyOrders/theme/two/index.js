import React from 'react'
import { useLanguage } from 'ordering-components'
import { Container } from './styles'
import { OrdersOption } from '../../../OrdersOption/theme/two'

export const MyOrders = (props) => {
  const [, t] = useLanguage()
  return (
    <Container>
      <h1>
        {t('ORDERS', 'Orders')}
      </h1>
      <OrdersOption {...props} activeOrders horizontal />
      <OrdersOption {...props} />
    </Container>
  )
}
