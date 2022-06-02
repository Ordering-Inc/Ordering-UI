import React from 'react'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import GoPrimitiveDot from '@meronex/icons/go/GoPrimitiveDot'

import { useLanguage, useOrder, useUtils, BusinessSearchList } from 'ordering-components'
import {
  BusinessListingSearchContainer,
  FiltersContainer,
  FiltersResultContainer,
  BusinessList,
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
  BusinessesTitle
} from './styles'

import { SearchBar } from '../../../SearchBar'
import { BusinessController } from '../../../BusinessController'
import { AutoScroll } from '../../../AutoScroll'

import { convertHoursToMinutes } from '../../../../../../../utils'
import { Button } from '../../../../styles/Buttons'
import { SingleProductCard } from '../../../SingleProductCard'
import { NotFoundSource } from '../../../NotFoundSource'
import { useWindowSize } from '../../../../../../../hooks/useWindowSize'

export const BusinessListingSearchUI = (props) => {
  const {
    businessesSearchList,
    onBusinessClick,
    handleChangeTermValue,
    termValue,
    paginationProps,
    handleSearchbusinessAndProducts
  } = props

  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parsePrice, optimizeImage, parseDistance }] = useUtils()
  const { width } = useWindowSize()
  const noResults = (!businessesSearchList.loading && !businessesSearchList.lengthError && businessesSearchList?.businesses?.length === 0)

  return (
    <BusinessListingSearchContainer>
      <BusinessesTitle>
        {t('SEARCH', 'Search')}
      </BusinessesTitle>
      <SearchBar
        lazyLoad
        isCustomLayout
        placeholder={`${t('SEARCH_BUSINESSES', 'Search Businesses')} / ${t('PLEASE_TYPE_AT_LEAST_3_CHARACTERS', 'Please type at least 3 characters')}`}
        onSearch={(val) => handleChangeTermValue(val)}
        value={termValue}
      />
      <FiltersContainer>
        <FiltersResultContainer>
          <BusinessListWrapper>
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
            {businessesSearchList.businesses?.filter(business => business?.categories?.length > 0).map(business => (
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
    </BusinessListingSearchContainer>
  )
}

export const ListingBusinessesListing = (props) => {
  const BusinessListSearch = {
    ...props,
    UIComponent: BusinessListingSearchUI
  }
  return <BusinessSearchList {...BusinessListSearch} />
}
