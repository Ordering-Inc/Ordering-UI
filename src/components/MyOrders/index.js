import React from 'react'
import { Container } from './styles'

import { ProfileOptions } from '../UserProfileForm/ProfileOptions'
import { OrdersOption } from '../OrdersOption'

export const MyOrders = (props) => {
  return (
    <>
      <ProfileOptions value='orders' />
      <Container>
        <OrdersOption {...props} activeOrders />
        <OrdersOption {...props} />
      </Container>
    </>
  )
}
