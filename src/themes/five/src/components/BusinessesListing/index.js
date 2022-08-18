import React from 'react'
import { OriginalBusinessesListing } from './layouts/OriginalBusinessesListing'
import { RedBusinessesListing } from './layouts/RedBusinessesListing'
import { StarbucksBusinessesListing } from './layouts/StarbucksBusinessesListing'
import { BusinessListing as AppointmentsBusinessListing } from './layouts/AppointmentsBusinessListing'
// import { useOrderingTheme } from 'ordering-components'

export const BusinessesListing = (props) => {
  const { logosLayout } = props
  // const [orderingTheme] = useOrderingTheme()
  const layout = 'appointments'
  // const layout = orderingTheme?.theme?.business_listing_view?.components?.layout?.type || 'original'

  return (
    <>
      {(layout === 'original' || logosLayout) && <OriginalBusinessesListing {...props} />}
      {(layout === 'starbucks') && !logosLayout && <StarbucksBusinessesListing {...props} />}
      {(layout === 'red') && !logosLayout && <RedBusinessesListing {...props} />}
      {(layout === 'appointments') && !logosLayout && <AppointmentsBusinessListing {...props} />}
    </>
  )
}
