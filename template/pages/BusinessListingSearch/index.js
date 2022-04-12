import React from 'react'
import { BusinessListingSearch as BusinessListingSearchController } from '../../../src/themes/five/src/components/BusinessListingSearch'
import { useEvent } from 'ordering-components'
import { HelmetTags } from '../../components/HelmetTags'

export const BusinessListingSearch = (props) => {
  const [events] = useEvent()

  const businessListingProps = {
    ...props,
    onBusinessClick: (business) => {
      events.emit('go_to_page', { page: 'business', params: { store: business.slug } })
    }
  }

  return (
    <>
      <HelmetTags page='business_search' />
      <BusinessListingSearchController {...businessListingProps} />
    </>
  )
}
