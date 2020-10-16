import React from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import { useApi } from 'ordering-components'
import { BusinessProductsListing } from '../../../src/components/BusinessProductsListing'

export const BusinessProductsList = (props) => {
  const { store } = useParams()
  const history = useHistory()
  const [ordering] = useApi()
  const { search } = useLocation()

  const [category, product] = search && search.substring(1).split('&')
  const categoryId = category && category.split('=')[1]
  const productId = product && product.split('=')[1]

  const businessProductsProps = {
    ...props,
    ordering,
    isSearchByName: true,
    isSearchByDescription: false,
    slug: store,
    categoryId,
    productId,
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
    },
    onProductRedirect: ({ slug, category, product }) => {
      if (!category && !product) {
        if (history.length <= 2) {
          return history.push(`/store/${slug}`)
        }
        return history.go(-1)
      }
      return history.push(`/store/${slug}?category=${category}&product=${product}`)
    }
  }

  return (
    <BusinessProductsListing {...businessProductsProps} />
  )
}
