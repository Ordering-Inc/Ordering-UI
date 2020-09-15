import React from 'react'
import { BusinessController as BusinessSingleCard, useLanguage } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'

import deliver from '../../../template/assets/delivery-icon.svg'
import crown from '../../../template/assets/crown.svg'
import star from '../../../template/assets/star.svg'
import locationMarker from '../../../template/assets/location-marker.svg'
import clock from '../../../template/assets/clock.svg'

import {
  ContainerCard,
  WrapperBusinessCard,
  BusinessHero,
  BusinessHeader,
  WrapperBusinessLogo,
  BusinessTags,
  BusinessContent,
  BusinessLogo,
  BusinessInfo,
  BusinessInfoItem
} from './styles'

const BusinessControllerUI = (props) => {
  const {
    isSkeleton,
    business,
    getBusinessOffer,
    formatNumber,
    orderState,
    handleClick
  } = props

  const [, t] = useLanguage()

  const types = ['food', 'laundry', 'alcohol', 'groceries']
  const formatAmount = (amount = 0) => `$ ${amount.toFixed(2)}`
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

  return (
    <ContainerCard isSkeleton={isSkeleton}>
      <WrapperBusinessCard isSkeleton={isSkeleton} onClick={() => handleClick(business?.slug)}>
        <BusinessHero>
          {business?.header ? (
            <BusinessHeader bgimage={business?.header} isClosed={business?.open}>
              <BusinessTags>
                {business?.featured &&
                  <span className='crown'>
                    <img src={crown} alt='crown-icon' />
                  </span>}
                <div>
                  {getBusinessOffer(business?.offers) && <span>{getBusinessOffer(business?.offers) || '$0.00'}</span>}
                  {business?.open && <span>{t('PREORDER')}</span>}
                </div>
              </BusinessTags>
              {business?.open && <h1>{t('CLOSED')}</h1>}
            </BusinessHeader>
          ) : (
            <Skeleton height={100} />
          )}
        </BusinessHero>
        <BusinessContent>
          <WrapperBusinessLogo>
            {business?.logo ? (
              <BusinessLogo bgimage={business?.logo} />
            ) : (
              <Skeleton height={70} width={70} />
            )}
          </WrapperBusinessLogo>
          <BusinessInfo className='info'>
            <BusinessInfoItem>
              <div>
                {business?.name ? (
                  <p className='bold'>{business?.name}</p>
                ) : (
                  <Skeleton width={100} />
                )}
                {business?.reviews?.total >= 0 ? (
                  <p className='reviews'>
                    <img src={star} alt='star-icon' />
                    {business?.reviews?.total}
                  </p>
                ) : (
                  <Skeleton width={100} />
                )}
              </div>
              <div>
                {Object.keys(business).length > 0 ? (
                  <p>{getBusinessType()}</p>
                ) : (
                  <Skeleton width={100} />
                )}
              </div>
              <div>
                {Object.keys(business).length > 0 ? (
                  <>
                    {orderState?.options?.type === 1 ? (
                      <p className='bullet'>
                        <img src={clock} alt='clock-icon' />
                        {dateFormatted(business?.delivery_time) || <Skeleton width={100} />}
                      </p>
                    ) : (
                      <p className='bullet'>
                        <img src={clock} alt='clock-icon' />
                        {dateFormatted(business?.pickup_time) || <Skeleton width={100} />}
                      </p>
                    )}
                  </>
                ) : (
                  <Skeleton width={70} />
                )}
                {business?.distance >= 0 ? (
                  <p className='bullet'>
                    <img src={locationMarker} alt='location-icon' />
                    {formatNumber(business?.distance)} KM
                  </p>
                ) : (
                  <Skeleton width={70} />
                )}
                {business?.delivery_price >= 0 ? (
                  <p>
                    <img src={deliver} alt='deliver-icon' />
                    {business && formatAmount(business?.delivery_price)}
                  </p>
                ) : (
                  <Skeleton width={70} />
                )}
              </div>
            </BusinessInfoItem>
          </BusinessInfo>
        </BusinessContent>
      </WrapperBusinessCard>
    </ContainerCard>
  )
}

export const BusinessController = (props) => {
  const businessControllerProps = {
    ...props,
    UIComponent: BusinessControllerUI
  }

  return (
    <BusinessSingleCard {...businessControllerProps} />
  )
}
