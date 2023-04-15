import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import FaStar from '@meronex/icons/fa/FaStar'
import BsInfoCircle from '@meronex/icons/bs/BsInfoCircle'
import { useTheme } from 'styled-components'

import { Modal } from '../Modal'
import { BusinessInformation } from '../BusinessInformation'
import { SearchBar } from '../SearchBar'
import { BusinessReviews } from '../BusinessReviews'
import { MomentContent } from '../MomentContent'

import { useUtils, useOrder, useLanguage } from 'ordering-components'

import { convertHoursToMinutes, shape } from '../../../../../utils'

import {
  BusinessInfo,
  BusinessInfoItem,
  BusinessInfoContainer,
  BusinessInfoContent,
  WrapperSearch,
  BusinessDetail,
  BusinessMoreDetail,
  BusinessTitleWrapper,
  RibbonBox
} from './styles'

const types = ['food', 'laundry', 'alcohol', 'groceries']

export const BusinessBasicInformation = (props) => {
  const {
    businessState,
    setOpenBusinessInformation,
    openBusinessInformation,
    handleChangeSearch,
    searchValue,
    sortByOptions,
    sortByValue,
    handleChangeSortBy,
    categoryState,
    errorQuantityProducts
  } = props
  const { business, loading } = businessState

  const theme = useTheme()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()
  const [isBusinessReviews, setIsBusinessReviews] = useState(false)
  const [isPreOrder, setIsPreOrder] = useState(false)

  const getBusinessType = () => {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General')
    const _types = []
    types.forEach(type => business[type] && _types.push(
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
      <BusinessInfoContainer>
        <BusinessInfoContent>
          <BusinessInfo className='info'>
            <BusinessInfoItem>
              <BusinessTitleWrapper>
                {!loading ? (
                  <h2 className='bold'>{business?.name}</h2>
                ) : (
                  <Skeleton width={250} height={35} />
                )}
                {!loading && (
                  <BusinessMoreDetail>
                    <BsInfoCircle
                      className='popup'
                      onClick={() => setOpenBusinessInformation(true)}
                    />
                  </BusinessMoreDetail>
                )}
                {business?.ribbon?.enabled && (
                  <RibbonBox
                    bgColor={business?.ribbon?.color}
                    isRoundRect={business?.ribbon?.shape === shape?.rectangleRound}
                    isCapsule={business?.ribbon?.shape === shape?.capsuleShape}
                  >
                    {business?.ribbon?.text}
                  </RibbonBox>
                )}
              </BusinessTitleWrapper>

              {!loading ? (
                <p className='type'>{business?.address}</p>
              ) : (
                <Skeleton width={150} />
              )}
              <BusinessDetail isSkeleton={loading}>
                {orderState?.options.type === 1 && (
                  <>
                    {!loading ? (
                      <>
                        <h5>
                          <span>{t('DELIVERY_FEE', 'Delivery fee')}</span>
                          {business && parsePrice(business?.delivery_price || 0)}
                        </h5>
                        <span className='dot'>•</span>
                      </>
                    ) : (
                      <Skeleton width={50} />
                    )}
                  </>
                )}
                {!loading ? (
                  <>
                    {orderState?.options?.type === 1 ? (
                      <>
                        <h5>
                          {convertHoursToMinutes(business?.delivery_time)}
                        </h5>
                        <span className='dot'>•</span>
                      </>
                    ) : (
                      <>
                        <h5>
                          {convertHoursToMinutes(business?.pickup_time)}
                        </h5>
                        <span className='dot'>•</span>
                      </>
                    )}
                  </>
                ) : (
                  <Skeleton width={50} />
                )}

                {!loading ? (
                  <>
                    <h5>
                      {parseDistance(business?.distance || 0)}
                    </h5>
                    <span className='dot'>•</span>
                  </>

                ) : (
                  <Skeleton width={50} />
                )}
                {!loading ? (
                  <div className='review'>
                    <FaStar className='start' />
                    <p>{business?.reviews?.total}</p>
                  </div>
                ) : (
                  <Skeleton width={50} />
                )}
              </BusinessDetail>
              {
                !loading ? (
                  <div className='preorder-Reviews'>
                    <span onClick={() => setIsPreOrder(true)}>{t('PREORDER', 'Preorder')}</span>
                    <span className='dot'>•</span>
                    {business.reviews?.reviews && <span onClick={() => setIsBusinessReviews(true)}>{t('REVIEWS', 'Reviews')}</span>}
                  </div>
                ) : (
                  <Skeleton width={100} />
                )
              }
            </BusinessInfoItem>
          </BusinessInfo>
        </BusinessInfoContent>
        {(categoryState?.products?.length !== 0 || searchValue) && !errorQuantityProducts && (
          <WrapperSearch>
            <SearchBar
              onSearch={handleChangeSearch}
              search={searchValue}
              placeholder={t('SEARCH_PRODUCTS', theme?.defaultLanguages?.SEARCH_PRODUCTS || 'Search Products')}
              lazyLoad={businessState?.business?.lazy_load_products_recommended}
              handleChangeSortBy={handleChangeSortBy}
              isFilter
              sortByOptions={sortByOptions}
              defaultValue={sortByValue}
            />
          </WrapperSearch>
        )}
      </BusinessInfoContainer>
      <Modal
        width='70%'
        open={openBusinessInformation}
        onClose={setOpenBusinessInformation}
        padding='0'
        hideCloseDefault
        isTransparent
      >
        <BusinessInformation
          business={business}
          getBusinessType={getBusinessType}
          optimizeImage={optimizeImage}
          onClose={setOpenBusinessInformation}
        />
      </Modal>
      <Modal
        width='70%'
        open={isBusinessReviews}
        onClose={() => setIsBusinessReviews(false)}
        padding='20px'
      >
        <BusinessReviews
          businessId={business.id}
          reviews={business.reviews?.reviews}
          businessName={business.name}
          stars={business.reviews?.total}
        />
      </Modal>
      <Modal
        width='70%'
        open={isPreOrder}
        onClose={() => setIsPreOrder(false)}
        padding='20px'
      >
        <MomentContent />
      </Modal>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
