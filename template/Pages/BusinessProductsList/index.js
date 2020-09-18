import React from 'react'
import { BusinessProductsListing } from '../../../src/components/BusinessProductsListing'
import { useParams } from 'react-router-dom'
import { useApi } from 'ordering-components'

const businessProps = ['id', 'name', 'header', 'logo', 'name', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug', 'categories']

export const BusinessProductsList = (props) => {
  const { store } = useParams()
  const [ordering] = useApi()

  /**
   * Get from search options component
   */
  const businessParams = {
    type: 1,
    location: '40.7539143,-73.9810162'
    // time: asap,
  }

  return (
    <BusinessProductsListing
      {...props}
      slug={store}
      ordering={ordering}
      businessProps={businessProps}
      businessParams={businessParams}
    />
  )
}
