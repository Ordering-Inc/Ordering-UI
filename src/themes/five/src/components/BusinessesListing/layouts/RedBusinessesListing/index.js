import React, { useEffect, useState, useCallback } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useTheme } from 'styled-components'
import FiMap from '@meronex/icons/fi/FiMap'
import Skeleton from 'react-loading-skeleton'
import {
  BusinessContainer,
  BusinessList,
  ErrorMessage,
  WrapperSearch,
  BusinessesTitle,
  PreviousButtonWrapper,
  Banner,
  Layout,
  BusinissWrapper,
  MapWrapper,
  NotFoundButtonWrapper,
  SkeletonWrapper
} from './styles'

import { Button } from '../../../../../../seven/src/styles/Buttons'
import { NotFoundSource } from '../../../../../../../components/NotFoundSource'
import { BusinessTypeFilter } from '../../../../../../../components/BusinessTypeFilter'
import { OrdersOption } from '../../../../../../../components/OrdersOption'
import { Modal } from '../../../../../../../components/Modal'
import { Alert } from '../../../../../../../components/Confirm'

import { AddressForm } from '../../../../../../seven/src/components/AddressForm'
import { AddressList } from '../../../../../../seven/src/components/AddressList'
import { SearchBar } from '../../../../../../seven/src/components/SearchBar'
import { BusinessController } from '../../../../../../seven/src/components/BusinessController'
import { BusinessesMap } from '../../../../../../seven/src/components/BusinessesMap'

import {
  useOrder,
  useSession,
  useLanguage,
  useConfig,
  useEvent,
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
    handleChangeBusinessType,
    handleBusinessClick,
    currentPageParam
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ auth }] = useSession()
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const [events] = useEvent()
  const history = useHistory()
  const location = useLocation()

  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [activeMap, setActiveMap] = useState(true)
  const [isPickup, setIsPickup] = useState(false)
  const [mapErrors, setMapErrors] = useState('')
  const [prevPage, setPrevPage] = useState({ page: currentPageParam || 1, loading: false })
  const [nextPage, setNextPage] = useState({ page: currentPageParam || 1, loading: false })
  const [categoryShow] = useState(false)
  const [brandBusiness, setBrandBusiness] = useState([])
  const [targetBusiness, setTargetedBusiness] = useState()
  const isSearchPage = location.pathname === '/search'
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const businessesIds = isCustomLayout &&
    businessesList.businesses &&
    businessesList.businesses?.map(business => business.id)

  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement?.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement?.offsetHeight
    const hasMore = !(paginationProps.totalPages === paginationProps.currentPage)
    const nextPageHasMore = !(paginationProps.totalPages === nextPage.page)
    if (badScrollPosition || businessesList.loading || !hasMore || !nextPageHasMore) return
    handleClickNextItems(false, nextPage.page + 1, false)
  }, [businessesList, paginationProps])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (!businessesList.loading) {
      setNextPage({ ...nextPage, loading: false })
      setPrevPage({ ...prevPage, loading: false })
    }
  }, [businessesList.loading])

  useEffect(() => {
    if (mapErrors) {
      handleMapErrors(mapErrors)
      setActiveMap(false)
    }
  }, [mapErrors])

  useEffect(() => {
    if (orderState.loading && !businessesList.loading) {
      const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname
      window.history.pushState({ path: newurl }, '', newurl)
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
    const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + `?page=${nextPage.page + 1}`
    window.history.pushState({ path: newurl }, '', newurl)
    setNextPage({ loading: true, page: nextPage.page + 1 })
  }

  const handleClickPrevItems = () => {
    getBusinesses(false, prevPage.page - 1, true)
    setPrevPage({ loading: true, page: prevPage.page - 1 })
  }

  const changeBusinessType = (category) => {
    setNextPage({ loading: true, page: 1 })
    setPrevPage({ loading: true, page: 1 })
    const params = new URLSearchParams({ page: 1 })
    history.replace({ pathname: location.pathname, search: params.toString() })
    handleChangeBusinessType(category)
  }

  const fillterBrand = () => {
    let containBrandBusineess
    if (!businessesList.loading) {
      // const mainbrand = ''
      const mainbrand = 'Archie'
      containBrandBusineess = businessesList.businesses.filter(businesse => businesse.name.toLowerCase().includes(mainbrand.toLowerCase()))
      containBrandBusineess.sort((a, b) => a.distance - b.distance)
    }
    setBrandBusiness(containBrandBusineess)
  }

  useEffect(() => {
    if (!businessesList.loading) {
      fillterBrand()
    }
  }, [businessesList])

  useEffect(() => {
    if (orderState?.options?.type === 2) {
      setIsPickup(true)
    } else {
      setIsPickup(false)
    }
  }, [orderState])

  const forceGotoBusiness = (business) => {
    const storeParam = business.slug
    events.emit('go_to_page', { page: 'business', params: { store: storeParam } })
  }

  useEffect(() => {
    if (brandBusiness.length > 0 && orderState.options.type === 1) {
      const _distances = brandBusiness.map((business) => business?.distance)
      const minDis = Math.min(..._distances)
      const haveMindisBusiness = brandBusiness.filter(business => business?.distance === minDis)[0]
      setTargetedBusiness(haveMindisBusiness)
    }
  }, [brandBusiness])

  const handleGotoHome = () => {
    history.push('/home')
  }


  useEffect(() => {
    if (targetBusiness && orderState.options.type === 1 && isSearchPage) {
      forceGotoBusiness(targetBusiness)
    }
  }, [targetBusiness, orderState.options.type === 1, isSearchPage])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <BusinessContainer>
        {categoryShow && (
          <>
            {((configs && configs?.business_listing_categories !== false) || !isCustomLayout) && (
              <BusinessTypeFilter
                images={props.images}
                businessTypes={props.businessTypes}
                defaultBusinessType={props.defaultBusinessType}
                handleChangeBusinessType={changeBusinessType}
              />
            )}
          </>
        )}
        <Banner bgimage={theme.images?.general?.businessListBaner}>
          {!(theme.images?.general?.businessListBaner) && (
            <p>1440px X  539px banner image</p>
          )}
        </Banner>
        <BusinessList>
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
          <>
            {businessesList?.businesses?.length > 0 ? (
              <Layout>
                <BusinissWrapper isPickup={isPickup}>
                  {businessesList?.businesses?.length > 0 && (
                    <BusinessesTitle>
                      {t('FEATURES_BUSINESS', 'Features Businesses')}
                    </BusinessesTitle>
                  )}

                  {paginationProps.currentPage !== 1 && prevPage.page !== 1 && (
                    <PreviousButtonWrapper>
                      <Button onClick={() => handleClickPrevItems()} color='primary'>
                        {t('SHOW_PREVIOUS_BUSINESS', 'Show previous businesses...')}
                      </Button>
                    </PreviousButtonWrapper>
                  )}

                  {businessesList.loading && prevPage.loading && (
                    [...Array(paginationProps.pageSize).keys()].map(i => (
                      <BusinessController
                        key={i}
                        className='card'
                        business={{}}
                        isSkeleton
                        orderType={orderState?.options?.type}
                        isPickup={isPickup}
                      />
                    ))
                  )}
                  {
                    !businessesList.loading && brandBusiness.length === 0 && (
                      <NotFoundSource />
                    )
                  }
                  {
                    brandBusiness?.map((business) => (
                      <BusinessController
                        key={business.id}
                        className='card'
                        business={business}
                        isBusinessOpen={business.open}
                        handleCustomClick={handleBusinessClick}
                        orderType={orderState?.options?.type}
                        isCustomLayout={isCustomLayout}
                        isShowCallcenterInformation={isCustomLayout}
                        isPickup={isPickup}
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
                        isPickup={isPickup}
                      />
                    ))
                  )}

                </BusinissWrapper>
                {isPickup && (
                  <MapWrapper isPickup={isPickup}>
                    {activeMap && (
                      <BusinessesMap
                        businessList={brandBusiness}
                        userLocation={orderState?.options?.address?.location}
                        setErrors={setMapErrors}
                      />
                    )}
                  </MapWrapper>
                )}
              </Layout>
            ) : (
              <>
                {
                  !businessesList.loading && businessesList.businesses.length === 0 ? (
                    <NotFoundSource
                      content={t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')}
                    >
                      <NotFoundButtonWrapper>
                        <Button
                          outline
                          color='primary'
                          onClick={() => handleClickAddress()}
                        >
                          {t('CHANGE_ADDRESS', 'Select other Address')}
                        </Button>

                        <Button
                          color='primary'
                          onClick={() => handleGotoHome()}
                        >
                          {t('GO_HOME', 'Go to home')}
                        </Button>
                      </NotFoundButtonWrapper>
                    </NotFoundSource>
                  ) : (
                    <Layout>
                      <BusinissWrapper isPickup={isPickup}>
                        <SkeletonWrapper>
                          <Skeleton variant='rect' />
                          <Skeleton variant='rect' />
                        </SkeletonWrapper>
                      </BusinissWrapper>
                      <MapWrapper isPickup={isPickup} isSkeleton>
                        <SkeletonWrapper>
                          <Skeleton variant='rect' height={420} />
                        </SkeletonWrapper>
                      </MapWrapper>
                    </Layout>
                  )
                }
                {businessesList.error && businessesList.error.length > 0 && businessesList.businesses.length === 0 && (
                  businessesList.error.map((e, i) => (
                    <ErrorMessage key={i}>{t('ERROR', 'ERROR')}: [{e?.message || e}]</ErrorMessage>
                  ))
                )}
              </>
            )}
          </>
        </BusinessList>

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

export const RedBusinessesListing = (props) => {
  const businessListingProps = {
    ...props,
    UIComponent: BusinessesListingUI
  }

  return <BusinessListController {...businessListingProps} />
}
