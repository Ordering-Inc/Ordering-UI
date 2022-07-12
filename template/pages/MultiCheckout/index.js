import React from 'react'
import { useHistory } from 'react-router-dom'
import { MultiCheckout as MultiCheckoutController } from '../../../src/themes/five/src/components/MultiCheckout'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components'

export const MultiCheckout = (props) => {
  const [events] = useEvent()
  const history = useHistory()
  const multiCheckoutProps = {
    ...props,
    onRedirectPage: (data) => events.emit('go_to_page', data),
    onPlaceOrderClick: (orderUuids) => {
      history.push({
        pathname: '/multi-orders',
        orderUuids
      })
    }
  }
  return (
    <>
      <HelmetTags page='multi_checkout' />
      <MultiCheckoutController {...multiCheckoutProps} />
    </>
  )
}
