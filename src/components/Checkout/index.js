import React from 'react'
import { useParams } from 'react-router-dom'
import { Checkout as CheckoutController, useOrder } from 'ordering-components'

// import {} './styles'

import { AddressDetails } from '../AddressDetails'

const CheckoutUI = (props) => {
  const {
    cartUuid
  } = props

  const [{ carts }] = useOrder()

  const businessId = () => Object.values(carts).find(cart => cart.uuid === cartUuid)?.business_id

  return (
    <>
      <AddressDetails
        businessId={businessId}
        apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
      />
    </>
  )
}

export const Checkout = (props) => {
  const { cartUuid } = useParams()
  const checkoutProps = {
    ...props,
    UIComponent: CheckoutUI,
    cartUuid
  }
  return (
    <CheckoutController {...checkoutProps} />
  )
}
