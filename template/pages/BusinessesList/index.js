import React from 'react'
import { BusinessesListing } from '../../../src/themes/two/src/components/BusinessesListing'
import { useEvent } from 'ordering-components'
import { HelmetTags } from '../../components/HelmetTags'

export const BusinessesList = (props) => {
  const [events] = useEvent()

  const businessListingProps = {
    ...props,
    initialOrderType: 1,
    isSearchByName: true,
    isSearchByDescription: true,
    onBusinessClick: (business) => {
      events.emit('go_to_page', { page: 'business', params: { store: business.slug } })
    }
  }

  return (
    <>
      <HelmetTags page='delivery' />
      <BusinessesListing {...businessListingProps} />
    </>
  )
}
