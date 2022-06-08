import React from 'react'
import { useConfig } from 'ordering-components'
import { OriginalBusinessesListing } from './layouts/OriginalBusinessesListing'
import { RedBusinessesListing } from './layouts/RedBusinessesListing'
import { StarbucksBusinessesListing } from './layouts/StarbucksBusinessesListing'

export const BusinessesListing = (props) => {
  const [{ configs }] = useConfig()

  // *****************************
  // HomeLayout = configs
  const HomeLayoutConfig = {
    homepage_settings: {
      layout: 'original', // 'original', 'starbucks', 'red'
      contentPosition: 'bottom' // 'left', 'right', top, 'bottom', 'center'
    }
  }
  const layout = HomeLayoutConfig?.homepage_settings?.layout !== undefined
    ? HomeLayoutConfig?.homepage_settings?.layout : 'original'
  // *****************************

  const BusinessesListingLayoutProps = {
    ...props,
    layout: layout
  }

  return (
    <>
      {(layout === 'original') && <OriginalBusinessesListing {...BusinessesListingLayoutProps} />}
      {(layout === 'starbucks') && <StarbucksBusinessesListing {...BusinessesListingLayoutProps} />}
      {(layout === 'red') && <RedBusinessesListing {...BusinessesListingLayoutProps} />}
    </>
  )
}
