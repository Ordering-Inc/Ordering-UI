import React from 'react'
import { BusinessesMap as BusinessesMapController, GoogleMapsMap, useConfig, useOrder } from 'ordering-components'
import { WrapperMap } from './styles'
import { useTheme } from 'styled-components'

const BusinessesMapUI = (props) => {
  const {
    userLocation,
    businessLocations,
    onBusinessClick,
    setErrors,
    businessList
  } = props

  const [configState] = useConfig()
  const [{ options, loading }] = useOrder()
  const theme = useTheme()
  const googleMapsControls = {
    defaultZoom: 18,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: false
  }

  return (
    <WrapperMap disabled={loading}>
      <GoogleMapsMap
        useMapWithBusinessZones
        deactiveAlerts
        businessMap
        apiKey={configState?.configs?.google_maps_api_key?.value}
        location={userLocation}
        locations={businessLocations}
        mapControls={googleMapsControls}
        maxLimitLocation={parseInt(configState?.configs?.meters_to_change_address?.value)}
        onBusinessClick={options.type !== 1 ? onBusinessClick : () => {}}
        businessZones={businessList?.map(business => business?.zones)}
        fallbackIcon={theme.images?.dummies?.businessLogo}
        setErrors={setErrors}
        fixedLocation={!userLocation && (businessLocations?.length
          ? { ...businessLocations[0], hideicon: true }
          : {
            lat: parseFloat(configState?.configs?.location_default_latitude?.value ?? 0, 10),
            lng: parseFloat(configState?.configs?.location_default_longitude?.value ?? 0, 10)
          }
        )}
      />
    </WrapperMap>
  )
}

export const BusinessesMap = (props) => {
  const businessMapController = {
    ...props,
    UIComponent: BusinessesMapUI
  }
  return <BusinessesMapController {...businessMapController} />
}
