import React from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import { useApi, useEvent } from 'ordering-components'
import { BusinessProductsListing } from '../../../src/components/BusinessProductsListing'

const BusinessProductsList = (props) => {
  const { store } = useParams()
  const history = useHistory()
  const [ordering] = useApi()
  const { search } = useLocation()

  const [category, product] = search && search.substring(1).split('&')
  const categoryId = category && category.split('=')[1]
  const productId = product && product.split('=')[1]
  const [events] = useEvent()

  const businessProductsProps = {
    ...props,
    ordering,
    isSearchByName: true,
    isSearchByDescription: true,
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
      events.emit('go_to_page', { page: 'search' })
    },
    onProductRedirect: ({ slug, category, product }) => {
      if (!category && !product) {
        if (history.length <= 2) {
          return window.location.pathname.includes('/store/')
            ? events.emit('go_to_page', { page: 'business', params: { store } })
            : events.emit('go_to_page', { page: 'business_slug', params: { store } })
        }
        return history.go(-1)
      }
      return window.location.pathname.includes('/store/')
        ? events.emit('go_to_page', {
          page: 'business',
          params: { store },
          search: `?category=${category}&product=${product}`
        })
        : events.emit('go_to_page', {
          page: 'business_slug',
          params: { store },
          search: `?category=${category}&product=${product}`
        })
    },
    onCheckoutRedirect: (cartUuid) => {
      events.emit('go_to_page', { page: 'checkout', params: { cartUuid } })
    }
  }

  return (
    <BusinessProductsListing {...businessProductsProps} />
  )
}

export default BusinessProductsList
