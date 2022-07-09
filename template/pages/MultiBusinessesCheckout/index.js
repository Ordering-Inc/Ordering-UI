import React from 'react'
import { MultiBusinessesCheckout as MultiBusinessesCheckoutController } from '../../../src/themes/five/src/components/MultiBusinessesCheckout'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components'

export const MultiBusinessesCheckout = (props) => {
  const [events] = useEvent()
  const multiBusinessesCheckoutProps = {
    ...props,
    onRedirectPage: (data) => events.emit('go_to_page', data)
  }
  return (
    <>
      <HelmetTags page='multi_businesses_checkout' />
      <MultiBusinessesCheckoutController {...multiBusinessesCheckoutProps} />
    </>
  )
}
