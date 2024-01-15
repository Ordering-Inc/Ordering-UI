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
  const [orderState] = useOrder()
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
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <WrapperMap disabled={orderState.loading}>
        <GoogleMapsMap
          useMapWithBusinessZones
          deactiveAlerts
          businessMap
          apiKey={configState?.configs?.google_maps_api_key?.value}
          location={userLocation}
          locations={businessLocations}
          mapControls={googleMapsControls}
          maxLimitLocation={parseInt(configState?.configs?.meters_to_change_address?.value)}
          onBusinessClick={onBusinessClick}
          businessZones={businessList?.map(business => business?.zones)}
          fallbackIcon={theme.images?.dummies?.businessLogo}
          setErrors={setErrors}
        />
      </WrapperMap>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
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
