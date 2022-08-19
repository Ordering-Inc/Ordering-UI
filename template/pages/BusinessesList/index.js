import React from 'react'
import { BusinessesListing } from '../../../src/themes/five'
import { useEvent } from 'ordering-components'
import { HelmetTags } from '../../components/HelmetTags'
import settings from '../../config'

export const BusinessesList = (props) => {
  const [events] = useEvent()

  const businessUrlTemplate = '/store/:business_slug'

  const businessListingProps = {
    ...props,
    isSearchByName: true,
    isSearchByDescription: true,
    franchiseId: settings?.franchiseSlug,
    onBusinessClick: (business) => {
      if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
        events.emit('go_to_page', { page: 'business', params: { business_slug: business.slug } })
      } else {
        events.emit('go_to_page', { page: 'business', search: `?${businessUrlTemplate.split('?')[1].replace(':business_slug', '')}${business.slug}` })
      }
    },
    currentPageParam: 0,
    propsToFetch: ['id', 'name', 'header', 'logo', 'location', 'address', 'ribbon', 'timezone', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug', 'city', 'city_id'],
    onRedirectPage: (data) => events.emit('go_to_page', data),
  }

  return (
    <>
      <HelmetTags page='search' />
      <BusinessesListing {...businessListingProps} />
    </>
  )
}