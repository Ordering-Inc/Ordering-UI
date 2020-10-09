import React from 'react'
import { BusinessesListing } from '../../../src/components/BusinessesListing'
import { useHistory } from 'react-router-dom'

export const BusinessesList = (props) => {
  const propsToFetch = ['id', 'name', 'header', 'logo', 'name', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
  const history = useHistory()

  const handleBusinessClick = (business) => {
    history.push(`/store/${business.slug}`)
  }

  return (
    <BusinessesListing {...props} propsToFetch={propsToFetch} onBusinessClick={handleBusinessClick} />
  )
}
