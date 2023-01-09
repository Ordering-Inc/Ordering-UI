import React from 'react'
import { MessagesListing } from '../../../src/themes/five/src/components/MessagesListing'

import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components'
import settings from '../../config'

export const MessagesList = (props) => {
  const [events] = useEvent()
  const messageprops = {
    ...props,
    franchiseId: settings?.franchiseSlug,
    onRedirectPage: (data) => events.emit('go_to_page', data)
  }
  return (
    <>
      <HelmetTags page='messages' />
      <MessagesListing {...messageprops} />
    </>
  )
}
