import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import FaStar from '@meronex/icons/fa/FaStar'
import BsInfoCircle from '@meronex/icons/bs/BsInfoCircle'
import { useTheme } from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Modal } from '../Modal'
import { BusinessInformation } from '../BusinessInformation'
import { SearchBar } from '../SearchBar'
import { BusinessReviews } from '../BusinessReviews'
import { MomentContent } from '../MomentContent'
import HiArrowNarrowLeft from '@meronex/icons/hi/HiArrowNarrowLeft'

import { useUtils, useOrder, useLanguage } from 'ordering-components'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { convertHoursToMinutes } from '../../../../../utils'
import { Select } from '../../styles/Select'

import {
  BusinessContainer,
  BusinessContent,
  WrapperBusinessLogo,
  BusinessLogo,
  BusinessInfo,
  BusinessInfoItem,
  BusinessInfoContainer,
  BusinessInfoContent,
  WrapperSearch,
  BusinessDetail,
  BusinessMoreDetail,
  BusinessInfoWrapper,
  BusinessName
} from './styles'

const types = ['food', 'laundry', 'alcohol', 'groceries']

export const BusinessBasicInformation = (props) => {
  const {
    isSkeleton,
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
  const history = useHistory()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const windowSize = useWindowSize()
  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()
  const [isBusinessReviews, setIsBusinessReviews] = useState(false)
  const [isPreOrder, setIsPreOrder] = useState(false)
  const [hideClose, setHideClose] = useState(false)

  const getBusinessType = () => {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General')
    const _types = []
    types.forEach(type => business[type] && _types.push(
      t(`BUSINESS_TYPE_${type?.replace(/\s/g, '_')?.toUpperCase()}`, type)
    ))
    return _types.join(', ')
  }

  const openBusineesInfomation = () => {
    setOpenBusinessInformation(true)
    if (windowSize.width > 768) {
      setHideClose(true)
    } else {
      setHideClose(false)
    }
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {(windowSize.width < 768) && (categoryState?.products?.length !== 0 || searchValue) && !errorQuantityProducts && (
        <WrapperSearch style={{ marginBottom: '15px' }}>
          <HiArrowNarrowLeft onClick={() => history.goBack()} />
          <SearchBar
            onSearch={handleChangeSearch}
            search={searchValue}
            placeholder={t('SEARCH_PRODUCTS', theme?.defaultLanguages?.SEARCH_PRODUCTS || 'Search Products')}
            lazyLoad={businessState?.business?.lazy_load_products_recommended}
          />
        </WrapperSearch>
      )}
      <BusinessInfoWrapper>
        <BusinessInfoContainer>
          <BusinessInfoContent>
            <BusinessInfo className='info'>
              <BusinessInfoItem>
                {!loading ? (
                  <BusinessName>
                    <h2 className='bold'>{business?.name}</h2>
                  </BusinessName>
                ) : (
                  <Skeleton width={100} />
                )}
                {!loading ? (
                  <p className='type'>{getBusinessType()}</p>
                ) : (
                  <Skeleton width={100} />
                )}
                <BusinessDetail>
                  {orderState?.options.type === 1 && (
                    <>
                      {!loading ? (
                        <p>
                          <span>{t('DELIVERY_FEE', 'Delivery fee')}</span>
                          {business && parsePrice(business?.delivery_price || 0)}
                        </p>
                      ) : (
                        <Skeleton width={70} />
                      )}
                    </>
                  )}
                  {!loading ? (
                    <>
                      {orderState?.options?.type === 1 ? (
                        <p>
                          {convertHoursToMinutes(business?.delivery_time)}
                        </p>
                      ) : (
                        <p>
                          {convertHoursToMinutes(business?.pickup_time)}
                        </p>
                      )}
                    </>
                  ) : (
                    <Skeleton width={70} />
                  )}

                  {!loading ? (
                    <p>
                      {parseDistance(business?.distance || 0)}
                    </p>
                  ) : (
                    <Skeleton width={70} />
                  )}
                  <>
                    {!loading ? (
                      <div className='review'>
                        <FaStar className='start' />
                        <span>{business?.reviews?.total}</span>
                      </div>
                    ) : (
                      <Skeleton width={100} />
                    )}
                  </>
                </BusinessDetail>
                {
                  !loading ? (
                    <div className='preorder-Reviews'>
                      <span onClick={() => setIsPreOrder(true)}>{t('PREORDER', 'Preorder')}</span>
                      {business.reviews?.reviews && <span onClick={() => setIsBusinessReviews(true)}>{t('REVIEWS', 'Reviews')}</span>}
                    </div>
                  ) : (
                    <Skeleton width={100} />
                  )
                }
              </BusinessInfoItem>
            </BusinessInfo>
          </BusinessInfoContent>
          {((windowSize.width > 767)) && (categoryState?.products?.length !== 0 || searchValue) && !errorQuantityProducts && (
            <WrapperSearch>
              <SearchBar
                onSearch={handleChangeSearch}
                search={searchValue}
                placeholder={t('SEARCH_PRODUCTS', theme?.defaultLanguages?.SEARCH_PRODUCTS || 'Search Products')}
                lazyLoad={businessState?.business?.lazy_load_products_recommended}
              />
              <Select
                notAsync
                notReload
                options={sortByOptions}
                defaultValue={sortByValue}
                onChange={(val) => handleChangeSortBy && handleChangeSortBy(val)}
              />
            </WrapperSearch>
          )}
        </BusinessInfoContainer>
        <BusinessContainer bgimage={business?.header} isSkeleton={isSkeleton} id='container' isClosed={!business?.open}>
          {(!loading && !business?.open) && <h1>{t('CLOSED', 'Closed')}</h1>}
          <BusinessContent>
            <WrapperBusinessLogo>
              {!loading ? (
                <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
              ) : (
                <Skeleton height={70} width={70} />
              )}
            </WrapperBusinessLogo>
          </BusinessContent>
          {!loading && (
            <BusinessMoreDetail>
              <BsInfoCircle
                className='popup'
                onClick={() => openBusineesInfomation()}
              />
            </BusinessMoreDetail>
          )}
        </BusinessContainer>
      </BusinessInfoWrapper>
      <Modal
        width='70%'
        open={openBusinessInformation}
        onClose={setOpenBusinessInformation}
        padding='0'
        hideCloseDefault={hideClose}
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
