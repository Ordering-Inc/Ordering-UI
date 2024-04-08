import React from 'react'
import { OriginalBusinessesListing } from './layouts/OriginalBusinessesListing'
import { RedBusinessesListing } from './layouts/RedBusinessesListing'
import { StarbucksBusinessesListing } from './layouts/StarbucksBusinessesListing'
import { BusinessListing as AppointmentsBusinessListing } from './layouts/AppointmentsBusinessListing'
import { useTheme } from 'styled-components'
import { OloBusinessesListing } from './franchises/OloBusinessesListing'

export const BusinessesListing = (props) => {
  const { logosLayout } = props
  const theme = useTheme()
  const websiteTheme = theme?.my_products?.components?.website_theme?.components?.type

  const franchiseLayout = theme?.my_products?.components?.website_theme?.components?.franchise_slug

  const layout = theme?.business_listing_view?.components?.layout?.type || 'original'
  const isStarbucksLayout = ['starbucks', 'mapview'].includes(layout)
  const oloLayout = ['franchise_1', 'franchise_2']
  return (
    <>
      {websiteTheme === 'franchise' ? (
        <>
          {oloLayout.includes(franchiseLayout) && <OloBusinessesListing {...props} />}
          {!franchiseLayout && <OriginalBusinessesListing {...props} />}
        </>
      ) : (
        <>
          {(layout === 'original' || logosLayout) && <OriginalBusinessesListing {...props} />}
          {(isStarbucksLayout) && !logosLayout && <StarbucksBusinessesListing {...props} />}
          {(layout === 'red') && !logosLayout && <RedBusinessesListing {...props} />}
          {(layout === 'appointments') && !logosLayout && <AppointmentsBusinessListing {...props} />}
        </>
      )}
    </>
  )
}
