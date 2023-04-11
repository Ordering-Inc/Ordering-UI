import React from 'react'
import { MessagesListing } from '../../../src/themes/five/src/components/MessagesListing'

import { HelmetTags } from '../../components/HelmetTags'
import { useEvent, useOrderingTheme } from 'ordering-components'
import settings from '../../config'

export const MessagesList = (props) => {
  const [events] = useEvent()
  const [orderingTheme] = useOrderingTheme()
  const websiteThemeType = orderingTheme?.theme?.my_products?.components?.website_theme?.components?.type
  const websiteThemeFranchiseSlug = orderingTheme?.theme?.my_products?.components?.website_theme?.components?.franchise_slug
  const updatedFranchiseSlug = (websiteThemeType === 'franchise' && websiteThemeFranchiseSlug) || settings?.franchiseSlug

  const messageprops = {
    ...props,
    franchiseId: updatedFranchiseSlug,
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
