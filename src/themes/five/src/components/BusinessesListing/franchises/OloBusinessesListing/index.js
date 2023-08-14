import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import {
  BusinessList as BusinessListController,
  GoogleMapsMap,
  useOrder,
  useSession,
  useLanguage,
  useConfig
} from 'ordering-components'
import {
  BusinessContainer,
  BusinessList,
  HightestRatedWrapper,
  Divider,

  AddressFormWrapper,
  Title,
  TypesContainer,
  TypeButton,
  IconTypeButton,
  AdditionalTypesContainer,
  BusinessListContainer,
  AdditionalTypesWrapper,
  WrapInput,
  Subtitle,
  PaginationContainer,
  WrapperMap,
  CityContainer,
  LoadMoreButtonCityWrap,
  ViewLocations,
  CitiesContainer,
  Separator
} from './styles'
import { Button } from '../../../../styles/Buttons'
import { NotFoundSource } from '../../../NotFoundSource'

import { Modal } from '../../../Modal'
import { Alert } from '../../../Confirm'

import { BusinessController } from '../../../BusinessController/franchises/OloBusinessController'

import { HighestRated } from '../../../HighestRated/franchises/OloHighestRated'
import { BusinessPreorder } from '../../../BusinessPreorder'

import Skeleton from 'react-loading-skeleton'
import { CitiesControl } from '../../../CitiesControl'
import { getCateringValues } from '../../../../../../../utils'
import { AddressList } from '../../../AddressList'
import { AddressForm } from '../../../AddressForm'
import { Pagination } from '../../../Pagination'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'
import RiArrowDropDownLine from '@meronex/icons/ri/RiArrowDropDownLine'

const OloBusinessesListingUI = (props) => {
  const {
    businessesList,
    paginationProps,
    getBusinesses,
    isCustomLayout,
    isCustomerMode,
    handleBusinessClick,
    onBusinessClick,
    handleUpdateBusinessList,
    getCities,
    citiesState,
    orderTypes,
    franchiseId
  } = props
  const allOrderTypes = [1, 2, 3, 4, 5, 7, 8]
  const pickupTypes = [2, 3, 4, 5]
  const cateringTypes = [7, 8]
  const [, t] = useLanguage()
  const [orderState, { changeCityFilter, changeType }] = useOrder()
  const [{ auth }] = useSession()
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false, citiesOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [mapErrors, setMapErrors] = useState('')
  const [isPreorder, setIsPreorder] = useState(false)
  const [preorderBusiness, setPreorderBusiness] = useState(null)
  const [hasHighRatedBusiness, setHasHighRatedBusiness] = useState(true)
  const [isPickupSelected, setIsPickupSelected] = useState(pickupTypes.includes(orderState?.options?.type))
  const [isCateringSelected, setIsCateringSelected] = useState(cateringTypes.includes(orderState?.options?.type))
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const [favoriteIds, setFavoriteIds] = useState([])
  const [businessesLocations, setBusinessesLocations] = useState([])
  const [filterByCity, setFilterByCity] = useState(false)
  const [citySelected, setCitySelected] = useState(null)

  const hideHighestBusiness = theme?.business_listing_view?.components?.highest_rated_business_block?.hidden

  const isChew = theme?.header?.components?.layout?.type?.toLowerCase() === 'chew'
  const cateringTypeString = orderState?.options?.type === 7
    ? 'catering_delivery'
    : orderState?.options?.type === 8
      ? 'catering_pickup'
      : null
  const configTypes = configs?.order_types_allowed?.value.split('|').filter(value => (allOrderTypes.includes(Number(value)))).map(value => Number(value)) || []
  const cateringValues = preorderBusiness?.configs && getCateringValues(cateringTypeString, preorderBusiness?.configs)
  const googleMapsApiKey = configs?.google_maps_api_key?.value
  const unaddressedTypes = configs?.unaddressed_order_types_allowed?.value.split('|').map(value => Number(value)) || []
  const isAllowUnaddressOrderType = unaddressedTypes.includes(orderState?.options?.type)

  const defaultLocation = {
    lat: 40.7744146,
    lng: -73.9678064
  }

  const handleClickAddress = (e) => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  const handleCloseAlerts = () => {
    setAlertState({ open: false, content: [] })
    setMapErrors('')
  }

  const handleClosePreorder = () => {
    setIsPreorder(false)
    setPreorderBusiness(null)
  }

  const handleOpenCities = (value) => {
    if (!citiesState?.cities?.length) {
      getCities()
    }
    setFilterByCity(value)
  }

  const handleChangeCity = (cityId) => {
    changeCityFilter(cityId === orderState?.options?.city_id ? null : cityId)
  }

  const handleChangeType = (value) => {
    if (!orderState?.loading) {
      changeType(value)
      if (value === 1) {
        setIsPickupSelected(false)
        setIsCateringSelected(false)
      }
    }
  }

  const handleChangeOrderTypes = (configTypes, isPickup) => {
    const firstEnabledPickupType = orderTypes.find(type => configTypes?.includes(type.value) && type.value !== 1)?.value
    handleChangeType(firstEnabledPickupType)
    if (isPickup) {
      setIsPickupSelected(true)
      setIsCateringSelected(false)
    } else {
      setIsCateringSelected(true)
      setIsPickupSelected(false)
    }
  }

  useEffect(() => {
    if (preorderBusiness) setIsPreorder(true)
  }, [preorderBusiness])

  useEffect(() => {
    if (!businessesList?.businesses?.length) return
    const ids = [...favoriteIds]
    businessesList.businesses.forEach(business => {
      if (business?.favorite) {
        ids.push(business.id)
      }
    })
    setFavoriteIds([...new Set(ids)])
  }, [businessesList?.businesses?.length])

  useEffect(() => {
    if (!citiesState?.cities?.length || !orderState?.options?.city_id) return
    const selectedCity = citiesState?.cities?.find(city => city?.id === orderState?.options?.city_id)
    if (!selectedCity || !selectedCity?.enabled) changeCityFilter(null)
  }, [citiesState, orderState?.options?.city_id])

  useEffect(() => {
    setBusinessesLocations(businessesList?.businesses?.map(business => ({
      ...business?.location,
      icon: business?.logo || theme?.images?.dummies?.businessLogo,
      slug: business?.slug,
      id: business?.id,
      address: business?.address
    })))
  }, [businessesList?.businesses])

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
    isMarkerDraggable: false
  }

  const OrderTypesComponent = ({ title, configTypes }) => {
    return (
      <>
        <AdditionalTypesWrapper>
          <p>{title}</p>
          <AdditionalTypesContainer>
            {orderTypes && (configTypes ? orderTypes.filter(type => configTypes?.includes(type.value) && type.value !== 1) : orderTypes).map((item, i) => (
              <Button
                key={item.value}
                onClick={() => handleChangeType(item.value)}
                color={orderState?.options?.type === item?.value ? 'primary' : 'secondary'}
                disabled={orderState?.loading}
                className={orderState?.options?.type !== item?.value ? 'activated' : ''}
              >
                {item.text}
              </Button>
            ))}
          </AdditionalTypesContainer>
        </AdditionalTypesWrapper>
      </>
    )
  }

  return (
    <BusinessContainer>
      <BusinessListContainer>
        <Title>{t('SELECT_YOUR_DELIVERY_TYPE', 'Select your Delivery type')}</Title>
        <Subtitle>{t('SELECT_YOUR_DELIVERY_TYPE_DESCRIPTION', 'Please select the type of delivery for your order.')}</Subtitle>
        <TypesContainer>
          {configTypes.includes(1) && (
            <TypeButton onClick={() => handleChangeType(1)} disabled={orderState?.loading} activated={!isPickupSelected && !isCateringSelected}>
              <IconTypeButton activated={!isPickupSelected && !isCateringSelected}>
                <img
                  src={theme?.images?.general?.deliveryIco}
                  width={20}
                  height={20}
                />
              </IconTypeButton>
              <p>{t('DELIVERY', 'Delivery')}</p>
            </TypeButton>
          )}
          {configTypes.some(type => pickupTypes.includes(type)) && (
            <TypeButton
              disabled={orderState?.loading}
              activated={isPickupSelected}
              onClick={() => handleChangeOrderTypes(pickupTypes, true)}
            >
              <IconTypeButton activated={isPickupSelected}>
                <img
                  src={theme?.images?.general?.pickupIco}
                  width={22}
                  height={22}
                />
              </IconTypeButton>
              <p>{t('PICKUP', 'Pickup')}</p>
            </TypeButton>
          )}
          {configTypes.some(type => cateringTypes.includes(type)) && (
            <TypeButton
              disabled={orderState?.loading}
              activated={isCateringSelected}
              onClick={() => handleChangeOrderTypes(cateringTypes)}
            >
              <IconTypeButton activated={isCateringSelected}>
                <img
                  src={theme?.images?.general?.cateringIco}
                  width={22}
                  height={22}
                />
              </IconTypeButton>
              <p>{t('CATERING', 'Catering')}</p>
            </TypeButton>
          )}
        </TypesContainer>
        {isPickupSelected && (
          <OrderTypesComponent
            title={t('WHAT_PICKUP_YOU_NEED', 'What kind of pickup do you need?')}
            configTypes={pickupTypes}
          />
        )}
        {isCateringSelected && (
          <OrderTypesComponent
            title={t('WHAT_CATERING_YOU_NEED', 'What kind of catering do you need?')}
            configTypes={cateringTypes}
          />
        )}
        <WrapInput onClick={handleClickAddress} withIcon>
          <HiOutlineLocationMarker />
          <p>
            {orderState?.options?.address?.address || t('WHERE_DO_WE_DELIVERY', theme?.defaultLanguages?.WHERE_DO_WE_DELIVERY || 'Where do we delivery?')}
          </p>
        </WrapInput>
        <ViewLocations>
          <p onClick={() =>
            filterByCity
              ? handleOpenCities(false)
              : handleOpenCities(true)}
          >
            {filterByCity ? t('HIDE_LOCATIONS', 'Hide locations') : t('VIEW_ALL_LOCATIONS', 'View all locations')}
          </p>
        </ViewLocations>
        {filterByCity && (
          <CitiesContainer>
            {citiesState?.cities?.filter(city => businessesList.businesses?.some(business => business?.city_id === city?.id))?.map((city, i, hash) => (
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
                      businessesList.businesses?.filter(business => business?.city_id === city?.id)?.map((business) => (
                        <BusinessController
                          key={business.id}
                          className='card'
                          business={business}
                          isBusinessOpen={business.open}
                          handleCustomClick={handleBusinessClick}
                          orderType={orderState?.options?.type}
                          isCustomLayout={isCustomLayout}
                          isCustomerMode={isCustomerMode}
                          onPreorderBusiness={setPreorderBusiness}
                          businessHeader={business?.header}
                          businessFeatured={business?.featured}
                          businessOffers={business?.offers}
                          businessLogo={business?.logo}
                          businessReviews={business?.reviews?.total}
                          businessDeliveryPrice={business?.delivery_price}
                          businessDeliveryTime={business?.delivery_time}
                          businessPickupTime={business?.pickup_time}
                          businessDistance={business?.distance}
                          handleUpdateBusinessList={handleUpdateBusinessList}
                          favoriteIds={favoriteIds}
                          setFavoriteIds={setFavoriteIds}
                        />
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
                {(i + 1) !== hash?.length && (
                  <Separator />
                )}
              </div>
            ))}
          </CitiesContainer>
        )}
        {filterByCity && citiesState?.loading && [...Array(4)].map((_, i) => (
          <Skeleton height={70} style={{ marginBottom: 5 }} key={i} />
        ))}
        {!filterByCity && (
          <>
            {(isAllowUnaddressOrderType || orderState?.options?.address?.location) && !isChew && hasHighRatedBusiness && !hideHighestBusiness && (
              <HightestRatedWrapper>
                <Divider />
                <HighestRated
                  propsToFetch={props.propsToFetch}
                  handleClickAddress={handleClickAddress}
                  setHasHighRatedBusiness={setHasHighRatedBusiness}
                  onBusinessClick={onBusinessClick}
                  isCustomerMode={isCustomerMode}
                  favoriteIds={favoriteIds}
                  setFavoriteIds={setFavoriteIds}
                  disabledCities
                  franchiseId={franchiseId}
                />
                <Divider />
              </HightestRatedWrapper>
            )}

            <>
              <BusinessList>
                {
                  (isAllowUnaddressOrderType || orderState?.options?.address?.location) && !businessesList.loading && businessesList.businesses.length === 0 && businessesList?.fetched && (
                    <NotFoundSource
                      content={t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')}
                    >
                      <Button
                        outline
                        color='primary'
                        onClick={() => handleClickAddress()}
                        style={{ height: '44px' }}
                      >
                        {t('CHANGE_ADDRESS', 'Select other Address')}
                      </Button>
                    </NotFoundSource>
                  )
                }
                {
                  (isAllowUnaddressOrderType || orderState?.options?.address?.location) ? businessesList.businesses?.map((business) => (
                    <BusinessController
                      key={business.id}
                      className='card'
                      business={business}
                      isBusinessOpen={business.open}
                      handleCustomClick={handleBusinessClick}
                      orderType={orderState?.options?.type}
                      isCustomLayout={isCustomLayout}
                      isCustomerMode={isCustomerMode}
                      onPreorderBusiness={setPreorderBusiness}
                      businessHeader={business?.header}
                      businessFeatured={business?.featured}
                      businessOffers={business?.offers}
                      businessLogo={business?.logo}
                      businessReviews={business?.reviews?.total}
                      businessDeliveryPrice={business?.delivery_price}
                      businessDeliveryTime={business?.delivery_time}
                      businessPickupTime={business?.pickup_time}
                      businessDistance={business?.distance}
                      handleUpdateBusinessList={handleUpdateBusinessList}
                      favoriteIds={favoriteIds}
                      setFavoriteIds={setFavoriteIds}
                    />
                  )) : (
                    <p>{t('ENTER_FULL_ADDRESS_TO_ORDER', 'Enter your full street address to start your delivery order.')}</p>
                  )
                }
                {(isAllowUnaddressOrderType || orderState?.options?.address?.location) && (businessesList.loading || !businessesList?.fetched) && (
                  [...Array(paginationProps?.nextPageItems > 4 ? paginationProps.nextPageItems : 8).keys()].map(i => (
                    <BusinessController
                      key={i}
                      className='card'
                      business={{}}
                      isSkeleton
                      orderType={orderState?.options?.type}
                    />
                  ))
                )}
                {(isAllowUnaddressOrderType || orderState?.options?.address?.location) && (
                  <PaginationContainer>
                    <Pagination
                      currentPage={paginationProps.currentPage}
                      totalPages={Math.ceil(paginationProps?.totalPages)}
                      handleChangePage={(page) => getBusinesses(true, page)}
                    />
                  </PaginationContainer>
                )}
              </BusinessList>
            </>
          </>
        )}
      </BusinessListContainer>
      {!!googleMapsApiKey && (orderState?.options?.address?.location || isAllowUnaddressOrderType) && (
        <WrapperMap>
          <GoogleMapsMap
            apiKey={googleMapsApiKey}
            location={orderState?.options?.address?.location || defaultLocation}
            locations={businessesLocations}
            onBusinessClick={(slug) => onBusinessClick({ slug })}
            businessMap
            noDistanceValidation
            mapControls={googleMapsControls}
            maxLimitLocation={parseInt(configs?.meters_to_change_address?.value)}
          />
        </WrapperMap>
      )}
      <Modal
        open={isPreorder}
        width='760px'
        onClose={() => handleClosePreorder()}
      >
        <BusinessPreorder
          business={preorderBusiness}
          handleClick={handleBusinessClick}
          showButton
          cateringPreorder={!!cateringTypeString}
          {...cateringValues}
        />
      </Modal>
      <Modal
        title={t('SELECT_A_STORE', 'Select a store')}
        open={modals.citiesOpen}
        width='70%'
        onClose={() => setModals({ ...modals, citiesOpen: false })}
      >
        <CitiesControl
          cities={citiesState?.cities}
          handleChangeCity={handleChangeCity}
          onClose={() => setModals({ ...modals, citiesOpen: false })}
        />
      </Modal>

      <Modal
        {...(!auth && { title: t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?') })}
        open={modals.formOpen || modals.listOpen}
        width='70%'
        onClose={() => setModals({ ...modals, formOpen: false, listOpen: false })}
      >
        {modals.listOpen ? (
          <AddressList
            isModal
            changeOrderAddressWithDefault
            userId={isNaN(userCustomer?.id) ? null : userCustomer?.id}
            onCancel={() => setModals({ ...modals, listOpen: false })}
            isCustomerMode={isCustomerMode}
          />
        ) : (
          <AddressFormWrapper>
            <AddressForm
              useValidationFileds
              address={orderState?.options?.address || {}}
              onCancel={() => setModals({ ...modals, formOpen: false })}
              onSaveAddress={() => setModals({ ...modals, formOpen: false })}
              isCustomerMode={isCustomerMode}
            />
          </AddressFormWrapper>
        )}
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
  )
}

export const OloBusinessesListing = (props) => {
  const [, t] = useLanguage()
  const businessListingProps = {
    ...props,
    UIComponent: OloBusinessesListingUI,
    paginationSettings: { initialPage: 1, pageSize: 25, controlType: 'infinity' },
    orderTypes: props.orderTypes || [
      {
        value: 1,
        text: t('DELIVERY', 'Delivery')
      },
      {
        value: 2,
        text: t('PICKUP', 'Pickup')
      },
      {
        value: 3,
        text: t('EAT_IN', 'Eat in')
      },
      {
        value: 4,
        text: t('CURBSIDE', 'Curbside')
      },
      {
        value: 5,
        text: t('DRIVE_THRU', 'Drive thru')
      },
      {
        value: 7,
        text: t('CATERING_DELIVERY', 'Catering delivery')
      },
      {
        value: 8,
        text: t('CATERING_PICKUP', 'Catering pickup')
      }
    ]
  }
  return <BusinessListController {...businessListingProps} />
}
