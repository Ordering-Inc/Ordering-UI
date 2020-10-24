import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { OrderDetails } from '../../../src/components/OrderDetails'

export const OrderDetailsPage = (props) => {
  const history = useHistory()
  const { orderId } = useParams()

  const orderDetailsProps = {
    ...props,
    orderId: orderId,
    handleOrderRedirect: () => {
      history.push('/profile/orders')
    }
  }
  return (
    <OrderDetails {...orderDetailsProps} />
  )
}
