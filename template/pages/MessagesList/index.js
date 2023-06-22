import React from 'react'
import { MessagesListing } from '../../../src/themes/five/src/components/MessagesListing'

import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components'
import settings from '../../config'
import { useTheme } from 'styled-components'

export const MessagesList = (props) => {
  const [events] = useEvent()
  const theme = useTheme()
  const websiteThemeType = theme?.my_products?.components?.website_theme?.components?.type
  const websiteThemeFranchiseSlug = theme?.my_products?.components?.website_theme?.components?.franchise_slug
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
