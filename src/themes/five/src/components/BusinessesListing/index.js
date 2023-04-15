import React from 'react'
import { OriginalBusinessesListing } from './layouts/OriginalBusinessesListing'
import { RedBusinessesListing } from './layouts/RedBusinessesListing'
import { StarbucksBusinessesListing } from './layouts/StarbucksBusinessesListing'
import { BusinessListing as AppointmentsBusinessListing } from './layouts/AppointmentsBusinessListing'
import { useTheme } from 'styled-components'

export const BusinessesListing = (props) => {
  const { logosLayout } = props
  const theme = useTheme()
  const layout = theme?.business_listing_view?.components?.layout?.type || 'original'
  const isStarbucksLayout = ['starbucks', 'mapview'].includes(layout)
  return (
    <>
      {(layout === 'original' || logosLayout) && <OriginalBusinessesListing {...props} />}
      {(isStarbucksLayout) && !logosLayout && <StarbucksBusinessesListing {...props} />}
      {(layout === 'red') && !logosLayout && <RedBusinessesListing {...props} />}
      {(layout === 'appointments') && !logosLayout && <AppointmentsBusinessListing {...props} />}
    </>
  )
}
