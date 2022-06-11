import React from 'react'
import { useConfig } from 'ordering-components'

import { OriginalBusinessesListing } from './layouts/OriginalBusinessesListing'
import { GridBusinessesListing } from './layouts/GridBusinessesListing'
import { MapBusinessesListing } from './layouts/MapBusinessesListing'
import { ListingBusinessesListing } from './layouts/ListingBusinessesListing'
import { RedBusinessesListing } from './layouts/RedBusinessesListing'

export const BusinessesListing = (props) => {
  const [{ configs }] = useConfig()

  /**
   * Below section is test code
   * This section will be removed after backend ready.
   * props.AdminSettings = configs
   */
  let layout = props?.AdminSettings?.businesses_listening_settings?.layout ??
    (props?.AdminSettings?.homepage_settings?.layout ?? 'original')
  layout = props?.AdminSettings?.homepage_settings?.layout === 'red' ? 'red' : layout

  /**
   */
  const BusinessesListingLayoutProps = {
    ...props,
    layout: layout
  }

  return (
    <>
      {(layout === 'original') && <OriginalBusinessesListing {...BusinessesListingLayoutProps} />}
      {(layout === 'grid') && <GridBusinessesListing {...BusinessesListingLayoutProps} />}
      {(layout === 'map' || layout === 'starbucks') && <MapBusinessesListing {...BusinessesListingLayoutProps} />}
      {(layout === 'listing') && <ListingBusinessesListing {...BusinessesListingLayoutProps} />}
      {(layout === 'red') && <RedBusinessesListing {...BusinessesListingLayoutProps} />}
    </>
  )
}
