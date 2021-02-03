import React from 'react'
import { BusinessMap as BusinessMapController, GoogleMapsMap, useConfig } from 'ordering-components'
import { WrapperMap } from './styles'

const BusinessMapUI = (props) => {
  const {
    userLocation,
    businessLocations,
    onBusinessClick
  } = props

  const [configState] = useConfig()

  const googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: true
  }

  return (
    <WrapperMap>
      <GoogleMapsMap
        apiKey={configState?.configs?.google_maps_api_key?.value}
        location={userLocation}
        locations={businessLocations}
        mapControls={googleMapsControls}
        maxLimitLocation={configState?.configs?.meters_to_change_address?.value}
        businessMap
        onBusinessClick={onBusinessClick}
      />
    </WrapperMap>
  )
}

export const BusinessMap = (props) => {
  const businessMapController = {
    ...props,
    UIComponent: BusinessMapUI
  }
  return <BusinessMapController {...businessMapController} />
}
