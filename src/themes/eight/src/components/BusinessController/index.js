import React, { useState } from 'react'
import { BusinessController as BusinessSingleCard, useLanguage, useUtils, useOrder } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import GrStar from '@meronex/icons/gr/GrStar'
import BiCar from '@meronex/icons/bi/BiCar'
import BiBasket from '@meronex/icons/bi/BiBasket'
import EnDotSingle from '@meronex/icons/en/EnDotSingle'
import { Button } from '../../styles'

import { Alert } from '../../../../../components/Confirm'
import { convertHoursToMinutes } from '../../../../../utils'

import {
  ContainerCard,
  WrapperBusinessCard,
  WrapperBusinessLogo,
  BusinessContent,
  BusinessLogo,
  BusinessInfo,
  BusinessInfoItem,
  BusinessName,
  Categories,
  Medadata,
  CallCenterInformation,
  CallCenterInformationBullet,
  BusinessActions,
  BusinessAddress,
  GreenDataItem,
  BusinessClosed
} from './styles'

const BusinessControllerUI = (props) => {
  const {
    isSkeleton,
    business,
    isCartStore,
    getBusinessOffer,
    handleClick,
    orderType,
    isCustomLayout,
    isShowCallcenterInformation,
    isBusinessOpen,
    businessWillCloseSoonMinutes,
    isBusinessClose,
    handleCartStoreClick
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
      <ContainerCard isSkeleton={isSkeleton} isStore={isCartStore}>
        <WrapperBusinessCard isSkeleton={isSkeleton}>
          <BusinessContent isStore={isCartStore}>
            <WrapperBusinessLogo isSkeleton={isSkeleton} isStore={isCartStore}>
              {!isSkeleton && (business?.logo || theme.images?.dummies?.businessLogo) && (
                <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
              )}
              {isSkeleton && <Skeleton height={70} width={70} />}
            </WrapperBusinessLogo>
            <BusinessInfo className='info'>
              <BusinessInfoItem>
                <div>
                  {!isSkeleton && business?.name && (
                    <BusinessName>{business?.name}</BusinessName>
                  )}
                  {isSkeleton &&  <BusinessName><Skeleton width={100} /></BusinessName>}
                  {!isSkeleton && business?.reviews?.total > 0 && (
                    <div className='reviews'>
                      <GrStar />
                      <span>{business?.reviews?.total}</span>
                    </div>
                  )}
                  {isSkeleton &&  <Skeleton width={50} />}
                </div>
                {!isShowCallcenterInformation && (
                  <Categories>
                    {!isSkeleton && Object.keys(business).length > 0 && (
                      businessType()
                    )}
                    {isSkeleton &&  <Skeleton width={100} />}
                  </Categories>
                )}
                <Medadata isCustomerMode={isShowCallcenterInformation}>
                  {orderType === 1 && (
                    <>
                      {!isSkeleton && business?.delivery_price >= 0 && (
                        <p>
                          <span>{t('DELIVERY_V2', 'Delivery Fee:')}</span>
                          &nbsp;
                          {business && parsePrice(business?.delivery_price)}
                          <EnDotSingle />
                        </p>
                      )}
                      {isSkeleton && <p><Skeleton width={70} /></p>}
                    </>
                  )}
                  {!isSkeleton && Object.keys(business).length > 0 && (
                    <p className='bullet'>
                      {convertHoursToMinutes(orderState?.options?.type === 1 ? business?.delivery_time : business?.pickup_time) || <Skeleton width={100} />}
                      <EnDotSingle />
                    </p>
                  )}
                  {isSkeleton && <p><Skeleton width={70} /></p>}
                  {!isSkeleton && business?.distance >= 0 && (
                    <p className='bullet'>
                      {parseDistance(business?.distance)}
                    </p>
                  )}
                  {isSkeleton && <p><Skeleton width={70} /></p>}

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
                <BusinessAddress>
                  {business?.address}
                </BusinessAddress>
                {!isSkeleton && (
                  <>
                    {business?.featured && (
                      <GreenDataItem>{t('BLIST_FEATURED', 'Featured')}</GreenDataItem>
                    )}
                    {getBusinessOffer(business?.offers) && <GreenDataItem>{t('OFFER', 'Offer')}: {getBusinessOffer(business?.offers) || parsePrice(0)}</GreenDataItem>}
                    {(!isBusinessOpen || isBusinessClose) && <GreenDataItem>{t('PREORDER', 'PreOrder')}</GreenDataItem>}
                    {!!businessWillCloseSoonMinutes && orderState?.options?.moment === null && isBusinessOpen && !isBusinessClose && (
                      <BusinessClosed>{businessWillCloseSoonMinutes} {t('MINUTES_TO_CLOSE', 'minutes to close')}</BusinessClosed>
                    )}
                    {(!isBusinessOpen || isBusinessClose) && <BusinessClosed>{t('CLOSED', 'Closed')}</BusinessClosed>}
                  </>
                )}
              </BusinessInfoItem>
            </BusinessInfo>
          </BusinessContent>
          <BusinessActions isStore={isCartStore}>
            {!isCartStore && (
              <Button
                color='primaryGradient'
                disabled={isSkeleton}
                onClick={() => !isSkeleton && handleClick && (!isBusinessOpen && isCustomLayout ? handleShowAlert() : handleClick(business))}
              >
                {t('SELECT_THIS_RESTAURANT', 'Select this restaurant')}
              </Button>
            )}
            {isCartStore && handleCartStoreClick && (
              <Button
                color='primaryGradient'
                disabled={props.disabledStoreBtn}
                onClick={() => handleCartStoreClick(business.id)}
              >
                {t('SELECT_THIS_RESTAURANT', 'Select this restaurant')}
              </Button>
            )}
          </BusinessActions>
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
