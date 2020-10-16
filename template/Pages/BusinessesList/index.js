import React from 'react'
import { BusinessesListing } from '../../../src/components/BusinessesListing'
import { useHistory } from 'react-router-dom'
import { useBusiness } from 'ordering-components'

export const BusinessesList = (props) => {
  const history = useHistory()
  const [, { setBusiness }] = useBusiness()

  const businessListingProps = {
    ...props,
    isSearchByName: true,
    isSearchByDescription: false,
    onBusinessClick: (business) => {
      setBusiness(business)
      history.push(`/store/${business.slug}`)
    },
    propsToFetch: ['id', 'name', 'header', 'logo', 'name', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
  }

  return (
    <BusinessesListing {...businessListingProps} />
  )
}
