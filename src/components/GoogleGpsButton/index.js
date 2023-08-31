import React, { useEffect, useState } from 'react'
import { GoogleGpsButton as GpsButton } from 'ordering-components'
import { GpsButtonStyle } from './styles'

const GoogleGpsButtonUI = (props) => {
  const {
    handleGPS,
    isGoogleButton,
    googleReady,
    isLoading,
    IconButton,
    IconLoadingButton,
    geoLocation
  } = props

  const [gpsButtonPressed, setGpsButtonPressed] = useState(false)

  useEffect(() => {
    if (geoLocation && !((isGoogleButton && !googleReady) || isLoading) && !gpsButtonPressed) {
      setGpsButtonPressed(true)
      handleGPS()
    }
  }, [geoLocation, isGoogleButton, googleReady, isLoading, gpsButtonPressed])

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
