import React, { useEffect } from 'react'
import { GpsButtonStyle } from './styles'
import { GoogleGpsButton as GpsButton } from './test'
const GoogleGpsButtonUI = (props) => {
  const {
    handleGPS,
    isGoogleButton,
    googleReady,
    isLoading,
    IconButton,
    IconLoadingButton,
    geolocationState,
    enableAutoGeolocation,
    location
  } = props

  useEffect(() => {
    if (geolocationState?.result === 'OK' || location || !enableAutoGeolocation) return
    handleGPS()
  }, [geolocationState?.result, isGoogleButton, googleReady, location])

  return (
    <GpsButtonStyle
      className={props.className || ''}
      type='button'
      disabled={(isGoogleButton && !googleReady) || isLoading}
      onClick={handleGPS}
    >
      {isLoading ? (
        IconLoadingButton ? <IconLoadingButton /> : '...'
      ) : (
        IconButton ? <IconButton /> : 'GPS'
      )}
    </GpsButtonStyle>
  )
}

export const GoogleGpsButton = (props) => {
  const gpsButtonProps = {
    ...props,
    UIComponent: GoogleGpsButtonUI
  }
  return (
    <GpsButton {...gpsButtonProps} />
  )
}
