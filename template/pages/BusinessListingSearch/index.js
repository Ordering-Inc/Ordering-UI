import React from 'react'
import { useLocation } from 'react-router-dom'
import { BusinessListingSearch as BusinessListingSearchController } from '../../../src/themes/five'
import { useEvent } from 'ordering-components'
import { HelmetTags } from '../../components/HelmetTags'

export const BusinessListingSearch = (props) => {
  const [events] = useEvent()
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const defaultTerm = searchParams.get('term') || ''

  const businessUrlTemplate = '/store/:store'
  const productUrlTemplate = '/store/:store?category=:category_id&product=:product_id'

  const businessListingProps = {
    ...props,
    defaultTerm: defaultTerm,
    onBusinessClick: (business) => {
      if (businessUrlTemplate === '/store/:store' || businessUrlTemplate === '/:store') {
        events.emit('go_to_page', { page: 'business', params: { store: business.slug } })
      } else {
        events.emit('go_to_page', { page: 'business', search: `?${businessUrlTemplate.split('?')[1].replace(':store', '')}${business.slug}` })
      }
    },
    onRedirectPage: (data) => {
      if (data.page === 'business') {
        const businessSlug = data.params?.store
        if (businessUrlTemplate === '/store/:store' || businessUrlTemplate === '/:store') {
          events.emit('go_to_page', { page: 'business', params: { store: businessSlug } })
        } else {
          events.emit('go_to_page', { page: 'business', search: `?${businessUrlTemplate.split('?')[1].replace(':store', '')}${businessSlug}` })
        }
      } else {
        events.emit('go_to_page', data)
      }
    },
    onProductRedirect: ({ slug, category, product }) => {
      if (!category && !product) {
        if (businessUrlTemplate === '/store/:store' || businessUrlTemplate === '/:store') {
          return events.emit('go_to_page', { page: 'business', params: { store: slug } })
        } else {
          return events.emit('go_to_page', { page: 'business', search: `?${businessUrlTemplate.split('?')[1].replace(':store', '')}${slug}` })
        }
      }
      if (productUrlTemplate === '/store/:store/:category_slug/:product_slug' || productUrlTemplate === '/:store/:category_slug/:product_slug') {
        return events.emit('go_to_page', {
          page: 'product',
          params: {
            store: slug,
            category_slug: category,
            product_slug: product
          },
          replace: true
        })
      }
      if (productUrlTemplate.includes('/store/:category_slug/:product_slug')) {
        const businessParameter = businessUrlTemplate.replace('/store?', '').replace('=:store', '')
        return events.emit('go_to_page', {
          page: 'product',
          params: {
            category_slug: category,
            product_slug: product
          },
          search: `?${businessParameter}=${slug}`,
          replace: true
        })
      }
      if (productUrlTemplate.includes('/store/:store') && productUrlTemplate.includes('category_id')) {
        const ids = productUrlTemplate.split('?')[1].split('&')
        const categoryParameter = ids[0].replace('=:category_id', '')
        const productParameter = ids[1].replace('=:product_id', '')
        return events.emit('go_to_page', {
          page: 'product',
          params: {
            store: slug
          },
          search: `?${categoryParameter}=${category}&${productParameter}=${product}`,
          replace: true
        })
      }
      if (productUrlTemplate.includes('/:store') && !productUrlTemplate.includes('store')) {
        const ids = productUrlTemplate.split('?')[1].split('&')
        const categoryParameter = ids[0].replace('=:category_id', '')
        const productParameter = ids[1].replace('=:product_id', '')
        return events.emit('go_to_page', {
          page: 'product',
          params: {
            store: slug
          },
          search: `?${categoryParameter}=${category}&${productParameter}=${product}`,
          replace: true
        })
      }
    }
  }

  return (
    <>
      <HelmetTags page='business_search' />
      <BusinessListingSearchController {...businessListingProps} />
    </>
  )
}
