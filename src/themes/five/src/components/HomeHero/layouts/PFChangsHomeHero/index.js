import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useSession, useOrder, useLanguage, useEvent, useSite, useOrderingTheme, useConfig, GoogleMapsMap } from 'ordering-components'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'
import FiMap from '@meronex/icons/fi/FiMap'
import IosSend from '@meronex/icons/ios/IosSend'
import {
  HeroContainer,
  ContentWrapper,
  WrapInput,
  SearchLocationsContainer,
  DeliveryPickupContainer,
  AddressInputContainer,
  ViewLocationsContainer,
  Diviver,
  WrapperMap,
  ActiveMapContainer,
  ContainerResponsiveWrapper,
  StartOrder
} from './styles'

import { Modal } from '../../../Modal'
import { Button } from '../../../../styles/Buttons/theme/pfchangs'
import { AddressForm } from '../../../AddressForm'
import { AddressList } from '../../../AddressList'
import { PFChangsBusinesListing } from '../../../BusinessesListing/layouts/PFChangsBusinessListing'
import { getGoogleMapImage } from '../../../../../../../utils'

export const PFChangsHomeHero = (props) => {
  const { contentPosition, brandId } = props

  const [{ auth, user }, { refreshUserInfo }] = useSession()
  const [orderState, { changeType }] = useOrder()
  const [, t] = useLanguage()
  const [events] = useEvent()
  const [{ site }] = useSite()
  const [orderingTheme] = useOrderingTheme()
  const [configState] = useConfig()

  const businessUrlTemplate = site?.business_url_template || '/store/:business_slug'

  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [orderTypeSelected, setOrderTypeSelected] = useState(orderState?.options?.type)
  const [showAllLocations, setShowAllLocations] = useState(false)
  const [businessesLocations, setBusinessesLocations] = useState([])
  const [currentLocation, setCurrentLocation] = useState(null)
  const [businessClikedId, setBusinessClikedId] = useState(null)
  const [isMapReady, setIsMapReady] = useState(false)
  const [mapActivated, setMapActivated] = useState(false)
  const [imageMapDimensions, setImageMapDimension] = useState({})
  const [canBeRedirected, setCanBeRedirected] = useState(false)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const theme = useTheme()
  const isResponsive = innerWidth < 768
  const userCustomer = parseInt(window.localStorage.getItem('user-customer'))
  const googleMapsApiKey = configState?.configs?.google_maps_api_key?.value

  const homeBackgroundImage = theme?.layouts?.homepage_view?.components?.homepage_header?.components?.image
  const showCities = !orderingTheme?.theme?.business_listing_view?.components?.cities?.hidden

  const businessListingProps = {
    onBusinessClick: (business) => {
      if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
        events.emit('go_to_page', { page: 'business', params: { business_slug: business.slug } })
      } else {
        events.emit('go_to_page', { page: 'business', search: `?${businessUrlTemplate.split('?')[1].replace(':business_slug', '')}${business.slug}` })
      }
    },
    currentPageParam: 0,
    propsToFetch: ['id', 'name', 'header', 'logo', 'location', 'address', 'timezone', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug', 'city', 'city_id'],
    onRedirectPage: (data) => events.emit('go_to_page', data),
    brandId: brandId
  }

  const googleMapsControls = {
    defaultZoom: 17,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: true
  }

  const handleFindBusinesses = () => {
    setShowAllLocations(false)
    setCanBeRedirected(true)
    if (!orderState?.options?.address?.location) {
      setModals({ ...modals, formOpen: true })
      return
    }
    setModals({ listOpen: false, formOpen: false })
  }

  const handleAddressInput = () => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  const handleChangeOrderType = (orderType) => {
    setOrderTypeSelected(orderType)
    changeType(orderType)
  }

  const handleSaveAddress = () => {
    setCanBeRedirected(true)
    setModals({ ...modals, formOpen: false })
  }

  const defaultLocation = { lat: 19.432241, lng: -99.177254 }

  useEffect(() => {
    return () => setModals({ listOpen: false, formOpen: false })
  }, [])

  useEffect(() => {
    const imageMapDimensions = document.getElementById('wrapper-map-id')
    setImageMapDimension({
      w: imageMapDimensions.clientWidth,
      h: imageMapDimensions.clientHeight
    })
  }, [])

  useEffect(() => {
    if (user?.name === null) {
      refreshUserInfo()
    }
  }, [user?.name])

  useEffect(() => {
    const resizeEvent = window.addEventListener('resize', (e) => {
      setInnerWidth(e.target.innerWidth)
    })

    return () => {
      window.removeEventListener('resize', resizeEvent)
    }
  }, [])

  return (
    <>
      <HeroContainer bgimage={homeBackgroundImage || theme.images?.general?.homeHero}>
        <ContentWrapper contentPosition={contentPosition}>
          <SearchLocationsContainer id='search-container'>
            <h1>{auth ? `${t('WELCOME_BACK', 'Welcome back')} ${user?.name}` : t('WELCOME', 'Welcome')}</h1>
            <div>
              <p>{t('SEARCH_OR_VIEW_LOCATIONS_BELOW', 'Search or view nearby locations below')}</p>
            </div>
            <DeliveryPickupContainer orderTypeSelected={orderTypeSelected}>
              <Button
                color={orderTypeSelected === 2 ? props?.slug === 'pf_changs' ? '#000' : '#FFF' : theme?.colors?.tertiary || '#FFF'}
                onClick={() => handleChangeOrderType(2)}
                disabled={orderState?.loading}
              >
                {t('PICKUP', 'Pickup')}
              </Button>
              <Button
                color={orderTypeSelected === 1 ? props?.slug === 'pf_changs' ? '#000' : '#FFF'  : theme?.colors?.tertiary || '#FFF'}
                onClick={() => handleChangeOrderType(1)}
                disabled={orderState?.loading}
              >
                {t('DELIVERY_UPPER', 'Delivery')}
              </Button>
            </DeliveryPickupContainer>
            {/* <Title>{t('TITLE_HOME', theme?.defaultLanguages?.TITLE_HOME || 'All We need is Food.')}</Title>
            <Slogan>{t('SUBTITLE_HOME', theme?.defaultLanguages?.SUBTITLE_HOME || 'Let\'s start to order food now')}</Slogan> */}
            <AddressInputContainer>
              <WrapInput onClick={handleAddressInput} withIcon>
                <HiOutlineLocationMarker />
                <p>
                  {orderState?.options?.address?.address || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')}
                </p>
              </WrapInput>
              <IosSend className='geolocation-button' />
            </AddressInputContainer>
            <StartOrder>
              <Button onClick={handleAddressInput}>
                {t('START_ORDER', 'Start order')}
              </Button>
            </StartOrder>
            {!isResponsive && (
              <>
                {showCities && (
                  <ViewLocationsContainer>
                    <p onClick={() => !showAllLocations ? setShowAllLocations(true) : setShowAllLocations(false)}>
                      {showAllLocations ? t('HIDE_RESTAURANTS_BY_CITY', 'Hide cities') : t('VIEW_RESTAURANTS_BY_CITY', 'View restaurants by city')}
                    </p>
                  </ViewLocationsContainer>
                )}
                <Diviver />
                <PFChangsBusinesListing
                  {...businessListingProps}
                  filterByAddress
                  filterByCity={showAllLocations}
                  setBusinessesLocations={setBusinessesLocations}
                  businessesLocations={businessesLocations}
                  isMapReady={isMapReady}
                  businessClikedId={businessClikedId}
                  setBusinessClikedId={setBusinessClikedId}
                  currentLocation={currentLocation}
                  defaultLocation={defaultLocation}
                  orderTypeSelected={orderTypeSelected}
                  canBeRedirected={canBeRedirected}
                  mapActivated={mapActivated}
                  isResponsive={isResponsive}
                />
              </>
            )}
          </SearchLocationsContainer>
          {/** mapa */}
          {!mapActivated && (
            <WrapperMap id='wrapper-map-id'>
              <div>
                <ActiveMapContainer>
                  <Button
                    outline
                    color='primary'
                    onClick={() => setMapActivated(true)}
                  >
                    <FiMap />
                    <p>{t('OPEN_MAP', 'OPEN MAP')}</p>
                  </Button>
                </ActiveMapContainer>
                {imageMapDimensions.w && imageMapDimensions.h && (
                  <img
                    src={getGoogleMapImage(
                      orderState?.options?.address?.location || defaultLocation,
                      configState?.configs?.google_maps_api_key?.value,
                      {
                        size: {
                          w: imageMapDimensions.w,
                          h: imageMapDimensions.h
                        },
                        zoom: 17
                      }
                    )}
                    alt='google-maps-img'
                    className='google-maps-img'
                    height='100%'
                    width='100%'
                  />
                )}
              </div>
            </WrapperMap>
          )}
          {!!googleMapsApiKey && mapActivated && (
            <WrapperMap>
              <GoogleMapsMap
                apiKey={googleMapsApiKey}
                location={orderState?.options?.address?.location || defaultLocation}
                locations={showAllLocations || orderState?.options?.address?.location ? businessesLocations : []}
                setCurrentLocation={setCurrentLocation}
                businessMap
                pfchangs
                noDistanceValidation
                mapControls={googleMapsControls}
                maxLimitLocation={parseInt(configState?.configs?.meters_to_change_address?.value)}
                setIsMapReady={setIsMapReady}
                businessClikedId={businessClikedId}
                locationPin={theme.images?.general?.pfLocationPin}
              />
            </WrapperMap>
          )}
          {isResponsive && (
            <ContainerResponsiveWrapper>
              {showCities && (
                <ViewLocationsContainer>
                  <Button
                    color='primary'
                    style={{ width: '100%' }}
                    onClick={() => !showAllLocations ? setShowAllLocations(true) : setShowAllLocations(false)}
                  >
                    {showAllLocations ? t('HIDE_ALL_CITIES', 'Hide all cities') : t('VIEW_ALL_CITIES', 'View all cities')}
                  </Button>
                </ViewLocationsContainer>
              )}
              <Diviver />
              <PFChangsBusinesListing
                {...businessListingProps}
                filterByAddress
                filterByCity={showAllLocations}
                setBusinessesLocations={setBusinessesLocations}
                businessesLocations={businessesLocations}
                isMapReady={isMapReady}
                businessClikedId={businessClikedId}
                setBusinessClikedId={setBusinessClikedId}
                currentLocation={currentLocation}
                defaultLocation={defaultLocation}
                orderTypeSelected={orderTypeSelected}
                canBeRedirected={canBeRedirected}
                mapActivated={mapActivated}
              />
            </ContainerResponsiveWrapper>
          )}
        </ContentWrapper>
        <Modal
          title={t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')}
          open={modals.formOpen}
          onClose={() => setModals({ ...modals, formOpen: false })}
        >
          <AddressForm
            useValidationFileds
            address={orderState?.options?.address || {}}
            onClose={() => setModals({ ...modals, formOpen: false })}
            onSaveAddress={() => handleSaveAddress()}
            onCancel={() => setModals({ ...modals, formOpen: false })}
            pfchangs
          />
        </Modal>
        <Modal
          open={modals.listOpen}
          width='80%'
          onClose={() => setModals({ ...modals, listOpen: false })}
        >
          <AddressList
            isModal
            changeOrderAddressWithDefault
            userId={isNaN(userCustomer) ? null : userCustomer}
            onCancel={() => setModals({ ...modals, listOpen: false })}
            onAccept={() => handleFindBusinesses()}
          />
        </Modal>
      </HeroContainer>
    </>
  )
}
