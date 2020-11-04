import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { HelmetTags } from '../../components/HelmetTags'

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
    <>
      <HelmetTags page='order_details' />
      <OrderDetails {...orderDetailsProps} />
    </>
  )
}
