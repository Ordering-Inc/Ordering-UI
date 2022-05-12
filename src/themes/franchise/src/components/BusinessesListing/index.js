import React, { useEffect, useState, useCallback, useRef } from 'react'
import FiMap from '@meronex/icons/fi/FiMap'
import Skeleton from 'react-loading-skeleton'
import {
  BusinessContainer,
  BusinessList,
  ErrorMessage,
  WrapperSearch,
  BusinessesTitle,
  PreviousButtonWrapper,
  BusinessListWrapper,
  BusinessMapWrapper
} from './styles'

import { Button } from '../../styles/Buttons'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

import { Modal } from '../Modal'
import { Alert } from '../Confirm'
import { AddressForm } from '../AddressForm'
import { AddressList } from '../AddressList'
import { SearchBar } from '../SearchBar'
import { BusinessController } from '../BusinessController'
import { OrdersOption } from '../OrdersOption'
import { BusinessesMap } from '../BusinessesMap'
import { useLocation, useHistory } from 'react-router-dom'

import {
  useOrder,
  useSession,
  useLanguage,
  useConfig,
  GoogleMapsMap,
  BusinessList as BusinessListController
} from 'ordering-components'

const PIXELS_TO_SCROLL = 300

const BusinessesListingUI = (props) => {
  const {
    businessesList,
    paginationProps,
    searchValue,
    getBusinesses,
    isCustomLayout,
    onRedirectPage,
    handleChangeSearch,
    handleBusinessClick,
    currentPageParam,
    franchiseEnabled
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ auth }] = useSession()
  const [{ configs }] = useConfig()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [activeMap, setActiveMap] = useState(false)
  const [mapErrors, setMapErrors] = useState('')
  const [prevPage, setPrevPage] = useState({ page: currentPageParam || 1, loading: false })
  const [nextPage, setNextPage] = useState({ page: currentPageParam || 1, loading: false })
  const location = useLocation()
  const history = useHistory()
  const windowSize = useWindowSize()
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const businessesIds = isCustomLayout &&
    businessesList.businesses &&
    businessesList.businesses?.map(business => business.id)
  const businessListRef = useRef(null)

  const googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: true
  }

  const handleScroll = useCallback(() => {
    if (windowSize.width > 850) {
      const innerHeightScrolltop = businessListRef?.current?.clientHeight + businessListRef?.current?.scrollTop + 50
      const badScrollPosition = innerHeightScrolltop < businessListRef?.current?.scrollHeight
      const hasMore = !(paginationProps.totalPages === paginationProps.currentPage)
      const nextPageHasMore = !(paginationProps.totalPages === nextPage.page)
      if (badScrollPosition || businessesList.loading || !hasMore || !nextPageHasMore) return
      handleClickNextItems(false, nextPage.page + 1, false)
    } else {
      const innerHeightScrolltop = window.innerHeight + document.documentElement?.scrollTop + PIXELS_TO_SCROLL
      const badScrollPosition = innerHeightScrolltop < document.documentElement?.offsetHeight
      const hasMore = !(paginationProps.totalPages === paginationProps.currentPage)
      const nextPageHasMore = !(paginationProps.totalPages === nextPage.page)
      if (badScrollPosition || businessesList.loading || !hasMore || !nextPageHasMore) return
      handleClickNextItems(false, nextPage.page + 1, false)
    }
  }, [businessesList, paginationProps])

  useEffect(() => {
    if (windowSize.width > 850) {
      businessListRef.current.addEventListener('scroll', handleScroll)
      return () => businessListRef.current.removeEventListener('scroll', handleScroll)
    } else {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    if (!businessesList.loading) {
      setNextPage({ ...nextPage, loading: false })
      setPrevPage({ ...prevPage, loading: false })
    }
  }, [businessesList.loading])

  useEffect(() => {
    if (mapErrors) {
      mapErrors !== 'ERROR_NOT_FOUND_BUSINESSES' && handleMapErrors(mapErrors)
      setActiveMap(false)
    }
  }, [mapErrors])

  useEffect(() => {
    if (orderState.loading && !businessesList.loading) {
    //  const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname
    //  window.history.pushState({ path: newurl }, '', newurl)
      const params = new URLSearchParams()
      history.replace({ pathname: location.pathname, search: params.toString() })
      setPrevPage({ loading: true, page: 1 })
      setNextPage({ loading: true, page: 1 })
    }
  }, [orderState.loading])

  const handleClickAddress = (e) => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setAlertState({ open: true, content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select or add an address to search')] })
      return
    }
    setModals({ listOpen: false, formOpen: false })
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

  const getCustomArray = (list) => {
    const isArray = Array.isArray(list)
    return isArray ? list : Object.values(list)
  }

  const handleClickNextItems = () => {
    getBusinesses(false, nextPage.page + 1, false)
    // const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + `?page=${nextPage.page + 1}`
    // window.history.pushState({ path: newurl }, '', newurl)
    setNextPage({ loading: true, page: nextPage.page + 1 })
  }

  const handleClickPrevItems = () => {
    getBusinesses(false, prevPage.page - 1, true)
    setPrevPage({ loading: true, page: prevPage.page - 1 })
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
        <BusinessListWrapper ref={businessListRef}>
          {franchiseEnabled && (
            <WrapperSearch isCustomLayout={isCustomLayout}>
              <SearchBar
                lazyLoad
                search={searchValue}
                isCustomLayout={isCustomLayout}
                placeholder={t('SEARCH_BUSINESSES', 'Search Businesses')}
                onSearch={handleChangeSearch}
              />
              {isCustomLayout && (
                <FiMap onClick={toggleMap} />
              )}
            </WrapperSearch>
          )}
          {paginationProps.currentPage !== 1 && prevPage.page !== 1 && (
            <PreviousButtonWrapper>
              <Button onClick={() => handleClickPrevItems()} color='primary'>
                {t('SHOW_PREVIOUS_BUSINESS', 'Show previous businesses...')}
              </Button>
            </PreviousButtonWrapper>
          )}
          <BusinessList>
            {businessesList.loading && (!prevPage.loading || !nextPage.loading) && (
              [...Array(paginationProps.pageSize).keys()].map(i => (
                <BusinessController
                  key={i}
                  className='card'
                  business={{}}
                  isSkeleton
                  orderType={orderState?.options?.type}
                />
              ))
            )}
            {businessesList.loading && prevPage.loading && (
              [...Array(paginationProps.pageSize).keys()].map(i => (
                <BusinessController
                  key={i}
                  className='card'
                  business={{}}
                  isSkeleton
                  orderType={orderState?.options?.type}
                />
              ))
            )}
            {
              !businessesList.loading && franchiseEnabled && (businessesList.businesses.length === 0) && (
                <NotFoundSource
                  content={t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')}
                >
                  <Button
                    outline
                    color='primary'
                    onClick={() => handleClickAddress()}
                  >
                    {t('CHANGE_ADDRESS', 'Select other Address')}
                  </Button>
                </NotFoundSource>
              )
            }
            {
              !franchiseEnabled && !businessesList.loading && (
                <NotFoundSource
                  content={t('NOT_ENABLED_FRANCHISE', 'Franchise is not enabled or franchise id doesn\'t exist')}
                />
              )
            }
            {
              franchiseEnabled && businessesList.businesses.map((business) => (
                <BusinessController
                  key={business.id}
                  className='card'
                  business={business}
                  isBusinessOpen={business.open}
                  handleCustomClick={handleBusinessClick}
                  orderType={orderState?.options?.type}
                  isCustomLayout={isCustomLayout}
                  isShowCallcenterInformation={isCustomLayout}
                />
              ))
            }
            {businessesList.loading && nextPage.loading && (
              [...Array(paginationProps.nextPageItems ? paginationProps.nextPageItems : 8).keys()].map(i => (
                <BusinessController
                  key={i}
                  className='card'
                  business={{}}
                  isSkeleton
                  orderType={orderState?.options?.type}
                />
              ))
            )}
            {businessesList.error && businessesList.error.length > 0 && businessesList.businesses.length === 0 && (
              businessesList.error.map((e, i) => (
                <ErrorMessage key={i}>{t('ERROR', 'ERROR')}: [{e?.message || e}]</ErrorMessage>
              ))
            )}
          </BusinessList>
        </BusinessListWrapper>
        <BusinessMapWrapper>
          {(configs?.google_maps_api_key?.value && orderState?.options?.address?.location) ? (
            (businessesList?.businesses?.length > 0 && franchiseEnabled) ? (
              <BusinessesMap
                businessList={businessesList.businesses}
                userLocation={orderState?.options?.address?.location}
                setErrors={setMapErrors}
              />
            ) : (
              <GoogleMapsMap
                apiKey={configs?.google_maps_api_key?.value}
                location={orderState?.options?.address?.location}
                mapControls={googleMapsControls}
                setErrors={setMapErrors}
              />
            )
          ) : (
            <Skeleton height={350} />
          )}
        </BusinessMapWrapper>

        {isCustomLayout && onRedirectPage && (
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
            />
            <OrdersOption
              horizontal
              asDashboard
              isBusinessesPage
              businessesIds={businessesIds}
              onRedirectPage={onRedirectPage}
              userCustomerId={userCustomer?.id}
              isCustomLayout
              isBusinessesLoading={businessesList.loading}
            />
          </>
        )}

        {isCustomLayout && businessesList?.businesses?.length > 0 && (
          <BusinessesTitle>
            {t('BUSINESSES', 'Businesses')}
          </BusinessesTitle>
        )}
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

export const BusinessesListing = (props) => {
  const businessListingProps = {
    ...props,
    franchiseId: 67,
    UIComponent: BusinessesListingUI
  }

  return <BusinessListController {...businessListingProps} />
}
