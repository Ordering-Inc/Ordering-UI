import React, { useEffect, useState, useCallback } from 'react'
import { useTheme } from 'styled-components'
import FiMap from '@meronex/icons/fi/FiMap'
import FiFilter from '@meronex/icons/fi/FiFilter'
import {
  useOrder,
  useSession,
  useLanguage,
  useConfig,
  BusinessList as BusinessListController,
  useOrderingTheme
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
  BusinessLogosWrapper
} from './styles'
import { useWindowSize } from '../../../../../../../hooks/useWindowSize'
import { Button } from '../../../../styles/Buttons'
import { NotFoundSource } from '../../../NotFoundSource'

import { Modal } from '../../../Modal'
import { Alert } from '../../../Confirm'
import { SearchBar } from '../../../SearchBar'

import { BusinessTypeFilter } from '../../../BusinessTypeFilter'
import { BusinessController } from '../../../BusinessController'
import { OrdersOption } from '../../../OrdersOption'
import { BusinessesMap } from '../../../../../../../components/BusinessesMap'

import { HighestRated } from '../../../HighestRated'
import { BusinessPreorder } from '../../../BusinessPreorder'
import { OrderProgress } from '../../../OrderProgress'
import { PageBanner } from '../../../PageBanner'

import Skeleton from 'react-loading-skeleton'
import { AutoScroll } from '../../../AutoScroll'
import { CitiesControl } from '../../../CitiesControl'
import { OrderContextUI } from '../../../OrderContextUI'

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
    actualSlug
  } = props

  const [, t] = useLanguage()
  const [orderState, { changeCityFilter }] = useOrder()
  const [{ auth }] = useSession()
  const [{ configs }] = useConfig()
  const windowSize = useWindowSize()
  const [orderingTheme] = useOrderingTheme()
  const theme = useTheme()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false, citiesOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [activeMap, setActiveMap] = useState(false)
  const [mapErrors, setMapErrors] = useState('')
  const [isPreorder, setIsPreorder] = useState(false)
  const [preorderBusiness, setPreorderBusiness] = useState(null)
  const [hasHighRatedBusiness, setHasHighRatedBusiness] = useState(true)
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const [favoriteIds, setFavoriteIds] = useState([])
  const hideCities = (theme?.business_listing_view?.components?.cities?.hidden || orderState?.options?.type !== 2) ?? true
  const hideSearch = theme?.business_listing_view?.components?.search?.hidden
  const hideFilter = theme?.business_listing_view?.components?.filter?.hidden || hideSearch
  const hideHero = theme?.business_listing_view?.components?.business_hero?.hidden
  const hidePreviousOrders = theme?.business_listing_view?.components?.previous_orders_block?.hidden
  const hideHighestBusiness = theme?.business_listing_view?.components?.highest_rated_business_block?.hidden
  const hideSearchSection = hideCities && hideSearch && hideFilter
  const isAllCategoriesHidden = theme?.business_listing_view?.components?.categories?.hidden
  const businessesIds = businessesList.businesses &&
    businessesList.businesses?.map(business => business.id)
  const isChew = orderingTheme?.theme?.header?.components?.layout?.type?.toLowerCase() === 'chew'

  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement?.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement?.offsetHeight
    const hasMore = !(paginationProps.totalPages === paginationProps.currentPage)
    if (badScrollPosition || businessesList.loading || businessesList.error?.length > 0 || !hasMore) return
    getBusinesses()
  }, [businessesList.loading, paginationProps])

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

  const OrdersSection = ({ titleContent }) => {
    return (
      <>
        {onRedirectPage && (
          <>
            <OrdersOption
              horizontal
              isBusinessesPage
              onRedirectPage={onRedirectPage}
              titleContent={t('CARTS', 'Carts')}
              businessesIds={businessesIds}
              customArray={
                getCustomArray(orderState.carts)?.filter(cart => cart.products.length > 0)
              }
              isCustomLayout
              isBusinessesLoading={businessesList.loading}
              isCustomerMode={isCustomerMode}
              franchiseId={props.franchiseId}
            />
            <OrdersOption
              pastOrders
              horizontal
              asDashboard
              isBusinessesPage
              businessesIds={businessesIds}
              onRedirectPage={onRedirectPage}
              userCustomerId={userCustomer?.id}
              isCustomLayout
              titleContent={titleContent}
              isBusinessesLoading={businessesList.loading}
              isCustomerMode={isCustomerMode}
              franchiseId={props.franchiseId}
            />
          </>
        )}
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
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <BusinessContainer>
        {(windowSize.width < 576 || (configs?.business_listing_hide_image?.value !== '1' && !isChew)) && (
          <BusinessBanner>
            {windowSize.width < 576 && (
              <OrderContextUI isBusinessList />
            )}
            {(configs?.business_listing_hide_image?.value !== '1' && !isChew) && !hideHero && (
              <BusinessHeroImg
                bgimage={theme.images?.general?.businessHero}
                height={theme?.business_listing_view?.components?.business_hero?.style?.height}
              />
            )}
          </BusinessBanner>
        )}
        {!!Object.values(orderState?.carts)?.length && (
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
        {isCustomerMode && !hidePreviousOrders && (
          <OrdersSection titleContent={t('PREVIOUS_ORDERS', 'Previous orders')} />
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
                  handleCustomEnter={() => onRedirectPage({ page: 'business_search' })}
                />
              )}
              {!hideCities && citiesState?.cities?.length > 0 && (
                <Button color='primary' onClick={handleOpenCities}>
                  {citiesState?.cities?.find(city => city?.id === orderState?.options?.city_id)?.name || t('SELECT_A_CITY', 'Select a city')}
                </Button>
              )}
              {!hideFilter && configs?.advanced_business_search_enabled?.value === '1' && (
                <FiFilter onClick={() => onRedirectPage({ page: 'business_search' })} />
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
              handleClickAddress={handleClickAddress}
              setHasHighRatedBusiness={setHasHighRatedBusiness}
              onBusinessClick={onBusinessClick}
              isCustomerMode={isCustomerMode}
              favoriteIds={favoriteIds}
              setFavoriteIds={setFavoriteIds}
            />
            <Divider />
          </HightestRatedWrapper>
        )}

        <PageBanner position='web_business_listing' />

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
        {!isCustomerMode && (
          <OrdersSection />
        )}
        <>
          {((!isCustomLayout && isCustomerMode && businessesList?.businesses?.length > 0) || isChew) && (
            <BusinessesTitle>
              {t('BUSINESSES', 'Businesses')}
            </BusinessesTitle>
          )}

          <BusinessList>
            {
              !businessesList.loading && businessesList.businesses.length === 0 && (
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
            {businessesList.loading && (
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
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const OriginalBusinessesListing = (props) => {
  const businessListingProps = {
    ...props,
    UIComponent: BusinessesListingUI,
    paginationSettings: { initialPage: 1, pageSize: 25, controlType: 'infinity' }
  }
  return <BusinessListController {...businessListingProps} />
}
