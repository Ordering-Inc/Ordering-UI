import React, { useMemo, useRef, useState, useEffect } from 'react'
import { useConfig } from 'ordering-components'
import GoogleMapReact, { fitBounds } from 'google-map-react'
import { InterActOrderMarker } from '../../InterActOrderMarker'

import { Container } from './styles'

export const Map = (props) => {
  const {
    business,
    customer,
    customerLocation
  } = props
  const [{ configs }] = useConfig()

  const mapRef = useRef(null)
  const googleMapsApiKey = useMemo(() => configs?.google_maps_api_key?.value, [configs])
  const defaultLatitude = Number(configs?.location_default_latitude?.value)
  const defaultLongitude = Number(configs?.location_default_longitude?.value)
  const isInvalidDefaultLocation = isNaN(defaultLatitude) || isNaN(defaultLongitude)
  const defaultCenter = {
    lat: !isInvalidDefaultLocation ? defaultLatitude : 40.7744146,
    lng: !isInvalidDefaultLocation ? defaultLongitude : -73.9678064
  }

  const defaultZoom = 10
  const [mapLoaded, setMapLoaded] = useState(true)
  const [mapCenter, setMapCenter] = useState(defaultCenter)
  const [mapZoom, setMapZoom] = useState(10)

  const handleMapChange = (data) => {
    if (!data?.zoom) return
    setMapZoom(data?.zoom)
  }

  const mapFit = () => {
    const bounds = new window.google.maps.LatLngBounds()

    if (!business?.location) {
      setMapCenter(customerLocation)
      setMapZoom(defaultZoom)
      return
    }

    let marker, newPoint
    marker = business?.location
    newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
    bounds.extend(newPoint)

    marker = customerLocation
    newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
    bounds.extend(newPoint)

    const newBounds = {
      ne: {
        lat: bounds.getNorthEast()?.lat?.(),
        lng: bounds.getNorthEast()?.lng?.()
      },
      sw: {
        lat: bounds.getSouthWest()?.lat?.(),
        lng: bounds.getSouthWest()?.lng?.()
      }
    }

    const mapSize = {
      width: mapRef.current.clientWidth,
      height: mapRef.current.clientHeight
    }
    const { center, zoom } = fitBounds(newBounds, mapSize)
    setMapZoom(zoom)
    setMapCenter(center)
  }

  useEffect(() => {
    if (mapLoaded) return
    mapFit()
  }, [customerLocation, business?.location, mapLoaded])

  return (
    <Container ref={mapRef}>
      {googleMapsApiKey && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: window.document.getElementById('__googleMapsScriptId') ? null : googleMapsApiKey,
            libraries: ['places', 'geometry', 'drawing', 'visualization']
          }}
          onGoogleApiLoaded={() => setMapLoaded(false)}
          defaultCenter={defaultCenter}
          center={mapCenter}
          defaultZoom={defaultZoom}
          zoom={mapZoom}
          options={{ fullscreenControl: true }}
          className='map'
          onChange={(data) => handleMapChange(data)}
          yesIWantToUseGoogleMapApiInternals
        >
          {business?.location && (
            <InterActOrderMarker
              business={business}
              lat={business?.location?.lat}
              lng={business?.location?.lng}
              image={business?.logo}
            />
          )}
          <InterActOrderMarker
            customer={customer}
            lat={customerLocation?.lat}
            lng={customerLocation?.lng}
            image={customer?.photo}
          />
        </GoogleMapReact>
      )}
    </Container>
  )
}
