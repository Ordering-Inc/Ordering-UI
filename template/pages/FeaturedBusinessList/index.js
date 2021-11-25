import React from 'react'
import { FeaturedBusinessListing } from '../../../src/themes/franchise'
import { useEvent } from 'ordering-components'
import { HelmetTags } from '../../components/HelmetTags'

export const FeaturedBusinessList = (props) => {
  const [events] = useEvent()

  const businessListingProps = {
    ...props,
    isSearchByName: true,
    isSearchByDescription: true,
    isSortByReview: true,
    isFeaturePage: true,
    onBusinessClick: (business) => {
      events.emit('go_to_page', { page: 'business', params: { store: business.slug } })
    }
  }

  return (
    <>
      <HelmetTags page='feature' />
      <FeaturedBusinessListing {...businessListingProps} />
    </>
  )
}
