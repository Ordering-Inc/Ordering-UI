import React from 'react'
import { PickupBusinessesListing } from '../../../src/themes/two/src/components/PickupBusinessesListing'
import { useEvent } from 'ordering-components'
import { HelmetTags } from '../../components/HelmetTags'

export const CurbsidePage = (props) => {
  const [events] = useEvent()

  const curbsideBusinessListProps = {
    ...props,
    initialOrderType: 4,
    isSearchByName: true,
    isSearchByDescription: true,
    onBusinessClick: (business) => {
      events.emit('go_to_page', { page: 'business', params: { store: business.slug } })
    },
    propsToFetch: ['id', 'name', 'header', 'logo', 'location', 'timezone', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
  }

  return (
    <>
      <HelmetTags page='curbside' />
      <PickupBusinessesListing {...curbsideBusinessListProps} />
    </>
  )
}
