import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useSession, useOrder, useLanguage, useEvent, useSite, useOrderingTheme } from 'ordering-components'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'
import {
  HeroContainer,
  ContentWrapper,
  Title,
  Slogan,
  WrapInput,
  SearchLocationsContainer,
  DelvieryPickupContainer,
  DeliveryPickupContainer,
  AddressInputContainer,
  ViewLocationsContainer,
  Diviver
} from './styles'

import { Modal } from '../../../Modal'
import { Button } from '../../../../styles/Buttons/theme/pfchangs'
import { AddressForm } from '../../../AddressForm'
import { AddressList } from '../../../AddressList'
import { PFChangsBusinesListing } from '../../../BusinessesListing/layouts/PFChangsBusinessListing'

export const PFChangsHomeHero = (props) => {
  const { onFindBusiness, contentPosition } = props

  const [{ auth }] = useSession()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [events] = useEvent()
  const [{ site }] = useSite()
  const [orderingTheme] = useOrderingTheme()

  const businessUrlTemplate = site?.business_url_template || '/store/:business_slug'

  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [orderTypeSelected, setOrderTypeSelected] = useState(1)
  const [showAllLocations, setShowAllLocations] = useState(false)
  const theme = useTheme()

  const userCustomer = parseInt(window.localStorage.getItem('user-customer'))

  const homeBackgroundImage = theme?.layouts?.homepage_view?.components?.home_header?.components?.image
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
    onRedirectPage: (data) => events.emit('go_to_page', data)
  }
  const handleFindBusinesses = () => {
    setShowAllLocations(false)
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
  }

  useEffect(() => {
    return () => setModals({ listOpen: false, formOpen: false })
  }, [])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <HeroContainer bgimage={homeBackgroundImage || theme.images?.general?.homeHero}>
        <ContentWrapper contentPosition={contentPosition}>
          <SearchLocationsContainer>
            <div>
              <p>{t('SEARCH_OR_VIEW_LOCATIONS_BELOW', 'Search or view nearby locations below')}</p>
            </div>
            <DeliveryPickupContainer orderTypeSelected={orderTypeSelected}>
              <Button color={orderTypeSelected === 2 ? '#000' : '#FFF'} onClick={() => handleChangeOrderType(2)}>
                {t('PICKUP', 'Pickup')}
              </Button>
              <Button color={orderTypeSelected === 1 ? '#000' : '#FFF'} onClick={() => handleChangeOrderType(1)}>
                {t('DELIVERY', 'Delivery')}
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
              <div>
                <Button
                  color='primary'
                  name='Search'
                  onClick={handleFindBusinesses}
                >
                  {t('SEARCH', 'Search')}
                </Button>
              </div>
            </AddressInputContainer>
            {showCities && (
              <ViewLocationsContainer>
                <Button
                  color='primary'
                  style={{ width: '100%' }}
                  onClick={() => setShowAllLocations(true)}
                >
                  {t('VIEW_ALL_LOCATIONS', 'View all locations')}
                </Button>
              </ViewLocationsContainer>
            )}
            <Diviver />
            <PFChangsBusinesListing
              {...businessListingProps}
              filterByAddress={orderState?.options?.address?.location}
              filterByCity={showAllLocations}
            />
          </SearchLocationsContainer>
          <div> {/** mapa */}

          </div>
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
            onSaveAddress={() => setModals({ ...modals, formOpen: false })}
            onCancel={() => setModals({ ...modals, formOpen: false })}
          />
        </Modal>
        <Modal
          open={modals.listOpen}
          width='70%'
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
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
