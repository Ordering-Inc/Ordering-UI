import React, { useEffect, useState, useCallback } from 'react'
import FiMap from '@meronex/icons/fi/FiMap'
import Skeleton from 'react-loading-skeleton'
import {
  useOrder,
  useSession,
  useLanguage,
  useConfig,
  useUtils,
  BusinessList as BusinessListController
} from 'ordering-components'

import { Button } from '../../../../../../../styles/Buttons'
import { NotFoundSource } from '../../../../../../../components/NotFoundSource'
import { Alert } from '../../../../../../../components/Confirm'
// import { BusinessTypeFilter } from '../../../../../../../components/BusinessTypeFilter'
import { OrdersOption } from '../../../../../../../components/OrdersOption'
import { useWindowSize } from '../../../../../../../hooks/useWindowSize'

import { Modal } from '../../../../../../six/src/components/Modal'
import { BusinessesMap } from '../../../../../../six/src/components/BusinessesMap'
import { BusinessController } from '../../../../../../six/src/components/BusinessController'
import { SearchBar } from '../../../../../../six/src/components/SearchBar'
import { AddressList } from '../../../../../../six/src/components/AddressList'
import { AddressForm } from '../../../../../../six/src/components/AddressForm'
import { BusinessInformation } from '../../../../../../six/src/components/BusinessInformation'

import {
  BusinessContainer,
  BusinessList,
  ErrorMessage,
  WrapperSearch,
  BusinessesTitle,
  ListWrapper,
  BusinessContent,
  MapWrapper
} from './styles'

const PIXELS_TO_SCROLL = 500
const BusinessesListingUI = (props) => {
  const {
    businessesList,
    paginationProps,
    searchValue,
    getBusinesses,
    isCustomLayout,
    onRedirectPage,
    handleChangeSearch,
    handleBusinessClick
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ auth }] = useSession()
  const [{ configs }] = useConfig()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [activeMap, setActiveMap] = useState(false)
  const [mapErrors, setMapErrors] = useState('')
  const [showBusinessInfo, setShowBusinessInfo] = useState(false)
  const [businessInfoById, setBusinessInfoById] = useState({})
  const windowSize = useWindowSize()
  const [{ optimizeImage }] = useUtils()

  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const businessesIds = isCustomLayout &&
    businessesList.businesses &&
    businessesList.businesses?.map(business => business.id)

  const handleScroll = useCallback(() => {
    const listWindows = document.querySelector('#list_wrapper')
    const innerHeightScrolltop = listWindows.innerHeight + document.documentElement?.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement?.offsetHeight
    const hasMore = !(paginationProps.totalPages === paginationProps.currentPage)
    if (badScrollPosition || businessesList.loading || !hasMore) return
    getBusinesses()
  }, [businessesList, paginationProps])

  useEffect(() => {
    if (!showBusinessInfo) {
      const listWindows = document.querySelector('#list_wrapper')
      listWindows.addEventListener('scroll', handleScroll)
      return () => listWindows.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, showBusinessInfo])

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

  const handleShowBusinessInfo = (business) => {
    setShowBusinessInfo(true)
    setBusinessInfoById(business)
  }

  const types = ['food', 'laundry', 'alcohol', 'groceries']
  const getBusinessType = () => {
    if (Object.keys(businessInfoById).length <= 0) return t('GENERAL', 'General')
    const _types = []
    types.forEach(type => businessInfoById[type] && _types.push(
      t(`BUSINESS_TYPE_${type?.replace(/\s/g, '_')?.toUpperCase()}`, type)
    ))
    return _types.join(', ')
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
        {!showBusinessInfo
          ? (
            <BusinessContent>
              <ListWrapper id='list_wrapper' className='list-wrapper'>
                <>
                  {windowSize.width > 850 && (
                    <WrapperSearch isCustomLayout={isCustomLayout}>
                      <SearchBar
                        lazyLoad
                        search={searchValue}
                        isCustomLayout
                        placeholder={t('SEARCH_BUSINESSES', 'Search Businesses')}
                        onSearch={handleChangeSearch}
                        handleEnterClick={term => onRedirectPage({ page: configs?.advanced_business_search_enabled?.value === '1' && 'business_search', search: `?term=${term}` })}
                      />
                      {isCustomLayout && (
                        <FiMap onClick={toggleMap} />
                      )}
                    </WrapperSearch>
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
                          >
                            {t('CHANGE_ADDRESS', 'Select other Address')}
                          </Button>
                        </NotFoundSource>
                      )
                    }
                    {businessesList.businesses?.map((business) => (
                      <BusinessController
                        key={business.id}
                        className='card'
                        business={business}
                        handleCustomClick={handleBusinessClick}
                        handleShowBusinessInfo={(business) => handleShowBusinessInfo(business)}
                        orderType={orderState?.options?.type}
                        isCustomLayout={isCustomLayout}
                        isShowCallcenterInformation={isCustomLayout}
                      />
                    ))}
                    {businessesList.loading && (
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
                </>
              </ListWrapper>
              <MapWrapper className='map-wrapper'>
                {windowSize.width < 850 && (
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
                {(configs?.google_maps_api_key?.value && businessesList?.businesses?.length > 0) ? (
                  <BusinessesMap
                    businessList={businessesList.businesses}
                    userLocation={orderState?.options?.address?.location}
                    setErrors={setMapErrors}
                  />
                ) : (
                  <Skeleton width={70} />
                )}
              </MapWrapper>
            </BusinessContent>
          ) : (
            <>
              {
                businessInfoById &&
                  <BusinessInformation
                    business={businessInfoById}
                    getBusinessType={getBusinessType}
                    optimizeImage={optimizeImage}
                    onClose={setShowBusinessInfo}
                    goBusiness={handleBusinessClick}
                  />
              }
            </>
          )}

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

export const StarbucksBusinessesListing = (props) => {
  const businessListingProps = {
    ...props,
    UIComponent: BusinessesListingUI
  }

  return <BusinessListController {...businessListingProps} />
}
