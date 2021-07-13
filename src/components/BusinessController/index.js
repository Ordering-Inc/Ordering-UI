import React, { useState } from 'react'
import { BusinessController as BusinessSingleCard, useLanguage, useUtils, useOrder } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { Alert } from '../Confirm'

import { convertHoursToMinutes } from '../../utils'

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
  BusinessInfoItem,
  BusinessName,
  Categories,
  Medadata,
  CallCenterInformation,
  CallCenterInformationBullet
} from './styles'
import GrClock from '@meronex/icons/gr/GrClock'
import GrDeliver from '@meronex/icons/gr/GrDeliver'
import GrLocation from '@meronex/icons/gr/GrLocation'
import GrStar from '@meronex/icons/gr/GrStar'
import FaCrown from '@meronex/icons/fa/FaCrown'
import BiCar from '@meronex/icons/bi/BiCar'
import BiBasket from '@meronex/icons/bi/BiBasket'

const BusinessControllerUI = (props) => {
  const {
    isSkeleton,
    business,
    getBusinessOffer,
    handleClick,
    orderType,
    isCustomLayout,
    isShowCallcenterInformation,
    isBusinessOpen,
    businessWillCloseSoonMinutes,
    isBusinessClose
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()
  const [orderState] = useOrder()

  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const types = ['food', 'alcohol', 'groceries', 'laundry']

  const businessType = () => {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General')
    const _types = []
    types.forEach(type => business[type] && _types.push(
      t(`BUSINESS_TYPE_${type?.replace(/\s/g, '_')?.toUpperCase()}`, type)
    ))
    return _types.join(', ')
  }

  const handleShowAlert = () => {
    setAlertState({ open: true, content: [t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The Business is closed at the moment')] })
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ContainerCard isSkeleton={isSkeleton}>
        <WrapperBusinessCard isSkeleton={isSkeleton} onClick={() => !isSkeleton && handleClick && (!isBusinessOpen && isCustomLayout ? handleShowAlert() : handleClick(business))}>
          <BusinessHero>
            {isSkeleton ? (
              <Skeleton height={100} />
            ) : (
              <BusinessHeader bgimage={optimizeImage(business?.header || theme.images?.dummies?.businessLogo, 'h_400,c_limit')} isClosed={!isBusinessOpen || isBusinessClose}>
                <BusinessTags>
                  {business?.featured &&
                    <span className='crown'>
                      <FaCrown />
                    </span>}
                  {!isCustomLayout && (
                    <div>
                      {getBusinessOffer(business?.offers) && <span>{getBusinessOffer(business?.offers) || parsePrice(0)}</span>}
                      {(!isBusinessOpen || isBusinessClose) && <span>{t('PREORDER', 'PreOrder')}</span>}
                    </div>
                  )}
                </BusinessTags>
                {!!businessWillCloseSoonMinutes && orderState?.options?.moment === null && isBusinessOpen && !isBusinessClose && (
                  <h1>{businessWillCloseSoonMinutes} {t('MINUTES_TO_CLOSE', 'minutes to close')}</h1>
                )}
                {(!isBusinessOpen || isBusinessClose) && <h1>{t('CLOSED', 'Closed')}</h1>}
              </BusinessHeader>
            )}
          </BusinessHero>
          <BusinessContent>
            <WrapperBusinessLogo isSkeleton={isSkeleton}>
              {!isSkeleton && (business?.logo || theme.images?.dummies?.businessLogo) ? (
                <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
              ) : (
                <Skeleton height={70} width={70} />
              )}
            </WrapperBusinessLogo>
            <BusinessInfo className='info'>
              <BusinessInfoItem>
                <div>
                  {business?.name ? (
                    <BusinessName>{business?.name}</BusinessName>
                  ) : (
                    <Skeleton width={100} />
                  )}
                  {business?.reviews?.total > 0 ? (
                    <div className='reviews'>
                      <GrStar />
                      <span>{business?.reviews?.total}</span>
                    </div>
                  ) : (
                    business?.reviews?.total !== 0 && <Skeleton width={50} />
                  )}
                </div>
                {!isShowCallcenterInformation && (
                  <Categories>
                    {
                      Object.keys(business).length > 0 ? (
                        businessType()
                      ) : (
                        <Skeleton width={100} />
                      )
                    }
                  </Categories>
                )}
                <Medadata isCustomerMode={isShowCallcenterInformation}>
                  {Object.keys(business).length > 0 ? (
                    <p className='bullet'>
                      <GrClock />
                      {convertHoursToMinutes(orderState?.options?.type === 1 ? business?.delivery_time : business?.pickup_time) || <Skeleton width={100} />}
                    </p>
                  ) : (
                    <Skeleton width={70} />
                  )}
                  {business?.distance >= 0 ? (
                    <p className='bullet'>
                      <GrLocation />
                      {parseDistance(business?.distance)}
                    </p>
                  ) : (
                    <Skeleton width={70} />
                  )}
                  {orderType === 1 && (
                    <>
                      {business?.delivery_price >= 0 ? (
                        <p>
                          <GrDeliver />
                          {business && parsePrice(business?.delivery_price)}
                        </p>
                      ) : (
                        <Skeleton width={70} />
                      )}
                    </>
                  )}
                  {isShowCallcenterInformation && (
                    <CallCenterInformation>
                      <CallCenterInformationBullet bgcolor='green'>
                        <BiCar />
                        {business?.available_drivers?.length}
                      </CallCenterInformationBullet>
                      <CallCenterInformationBullet bgcolor='red'>
                        <BiCar />
                        {business?.busy_drivers?.length}
                      </CallCenterInformationBullet>
                      <CallCenterInformationBullet bgcolor='rgb(252,225,5)'>
                        <BiBasket />
                        {business?.active_orders?.length}
                      </CallCenterInformationBullet>
                    </CallCenterInformation>
                  )}
                </Medadata>
              </BusinessInfoItem>
            </BusinessInfo>
          </BusinessContent>
        </WrapperBusinessCard>
      </ContainerCard>
      <Alert
        title={t('BUSINESS_CLOSED', 'Business Closed')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
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
