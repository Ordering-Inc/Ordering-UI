import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { StarFill } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'

import { Modal } from '../Modal'
import { BusinessInformation } from '../BusinessInformation'
import { SearchBar } from '../SearchBar'
import { BusinessReviews } from '../BusinessReviews'
import BsInfoCircle from '@meronex/icons/bs/BsInfoCircle'

import { useUtils, useOrder, useLanguage, useConfig } from 'ordering-components'

import { convertHoursToMinutes } from '../../../../../utils'
import { Select } from '../../styles/Select'
import { MomentContent } from '../MomentContent'

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
  BusinessMoreDetail
} from './styles'
import { BusinessPreorder } from '../BusinessPreorder'

import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(timezone)
dayjs.extend(isBetween)

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
    errorQuantityProducts,
    isCustomerMode
  } = props
  const { business, loading } = businessState

  const theme = useTheme()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()
  const [isBusinessReviews, setIsBusinessReviews] = useState(false)
  const [isPreOrder, setIsPreOrder] = useState(false)
  const [{ configs }] = useConfig()
  const isPreOrderSetting = configs?.preorder_status_enabled?.value === '1'

  const getBusinessType = () => {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General')
    const _types = []
    types.forEach(type => business[type] && _types.push(
      t(`BUSINESS_TYPE_${type?.replace(/\s/g, '_')?.toUpperCase()}`, type)
    ))
    return _types.join(', ')
  }

  useEffect(() => {
    if (businessState?.loading) return
    let timeout = null
    const currentDate = dayjs().tz(businessState?.business?.timezone)
    let lapse = null
    if (businessState?.business?.today?.enabled) {
      lapse = businessState?.business?.today?.lapses?.find(lapse => {
        const from = currentDate.hour(lapse.open.hour).minute(lapse.open.minute)
        const to = currentDate.hour(lapse.close.hour).minute(lapse.close.minute)
        return currentDate.unix() >= from.unix() && currentDate.unix() <= to.unix()
      })
    }
    if (lapse) {
      const to = currentDate.hour(lapse.close.hour).minute(lapse.close.minute)
      const timeToClose = (to.unix() - currentDate.unix()) * 1000
      timeout = setTimeout(() => {
        setIsPreOrder(true)
      }, timeToClose)
    }
    return () => {
      timeout && clearTimeout(timeout)
    }
  }, [businessState?.business])

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
              {!loading ? (
                <h2 className='bold'>{business?.name}</h2>
              ) : (
                <Skeleton width={isCustomerMode ? 100 : 150} height={isCustomerMode ? 35 : 'auto'} />
              )}
              {!loading ? (
                <p className='type'>{getBusinessType()}</p>
              ) : (
                <Skeleton width={isCustomerMode ? 100 : 150} />
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
                      <Skeleton width={isCustomerMode ? 70 : 50} />
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
                  <Skeleton width={isCustomerMode ? 70 : 50} />
                )}

                {!loading ? (
                  <>
                    <h5>
                      {parseDistance(business?.distance || 0)}
                    </h5>
                    <span className='dot'>•</span>
                  </>

                ) : (
                  <Skeleton width={isCustomerMode ? 70 : 50} />
                )}
                {!loading ? (
                  <div className='review'>
                    <StarFill className='start' />
                    <p>{business?.reviews?.total}</p>
                  </div>
                ) : (
                  <Skeleton width={isCustomerMode ? 100 : 50} />
                )}
              </BusinessDetail>
              {
                !loading ? (
                  <div className='preorder-Reviews'>
                    {isPreOrderSetting && (
                      <>
                        <span onClick={() => setIsPreOrder(true)}>{t('PREORDER', 'Preorder')}</span>
                        <span className='dot'>•</span>
                      </>
                    )}
                    {business.reviews?.reviews && <span onClick={() => setIsBusinessReviews(true)}>{t('REVIEWS', 'Reviews')}</span>}
                  </div>
                ) : (
                  <Skeleton width={isCustomerMode ? 100 : 150} />
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
          <BusinessMoreDetail onClick={() => setOpenBusinessInformation(true)}>
            <BsInfoCircle />
          </BusinessMoreDetail>
        )}
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
          open={isPreOrder}
          width={isCustomerMode ? '700px' : '760px'}
          onClose={() => setIsPreOrder(false)}
          padding={isCustomerMode && '20px'}
        >
          {isCustomerMode ? (
            <MomentContent onClose={() => setIsPreOrder(false)} />
          ) : (
            <BusinessPreorder
              business={business}
              handleClick={() => setIsPreOrder(false)}
            />
          )}
        </Modal>
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
