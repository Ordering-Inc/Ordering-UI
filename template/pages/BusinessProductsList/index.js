import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useApi, useEvent } from 'ordering-components'
import { BusinessProductsListing } from '../../../src/components/BusinessProductsListing'
import { HelmetTags } from '../../components/HelmetTags'
import { capitalize } from '../../../src/utils'

export const BusinessProductsList = (props) => {
  const { store } = useParams()
  const [ordering] = useApi()
  const { search } = useLocation()

  let category
  let product

  if (search) {
    const data = search.substring(1).split('&')
    category = data[0]
    product = data[1]
  }

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
      'timezone',
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
      'products',
      'zones',
      'front_layout'
    ],
    handleSearchRedirect: () => {
      events.emit('go_to_page', { page: 'search' })
    },
    onProductRedirect: ({ slug, category, product }) => {
      if (!category && !product) {
        return window.location.pathname.includes('/store/')
          ? events.emit('go_to_page', { page: 'business', params: { store: slug }, replace: true })
          : events.emit('go_to_page', { page: 'business_slug', params: { store: slug }, replace: true })
      }
      return window.location.pathname.includes('/store/')
        ? events.emit('go_to_page', {
          page: 'business',
          params: { store: slug },
          search: `?category=${category}&product=${product}`,
          replace: true
        })
        : events.emit('go_to_page', {
          page: 'business_slug',
          params: { store: slug },
          search: `?category=${category}&product=${product}`,
          replace: true
        })
    },
    onCheckoutRedirect: (cartUuid) => {
      events.emit('go_to_page', { page: 'checkout', params: { cartUuid } })
    }
  }

  return (
    <>
      <HelmetTags page='business' helmetTitle={capitalize(store)} />
      <BusinessProductsListing {...businessProductsProps} />
    </>
  )
}
