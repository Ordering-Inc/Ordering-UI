import React from 'react'
import { useConfig } from 'ordering-components'

import { OriginalBusinessesListing } from './layouts/OriginalBusinessesListing'
import { GridBusinessesListing } from './layouts/GridBusinessesListing'
import { MapBusinessesListing } from './layouts/MapBusinessesListing'
import { ListingBusinessesListing } from './layouts/ListingBusinessesListing'
import { RedBusinessesListing } from './layouts/RedBusinessesListing'

export const BusinessesListing = (props) => {
  const [{ configs }] = useConfig()

  // *************stagaing code****************
  // props.AdminSettings = configs
  const layout = props?.AdminSettings?.businesses_listening_settings?.layout !== undefined
    ? props?.AdminSettings?.businesses_listening_settings?.layout : props?.AdminSettings?.homepage_settings?.layout !== undefined
      ? props?.AdminSettings?.homepage_settings?.layout : 'original'
  // **************stagaing code***************

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
