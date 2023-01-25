import React, { useState, useEffect, useCallback } from 'react'
import {
  BusinessListingSearchContainer,
  FiltersContainer,
  Filters,
  FiltersResultContainer,
  SortContainer,
  MaxFilterContainer,
  TagsContainer,
  ProgressContentWrapper,
  ProgressBar,
  MaxItemContainer,
  BusinessList,
  MaxItem,
  SortItem,
  ProductsList,
  BusinessInfo,
  Metadata,
  BusinessInfoItem,
  SingleBusinessSearch,
  BusinessProductsListContainer,
  BusinessListWrapper,
  BusinessProductsListWrapper,
  BusinessControllerSkeleton,
  NotFoundWrapper,
  BusinessName,
  BusinessLogo,
  BusinessesTitle,
  BrandContainer,
  BrandListWrapper,
  BrandItem,
  NoResult,
  PriceFilterWrapper,
  PriceFilterListWrapper,
  PreviouslyOrderedContainer
} from './styles'
import Skeleton from 'react-loading-skeleton'
import { Check2, XLg as Close } from 'react-bootstrap-icons'
import { SearchBar } from '../SearchBar'
import { useLanguage, useOrder, useUtils, useSession, BusinessSearchList, useConfig } from 'ordering-components'
import { BusinessController } from '../BusinessController'
import { AutoScroll } from '../AutoScroll'
import { BusinessTypeFilter } from '../BusinessTypeFilter'
import { MyOrders } from '../MyOrders'
import { useTheme } from 'styled-components'
import GoPrimitiveDot from '@meronex/icons/go/GoPrimitiveDot'
import { convertHoursToMinutes } from '../../../../../utils'
import { Button } from '../../styles/Buttons'
import { SingleProductCard } from '../SingleProductCard'
import { NotFoundSource } from '../NotFoundSource'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import BisDownArrow from '@meronex/icons/bi/BisDownArrow'
import BisUpArrow from '@meronex/icons/bi/BisUpArrow'
import { Modal } from '../Modal'
import { ProductForm } from '../ProductForm'
import { MaxSectionItem } from './MaxSectionItem'
import { FilterAccordion } from './Accordion'

const PIXELS_TO_SCROLL = 300

export const BusinessListingSearchUI = (props) => {
  const {
    businessesSearchList,
    onBusinessClick,
    handleChangeFilters,
    filters,
    handleChangeTermValue,
    termValue,
    paginationProps,
    handleSearchbusinessAndProducts,
    brandList,
    onRedirectPage,
    onProductRedirect,
    handleUpdateBusinessList,
    handleUpdateProducts
  } = props

  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const theme = useTheme()
  const [curProduct, setCurProduct] = useState({ business: null, product: null })
  const [{ parsePrice, optimizeImage, parseDistance }] = useUtils()
  const [{ auth }] = useSession()
  const { width } = useWindowSize()
  const [{ configs }] = useConfig()
  const maxDeliveryFeeOptions = [15, 25, 35, 'default']
  // const maxProductPriceOptions = [5, 10, 15, 'default']
  const currency = configs.format_number_currency?.value
  const maxDistanceOptions = configs?.distance_unit?.value === 'km' ? [1000, 2000, 5000, 'default'] : [1609, 3218, 8046, 'default']
  const maxTimeOptions = [5, 15, 30, 'default']
  const sortItems = [
    { text: t('PICKED_FOR_YOU', 'Picked for you (default)'), value: 'distance' },
    { text: t('DELIVERY_TIME', 'Delivery time'), value: 'delivery_time' },
    { text: t('PICKUP_TIME', 'Pickup time'), value: 'pickup_time' }
  ]

  const priceList = [
    { level: '1', content: `${currency}` },
    { level: '2', content: `${Array(2).fill(currency).join('')}` },
    { level: '3', content: `${Array(3).fill(currency).join('')}` },
    { level: '4', content: `${Array(4).fill(currency).join('')}` },
    { level: '5', content: `${Array(5).fill(currency).join('')}` }
  ]

  const noResults = (!businessesSearchList.loading && !businessesSearchList.lengthError && businessesSearchList?.businesses?.length === 0)
  const currentCart = Object.values(orderState?.carts).find(cart => cart?.business?.slug === curProduct?.business?.slug) ?? {}


  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement?.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement?.offsetHeight
    const hasMore = !(paginationProps?.totalPages === paginationProps?.currentPage)
    if (badScrollPosition || businessesSearchList?.loading || businessesSearchList.error?.length > 0 || !hasMore) return
    handleSearchbusinessAndProducts()
  }, [businessesSearchList.loading, paginationProps])

  const handleChangeBrandFilter = (brandId) => {
    let franchiseIds = [...filters?.franchise_ids]
    if (filters?.franchise_ids?.includes(brandId)) franchiseIds = filters?.franchise_ids?.filter(item => item !== brandId)
    else franchiseIds.push(brandId)
    handleChangeFilters && handleChangeFilters('franchise_ids', franchiseIds)
  }

  const handleChangePriceRange = (value) => {
    if (value === filters?.price_level) handleChangeFilters('price_level', null)
    else handleChangeFilters('price_level', value)
  }

  const onProductClick = (product, business) => {
    setCurProduct({ business: business, product: product })
  }

  const handleRedirectToCart = (product, code) => {
    setCurProduct({ business: null, product: null })
    onBusinessClick(curProduct?.business)
  }

  const closeModalProductForm = () => {
    setCurProduct({ business: null, product: null })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <BusinessListingSearchContainer>
      <BusinessesTitle>
        {t('SEARCH', 'Search')}
      </BusinessesTitle>
      <SearchBar
        lazyLoad
        isCustomLayout
        forceFocus
        placeholder={`${t('SEARCH_BUSINESSES', 'Search Businesses')} / ${t('PLEASE_TYPE_AT_LEAST_3_CHARACTERS', 'Please type at least 3 characters')}`}
        onSearch={(val) => handleChangeTermValue(val)}
        search={termValue}
      />
      <FiltersContainer>
        <Filters>
          <SortContainer>
            <FilterAccordion title={t('SORT', 'Sort')}>
              {sortItems?.filter(item => !(orderState?.options?.type === 1 && item?.value === 'pickup_time') && !(orderState?.options?.type === 2 && item?.value === 'delivery_time'))?.map(item => (
                <SortItem
                  key={item?.value}
                  onClick={() => handleChangeFilters('orderBy', item?.value)}
                  active={filters?.orderBy?.includes(item?.value)}
                >
                  {item?.text}  {(filters?.orderBy?.includes(item?.value)) && <>{filters?.orderBy?.includes('-') ? <BisUpArrow /> : <BisDownArrow />}</>}
                </SortItem>
              ))}
            </FilterAccordion>
          </SortContainer>
          <BrandContainer>
            <FilterAccordion title={t('BRANDS', 'Brands')}>
              <BrandListWrapper>
                {brandList?.loading && (
                  <>
                    {[...Array(5).keys()].map(index => (
                      <BrandItem key={index}>
                        <Skeleton width={120} height={15} />
                        <Skeleton width={16} height={16} />
                      </BrandItem>
                    ))}
                  </>
                )}
                {!brandList?.loading && brandList?.brands.map((brand, i) => brand?.enabled && (
                  <BrandItem key={i} onClick={() => handleChangeBrandFilter(brand?.id)}>
                    <span>{brand?.name}</span>
                    {filters?.franchise_ids?.includes(brand?.id) && <Check2 />}
                  </BrandItem>
                ))}
                {!brandList?.loading && ((brandList?.brands?.filter(brand => brand?.enabled))?.length === 0) && (
                  <NoResult>{t('NO_RESULTS_FOUND', 'Sorry, no results found')}</NoResult>
                )}
              </BrandListWrapper>
            </FilterAccordion>
          </BrandContainer>
          <PriceFilterWrapper>
            <FilterAccordion title={t('PRICE_RANGE', 'Price range')}>
              <PriceFilterListWrapper>
                {priceList.map((price, i) => (
                  <Button
                    key={i}
                    color={(filters?.price_level === price?.level) ? 'primary' : 'lightGray'}
                    onClick={() => handleChangePriceRange(price?.level)}
                  >
                    {price.content}
                    {(filters?.price_level === price?.level) && <Close />}
                  </Button>
                ))}
              </PriceFilterListWrapper>
            </FilterAccordion>
          </PriceFilterWrapper>
          {orderState?.options?.type === 1 && (
            <MaxSectionItem
              title={t('MAX_DELIVERY_FEE', 'Max delivery fee')}
              options={maxDeliveryFeeOptions}
              filter='max_delivery_price'
              filters={filters}
              handleChangeFilters={handleChangeFilters}
            />
          )}
          {[1, 2].includes(orderState?.options?.type) && (
            <MaxSectionItem
              title={orderState?.options?.type === 1 ? t('MAX_DELIVERY_TIME', 'Max delivery time') : t('MAX_PICKUP_TIME', 'Max pickup time')}
              options={maxTimeOptions}
              filter='max_eta'
              filters={filters}
              handleChangeFilters={handleChangeFilters}
            />
          )}
          <MaxSectionItem
            title={t('MAX_DISTANCE', 'Max distance')}
            options={maxDistanceOptions}
            filter='max_distance'
            filters={filters}
            handleChangeFilters={handleChangeFilters}
          />
          <TagsContainer>
            <FilterAccordion title={t('BUSINESS_CATEGORIES', 'Business categories')}>
              <BusinessTypeFilter
                isSearchMode
                filters={filters}
                handleChangeFilters={handleChangeFilters}
              />
            </FilterAccordion>
          </TagsContainer>
        </Filters>
        <FiltersResultContainer>
          {auth && termValue?.length === 0 && (
            <PreviouslyOrderedContainer>
              <MyOrders
                hideOrders
                businessesSearchList={businessesSearchList}
                onRedirectPage={onRedirectPage}
                onProductRedirect={onProductRedirect}
                onBusinessClick={onBusinessClick}
              />
            </PreviouslyOrderedContainer>
          )}
          <BusinessListWrapper>
            {businessesSearchList.businesses?.length > 0 && (
              <h2>{t('BUSINESSES', 'Businesses')}</h2>
            )}
            <BusinessList noResults={noResults}>
              {
                noResults && (
                  <NotFoundWrapper>
                    <NotFoundSource
                      content={t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')}
                    />
                  </NotFoundWrapper>
                )
              }
              {businessesSearchList.businesses?.length > 0 && (
                <AutoScroll scrollId='searchlist' isColumnMode={width <= 681}>
                  {businessesSearchList.businesses.map((business, i) => (
                    <BusinessController
                      key={business.id}
                      className='card'
                      business={business}
                      isBusinessOpen={business.open}
                      handleCustomClick={onBusinessClick}
                      orderType={orderState?.options?.type}
                      handleUpdateBusinessList={handleUpdateBusinessList}
                      firstCard={i === 0 && width > 681}
                    />
                  ))}
                  {!businessesSearchList.loading && paginationProps?.totalPages && paginationProps?.currentPage < paginationProps?.totalPages && (
                    <BusinessController
                      typeButton
                    >
                      <Button
                        className='load-orders'
                        color='primary'
                        outline
                        onClick={() => handleSearchbusinessAndProducts()}
                      >
                        {t('LOAD_MORE_BUSINESS', 'Load more business')}
                      </Button>
                    </BusinessController>
                  )}
                </AutoScroll>
              )}
              {businessesSearchList.loading && (
                <BusinessControllerSkeleton>
                  {[...Array(3).keys()].map(i => (
                    <BusinessController
                      key={i}
                      className='card'
                      business={{}}
                      isSkeleton
                      orderType={orderState?.options?.type}
                      firstCard={i === 0 && width > 681}
                      minWidthEnabled={businessesSearchList?.businesses?.length > 3}
                    />
                  ))}
                </BusinessControllerSkeleton>
              )}
            </BusinessList>
          </BusinessListWrapper>
          <ProductsList>
            {businessesSearchList.businesses?.filter(business => business?.categories?.length >= 0).map(business => (
              <SingleBusinessSearch key={`card-${business?.id}`}>
                <BusinessInfo>
                  {(business?.logo || theme.images?.dummies?.businessLogo) && (
                    <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
                  )}
                  <BusinessInfoItem>
                    <BusinessName>{business?.name}</BusinessName>
                    <Metadata>
                      {orderState?.options?.type === 1 && (
                        <p>
                          <span>{t('DELIVERY_FEE', 'Delivery fee')}</span>
                          {business && parsePrice(business?.delivery_price)}
                        </p>
                      )}
                      <p className='bullet'>
                        <GoPrimitiveDot />
                        {convertHoursToMinutes(orderState?.options?.type === 1 ? business?.delivery_time : business?.pickup_time)}
                      </p>
                      <p className='bullet'>
                        <GoPrimitiveDot />
                        {parseDistance(business?.distance)}
                      </p>
                    </Metadata>
                  </BusinessInfoItem>
                  <Button
                    onClick={() => onBusinessClick(business)}
                    outline
                    bgtransparent
                    color='primary'
                  >
                    {t('GO_TO_THE_STORE', 'Go to the store')}
                  </Button>
                </BusinessInfo>
                <BusinessProductsListWrapper>
                  <BusinessProductsListContainer>
                    <AutoScroll scrollId={`products-${business?.id}`}>
                      {business?.categories?.map(category => category?.products?.map(product => (
                        <SingleProductCard
                          key={product?.id}
                          isSoldOut={(product.inventoried && !product.quantity)}
                          product={product}
                          businessId={business?.id}
                          onProductClick={(product) => onProductClick(product, business)}
                          handleUpdateProducts={(productId, changes) => handleUpdateProducts(productId, category?.id, business?.id, changes)}
                        />
                      )))}
                    </AutoScroll>
                  </BusinessProductsListContainer>
                </BusinessProductsListWrapper>
              </SingleBusinessSearch>
            ))}
            {businessesSearchList?.loading && (
              [...Array(3)].map((item, i) => (
                <SingleBusinessSearch key={`skeleton:${i}`}>
                  <BusinessInfo>
                    <BusinessLogo isSkeleton>
                      <Skeleton />
                    </BusinessLogo>
                    <BusinessInfoItem>
                      <BusinessName>
                        <Skeleton width={50} />
                      </BusinessName>
                      <Metadata>
                        <Skeleton width={65} />
                        <Skeleton width={65} />
                        <Skeleton width={65} />
                      </Metadata>
                    </BusinessInfoItem>
                  </BusinessInfo>
                  <BusinessProductsListWrapper>
                    <BusinessProductsListContainer>
                      {[...Array(3)].map((item, j) => (
                        <SingleProductCard
                          key={`skeleton-card:${j}-${i}`}
                          isSkeleton
                        />
                      ))}
                    </BusinessProductsListContainer>
                  </BusinessProductsListWrapper>
                </SingleBusinessSearch>
              ))
            )}
          </ProductsList>
        </FiltersResultContainer>
      </FiltersContainer>
      <Modal
        width={props?.useKioskApp ? '80%' : '760px'}
        open={!!curProduct?.product}
        closeOnBackdrop
        onClose={() => closeModalProductForm()}
        padding='0'
        isProductForm
        disableOverflowX
      >
        {(!!curProduct?.product) && (
          <ProductForm
            businessSlug={curProduct?.business?.slug}
            useKioskApp={props?.useKioskApp}
            product={curProduct?.product}
            businessId={curProduct?.business?.id}
            categoryId={curProduct?.product?.category_id}
            productId={curProduct?.product?.id}
            onSave={handleRedirectToCart}
            handleUpdateProducts={(productId, changes) => handleUpdateProducts(productId, curProduct?.product?.category_id, curProduct?.business?.id, changes)}
            productAddedToCartLength={currentCart?.products?.reduce((productsLength, Cproduct) => { return productsLength + (Cproduct?.id === curProduct?.id ? Cproduct?.quantity : 0) }, 0) || 0}
          />
        )}
      </Modal>
    </BusinessListingSearchContainer>
  )
}

export const BusinessListingSearch = (props) => {
  const BusinessListSearch = {
    ...props,
    UIComponent: BusinessListingSearchUI
  }
  return <BusinessSearchList {...BusinessListSearch} />
}
