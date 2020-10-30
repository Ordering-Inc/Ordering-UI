import React from 'react'
import { BusinessesListing } from '../../../src/components/BusinessesListing'
import { useEvent } from 'ordering-components'

const BusinessesList = (props) => {
  const [events] = useEvent()

  const businessListingProps = {
    ...props,
    isSearchByName: true,
    isSearchByDescription: true,
    onBusinessClick: (business) => {
      events.emit('go_to_page', { page: 'business', params: { store: business.slug } })
    },
    propsToFetch: ['id', 'name', 'header', 'logo', 'location', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
  }

  return (
    <BusinessesListing {...businessListingProps} />
  )
}

export default BusinessesList
