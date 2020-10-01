import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { FiClock } from 'react-icons/fi'
import { VscLocation } from 'react-icons/vsc'
import { GrDeliver } from 'react-icons/gr'
import { FaStar } from 'react-icons/fa'
import { CgDetailsMore } from 'react-icons/cg'
import { Modal } from '../Modal'
import { BusinessInformation } from '../BusinessInformation'

import { useOrder, useApi } from 'ordering-components'

import { optimizeImage, formatPrice } from '../../utils'

import {
  BusinessContainer,
  BusinessContent,
  WrapperBusinessLogo,
  BusinessLogo,
  BusinessInfo,
  BusinessInfoItem
} from './styles'

const types = ['food', 'laundry', 'alcohol', 'groceries']

export const BusinessBasicInformation = (props) => {
  const {
    isSkeleton,
    businessState
  } = props
  const { business, loading } = businessState

  const [orderState] = useOrder()

  const [openBusinessInformation, setOpenBusinessInformation] = useState(false)

  const [ordering] = useApi()

  const [result, setResult] = useState({})

  useEffect(() => {
    getCompleteBusiness()
  }, [loading])

  const formatNumber = (num) => Math.round(num * 1e2) / 1e2

  const dateFormatted = (date) => {
    if (!date) return
    const hour = date.split(':')[0]
    const minute = date.split(':')[1]
    const formatHour = hour < 10 ? `0${hour}` : hour
    const formatMinute = minute < 10 ? `0${minute}` : minute
    return `${formatHour}:${formatMinute}`
  }

  const getBusinessType = () => {
    if (Object.keys(business).length <= 0) return 'none'
    const typeObj = types.map(t => {
      return { [t]: business[t] }
    }).reduce((r, c) => ({ ...r, ...c }), {})
    const businessType = Object.entries(typeObj).reduce((a, [k, v]) => v !== false ? [...a, [k, v]] : a, [])[0]
    return businessType[0]
  }

  const getCompleteBusiness = async () => {
    const { content: { result } } = await ordering.businesses(business.id).get()
    setResult(result)
  }

  return (
    <BusinessContainer bgimage={business?.header} isSkeleton={isSkeleton}>
      <BusinessContent>
        <WrapperBusinessLogo>
          {!loading ? (
            <BusinessLogo bgimage={optimizeImage(business?.logo, 'h_200,c_limit')} />
          ) : (
            <Skeleton height={70} width={70} />
          )}
        </WrapperBusinessLogo>
        <BusinessInfo className='info'>
          <BusinessInfoItem>
            <div>
              {!loading ? (
                <p className='bold'>{business?.name}</p>
              ) : (
                <Skeleton width={100} />
              )}
              {!loading ? (
                <p>
                  <FaStar className='start' />
                  {business?.reviews?.total}
                </p>
              ) : (
                <Skeleton width={100} />
              )}
            </div>
            <div>
              {!loading ? (
                <p>{getBusinessType()}</p>
              ) : (
                <Skeleton width={100} />
              )}
            </div>
            <div>
              {!loading ? (
                <>
                  {orderState?.options?.type === 1 ? (
                    <p>
                      <FiClock />
                      {dateFormatted(business?.delivery_time)}
                    </p>
                  ) : (
                    <p>
                      <FiClock />
                      {dateFormatted(business?.pickup_time)}
                    </p>
                  )}
                </>
              ) : (
                <Skeleton width={70} />
              )}

              {!loading ? (
                <p>
                  <VscLocation />
                  {formatNumber(business?.distance) || 0} KM
                </p>
              ) : (
                <Skeleton width={70} />
              )}

              {!loading ? (
                <p>
                  <GrDeliver />
                  {business && formatPrice(business?.delivery_price || 0)}
                </p>
              ) : (
                <Skeleton width={70} />
              )}

              {!loading && <p><CgDetailsMore className='popup' onClick={() => setOpenBusinessInformation(true)} /></p>}
            </div>
          </BusinessInfoItem>
        </BusinessInfo>
      </BusinessContent>
      <Modal open={openBusinessInformation} onClose={() => setOpenBusinessInformation(false)}>
        <BusinessInformation business={result} getBusinessType={getBusinessType} formatPrice={formatPrice} formatNumber={formatNumber} dateFormatted={dateFormatted} optimizeImage={optimizeImage} />
      </Modal>
    </BusinessContainer>
  )
}
