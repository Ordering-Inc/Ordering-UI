import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { WrapperGoogleMaps, useEvent, useUtils, useLanguage } from 'ordering-components'

export const GoogleMaps = (props) => {
  const {
    googleReady,
    locations,
    mapControls,
    setErrors,
    isSetInputs,
    fixedLocation,
    handleChangeAddressMap,
    maxLimitLocation,
    businessMap,
    businessList
  } = props

  const [{ optimizeImage }] = useUtils()
  const [events] = useEvent()
  const divRef = useRef()
  const [googleMap, setGoogleMap] = useState(null)
  const [googleMapMarker, setGoogleMapMarker] = useState(null)
  const [markers, setMarkers] = useState([])
  const [boundMap, setBoundMap] = useState(null)
  const [, t] = useLanguage()

  const location = fixedLocation || props.location
  const center = { lat: location?.lat, lng: location?.lng }
  /**
   * Function to generate multiple markers
   * @param {Google map} map
   */
  const [isOpened, setIsOpened] = useState(false)

  const scheduleFormatted = ({ hour, minute }) => {
    const checkTime = (val) => val < 10 ? `0${val}` : val
    return `${checkTime(hour)}:${checkTime(minute)}`
  }

  const generateMarkers = (map) => {
    const bounds = new window.google.maps.LatLngBounds()
    let businessesNear = 0
    const infowindow = new window.google.maps.InfoWindow()
    const mapLinkText = t('SELECT_STORE', 'Select Store')

    for (let i = 0; i < locations.length; i++) {
      let formatUrl = null
      let businessMeta = null

      if (businessMap) {
        formatUrl = optimizeImage(locations[i]?.icon, 'r_max')
        if (businessList) {
          businessMeta = {
            businesName: businessList[i].name,
            todayLapses: scheduleFormatted(businessList[i].today.lapses[0].open) + ' AM - ' + scheduleFormatted(businessList[i].today.lapses[0].close) + ' PM'
          }
        }
      }

      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(locations[i]?.lat, locations[i]?.lng),
        map,
        title: locations[i]?.slug,
        icon: locations[i]?.icon ? {
          url: formatUrl || locations[i].icon,
          scaledSize: new window.google.maps.Size(45, 45)
        } : null
      })

      let content
      content = '<div style="display: flex; flex-direction: column;"><h4 style="margin: 7px 0px;">' + locations[i]?.slug + '</h4></div>'
      if (businessMeta) {
        content = '<div style="display: flex; flex-direction: column;"><h4 style="margin: 7px 0px;">' + businessMeta?.businesName + '</h4> <p style="margin: 0px;"> Today: ' + businessMeta?.todayLapses + '</p> <a href="store/' + locations[i]?.slug + '"style="text-decoration: none; display: flex; justify-content: center; align-items: center; line-height: 30px; flex-grow: 1; border:none; border-radius: 4px; background-color: #dd0031; font-size:10px; color: #fff; margin-top: 10px;">' + mapLinkText + '</a></div>'
      }
      if (businessMap) {
        const isNear = validateResult(googleMap, marker, marker.getPosition())
        if (isNear) {
          if (i === 0 && !isOpened) {
            infowindow.setContent(content)
            infowindow.open(map, marker)
            setIsOpened(true)
          }

          marker.addListener('click', () => {
            infowindow.close()
            if (locations[i]) {
              infowindow.setContent(content)
              infowindow.open(map, marker)
            }
          })
          bounds.extend(marker.position)
          setMarkers(markers => [...markers, marker])
          businessesNear = businessesNear + 1
        } else {
          marker.setMap(null)
        }
      } else {
        bounds.extend(marker.position)
        setMarkers(markers => [...markers, marker])
      }
    }
    businessesNear === 0 && setErrors && setErrors('ERROR_NOT_FOUND_BUSINESSES')
    map.fitBounds(bounds)
    setBoundMap(bounds)
  }

  /**
   * function to get all address information with a location
   * @param {google location} pos
   */
  const geocodePosition = (pos) => {
    if (isSetInputs) {
      const geocoder = new window.google.maps.Geocoder()

      geocoder.geocode({ latLng: pos }, (results) => {
        let zipcode = null
        if (results && results.length > 0 && results?.[0]?.address_components) {
          for (const component of results[0].address_components) {
            const addressType = component.types[0]
            if (addressType === 'postal_code') {
              zipcode = component.short_name
              break
            }
          }
          const address = {
            address: results[0].formatted_address,
            location: { lat: pos?.lat(), lng: pos?.lng() },
            zipcode
          }
          handleChangeAddressMap && handleChangeAddressMap(address)

          center.lat = address.location?.lat
          center.lng = address.location?.lng
        } else {
          googleMapMarker && googleMapMarker.setPosition(center)
          setErrors && setErrors('ERROR_NOT_FOUND_ADDRESS')
        }
        googleMap && googleMap.panTo(new window.google.maps.LatLng(center?.lat, center?.lng))
      })
    } else {
      const location = { lat: pos?.lat(), lng: pos?.lng() }
      handleChangeAddressMap && handleChangeAddressMap({
        location
      })
      center.lat = location?.lat
      center.lng = location?.lng
      googleMap && googleMap.panTo(new window.google.maps.LatLng(location?.lat, location?.lng))
    }
  }

  /**
   * Function to return distance between two locations
   * @param {google location} loc1
   * @param {*google location} loc2
   */
  const validateResult = (map, marker, curPos) => {
    const loc1 = new window.google.maps.LatLng(curPos?.lat(), curPos?.lng())
    const loc2 = new window.google.maps.LatLng(location?.lat, location?.lng)

    const distance = window.google.maps.geometry.spherical.computeDistanceBetween(loc1, loc2)

    if (businessMap) {
      const minimumBusinessDistance = 20000
      if (distance <= minimumBusinessDistance) return true
      return false
    }

    if (!maxLimitLocation) {
      geocodePosition(curPos)
      return
    }

    if (distance <= maxLimitLocation) {
      geocodePosition(curPos)
    } else {
      marker.setPosition(center)
      map.panTo(new window.google.maps.LatLng(center?.lat, center?.lng))
      setErrors && setErrors('ERROR_MAX_LIMIT_LOCATION')
    }
  }

  useEffect(() => {
    if (googleReady) {
      const map = new window.google.maps.Map(divRef.current, {
        zoom: mapControls.defaultZoom,
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
        if (businessMap) {
          marker = []
          setGoogleMapMarker(marker)
        }
        if (locations.length > 0) {
          generateMarkers(map)
        }
        setGoogleMapMarker(marker)
      } else {
        marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(center?.lat, center?.lng),
          map,
          draggable: !!mapControls?.isMarkerDraggable
        })
        setGoogleMapMarker(marker)
      }
    }
  }, [googleReady])

  useEffect(() => {
    if (!businessMap) {
      if (googleReady && googleMap && googleMapMarker) {
        window.google.maps.event.addListener(googleMapMarker, 'dragend', () => {
          validateResult(googleMap, googleMapMarker, googleMapMarker.getPosition())
        })

        window.google.maps.event.addListener(googleMapMarker, 'drag', () => {
          events.emit('map_is_dragging', true)
        })

        if (mapControls?.isMarkerDraggable) {
          window.google.maps.event.addListener(googleMap, 'drag', () => {
            googleMapMarker.setPosition(googleMap.getCenter())
            events.emit('map_is_dragging', true)
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
    }
  }, [googleMapMarker, googleMap, location])

  useEffect(() => {
    if (googleReady) {
      if (businessMap && googleMap) {
        generateMarkers(googleMap)
      }
      center.lat = location?.lat
      center.lng = location?.lng
      googleMap && googleMap.panTo(new window.google.maps.LatLng(center?.lat, center?.lng))
    }
  }, [location, locations?.length])

  useEffect(() => {
    if (!businessMap) {
      const interval = setInterval(() => {
        if (googleReady) {
          const driverLocation = locations[0]
          const newLocation = new window.google.maps.LatLng(driverLocation?.lat, driverLocation?.lng)
          markers[0].setPosition(newLocation)
          markers.forEach(marker => boundMap.extend(marker.position))
          googleMap.fitBounds(boundMap)
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [locations])

  return (
    googleReady && (
      <div
        id='map'
        ref={divRef}
      />
    )
  )
}

GoogleMaps.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * maxLimitLocation, max value to set position
   */
  maxLimitLocation: PropTypes.number,
  /**
   * handleChangeAddressMap, function to set address when pin is moved
   */
  handleChangeAddressMap: PropTypes.func,
  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

GoogleMaps.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export const GoogleMapsMap = WrapperGoogleMaps(GoogleMaps)

GoogleMapsMap.propTypes = {
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
