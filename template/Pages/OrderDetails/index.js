import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { OrderDetails as OrderDetailsPage } from '../../../src/components/OrderDetails'

const OrderDetails = (props) => {
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
    <OrderDetailsPage {...orderDetailsProps} />
  )
}

export default OrderDetails
