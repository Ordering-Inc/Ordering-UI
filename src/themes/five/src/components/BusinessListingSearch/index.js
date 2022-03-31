import React from 'react'

import {
  BusinessListingSearchContainer,
  FiltersContainer,
  Filters,
  FiltersResultContainer,
  SortContainer,
  MaxDeliveryFeeContainer,
  TagsContainer,
  ProgressContentWrapper,
  ProgressBar,
  Fees,
  BusinessList,
  Fee,
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
  NotFoundWrapper
} from './styles'
import Skeleton from 'react-loading-skeleton'

import { SearchBar } from '../SearchBar'
import { useLanguage, useOrder, useUtils } from 'ordering-components'
import { BusinessController } from '../BusinessController'
import { AutoScroll } from '../AutoScroll'
import { BusinessTypeFilter } from '../BusinessTypeFilter'
import { useTheme } from 'styled-components'
import { BusinessLogo, BusinessName } from '../BusinessController/styles'
import GoPrimitiveDot from '@meronex/icons/go/GoPrimitiveDot'
import { convertHoursToMinutes } from '../../../../../utils'
import { Button } from '../../styles/Buttons'
import { SingleProductCard } from '../SingleProductCard'
import { NotFoundSource } from '../NotFoundSource'

export const BusinessListingSearch = (props) => {
  const {
    businessesSearchList,
    handleBusinessClick,
    handleChangeFilters,
    filters,
    handleChangeTermValue,
    termValue
  } = props

  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parsePrice, optimizeImage, parseDistance }] = useUtils()

  const maxDeliveryFeeOptions = [15, 25, 35, 'default']
  const sortItems = [
    { text: t('PICKED_FOR_YOU', 'Picked for you (default)'), value: 'default' },
    { text: t('DELIVERY_TIME', 'Delivery time'), value: 'delivery_time' },
    { text: t('PICKUP_TIME', 'Pickup time'), value: 'pickup_type' }

  ]
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
                active={filters?.orderBy === item?.value || (item?.value === 'default' && (filters.orderBy === 'default' || !filters?.orderBy))}
              >
                {item?.text}
              </SortItem>
            ))}
            {/* <SortItem onClick={() => handleChangeFilters('orderBy', 'default')}>{t('MOST_POPULAR', 'Most popular')}</SortItem>
            <SortItem onClick={() => handleChangeFilters('orderBy', 'default')}>{t('RATING', 'Rating')}</SortItem> */}

          </SortContainer>
          <MaxDeliveryFeeContainer>
            <h3>{t('MAX_DELIVERY_FEE', 'Max delivery fee')}</h3>
            <ProgressContentWrapper>
              <ProgressBar style={{ width: `${((maxDeliveryFeeOptions.indexOf(filters?.max_delivery_price) / 3) * 100) ?? 100}%` }} />
            </ProgressContentWrapper>
            <Fees>
              {maxDeliveryFeeOptions.map((option, i) => (
                <Fee
                  key={option}
                  active={filters.max_delivery_price === option || (option === 'default' && (filters.max_delivery_price === 'default' || !filters?.max_delivery_price))}
                  onClick={() => handleChangeFilters('max_delivery_price', option)}
                >
                  {option === 'default' ? `${parsePrice(maxDeliveryFeeOptions[i - 1])}+` : parsePrice(option)}
                </Fee>
              ))}
            </Fees>
          </MaxDeliveryFeeContainer>
          <TagsContainer>
            <h3>{t('DIETARY', 'Dietary')}</h3>
            <BusinessTypeFilter
              isSearchMode
              filters={filters}
              handleChangeFilters={handleChangeFilters}
            />
          </TagsContainer>
        </Filters>
        <FiltersResultContainer>
          <BusinessListWrapper>
            <BusinessList noResults={!businessesSearchList.loading && businessesSearchList?.businesses?.length === 0}>
              {
                !businessesSearchList.loading && businessesSearchList?.businesses?.length === 0 && (
                  <NotFoundWrapper>
                    <NotFoundSource
                      content={!businessesSearchList.lengthError
                        ? t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')
                        : t('PLEASE_TYPE_AT_LEAST_3_CHARACTERS', 'Please type at least 3 characters')}
                    />
                  </NotFoundWrapper>
                )
              }
              {businessesSearchList.loading && (
                <BusinessControllerSkeleton>
                  {[...Array(3).keys()].map(i => (
                    <BusinessController
                      key={i}
                      className='card'
                      business={{}}
                      isSkeleton
                      orderType={orderState?.options?.type}
                      firstCard={i === 0}
                    />
                  ))}
                </BusinessControllerSkeleton>
              )}
              <AutoScroll scrollId='searchlist'>
                {!businessesSearchList.loading && businessesSearchList.businesses.map((business, i) => (
                  <BusinessController
                    key={business.id}
                    className='card'
                    business={business}
                    isBusinessOpen={business.open}
                    handleCustomClick={handleBusinessClick}
                    orderType={orderState?.options?.type}
                    firstCard={i === 0}
                  />
                ))}
              </AutoScroll>
            </BusinessList>
          </BusinessListWrapper>
          <ProductsList>
            {businessesSearchList?.loading && (
              [...Array(3)].map((item, i) => (
                <SingleBusinessSearch key={`skeleton:${i}`}>
                  <BusinessInfo>
                    <BusinessLogo>
                      <Skeleton width={75} height={75} />
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
                    {t('GO_TO_STORE', 'Go to store')}
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
        </FiltersResultContainer>
      </FiltersContainer>
    </BusinessListingSearchContainer>
  )
}
