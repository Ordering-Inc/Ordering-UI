import React from 'react'
import { BusinessesMap as BusinessesMapController, GoogleMapsMap, useConfig, useOrder, useCustomer } from 'ordering-components'
import { WrapperMap } from './styles'

const BusinessesMapUI = (props) => {
  const {
    userLocation,
    businessLocations,
    onBusinessClick,
    setErrors
  } = props

  const [configState] = useConfig()
  const [customerState] = useCustomer()
  const [orderState] = useOrder()

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
    <>
      <WrapperMap disabled={customerState.loading || orderState.loading}>
        <GoogleMapsMap
          apiKey={configState?.configs?.google_maps_api_key?.value}
          location={userLocation}
          locations={businessLocations}
          mapControls={googleMapsControls}
          maxLimitLocation={configState?.configs?.meters_to_change_address?.value}
          businessMap
          onBusinessClick={onBusinessClick}
          setErrors={setErrors}
        />
      </WrapperMap>
    </>
  )
}

export const BusinessesMap = (props) => {
  const businessMapController = {
    ...props,
    UIComponent: BusinessesMapUI
  }
  return <BusinessesMapController {...businessMapController} />
}
