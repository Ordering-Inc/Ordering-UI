import React from 'react'

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
  BusinessLogo
} from './styles'
import Skeleton from 'react-loading-skeleton'

import { SearchBar } from '../SearchBar'
import { useLanguage, useOrder, useUtils } from 'ordering-components'
import { BusinessController } from '../BusinessController'
import { AutoScroll } from '../AutoScroll'
import { BusinessTypeFilter } from '../BusinessTypeFilter'
import { useTheme } from 'styled-components'
import GoPrimitiveDot from '@meronex/icons/go/GoPrimitiveDot'
import { convertHoursToMinutes } from '../../../../../utils'
import { Button } from '../../styles/Buttons'
import { SingleProductCard } from '../SingleProductCard'
import { NotFoundSource } from '../NotFoundSource'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import BisDownArrow from '@meronex/icons/bi/BisDownArrow'
import BisUpArrow from '@meronex/icons/bi/BisUpArrow'

export const BusinessListingSearch = (props) => {
  const {
    businessesSearchList,
    handleBusinessClick,
    handleChangeFilters,
    filters,
    handleChangeTermValue,
    termValue,
    businessesList,
    isCustomLayout,
    setPreorderBusiness,
    getBusinesses,
    paginationProps
  } = props

  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parsePrice, optimizeImage, parseDistance }] = useUtils()
  const { width } = useWindowSize()
  const maxDeliveryFeeOptions = [15, 25, 35, 'default']
  // const maxProductPriceOptions = [5, 10, 15, 'default']
  const maxDistanceOptions = [1000, 2000, 5000, 'default']
  const maxTimeOptions = [5, 15, 30, 'default']

  const sortItems = [
    { text: t('PICKED_FOR_YOU', 'Picked for you (default)'), value: 'default' },
    { text: t('DELIVERY_TIME', 'Delivery time'), value: 'delivery_time' },
    { text: t('PICKUP_TIME', 'Pickup time'), value: 'pickup_type' }

  ]
  const getMoreBusiness = () => {
    const hasMore = !(paginationProps.totalPages === paginationProps.currentPage)
    if (businessesList.loading || businessesList.error?.length > 0 || !hasMore) return
    getBusinesses()
  }
  const noResults = (!businessesSearchList.loading && !businessesSearchList.lengthError && businessesSearchList?.businesses?.length === 0) ||
    (!businessesSearchList.loading && businessesList?.businesses?.length === 0 && termValue?.length < 3)

  const MaxSectionItem = ({ title, options, filter }) => {
    const parseValue = (option) => {
      return filter === 'max_distance'
        ? `${option / 1000} ${t('KM', 'Km')}`
        : filter === 'max_eta'
          ? `${option} ${t('MIN', 'min')}`
          : parsePrice(option)
    }
    return (
      <MaxFilterContainer>
        <h3>{title}</h3>
        <ProgressContentWrapper>
          <ProgressBar style={{ width: `${((options.indexOf(filters?.[filter]) / 3) * 100) ?? 100}%` }} />
        </ProgressContentWrapper>
        <MaxItemContainer>
          {options.map((option, i) => (
            <MaxItem
              key={option}
              active={filters?.[filter] === option || (option === 'default' && (filters?.[filter] === 'default' || !filters?.[filter]))}
              onClick={() => handleChangeFilters(filter, option)}
            >
              {option === 'default' ? `${parseValue(options[i - 1])}+` : parseValue(option)}
            </MaxItem>
          ))}
        </MaxItemContainer>
      </MaxFilterContainer>
    )
  }

  return (
    <BusinessListingSearchContainer>
      <SearchBar
        lazyLoad
        isCustomLayout
        placeholder={`${t('SEARCH_BUSINESSES', 'Search Businesses')} / ${t('PLEASE_TYPE_AT_LEAST_3_CHARACTERS', 'Please type at least 3 characters')}`}
        onSearch={(val) => handleChangeTermValue(val)}
        value={termValue}
      />
      <FiltersContainer>
        <Filters>
          <SortContainer>
            <h3>{t('SORT', 'Sort')}</h3>
            {sortItems?.map(item => (
              <SortItem
                key={item?.value}
                onClick={() => handleChangeFilters('orderBy', item?.value)}
                active={filters?.orderBy?.includes(item?.value)}
              >
                {item?.text}  {(filters?.orderBy?.includes(item?.value)) && <>{filters?.orderBy?.includes('-') ? <BisUpArrow /> : <BisDownArrow />}</>}
              </SortItem>
            ))}
            {/* <SortItem onClick={() => handleChangeFilters('orderBy', 'default')}>{t('MOST_POPULAR', 'Most popular')}</SortItem>
            <SortItem onClick={() => handleChangeFilters('orderBy', 'default')}>{t('RATING', 'Rating')}</SortItem> */}

          </SortContainer>
          {orderState?.options?.type === 1 && (
            <MaxSectionItem
              title={t('MAX_DELIVERY_FEE', 'Max delivery fee')}
              options={maxDeliveryFeeOptions}
              filter='max_delivery_price'
            />
          )}
          {[1, 2].includes(orderState?.options?.type) && (
            <MaxSectionItem
              title={orderState?.options?.type === 1 ? t('MAX_DELIVERY_TIME', 'Max delivery time') : t('MAX_PICKUP_TIME', 'Max pickup time')}
              options={maxTimeOptions}
              filter='max_eta'
            />
          )}
          <MaxSectionItem
            title={t('MAX_DISTANCE', 'Max distance')}
            options={maxDistanceOptions}
            filter='max_distance'
          />
          {/* <MaxSectionItem
              title={t('MAX_PRODUCT_PRICE', 'Max product price')}
              options={maxProductPriceOptions}
              filter='max_product_price'
            /> */}
          <TagsContainer>
            <h3>{t('BUSINESS_CATEGORIES', 'Business categories')}</h3>
            <BusinessTypeFilter
              isSearchMode
              filters={filters}
              handleChangeFilters={handleChangeFilters}
            />
          </TagsContainer>
        </Filters>
        <FiltersResultContainer>
          <BusinessListWrapper>
            <BusinessList noResults={noResults}>
              {(businessesSearchList.loading || (businessesList.loading && businessesSearchList.businesses?.length > 0)) && (
                <BusinessControllerSkeleton>
                  {[...Array(3).keys()].map(i => (
                    <BusinessController
                      key={i}
                      className='card'
                      business={{}}
                      isSkeleton
                      orderType={orderState?.options?.type}
                      firstCard={i === 0 && width > 681}
                    />
                  ))}
                </BusinessControllerSkeleton>
              )}
              {
                noResults && (
                  <NotFoundWrapper>
                    <NotFoundSource
                      content={t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')}
                    />
                  </NotFoundWrapper>
                )
              }
              {termValue?.length < 3 && !businessesList.loading && !businessesSearchList.loading && businessesList.businesses?.length > 0 && (
                <AutoScroll scrollId='searchlist' onHandleRightEnd={getMoreBusiness} isColumnMode={width <= 681}>
                  {businessesList.businesses?.map((business, i) => (
                    <BusinessController
                      key={business.id}
                      className='card'
                      business={business}
                      isBusinessOpen={business.open}
                      handleCustomClick={handleBusinessClick}
                      orderType={orderState?.options?.type}
                      isCustomLayout={isCustomLayout}
                      isShowCallcenterInformation={isCustomLayout}
                      onPreorderBusiness={setPreorderBusiness}
                      firstCard={i === 0 && width > 681}
                    />
                  ))}
                </AutoScroll>
              )}
              {termValue?.length >= 3 && !businessesSearchList.loading && businessesSearchList.businesses?.length > 0 && (
                <AutoScroll scrollId='searchlist' isColumnMode={width <= 681}>
                  {businessesSearchList.businesses.map((business, i) => (
                    <BusinessController
                      key={business.id}
                      className='card'
                      business={business}
                      isBusinessOpen={business.open}
                      handleCustomClick={handleBusinessClick}
                      orderType={orderState?.options?.type}
                      firstCard={i === 0 && width > 681}
                    />
                  ))}
                </AutoScroll>
              )}
            </BusinessList>
          </BusinessListWrapper>
          {termValue?.length >= 3 && (
            <ProductsList>
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
              {!businessesSearchList.loading && businessesSearchList.businesses.map(business => (
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
                      onClick={() => handleBusinessClick(business)}
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
                          />
                        )))}
                      </AutoScroll>
                    </BusinessProductsListContainer>
                  </BusinessProductsListWrapper>
                </SingleBusinessSearch>
              ))}
            </ProductsList>
          )}
        </FiltersResultContainer>
      </FiltersContainer>
    </BusinessListingSearchContainer>
  )
}
