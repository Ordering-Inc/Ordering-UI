import React, { useState, useEffect, useCallback } from 'react'
import { SearchBar } from '../../../SearchBar'
import FiFilter from '@meronex/icons/fi/FiFilter'
import {
  useLanguage,
  useOrder,
  useSession,
  useConfig,
  BusinessList as BusinessListController
} from 'ordering-components'
import { BusinessPreorder } from '../../../BusinessPreorder'
import { BusinessTypeFilter } from '../../../BusinessTypeFilter'
import { priceList } from '../../../../../../../utils'
import { Button } from '../../../../styles/Buttons'
import { NotFoundSource } from '../../../NotFoundSource'
import { Modal } from '../../../Modal'
import { BusinessController } from '../../../BusinessController'
import { AddressList } from '../../../AddressList'
import { AddressForm } from '../../../AddressForm'
import { OrderTypeSelectorHeader } from '../../../../../../../components/OrderTypeSelectorHeader'
import {
  XLg as Close,
  House
} from 'react-bootstrap-icons'

import {
  BusinessListContainer,
  WrapperSearch,
  FilterWrapper,
  TypeFilterWrapper,
  PriceFilterWrapper,
  PriceFilterListWrapper,
  PreorderAndBusinessWrapper,
  PreorderWrapper,
  PreorderContent,
  AddressWrapper,
  AddressHeader,
  AddressContent,
  OrderTypeWrapper,
  MomentWrapper,
  SelectWrapper,
  BusinessList,
  ErrorMessage,
  BusinessListWrapper,
  HightestRatedWrapper
} from './styles'
import { MomentControl } from '../../../MomentControl'
import { HighestRated } from '../../../HighestRated'

const PIXELS_TO_SCROLL = 300

const BusinessListingUI = (props) => {
  const {
    handleChangeBusinessType,
    priceLevelSelected,
    handleChangePriceLevel,
    businessesList,
    paginationProps,
    searchValue,
    getBusinesses,
    isCustomLayout,
    isCustomerMode,
    onBusinessClick,
    handleChangeSearch,
    handleBusinessClick,
    businessTypeSelected,
    handleUpdateBusinessList,
    onRedirectPage
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ auth }] = useSession()
  const [configState] = useConfig()

  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [favoriteIds, setFavoriteIds] = useState([])
  const [isPreorder, setIsPreorder] = useState(false)
  const [preorderBusiness, setPreorderBusiness] = useState(null)
  const [hasHighRatedBusiness, setHasHighRatedBusiness] = useState(true)

  const limitDays = parseInt(configState?.configs?.max_days_preorder?.value, 10)

  const currentDate = new Date()
  const time = limitDays > 1
    ? currentDate.getTime() + ((limitDays - 1) * 24 * 60 * 60 * 1000)
    : limitDays === 1 ? currentDate.getTime() : currentDate.getTime() + (6 * 24 * 60 * 60 * 1000)

  currentDate.setTime(time)
  currentDate.setHours(23)
  currentDate.setMinutes(59)

  const handleClickAddress = () => {
    setModalIsOpen(true)
  }

  const handleClosePreorder = () => {
    setIsPreorder(false)
    setPreorderBusiness(null)
  }

  useEffect(() => {
    if (preorderBusiness) setIsPreorder(true)
  }, [preorderBusiness])

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

  return (
    <>
      <BusinessListContainer>
        <h1>{t('SELECT_BUSINESS', 'Select a business')}</h1>
        <WrapperSearch>
          <SearchBar
            lazyLoad
            search={searchValue}
            onSearch={handleChangeSearch}
            placeholder={t('SEARCH_BUSINESSES', 'Search Businesses')}
            handleCustomEnter={term => configState?.configs?.advanced_business_search_enabled?.value === '1' && onRedirectPage({ page: 'business_search' })}
          />
          {configState?.configs?.advanced_business_search_enabled?.value === '1' && (
            <FiFilter onClick={() => onRedirectPage({ page: 'business_search' })} />
          )}
        </WrapperSearch>
        <FilterWrapper>
          <TypeFilterWrapper>
            <h3>{t('POPULAR_SERVICES', 'Popular services')}</h3>
            <BusinessTypeFilter
              businessTypes={props.businessTypes}
              defaultBusinessType={props.defaultBusinessType}
              handleChangeBusinessType={handleChangeBusinessType}
              isAppoint
            />
          </TypeFilterWrapper>
          <PriceFilterWrapper>
            <h3>{t('PRICE', 'Price')}</h3>
            <PriceFilterListWrapper>
              {priceList.map((price, i) => (
                <Button
                  key={i}
                  color={(priceLevelSelected === price?.level) ? 'primary' : 'lightGray'}
                  onClick={() => handleChangePriceLevel(price?.level)}
                >
                  {price.content}
                  {(priceLevelSelected === price?.level) && <Close />}
                </Button>
              ))}
            </PriceFilterListWrapper>
          </PriceFilterWrapper>
        </FilterWrapper>
        <PreorderAndBusinessWrapper>
          <PreorderWrapper>
            <PreorderContent>
              <h2>{t('AVAILABLE_APPOINTMENTS', 'Available appointments')}</h2>
              <AddressWrapper>
                <AddressHeader>
                  <h2>{t('ADDRESS', 'Address')}</h2>
                  <span onClick={() => setModalIsOpen(true)}>{t('CHANGE', 'Change')}</span>
                </AddressHeader>
                <AddressContent>
                  <House />
                  <span>{orderState.options?.address?.address}</span>
                </AddressContent>
              </AddressWrapper>
              <MomentWrapper>
                <MomentControl
                  isAppoint
                  maxDate={currentDate}
                />
              </MomentWrapper>
              <OrderTypeWrapper>
                <h2>{t('SERVICE_TYPE', 'Service type')}</h2>
                <SelectWrapper>
                  <OrderTypeSelectorHeader
                    configTypes={!configState?.loading && configTypes?.length > 0 ? configTypes : null}
                    defaultValue={!(!configState?.loading && configTypes?.length > 0) && 1}
                  />
                </SelectWrapper>
              </OrderTypeWrapper>
            </PreorderContent>
          </PreorderWrapper>
          <BusinessListWrapper>
            {businessesList.businesses.length > 0 && (
              <HightestRatedWrapper noHeight={!hasHighRatedBusiness}>
                <HighestRated
                  handleClickAddress={handleClickAddress}
                  setHasHighRatedBusiness={setHasHighRatedBusiness}
                  onBusinessClick={onBusinessClick}
                  isCustomerMode={isCustomerMode}
                  favoriteIds={favoriteIds}
                  initialBuisnessType={businessTypeSelected}
                  initialPricelevel={priceLevelSelected}
                  setFavoriteIds={setFavoriteIds}
                />
              </HightestRatedWrapper>
            )}
            <h2>{t('ALL_BUSINESSES', 'All businesses')}</h2>
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
              {businessesList.error && businessesList.error.length > 0 && businessesList.businesses.length === 0 && (
                businessesList.error.map((e, i) => (
                  <ErrorMessage key={i}>{t('ERROR', 'ERROR')}: [{e?.message || e}]</ErrorMessage>
                ))
              )}
            </BusinessList>
          </BusinessListWrapper>

        </PreorderAndBusinessWrapper>
      </BusinessListContainer>
      <Modal
        width='768px'
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        {
          auth ? (
            <AddressList
              isModal
              changeOrderAddressWithDefault
              // userId={isNaN(userCustomer?.id) ? null : userCustomer?.id}
              onCancel={() => setModalIsOpen(false)}
            />
          ) : (
            <AddressForm
              useValidationFileds
              address={orderState?.options?.address || {}}
              onCancel={() => setModalIsOpen(false)}
              onSaveAddress={() => setModalIsOpen(false)}
            />
          )
        }
      </Modal>
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
    </>
  )
}

export const BusinessListing = (props) => {
  const businessListingProps = {
    ...props,
    UIComponent: BusinessListingUI
  }
  return <BusinessListController {...businessListingProps} />
}
