import React from 'react'
import { useParams } from 'react-router-dom'
import { useApi } from 'ordering-components'
import { BusinessProductsListing } from '../../../src/components/BusinessProductsListing'

export const BusinessProductsList = (props) => {
  const { store } = useParams()
  const [ordering] = useApi()

  const businessProductsProps = {
    ...props,
    ordering,
    isSearchByName: true,
    isSearchByDescription: false,
    slug: store,
    businessProps: ['id', 'name', 'header', 'logo', 'name', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug', 'products']
  }

  return (
    <BusinessProductsListing {...businessProductsProps} />
  )
}
