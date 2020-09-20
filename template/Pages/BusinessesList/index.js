import React from 'react'
import { BusinessesListing } from '../../../src/components/BusinessesListing'

const propsToFetch = ['id', 'name', 'header', 'logo', 'name', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']

export const BusinessesList = (props) => {
  return (
    <BusinessesListing {...props} propsToFetch={propsToFetch} />
  )
}
