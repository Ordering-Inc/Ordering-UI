import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { WrapperGoogleMaps } from './wrapper'
import { useLanguage } from 'ordering-components'

/**
 * Component to get information from GPS
 * @param {object} props Props of GpsButton component
 */
export const GpsButton = (props) => {
  const {
    UIComponent,
    googleReady,
    onData,
    onError,
    onAddress
  } = props

  const [, t] = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const isGoogleButton = typeof googleReady !== 'undefined'

  /**
   * Function to get location from GPS
   */
  const handleGPS = () => {
    console.log(isGoogleButton , !googleReady, isLoading)
    if ((isGoogleButton && !googleReady) || isLoading) {
      return
    }
    setIsLoading(true)
    navigator.geolocation.getCurrentPosition((geo) => {
      const location = {
        lat: geo.coords.latitude,
        lng: geo.coords.longitude
      }
      if (isGoogleButton && onAddress) {
        const geocoder = new window.google.maps.Geocoder()
        geocoder.geocode({ location }, (results, status) => {
          setIsLoading(false)
          let postalCode = null
          if (results?.[0]?.address_components) {
            for (const component of results[0].address_components) {
              const addressType = component.types[0]
              if (addressType === 'postal_code') {
                postalCode = component.short_name
                break
              }
            }
            if (status === 'OK') {
              onAddress({
                address: results[0].formatted_address,
                location,
                utc_offset: (new Date()).getTimezoneOffset(),
                zipcode: postalCode,
                map_data: {
                  library: 'google',
                  place_id: results[0].place_id
                }
              })
            } else {
              onError && onError(t('ERROR_GPS_BUTTON', 'Error to get result with gps button'))
            }
          } else {
            onError && onError(t('ERROR_NOT_FOUND_ADDRESS', 'The Address was not found'))
          }
        })
      } else {
        setIsLoading(false)
        onData && onData({
          location,
          utc_offset: (new Date()).getTimezoneOffset()
        })
      }
    }, (err) => {
      setIsLoading(false)
      onError && onError(t('ERROR_GPS_BUTTON', err.message))
    }, {
      timeout: 5000,
      enableHighAccuracy: true
    })
  }

  return (
    navigator.geolocation && (
      <UIComponent
        {...props}
        handleGPS={handleGPS}
        isGoogleButton={isGoogleButton}
        googleReady={googleReady}
        isLoading={isLoading}
      />
    )
  )
}

GpsButton.propTypes = {
  /**
   * Function to get data from GPS
   * @param {object} data New address
   */
  onData: PropTypes.func,
  /**
   * Function to get error from GPS
   * @param {object} address New address
   */
  onError: PropTypes.func
}

export const GoogleGpsButton = WrapperGoogleMaps(GpsButton)

GoogleGpsButton.propTypes = {
  /**
   * You Google Maps api key
   * @see apiKey What is Api Key ? https://developers.google.com/maps/gmp-get-started
   */
  apiKey: PropTypes.string.isRequired,
  /**
   * Function to get address from GPS
   * @param {object} address New address
   */
  onAddress: PropTypes.func,
  /**
   * Function to get error from GPS
   * @param {object} address New address
   */
  onError: PropTypes.func
}
