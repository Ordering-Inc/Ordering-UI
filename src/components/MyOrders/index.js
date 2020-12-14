import React from 'react'
import { Container } from './styles'

import { ProfileOptions } from '../UserProfileForm/ProfileOptions'
import { OrdersOption } from '../OrdersOption'

export const MyOrders = () => {
  return (
    <>
      <ProfileOptions value='orders' />
      <Container>
        <OrdersOption activeOrders />
        <OrdersOption />
      </Container>
    </>
  )
}
