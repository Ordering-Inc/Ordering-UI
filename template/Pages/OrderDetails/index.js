import React from 'react'
import { useHistory } from 'react-router-dom'

import { OrderDetails } from '../../../src/components/OrderDetails'

export const OrderDetailsPage = (props) => {
  const history = useHistory()

  const orderDetailsProps = {
    ...props,
    handleOrderRedirect: () => {
      history.push('/profile/orders')
    }
  }
  return (
    <OrderDetails {...orderDetailsProps} />
  )
}
