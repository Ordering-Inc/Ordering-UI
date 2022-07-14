import React from 'react'
import { useLocation } from 'react-router-dom'
import { BusinessListingSearch as BusinessListingSearchController } from '../../../src/themes/five/src/components/BusinessListingSearch'
import { useEvent } from 'ordering-components'
import { HelmetTags } from '../../components/HelmetTags'

export const BusinessListingSearch = (props) => {
  const [events] = useEvent()
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const defaultTerm = searchParams.get('term') || ''

  const businessListingProps = {
    ...props,
    defaultTerm: defaultTerm,
    onBusinessClick: (business) => {
      events.emit('go_to_page', { page: 'business', params: { store: business.slug } })
    },
    onRedirectPage: (data) => events.emit('go_to_page', data),
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
    }
  }

  return (
    <>
      <HelmetTags page='business_search' />
      <BusinessListingSearchController {...businessListingProps} />
    </>
  )
}
