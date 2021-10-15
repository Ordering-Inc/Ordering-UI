import React from 'react'
import { MySavedPlaces as MySavedPlacesController } from '../../../src/themes/franchise/src/components/MySavedPlaces'
import { HelmetTags } from '../../components/HelmetTags'

export const MySavedPlaces = (props) => {
  return (
    <>
      <HelmetTags page='saved_places' />
      <MySavedPlacesController {...props} />
    </>
  )
}
