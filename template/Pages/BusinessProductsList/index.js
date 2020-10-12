import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useApi } from 'ordering-components'
import { BusinessProductsListing } from '../../../src/components/BusinessProductsListing'

export const BusinessProductsList = (props) => {
  const { store } = useParams()
  const history = useHistory()
  const [ordering] = useApi()

  const businessProductsProps = {
    ...props,
    ordering,
    isSearchByName: true,
    isSearchByDescription: false,
    slug: store,
    businessProps: [
      'id',
      'name',
      'header',
      'logo',
      'name',
      'open',
      'about',
      'description',
      'address',
      'location',
      'schedule',
      'service_fee',
      'delivery_price',
      'distance',
      'delivery_time',
      'gallery',
      'pickup_time',
      'reviews',
      'featured',
      'offers',
      'food',
      'laundry',
      'alcohol',
      'groceries',
      'slug',
      'products'
    ],
    handleSearchRedirect: () => {
      history.push('/search')
    }
  }

  return (
    <BusinessProductsListing {...businessProductsProps} />
  )
}
