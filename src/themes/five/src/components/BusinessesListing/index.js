import React from 'react'
import { OriginalBusinessesListing } from './layouts/OriginalBusinessesListing'
import { RedBusinessesListing } from './layouts/RedBusinessesListing'
import { StarbucksBusinessesListing } from './layouts/StarbucksBusinessesListing'
import { BusinessListing as AppointmentsBusinessListing } from './layouts/AppointmentsBusinessListing'
import { useOrderingTheme } from 'ordering-components'

export const BusinessesListing = (props) => {
  const [orderingTheme] = useOrderingTheme()
  const layout = orderingTheme?.theme?.business_listing_view?.components?.layout?.type || 'original'

  return (
    <>
      {(layout === 'original') && <OriginalBusinessesListing {...props} />}
      {(layout === 'starbucks') && <StarbucksBusinessesListing {...props} />}
      {(layout === 'red') && <RedBusinessesListing {...props} />}
      {(layout === 'appointments') && <AppointmentsBusinessListing {...props} />}
    </>
  )
}
