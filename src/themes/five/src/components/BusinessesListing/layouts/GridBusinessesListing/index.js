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
  ErrorMessage,
  WrapperSearch,
  BusinessesTitle,
  BusinessHeroImg,
  HightestRatedWrapper,
  Divider,
  OrderProgressWrapper,
  SearchContainer
} from './styles'

import { Button } from '../../../../styles/Buttons'
import { NotFoundSource } from '../../../NotFoundSource'

import { Modal } from '../../../Modal'
import { Alert } from '../../../Confirm'
import { AddressForm } from '../../../AddressForm'
import { AddressList } from '../../../AddressList'
import { SearchBar } from '../../../SearchBar'

import { BusinessTypeFilter } from '../../../BusinessTypeFilter'
import { BusinessController } from '../../../BusinessController'
import { OrdersOption } from '../../../OrdersOption'
import { BusinessesMap } from '../../../../../../../components/BusinessesMap'

import { HighestRated } from '../../../HighestRated'
import { BusinessPreorder } from '../../../BusinessPreorder'
import { OrderProgress } from '../../../OrderProgress'

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
    AdminSettings
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ auth }] = useSession()
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [activeMap, setActiveMap] = useState(false)
  const [mapErrors, setMapErrors] = useState('')
  const [isPreorder, setIsPreorder] = useState(false)
  const [preorderBusiness, setPreorderBusiness] = useState(null)
  const [hasHighRatedBusiness, setHasHighRatedBusiness] = useState(true)
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const businessesIds = isCustomLayout &&
    businessesList.businesses &&
    businessesList.businesses?.map(business => business.id)

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

  const handleClosePreorder = () => {
    setIsPreorder(false)
    setPreorderBusiness(null)
  }

  useEffect(() => {
    if (preorderBusiness) setIsPreorder(true)
  }, [preorderBusiness])

  const OrdersSection = (titleContent) => {
    return (
      <>
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
              isCustomerMode={isCustomerMode}
            />
            <OrdersOption
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

            />
          </>
        )}
      </>
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
        <BusinessHeroImg bgimage={theme.images?.general?.businessHero} />
        <OrderProgressWrapper>
          <OrderProgress userCustomerId={userCustomer?.id} asDashboard={isCustomerMode} isCustomerMode={isCustomerMode} />
        </OrderProgressWrapper>
        {isCustomerMode && (
          <OrdersSection titleContent={t('PREVIOUS_ORDERS', 'Previous orders')} />
        )}
        {!isCustomerMode && (
          <>
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
            {activeMap && (
              <BusinessesMap
                businessList={businessesList.businesses}
                userLocation={orderState?.options?.address?.location}
                setErrors={setMapErrors}
              />
            )}
          </>
        )}
        {hasHighRatedBusiness && (
          <HightestRatedWrapper>
            <Divider />
            <HighestRated
              handleClickAddress={handleClickAddress}
              setHasHighRatedBusiness={setHasHighRatedBusiness}
              onBusinessClick={onBusinessClick}
              isCustomerMode={isCustomerMode}
              AdminSettings={AdminSettings}
            />
            <Divider />
          </HightestRatedWrapper>
        )}
        {((configs && configs?.business_listing_categories !== false) || !isCustomLayout) && (
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
          {!isCustomLayout && isCustomerMode && businessesList?.businesses?.length > 0 && (
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
                  AdminSettings={AdminSettings}
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
            {businessesList.error && businessesList.error.length > 0 && businessesList.businesses.length === 0 && (
              businessesList.error.map((e, i) => (
                <ErrorMessage key={i}>{t('ERROR', 'ERROR')}: [{e?.message || e}]</ErrorMessage>
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
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const GridBusinessesListing = (props) => {
  const businessListingProps = {
    ...props,
    UIComponent: BusinessesListingUI,
    paginationSettings: { initialPage: 1, pageSize: 25, controlType: 'infinity' }
  }
  return <BusinessListController {...businessListingProps} />
}
