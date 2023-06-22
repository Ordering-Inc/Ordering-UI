import React from 'react'
import Skeleton from 'react-loading-skeleton'
import FiClock from '@meronex/icons/fi/FiClock'
import GrLocation from '@meronex/icons/gr/GrLocation'
import GrDeliver from '@meronex/icons/gr/GrDeliver'
import FaStar from '@meronex/icons/fa/FaStar'
import { useUtils, useOrder, useLanguage } from 'ordering-components'
import { convertHoursToMinutes } from '../../../../../utils'

import {
  BusinessContainer,
  BusinessContent,
  BusinessInfo,
  BusinessInfoItem
} from './styles'
import { useTheme } from 'styled-components'
const types = ['food', 'laundry', 'alcohol', 'groceries']
export const BusinessBasicInformation = (props) => {
  const {
    isSkeleton,
    businessState
  } = props
  const { business, loading } = businessState
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [{ parsePrice, parseDistance }] = useUtils()
  const theme = useTheme()
  const getBusinessType = () => {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General')
    const _types = []
    types.forEach(type => business[type] && _types.push(
      t(`BUSINESS_TYPE_${type?.replace(/\s/g, '_')?.toUpperCase()}`, type)
    ))
    return _types.join(', ')
  }

  const showDeliveryFee = !theme?.business_view?.components?.header?.components?.business?.components?.fee?.hidden
  const showTime = !theme?.business_view?.components?.header?.components?.business?.components?.time?.hidden
  const showBusinessInfo = !theme?.business_view?.components?.header?.components?.business?.components?.business_info?.hidden
  const showReviews = !theme?.business_view?.components?.header?.components?.business?.components?.reviews?.hidden
  const showDistance = !theme?.business_view?.components?.header?.components?.business?.components?.distance?.hidden

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <BusinessContainer isClosed={!business?.open} isSkeleton={isSkeleton} id='container'>
        {!loading ? (
          <>
            {!business?.open && <h1>{t('CLOSED', 'Closed')}</h1>}
          </>
        ) : (
          <h1><Skeleton width={100} /></h1>
        )}
        <BusinessContent>
          <BusinessInfo className='info'>
            <BusinessInfoItem>
              <div>
                {!loading ? (
                  <h2 className='bold'>{business?.name}</h2>
                ) : (
                  <Skeleton width={150} height={30} />
                )}
              </div>
              {
                showBusinessInfo && (
                  <div>
                    {!loading ? (
                      <p className='type'>{getBusinessType()}</p>
                    ) : (
                      <Skeleton width={100} />
                    )}
                  </div>
                )
              }
              <div className='meta'>
                {showTime && (
                  <>
                    {!loading ? (
                      <>
                        {orderState?.options?.type === 1 ? (
                          <p>
                            <FiClock />
                            {convertHoursToMinutes(business?.delivery_time)}
                          </p>
                        ) : (
                          <p>
                            <FiClock />
                            {convertHoursToMinutes(business?.pickup_time)}
                          </p>
                        )}
                      </>
                    ) : (
                      <Skeleton width={50} />
                    )}
                  </>
                )}
                {showDistance && (
                  <>
                    {!loading ? (
                      <p>
                        <GrLocation />
                        {parseDistance(business?.distance || 0)}
                      </p>
                    ) : (
                      <Skeleton width={50} />
                    )}
                  </>
                )}
                {orderState?.options.type === 1 && showDeliveryFee && (
                  <>
                    {!loading ? (
                      <p>
                        <GrDeliver />
                        {business && parsePrice(business?.delivery_price || 0)}
                      </p>
                    ) : (
                      <Skeleton width={50} />
                    )}
                  </>
                )}
                {showReviews && (
                  <>
                    {!loading ? (
                      <p>
                        <FaStar className='start' />
                        {business?.reviews?.total}
                      </p>
                    ) : (
                      <Skeleton width={50} />
                    )}
                  </>
                )}
              </div>
            </BusinessInfoItem>
          </BusinessInfo>
        </BusinessContent>
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
