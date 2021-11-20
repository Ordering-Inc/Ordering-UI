import React, { useEffect, useState, useCallback } from 'react'
import FiMap from '@meronex/icons/fi/FiMap'
import FaMapMarkerAlt from '@meronex/icons/fa/FaMapMarkerAlt'
import GoPrimitiveDot from '@meronex/icons/go/GoPrimitiveDot'
import { useTheme } from 'styled-components'
import BiSearchAlt2 from '@meronex/icons/bi/BiSearchAlt2'
import Skeleton from 'react-loading-skeleton'
import {
  BusinessContainer,
  BusinessList,
  ErrorMessage,
  WrapperSearch,
  BusinessesTitle,
  BusinessHeroImg,
  BusinessBanner,
  BusinessFeatures,
  AddressMenu,
  FeatureItems,
  ItemInline,
  BusinessItemsWrapper,
  BusinessSearch,
  BusineessItems,
  BusinessItem,
  WrapperBusinessLogo,
  BusinessInfo,
  BusinessName,
  BusinessMeta,
  BusinessLogo,
  SearchTitle
} from './styles'
import { convertHoursToMinutes } from '../../../../../utils'
import { Button } from '../../styles/Buttons'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { Modal } from '../Modal'
import { Alert } from '../Confirm'
import { AddressForm } from '../AddressForm'
import { AddressList } from '../AddressList'
import { SearchBar } from '../SearchBar'
import { BusinessTypeFilter } from '../BusinessTypeFilter'
import { BusinessController } from '../BusinessController'
import { OrdersOption } from '../OrdersOption'
import { BusinessesMap } from '../../../../../components/BusinessesMap'
import { OrderTypeSelectorHeader } from '../../../../../components/OrderTypeSelectorHeader'
import { MomentPopover } from '../MomentPopover'

import {
  useOrder,
  useSession,
  useLanguage,
  useConfig,
  useUtils,
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
    handleBusinessClick
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ auth }] = useSession()
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false, searchOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [activeMap, setActiveMap] = useState(false)
  const [mapErrors, setMapErrors] = useState('')
  const [openPopover, setOpenPopover] = useState({})
  const windowSize = useWindowSize()
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()

  const businessesIds = isCustomLayout &&
    businessesList.businesses &&
    businessesList.businesses?.map(business => business.id)

  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement?.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement?.offsetHeight
    const hasMore = !(paginationProps.totalPages === paginationProps.currentPage)
    if (badScrollPosition || businessesList.loading || !hasMore) return
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

  const handleBusinessesSearch = () => {
    getBusinesses()
    setModals({
      ...modals,
      listOpen: false,
      formOpen: false,
      searchOpen: true
    })
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

  const handleTogglePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: !openPopover[type]
    })
  }

  const handleClosePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: false
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

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <BusinessContainer>
        <BusinessBanner>
          {windowSize.width < 576 && (
            <BusinessFeatures>
              <AddressMenu
                onClick={() => handleClickAddress()}
              >
                <FaMapMarkerAlt /> {orderState.options?.address?.address?.split(',')?.[0] || t('WHERE_DO_WE_DELIVERY', 'Where do we delivery?')}
              </AddressMenu>
              <FeatureItems>
                <ItemInline>
                  <OrderTypeSelectorHeader />
                </ItemInline>
                <ItemInline>
                  <MomentPopover
                    open={openPopover.moment}
                    onClick={() => handleTogglePopover('moment')}
                    onClose={() => handleClosePopover('moment')}
                    isBanner
                  />
                </ItemInline>
                <ItemInline>
                  <BusinessSearch onClick={handleBusinessesSearch}>
                    <BiSearchAlt2 />{t('SEARCH', 'Search')}
                  </BusinessSearch>
                </ItemInline>
              </FeatureItems>
            </BusinessFeatures>
          )}
          <BusinessHeroImg bgimage={theme.images?.general?.businessHero} />
        </BusinessBanner>
        {windowSize.width > 480 && (
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
        {((configs && configs?.business_listing_categories !== false) || !isCustomLayout) && (
          <BusinessTypeFilter
            images={props.images}
            businessTypes={props.businessTypes}
            defaultBusinessType={props.defaultBusinessType}
            handleChangeBusinessType={handleChangeBusinessType}
          />
        )}

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
          title={t('ADDRESSEES', 'Address List')}
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

        <Modal
          open={modals.searchOpen}
          onClose={() => setModals({ ...modals, searchOpen: false })}
        >
          <BusinessItemsWrapper>
            <SearchTitle>{t('BUSINESSES', 'Businesses')}</SearchTitle>
            <SearchBar
              lazyLoad
              search={searchValue}
              isCustomLayout={isCustomLayout}
              placeholder={t('SEARCH_BUSINESSES', 'Search Businesses')}
              onSearch={handleChangeSearch}
            />
            <BusineessItems>
              {businessesList.businesses?.map((business) => (
                <BusinessItem
                  key={business.id}
                  onClick={() => handleBusinessClick(business)}
                >
                  <WrapperBusinessLogo>
                    {(business?.logo || theme.images?.dummies?.businessLogo) ? (
                      <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
                    ) : (
                      <Skeleton height={50} width={50} />
                    )}
                  </WrapperBusinessLogo>
                  <BusinessInfo>
                    <BusinessName>{business?.name}</BusinessName>
                    <BusinessMeta>
                      {orderState?.options?.type === 1 && (
                        <>
                          {business?.delivery_price >= 0 ? (
                            <p>
                              <span>{t('DELIVERY_FEE', 'Delivery fee')}</span>
                              {business && parsePrice(business?.delivery_price)}
                            </p>
                          ) : (
                            <Skeleton width={70} />
                          )}
                        </>
                      )}
                      {Object.keys(business).length > 0 ? (
                        <p className='bullet'>
                          <GoPrimitiveDot />
                          {convertHoursToMinutes(orderState?.options?.type === 1 ? business?.delivery_time : business?.pickup_time) || <Skeleton width={100} />}
                        </p>
                      ) : (
                        <Skeleton width={70} />
                      )}
                      {business?.distance >= 0 ? (
                        <p className='bullet'>
                          <GoPrimitiveDot />
                          {parseDistance(business?.distance)}
                        </p>
                      ) : (
                        <Skeleton width={70} />
                      )}
                    </BusinessMeta>
                  </BusinessInfo>

                </BusinessItem>
              ))}
            </BusineessItems>
          </BusinessItemsWrapper>
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
