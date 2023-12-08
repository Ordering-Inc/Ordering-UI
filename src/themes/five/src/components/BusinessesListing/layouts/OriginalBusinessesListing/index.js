import React, { useEffect, useState, useCallback } from 'react'
import { useTheme } from 'styled-components'
import FiMap from '@meronex/icons/fi/FiMap'
import FiFilter from '@meronex/icons/fi/FiFilter'
import {
  useOrder,
  useSession,
  useLanguage,
  useConfig,
  BusinessList as BusinessListController
} from 'ordering-components'

import {
  BusinessContainer,
  BusinessList,
  WrapperSearch,
  BusinessesTitle,
  BusinessHeroImg,
  HightestRatedWrapper,
  Divider,
  SearchContainer,
  BusinessLogo,
  BusinessLogosContainer,
  BusinessBanner,
  BusinessLogosWrapper,
  AddressFormWrapper,
  Title,
  TypesContainer,
  TypeButton,
  IconTypeButton,
  TypesWrapper,
  AdditionalTypesContainer
} from './styles'
import { useWindowSize } from '../../../../../../../hooks/useWindowSize'
import { Button } from '../../../../styles/Buttons'
import { NotFoundSource } from '../../../NotFoundSource'

import { Modal } from '../../../Modal'
import { Alert } from '../../../Confirm'
import { SearchBar } from '../../../SearchBar'

import { BusinessTypeFilter } from '../../../BusinessTypeFilter'
import { BusinessController } from '../../../BusinessController'
import { BusinessesMap } from '../../../../../../../components/BusinessesMap'

import { HighestRated } from '../../../HighestRated'
import { BusinessPreorder } from '../../../BusinessPreorder'
import { OrderProgress } from '../../../OrderProgress'
import { PageBanner } from '../../../PageBanner'

import Skeleton from 'react-loading-skeleton'
import { AutoScroll } from '../../../AutoScroll'
import { CitiesControl } from '../../../CitiesControl'
import { OrderContextUI } from '../../../OrderContextUI'
import { OrdersSection } from './OrdersSection'
import { getCateringValues } from '../../../../../../../utils'
import { AddressList } from '../../../AddressList'
import { AddressForm } from '../../../AddressForm'

const PIXELS_TO_SCROLL = 300

const BusinessesListingUI = (props) => {
  const {
    businessesList,
    paginationProps,
    searchValue,
    getBusinesses,
    isCustomLayout,
    isCustomerMode,
    onRedirectPage,
    handleChangeSearch,
    handleChangeBusinessType,
    handleBusinessClick,
    onBusinessClick,
    handleUpdateBusinessList,
    getCities,
    citiesState,
    logosLayout,
    actualSlug,
    orderTypes
  } = props
  const allOrderTypes = [1, 2, 3, 4, 5]
  const pickupTypes = [2, 3, 4, 5]
  const [, t] = useLanguage()
  const [orderState, { changeCityFilter, changeType }] = useOrder()
  const [{ auth }] = useSession()
  const [{ configs }] = useConfig()
  const windowSize = useWindowSize()
  const theme = useTheme()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false, citiesOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [activeMap, setActiveMap] = useState(false)
  const [mapErrors, setMapErrors] = useState('')
  const [isPreorder, setIsPreorder] = useState(false)
  const [preorderBusiness, setPreorderBusiness] = useState(null)
  const [hasHighRatedBusiness, setHasHighRatedBusiness] = useState(true)
  const [isPickupSelected, setIsPickupSelected] = useState(pickupTypes.includes(orderState?.options?.type))
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const [favoriteIds, setFavoriteIds] = useState([])
  const allCitiesDisabled = citiesState?.cities?.every(city => !city.enabled)
  const hideCities = (theme?.business_listing_view?.components?.cities?.hidden || orderState?.options?.type !== 2 || allCitiesDisabled) ?? true
  const hideSearch = theme?.business_listing_view?.components?.search?.hidden
  const hideFilter = theme?.business_listing_view?.components?.filter?.hidden || hideSearch
  const hideHero = theme?.business_listing_view?.components?.business_hero?.hidden
  const hidePreviousOrders = theme?.business_listing_view?.components?.previous_orders_block?.hidden
  const hideHighestBusiness = theme?.business_listing_view?.components?.highest_rated_business_block?.hidden
  const hideSearchSection = hideCities && hideSearch && hideFilter
  const isAllCategoriesHidden = theme?.business_listing_view?.components?.categories?.hidden || props?.franchiseId
  const businessesIds = businessesList.businesses &&
    businessesList.businesses?.map(business => business.id)
  const isChew = theme?.header?.components?.layout?.type?.toLowerCase() === 'chew'
  const cateringTypeString = orderState?.options?.type === 7
    ? 'catering_delivery'
    : orderState?.options?.type === 8
      ? 'catering_pickup'
      : null
  const configTypes = configs?.order_types_allowed?.value.split('|').filter(value => (allOrderTypes.includes(Number(value)))).map(value => Number(value)) || []
  const cateringValues = preorderBusiness?.configs && getCateringValues(cateringTypeString, preorderBusiness?.configs)

  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement?.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement?.offsetHeight
    const hasMore = !(paginationProps.totalPages === paginationProps.currentPage)
    if (badScrollPosition || businessesList.loading || businessesList.error?.length > 0 || !hasMore) return
    getBusinesses()
  }, [businessesList, paginationProps])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleClickAddress = (e) => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  const toggleMap = () => {
    setActiveMap(!activeMap)
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

  useEffect(() => {
    if (mapErrors) {
      handleMapErrors(mapErrors)
      setActiveMap(false)
    }
  }, [mapErrors])

  const getCustomArray = (list) => {
    const isArray = Array.isArray(list)
    return isArray ? list : Object.values(list)
  }

  const handleClosePreorder = () => {
    setIsPreorder(false)
    setPreorderBusiness(null)
  }

  const handleOpenCities = () => {
    if (!citiesState?.cities?.length) {
      getCities()
    }
    setModals({ ...modals, citiesOpen: true })
  }

  const handleChangeCity = (cityId) => {
    changeCityFilter(cityId === orderState?.options?.city_id ? null : cityId)
  }

  const handleChangeType = (value) => {
    if (!orderState?.loading) {
      changeType(value)
      if (value === 1) {
        setIsPickupSelected(false)
      }
    }
  }

  const handleChangeToPickup = () => {
    const firstEnabledPickupType = orderTypes.find(type => configTypes?.includes(type.value) && type.value !== 1)?.value
    handleChangeType(firstEnabledPickupType)
    setIsPickupSelected(true)
  }

  useEffect(() => {
    if (preorderBusiness) setIsPreorder(true)
  }, [preorderBusiness])

  useEffect(() => {
    setActiveMap(false)
    if (!businessesList?.businesses?.length) return
    if (businessesList?.businesses?.length === 1 && configs?.activate_single_store_automatically?.value === '1') {
      onBusinessClick(businessesList?.businesses[0])
      window.localStorage.setItem('single_business', true)
      return
    }
    window.localStorage.removeItem('single_business')
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
    if (pickupTypes.includes(orderState?.options?.type) && isCustomerMode) {
      setIsPickupSelected(true)
    }
  }, [orderState?.options?.type])

  const OrderTypesComponent = () => {
    return (
      <>
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
      </>
    )
  }

  if (logosLayout) {
    return (
      <BusinessLogosWrapper>
        <BusinessLogosContainer>
          <AutoScroll scrollId='businessLogos'>
            {businessesList?.loading ? (
              <Skeleton count={12} height={75} width={75} />
            ) : (
              <>
                {businessesList.businesses
                  ?.filter(business => business?.open)
                  ?.map(business => (
                    <BusinessLogo
                      key={business?.id}
                      isActive={actualSlug === business?.slug}
                      bgimage={business?.logo || theme.images?.dummies?.businessLogo}
                      onClick={() => onBusinessClick(business)}
                    />
                  ))}
              </>
            )}
          </AutoScroll>
        </BusinessLogosContainer>
      </BusinessLogosWrapper>
    )
  }

  return (
    <BusinessContainer>
      <PageBanner
        position='web_business_listing'
        isCustomerMode={isCustomerMode}
      />

      {(windowSize.width < 576 || (configs?.business_listing_hide_image?.value !== '1' && !isChew)) && (
        <BusinessBanner>
          {windowSize.width < 576 && (
            <OrderContextUI isBusinessList hideHero={(configs?.business_listing_hide_image?.value !== '1' && !isChew) && !hideHero} />
          )}
          {(configs?.business_listing_hide_image?.value !== '1' && !isChew) && !hideHero && !isCustomerMode && (
            <BusinessHeroImg
              bgimage={theme.images?.general?.businessHero}
              height={theme?.business_listing_view?.components?.business_hero?.style?.height}
            />
          )}
        </BusinessBanner>
      )}
      {(userCustomer && orderState?.options?.address?.address && isCustomerMode) && (
        <>
          <Title>{t('DELIVERY_TYPE', 'Delivery Type')}</Title>
          <TypesContainer>
            {configTypes.includes(1) && (
              <TypeButton onClick={() => handleChangeType(1)} disabled={orderState?.loading} activated={!isPickupSelected}>
                <IconTypeButton activated={!isPickupSelected}>
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
                onClick={() => handleChangeToPickup()}
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
          </TypesContainer>
          {isPickupSelected && (
            <TypesWrapper>
              <p>{t('WHAT_PICKUP_YOU_NEED', 'What kind of pickup do you need?')}</p>
              <AdditionalTypesContainer>
                <OrderTypesComponent />
              </AdditionalTypesContainer>
            </TypesWrapper>
          )}
        </>
      )}
      {!isCustomerMode && (
        <OrderProgress
          isChew={isChew}
          franchiseId={props.franchiseId}
          userCustomerId={userCustomer?.id}
          asDashboard={isCustomerMode}
          isCustomerMode={isCustomerMode}
        />
      )}
      {(configs?.business_listing_hide_image?.value !== '1' && isChew) && (
        <BusinessHeroImg
          bgimage={theme.images?.general?.businessHero}
          height={theme?.business_listing_view?.components?.business_hero?.style?.height}
        />
      )}
      {isCustomerMode && !hidePreviousOrders && !businessesList.loading && (
        <OrdersSection
          titleContent={t('PREVIOUS_ORDERS', 'Previous orders')}
          onRedirectPage={onRedirectPage}
          businessesIds={businessesIds}
          getCustomArray={getCustomArray}
          businessesList={businessesList}
          isCustomerMode={isCustomerMode}
          userCustomer={userCustomer}
          disableSkeletons
        />
      )}
      {!isCustomerMode && !hideSearchSection && (
        <>
          <WrapperSearch isCustomLayout={isCustomLayout} isCustomerMode={isCustomerMode}>
            {!hideSearch && windowSize.width <= 1200 && (
              <SearchBar
                lazyLoad
                search={searchValue}
                isCustomLayout={isCustomLayout}
                placeholder={t('SEARCH_BUSINESSES', 'Search Businesses')}
                onSearch={handleChangeSearch}
                handleCustomEnter={() => configs?.advanced_business_search_enabled?.value === '0'
                  ? null
                  : onRedirectPage({ page: 'business_search' })}
              />
            )}
            {!hideCities && citiesState?.cities?.length > 0 && (
              <Button color='primary' onClick={handleOpenCities}>
                {citiesState?.cities?.find(city => city?.id === orderState?.options?.city_id)?.name || t('SELECT_A_CITY', 'Select a city')}
              </Button>
            )}
            {isCustomLayout && (
              <FiMap onClick={toggleMap} />
            )}
          </WrapperSearch>
          {activeMap && (
            <BusinessesMap
              businessList={businessesList.businesses}
              userLocation={orderState?.options?.address?.location}
              setErrors={setMapErrors}
            />
          )}
        </>
      )}
      {!isChew && hasHighRatedBusiness && !props.franchiseId && !hideHighestBusiness && (
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
          />
          <Divider />
        </HightestRatedWrapper>
      )}

      {(((configs && configs?.business_listing_categories !== false) || !isCustomLayout) && !isAllCategoriesHidden) && (
        <BusinessTypeFilter
          images={props.images}
          businessTypes={props.businessTypes}
          defaultBusinessType={props.defaultBusinessType}
          handleChangeBusinessType={handleChangeBusinessType}
        />
      )}
      {isCustomerMode && (
        <SearchContainer>
          {isCustomLayout && (
            <BusinessesTitle isCustomerMode={isCustomerMode}>
              {t('BUSINESSES', 'Businesses')}
            </BusinessesTitle>
          )}
          <WrapperSearch isCustomLayout={isCustomLayout} isCustomerMode={isCustomerMode}>
            <SearchBar
              lazyLoad
              search={searchValue}
              isCustomLayout={isCustomLayout}
              placeholder={t('SEARCH_BUSINESSES', 'Search Businesses')}
              onSearch={handleChangeSearch}
            />
            {configs?.advanced_business_search_enabled?.value === '1' && (
              <FiFilter onClick={() => onRedirectPage({ page: 'business_search' })} />
            )}
            {isCustomLayout && (
              <FiMap onClick={toggleMap} />
            )}
            {!hideCities && citiesState?.cities?.length > 0 && (
              <Button color='primary' onClick={handleOpenCities}>
                {citiesState?.cities?.find(city => city?.id === orderState?.options?.city_id)?.name || t('SELECT_A_CITY', 'Select a city')}
              </Button>
            )}
          </WrapperSearch>
        </SearchContainer>
      )}
      {isCustomerMode && activeMap && (
        <BusinessesMap
          businessList={businessesList.businesses}
          userLocation={orderState?.options?.address?.location}
          setErrors={setMapErrors}
        />
      )}
      <>
        {((!isCustomLayout && isCustomerMode && businessesList?.businesses?.length > 0) || isChew) && (
          <BusinessesTitle>
            {t('BUSINESSES', 'Businesses')}
          </BusinessesTitle>
        )}

        <BusinessList>
          {
            !businessesList.loading && businessesList.businesses.length === 0 && businessesList?.fetched && (
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
            businessesList.businesses?.map((business) => (
              <BusinessController
                key={business.id}
                className='card'
                business={business}
                isBusinessOpen={business.open && business?.enabled !== false}
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
          {(businessesList.loading || !businessesList?.fetched) && (
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
        </BusinessList>
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

export const OriginalBusinessesListing = (props) => {
  const [, t] = useLanguage()
  const businessListingProps = {
    ...props,
    UIComponent: BusinessesListingUI,
    paginationSettings: { initialPage: 1, pageSize: 25, controlType: 'infinity' },
    orderTypes: props.orderTypes || [
      {
        value: 1,
        text: t('DELIVERY', 'Delivery'),
        description: t('ORDERTYPE_DESCRIPTION_DELIVERY', 'Delivery description')
      },
      {
        value: 2,
        text: t('PICKUP', 'Pickup'),
        description: t('ORDERTYPE_DESCRIPTION_PICKUP', 'Pickup description')
      },
      {
        value: 3,
        text: t('EAT_IN', 'Eat in'),
        description: t('ORDERTYPE_DESCRIPTION_EATIN', 'Eat in description')
      },
      {
        value: 4,
        text: t('CURBSIDE', 'Curbside'),
        description: t('ORDERTYPE_DESCRIPTION_CURBSIDE', 'Curbside description')
      },
      {
        value: 5,
        text: t('DRIVE_THRU', 'Drive thru'),
        description: t('ORDERTYPE_DESCRIPTION_DRIVETHRU', 'Drive Thru description')
      }
    ]
  }
  return <BusinessListController {...businessListingProps} />
}
