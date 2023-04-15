import React from 'react'
import { BusinessesListing } from '../../../src/themes/five/src/components/BusinessesListing'
import { useEvent, useSite } from 'ordering-components'
import { HelmetTags } from '../../components/HelmetTags'
import settings from '../../config'
import { checkSiteUrl } from '../../Utils'

export const BusinessesList = (props) => {
  const [events] = useEvent()
  const [{ site }] = useSite()

  const businessUrlTemplate = checkSiteUrl(site?.business_url_template, '/store/:business_slug')

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

export default BusinessesList
