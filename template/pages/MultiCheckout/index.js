import React from 'react'
import { MultiCheckout as MultiCheckoutController } from '../../../src/themes/five/src/components/MultiCheckout'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components'

export const MultiCheckout = (props) => {
  const [events] = useEvent()
  const multiCheckoutProps = {
    ...props,
    onRedirectPage: (data) => events.emit('go_to_page', data)
  }
  return (
    <>
      <HelmetTags page='multi_checkout' />
      <MultiCheckoutController {...multiCheckoutProps} />
    </>
  )
}
