import React from 'react'
import { MyOrders as MyOrdersController } from '../../../src/components/MyOrders'
import { HelmetTags } from '../../components/HelmetTags'

export const MyOrders = (props) => {
  return (
    <>
      <HelmetTags page='orders' />
      <MyOrdersController {...props} />
    </>
  )
}
