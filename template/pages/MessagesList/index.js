import React from 'react'
import { MessagesListing } from '../../../src/themes/five/src/components/MessagesListing'

import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components'

export const MessagesList = (props) => {
  const [events] = useEvent()
  const messageprops = {
    ...props,
    onRedirectPage: (data) => events.emit('go_to_page', data)
  }
  return (
    <>
      <HelmetTags page='messages' />
      <MessagesListing {...messageprops} />
    </>
  )
}

export default MessagesList
