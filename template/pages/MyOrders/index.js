import React from 'react'
import { MyOrders as MyOrdersController } from '../../../src/themes/five/src/components/MyOrders'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components'

export const MyOrders = (props) => {
  const [events] = useEvent()
  const ordersProps = {
    ...props,
    onRedirectPage: (data) => events.emit('go_to_page', data),
    isAsCustomer: true
  }
  return (
    <>
      <HelmetTags page='orders' />
      <MyOrdersController {...ordersProps} />
    </>
  )
}
