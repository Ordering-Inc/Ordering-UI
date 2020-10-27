import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import FiClock from '@meronex/icons/fi/FiClock'
import VscLocation from '@meronex/icons/vsc/VscLocation'
import GrDeliver from '@meronex/icons/gr/GrDeliver'
import FaStar from '@meronex/icons/fa/FaStar'
import BsExclamationCircle from '@meronex/icons/bs/BsExclamationCircle'

import { Modal } from '../Modal'
import { BusinessInformation } from '../BusinessInformation'

import { useUtils, useOrder } from 'ordering-components'

import { optimizeImage, convertHoursToMinutes } from '../../utils'

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

  const [{ parsePrice, parseDistance }] = useUtils()

  const getBusinessType = () => {
    if (Object.keys(business).length <= 0) return 'none'
    const typeObj = types.map(t => {
      return { [t]: business[t] }
    }).reduce((r, c) => ({ ...r, ...c }), {})
    const businessType = Object.entries(typeObj).reduce((a, [k, v]) => v !== false ? [...a, [k, v]] : a, [])[0]
    return businessType[0]
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
                <Skeleton width={70} />
              )}

              {!loading ? (
                <p>
                  <VscLocation />
                  {parseDistance(business?.distance || 0)}
                </p>
              ) : (
                <Skeleton width={70} />
              )}

              {!loading ? (
                <p>
                  <GrDeliver />
                  {business && parsePrice(business?.delivery_price || 0)}
                </p>
              ) : (
                <Skeleton width={70} />
              )}

              {!loading && (
                <p>
                  <BsExclamationCircle
                    className='popup'
                    onClick={() => setOpenBusinessInformation(true)}
                  />
                </p>
              )}
            </div>
          </BusinessInfoItem>
        </BusinessInfo>
      </BusinessContent>

      <Modal
        width='70%'
        open={openBusinessInformation}
        onClose={() => setOpenBusinessInformation(false)}
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
    </BusinessContainer>
  )
}
