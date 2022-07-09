import React from 'react'
import { GroupCheckout as GroupCheckoutController } from '../../../src/themes/five/src/components/GroupCheckout'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components'

export const GroupCheckout = (props) => {
  const [events] = useEvent()
  const groupCheckoutProps = {
    ...props,
    onRedirectPage: (data) => events.emit('go_to_page', data)
  }
  return (
    <>
      <HelmetTags page='group_checkout' />
      <GroupCheckoutController {...groupCheckoutProps} />
    </>
  )
}
