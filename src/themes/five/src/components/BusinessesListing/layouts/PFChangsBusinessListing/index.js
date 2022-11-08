import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import RiArrowDropDownLine from '@meronex/icons/ri/RiArrowDropDownLine'
import {
  useOrder,
  useLanguage,
  BusinessSearchList
} from 'ordering-components'

import {
  BusinessContainer,
  ErrorMessage,
  SingleBusinessContainer,
  LeftContainer,
  RightContainer,
  CityContainer,
  LocationSelect,
  LoadMoreButtonWrap,
  NotFoundSourceWrapper,
  DeliveryTextWrapper,
  LoadMoreButtonCityWrap,
  BusinessAddress
} from './styles'

import { Button } from '../../../../styles/Buttons/theme/pfchangs'
import { NotFoundSource } from '../../../NotFoundSource'

import { Modal } from '../../../Modal'
import { Alert } from '../../../Confirm/layouts/pfchangs'
import { AddressForm } from '../../../AddressForm'
import { AddressList } from '../../../AddressList'

import { BusinessPreorder } from '../../../BusinessPreorder'

import dayjs from 'dayjs'

import Skeleton from 'react-loading-skeleton'

const BusinessesListingUI = (props) => {
  const {
    businessesSearchList,
    paginationProps,
    isCustomerMode,
    handleBusinessClick,
    onBusinessClick,
    filterByCity,
    filterByAddress,
    citiesState,
    handleChangeFilters,
    handleSearchbusinessAndProducts,
    setBusinessesLocations,
    businessesLocations,
    setBusinessClikedId,
    currentLocation,
    canBeRedirected,
    businessClikedId,
    mapActivated,
    isResponsive,
    businessesInsideZone
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const theme = useTheme()

  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [mapErrors, setMapErrors] = useState('')
  const [isPreorder, setIsPreorder] = useState(false)
  const [preorderBusiness, setPreorderBusiness] = useState(null)
  const [citySelected, setCitySelected] = useState(null)
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const [favoriteIds, setFavoriteIds] = useState([])
  const distanceOptions = [1000, 5000, 10000, 15000, 20000, 25000, 'default']
  const [distanceSelected, setDistanceSelected] = useState('default')
  const businessNearestLength = businessesSearchList.businesses?.filter(business => !citySelected || business?.city_id === citySelected?.id)?.length

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setAlertState({ open: true, content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select or add an address to search')] })
      return
    }
    setModals({ listOpen: false, formOpen: false })
  }

  const handleCloseAlerts = () => {
    setAlertState({ open: false, content: [] })
    setMapErrors('')
  }

  const handleMapErrors = (errKey) => {
    setAlertState({
      open: true,
      content: [t(errKey, mapErrors[errKey])]
    })
  }

  const getBusinesses = async (newFetch, options) => {
    const optionsDeliveryZone = {
      ...options,
      force_max_distance: false
    }
    await handleSearchbusinessAndProducts(newFetch, options)
    await handleSearchbusinessAndProducts(newFetch, optionsDeliveryZone)
  }

  useEffect(() => {
    if (mapErrors) {
      handleMapErrors(mapErrors)
    }
  }, [mapErrors])

  const handleClosePreorder = () => {
    setIsPreorder(false)
    setPreorderBusiness(null)
  }

  useEffect(() => {
    if (preorderBusiness) setIsPreorder(true)
  }, [preorderBusiness])

  useEffect(() => {
    if (!businessesSearchList?.businesses?.length) return
    const ids = [...favoriteIds]
    businessesSearchList.businesses.forEach(business => {
      if (business?.favorite) {
        ids.push(business.id)
      }
    })
    setFavoriteIds([...new Set(ids)])
  }, [businessesSearchList?.businesses?.length])

  useEffect(() => {
    setBusinessesLocations(businessesSearchList?.businesses?.map(business => ({
      ...business?.location,
      icon: business?.logo || theme?.images?.dummies?.businessLogo,
      slug: business?.slug,
      markerPopup: markerPopup(
        business,
        t('GO_TO_THE_STORE', 'Go to the store'),
        business?.cellphone || business?.phone || '',
        business?.open && businessesInsideZone?.businesses?.find(_business => _business?.id === business?.id) ? 'block' : 'none'
      ),
      id: business?.id,
      address: business?.address
    })))
  }, [businessesSearchList?.businesses])

  useEffect(() => {
    window.handleClickBusinessButton = (slug) => {
      onBusinessClick({ slug })
    }
    return () => {
      window.handleClickBusinessButton = null
    }
  }, [businessesLocations?.length, businessesSearchList?.businesses])

  const scheduleFormatted = ({ hour, minute }) => {
    const checkTime = (val) => val < 10 ? `0${val}` : val
    return `${checkTime(hour)}:${checkTime(minute)}`
  }

  const getScheduleOpen = (business) => {
    const currentDate = dayjs().tz(business?.timezone)
    let lapse = null
    if (business?.today?.enabled) {
      lapse = business?.today?.lapses?.find(lapse => {
        const from = currentDate.hour(lapse.open.hour).minute(lapse.open.minute)
        const to = currentDate.hour(lapse.close.hour).minute(lapse.close.minute)
        return currentDate.unix() >= from.unix() && currentDate.unix() <= to.unix()
      })
    }
    return lapse ? scheduleFormatted(lapse.open) : ''
  }

  const handleChangeDistance = (distance) => {
    handleChangeFilters('max_distance', distance === 'default' ? null : distance)
    setDistanceSelected(distance)
  }

  const markerPopup = (business, type, cellphone, showButton) =>
    '<div id="content" style="width: 300px">' +
    '<h1 id="firstHeading" class="firstHeading" style="font-size: 12px">' + business.name + '</h1>' +
    '<div id="bodyContent" style="display: flex; justify-content: space-between; width: 100%">' +
    '<div style="max-width: 170px; display: flex; flex-direction: column">' +
    '<a class="btn-address-map" id="address-map" style="font-size: 10px; margin: 0">' + business.address + '</a>' +
    '<p style="font-size: 10px; margin: 0">' + cellphone + '</p>' +
    '</div>' +
    '<button style="display: ' + showButton + '" onclick="handleClickBusinessButton(\'' + business.slug + '\')"' + business.id + '" class="btn-choose-store" style="">' + type + '</button></div></div>'

  const handleGotoMaps = (business) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${business.address}`, '_blank'
    )
  }
  useEffect(() => {
    if (
      canBeRedirected &&
      filterByAddress &&
      orderState?.options?.address?.location &&
      businessesSearchList.businesses?.length === 1 &&
      !businessesSearchList.loading &&
      !orderState?.loading
    ) {
      onBusinessClick({ slug: businessesSearchList.businesses[0].slug })
    }
  }, [businessesSearchList.businesses[0]])

  const SingleBusinessController = ({ business, showGoToStore }) => {
    return (
      <SingleBusinessContainer isSelected={businessClikedId === business?.id} onClick={() => mapActivated && setBusinessClikedId(business?.id)}>
        <LeftContainer>
          <h2>{business?.name}</h2>
          <BusinessAddress onClick={() => handleGotoMaps(business)}>{business?.address}</BusinessAddress>
          <p>{business?.city?.name}</p>
          <p>{business?.cellphone}</p>
          {getScheduleOpen(business) && (
            <p>{t('OPEN_UNTIL', 'Open until')} {getScheduleOpen(business)}</p>
          )}
        </LeftContainer>
        <RightContainer>
          {showGoToStore && (
            <Button color='primary' onClick={() => onBusinessClick(business)}>
              {t('GO_TO_BUSINESS', 'Go to business')}
            </Button>
          )}
        </RightContainer>
      </SingleBusinessContainer>
    )
  }

  const sortBusinessFunction = (businessA, businessB) => {
    const businesses = businessesInsideZone?.businesses
    if (businesses?.find(_business => _business?.id === businessA?.id) && !businesses?.find(_business => _business?.id === businessB?.id)) {
      return -1
    } else if (!businesses?.find(_business => _business?.id === businessA?.id) && businesses?.find(_business => _business?.id === businessB?.id)) {
      return 1
    } else {
      return 0
    }
  }

  return (
    <>
      {isResponsive && (
        <DeliveryTextWrapper>
          <p>{t('ENTER_FULL_ADDRESS_TO_ORDER', 'Enter your full street address to start your delivery order.')}</p>
        </DeliveryTextWrapper>
      )}
      <BusinessContainer alignCenter={!businessesSearchList.loading && businessesSearchList.businesses.length === 0}>
        {currentLocation && (
          <Button className='search-area' color='primary' onClick={() => getBusinesses(true, { location: currentLocation })}>
            {t('SEARCH_THIS_AREA', 'Search This Area')}
          </Button>
        )}
        <>
          {filterByAddress && orderState?.options?.address?.location && (
            <p>
              {t('SHOWING', 'Showing')} {businessNearestLength} {t('LOCATIONS_WITHIN', 'locations within')} {' '}
              <LocationSelect value={distanceSelected} onChange={(e) => handleChangeDistance(e.target.value)}>
                {distanceOptions?.map((distance, i, hash) => (
                  <option key={distance} value={distance}>
                    {distance === 'default' ? `+ ${distanceOptions[i - 1] / 1000}` : distance / 1000} {t('KM', 'Km')}
                  </option>
                ))}
              </LocationSelect>
              {' '}
              {t('OF_YOUR_LOCATION', 'of your location')}{':'}
            </p>
          )}
          {filterByCity && (
            <>
              {citiesState?.cities?.filter(city => businessesSearchList.businesses?.some(business => business?.city_id === city?.id))?.map(city => (
                <div key={city?.id}>
                  <CityContainer
                    isSelected={citySelected?.id === city?.id}
                    onClick={() => setCitySelected(citySelected?.id === city?.id ? null : city)}
                  >
                    <h3>
                      {city?.name}
                    </h3>
                    <RiArrowDropDownLine size={18} />
                  </CityContainer>
                  {citySelected?.id === city?.id && (
                    <>
                      {
                        businessesSearchList.businesses?.filter(business => business?.city_id === city?.id)?.map((business) => (
                          <SingleBusinessController key={business?.id} business={business} showGoToStore={businessesInsideZone?.businesses?.find(_business => _business?.id === business?.id)} />
                        ))
                      }
                      {paginationProps?.totalPages && paginationProps?.currentPage < paginationProps?.totalPages && (
                        <LoadMoreButtonCityWrap>
                          <Button
                            onClick={() => getBusinesses()}
                            color='primary'
                          >
                            {t('LOAD_MORE_BUSINESSES', 'Load more businesses')}
                          </Button>
                        </LoadMoreButtonCityWrap>
                      )}
                    </>
                  )}
                </div>
              ))}
            </>
          )}
          <>
            {
              filterByAddress && !filterByCity && orderState?.options?.address?.location && businessesSearchList.businesses?.sort((a, b) => sortBusinessFunction(a, b))?.map((business) => (
                <SingleBusinessController key={business?.id} business={business} showGoToStore={business?.open && businessesInsideZone?.businesses?.find(_business => _business?.id === business?.id)} />
              ))
            }
            {paginationProps?.totalPages && paginationProps?.currentPage < paginationProps?.totalPages && businessesSearchList?.businesses?.length > 0 && (
              <LoadMoreButtonWrap>
                <Button
                  onClick={() => getBusinesses()}
                  color='primary'
                >
                  {t('LOAD_MORE_BUSINESSES', 'Load more businesses')}
                </Button>
              </LoadMoreButtonWrap>
            )}
          </>
          {filterByAddress && businessesSearchList.loading && (
            [...Array(paginationProps?.nextPageItems > 4 ? paginationProps.nextPageItems : 8).keys()].map(i => (
              <SingleBusinessContainer key={i}>
                <LeftContainer>
                  <Skeleton width={230} height={16} />
                  <Skeleton width={180} height={10} />
                  <Skeleton width={130} height={10} />
                  <Skeleton width={70} height={10} />
                  <Skeleton width={150} height={10} />
                </LeftContainer>
                <RightContainer>
                  <Skeleton width={100} height={30} />
                </RightContainer>
              </SingleBusinessContainer>
            ))
          )}
          {
            !businessesSearchList.loading && businessesSearchList?.businesses?.length === 0 && (
              <NotFoundSourceWrapper>
                <NotFoundSource
                  content={t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')}
                />
              </NotFoundSourceWrapper>
            )
          }
          {!businessesSearchList.loading && businessesSearchList?.error && businessesSearchList?.error?.length > 0 && businessesSearchList?.businesses?.length === 0 && (
            <>
              {typeof businessesSearchList?.error === 'string' ? (
                <ErrorMessage>{t('ERROR', 'ERROR')}: {businessesSearchList?.error}</ErrorMessage>
              ) : (
                <>
                  {businessesSearchList?.error?.map((e, i) => (
                    <ErrorMessage key={i}>{t('ERROR', 'ERROR')}: [{e?.message || e}]</ErrorMessage>
                  ))}
                </>
              )}
            </>
          )}
        </>
        <Modal
          open={isPreorder}
          width='760px'
          onClose={() => handleClosePreorder()}
        >
          <BusinessPreorder
            business={preorderBusiness}
            handleClick={handleBusinessClick}
            showButton
          />
        </Modal>

        <Modal
          title={t('ADDRESS_FORM', 'Address Form')}
          open={modals.formOpen}
          onClose={() => setModals({ ...modals, formOpen: false })}
        >
          <AddressForm
            useValidationFileds
            address={orderState?.options?.address || {}}
            onClose={() => setModals({ ...modals, formOpen: false })}
            onCancel={() => setModals({ ...modals, formOpen: false })}
            onSaveAddress={() => setModals({ ...modals, formOpen: false })}
          />
        </Modal>

        <Modal
          title={t('ADDRESSES', 'Address List')}
          open={modals.listOpen}
          width='70%'
          onClose={() => setModals({ ...modals, listOpen: false })}
        >
          <AddressList
            isModal
            changeOrderAddressWithDefault
            userId={isNaN(userCustomer?.id) ? null : userCustomer?.id}
            onCancel={() => setModals({ ...modals, listOpen: false })}
            onAccept={() => handleFindBusinesses()}
            isCustomerMode={isCustomerMode}
          />
        </Modal>

        <Alert
          title={!mapErrors ? t('SEARCH', 'Search') : t('BUSINESSES_MAP', 'Businesses Map')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => handleCloseAlerts()}
          onAccept={() => handleCloseAlerts()}
          closeOnBackdrop={false}
        />
      </BusinessContainer>

    </>
  )
}

export const PFChangsBusinesListing = (props) => {
  const businessListingProps = {
    ...props,
    UIComponent: BusinessesListingUI,
    paginationSettings: { initialPage: 1, pageSize: 30, controlType: 'infinity' },
    isPfChangs: true
  }

  return <BusinessSearchList {...businessListingProps} />
}
