import React from 'react'
import { OriginalBusinessesListing } from './layouts/OriginalBusinessesListing'
import { RedBusinessesListing } from './layouts/RedBusinessesListing'
import { StarbucksBusinessesListing } from './layouts/StarbucksBusinessesListing'
import { BusinessListing as AppointmentsBusinessListing } from './layouts/AppointmentsBusinessListing'
import { useTheme } from 'styled-components'

export const BusinessesListing = (props) => {
  const theme = useTheme()
  const layout = theme?.layouts?.business_view?.components?.layout?.type || 'original'

  return (
    <>
      {(layout === 'original') && <OriginalBusinessesListing {...props} />}
      {(layout === 'starbucks') && <StarbucksBusinessesListing {...props} />}
      {(layout === 'red') && <RedBusinessesListing {...props} />}
      {(layout === 'appointments') && <AppointmentsBusinessListing {...props} />}
    </>
  )
}
