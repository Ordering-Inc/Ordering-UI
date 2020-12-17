import React, { useEffect, useRef, useState } from 'react'
import { WrapperGoogleMaps } from './wrapper'

const getMarkerColor = (n) => {
  switch (n) {
    case 1:
      return 'red'
    case 2:
      return 'green'
    default:
      return 'blue'
  }
}

export const GoogleMaps = (props) => {
  const {
    googleReady,
    location,
    locations,
    mapControls,
    setErrors,
    handleChangeAddressMap,
    maxLimitLocation
  } = props

  const divRef = useRef()
  const [googleMap, setGoogleMap] = useState(null)
  const [googleMapMarker, setGoogleMapMarker] = useState(null)
  const [markers, setMarkers] = useState([])
  const [boundMap, setBoundMap] = useState(null)

  const center = { lat: location.lat, lng: location.lng }

  /**
   * Function to generate multiple markers
   * @param {Google map} map
   */
  const generateMarkers = (map) => {
    const bounds = new window.google.maps.LatLngBounds()
    for (let i = 0; i < locations.length; i++) {
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(locations[i].lat, locations[i].lng),
        map,
        icon: {
          url: `http://maps.google.com/mapfiles/ms/icons/${getMarkerColor(i)}-dot.png`
        }
      })
      bounds.extend(marker.position)
      setMarkers(markers => [...markers, marker])
    }
    map.fitBounds(bounds)
    setBoundMap(bounds)
  }

  /**
   * function to get all address information with a location
   * @param {google location} pos
   */
  const geocodePosition = (pos) => {
    const geocoder = new window.google.maps.Geocoder()

    geocoder.geocode({ latLng: pos }, (results) => {
      let zipcode = null
      if (results && results.length > 0) {
        for (const component of results[0].address_components) {
          const addressType = component.types[0]
          if (addressType === 'postal_code') {
            zipcode = component.short_name
            break
          }
        }
        const address = {
          address: results[0].formatted_address,
          location: { lat: pos.lat(), lng: pos.lng() },
          zipcode
        }
        handleChangeAddressMap(address)

        center.lat = address.location.lat
        center.lng = address.location.lng
      } else {
        googleMapMarker && googleMapMarker.setPosition(center)
        setErrors && setErrors('ERROR_NOT_FOUND_ADDRESS')
      }
      googleMap && googleMap.panTo(new window.google.maps.LatLng(center.lat, center.lng))
    })
  }

  /**
   * Function to return distance between two locations
   * @param {google location} loc1
   * @param {*google location} loc2
   */
  const validateResult = (map, marker, curPos) => {
    const loc1 = new window.google.maps.LatLng(curPos.lat(), curPos.lng())
    const loc2 = new window.google.maps.LatLng(location.lat, location.lng)

    const distance = window.google.maps.geometry.spherical.computeDistanceBetween(loc1, loc2)

    if (!maxLimitLocation) {
      geocodePosition(curPos)
      return
    }

    if (distance <= maxLimitLocation) {
      geocodePosition(curPos)
    } else {
      marker.setPosition(center)
      map.panTo(new window.google.maps.LatLng(center.lat, center.lng))
      setErrors && setErrors('ERROR_MAX_LIMIT_LOCATION')
    }
  }

  useEffect(() => {
    if (googleReady) {
      const map = new window.google.maps.Map(divRef.current, {
        zoom: location.zoom ?? mapControls.defaultZoom,
        center,
        zoomControl: mapControls?.zoomControl,
        streetViewControl: mapControls?.streetViewControl,
        fullscreenControl: mapControls?.fullscreenControl,
        mapTypeControl: mapControls?.mapTypeControl,
        mapTypeId: mapControls?.mapTypeId,
        mapTypeControlOptions: {
          style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: window.google.maps.ControlPosition.TOP_LEFT,
          ...mapControls?.mapTypeControlOptions
        }
      })

      let marker = null
      setGoogleMap(map)

      if (locations) {
        generateMarkers(map)
      } else {
        marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(center.lat, center.lng),
          map,
          draggable: !!mapControls?.isMarkerDraggable
        })
        setGoogleMapMarker(marker)
      }
    }
  }, [googleReady])

  useEffect(() => {
    if (googleReady && googleMap && googleMapMarker) {
      window.google.maps.event.addListener(googleMapMarker, 'dragend', () => {
        validateResult(googleMap, googleMapMarker, googleMapMarker.getPosition())
      })

      if (mapControls?.isMarkerDraggable) {
        window.google.maps.event.addListener(googleMap, 'drag', () => {
          googleMapMarker.setPosition(googleMap.getCenter())
        })

        window.google.maps.event.addListener(googleMap, 'dragend', () => {
          googleMapMarker.setPosition(googleMap.getCenter())
          validateResult(googleMap, googleMapMarker, googleMap.getCenter())
        })
      }

      return () => {
        window.google.maps.event.clearListeners(googleMapMarker, 'dragend')
        window.google.maps.event.clearListeners(googleMap, 'drag')
        window.google.maps.event.clearListeners(googleMap, 'dragend')
      }
    }
  }, [googleMapMarker, googleMap, location])

  useEffect(() => {
    if (googleReady) {
      center.lat = location.lat
      center.lng = location.lng
      googleMapMarker && googleMapMarker.setPosition(new window.google.maps.LatLng(center.lat, center.lng))
      googleMap && googleMap.panTo(new window.google.maps.LatLng(center.lat, center.lng))
    }
  }, [location])

  useEffect(() => {
    const interval = setInterval(() => {
      if (googleReady) {
        const driverLocation = locations[0]
        const newLocation = new window.google.maps.LatLng(driverLocation.lat, driverLocation.lng)
        markers[0].setPosition(newLocation)
        markers.forEach(marker => boundMap.extend(marker.position))
        googleMap.fitBounds(boundMap)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [locations])

  return (
    googleReady && (
      <div
        id='map'
        ref={divRef}
        style={{ width: '70%', height: '50%', position: 'absolute' }}
      />
    )
  )
}
export const GoogleMapsMap = WrapperGoogleMaps(GoogleMaps)
