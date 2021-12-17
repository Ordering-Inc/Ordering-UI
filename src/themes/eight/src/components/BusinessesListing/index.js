import React, { useEffect, useState, useCallback } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { NavBar } from '../NavBar'

import {
  BusinessContainer,
  BusinessList,
  ErrorMessage,
  BusinessesTitle,
  PreviousButtonWrapper
} from './styles'

import { Button } from '../../styles/Buttons'
import { AddressForm } from '../AddressForm'
import { AddressList } from '../AddressList'
import { BusinessController } from '../BusinessController'

import { OrdersOption } from '../../../../../components/OrdersOption'
import { BusinessesMap } from '../../../../../components/BusinessesMap'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { Modal } from '../../../../../components/Modal'
import { Alert } from '../../../../../components/Confirm'

import {
  useOrder,
  useSession,
  useLanguage,
  BusinessList as BusinessListController
} from 'ordering-components'

const PIXELS_TO_SCROLL = 300

const BusinessesListingUI = (props) => {
  const {
    businessesList,
    paginationProps,
    getBusinesses,
    isCustomLayout,
    onRedirectPage,
    handleBusinessClick,
    currentPageParam,
    searchValue,
    handleChangeSearch
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ auth }] = useSession()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [activeMap, setActiveMap] = useState(false)
  const [mapErrors, setMapErrors] = useState('')
  const [prevPage, setPrevPage] = useState({ page: currentPageParam || 1, loading: false })
  const [nextPage, setNextPage] = useState({ page: currentPageParam || 1, loading: false })
  const location = useLocation()
  const history = useHistory()
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

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}

      <NavBar
        isHideBackButton
        isSearchShow
        title={t('SELECT_RESTAURANT', 'Select Restaurant')}
        lazyLoad
        searchValue={searchValue}
        handleChangeSearch={handleChangeSearch}
      />

      <BusinessContainer>
        <h1>{t('TITLE_BUSINESSES_LIST', 'Select a restaurant to start a order')}</h1>

        {activeMap && (
          <BusinessesMap
            businessList={businessesList.businesses}
            userLocation={orderState?.options?.address?.location}
            setErrors={setMapErrors}
          />
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
        {
          <PreviousButtonWrapper>
            {paginationProps.currentPage !== 1 && prevPage.page !== 1 && (
              <Button onClick={() => handleClickPrevItems()} color='primary'>
                {t('SHOW_PREVIOUS_BUSINESS', 'Show previous businesses...')}
              </Button>
            )}
          </PreviousButtonWrapper>
        }
        <BusinessList>
          {(businessesList.loading || prevPage.loading) && (
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

        <Modal
          title={t('ADDRESS_FORM', 'Address Form')}
          open={modals.formOpen}
          onClose={() => setModals({ ...modals, formOpen: false })}
        >
          <AddressForm
            isPopup
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
    UIComponent: BusinessesListingUI
  }

  return <BusinessListController {...businessListingProps} />
}
