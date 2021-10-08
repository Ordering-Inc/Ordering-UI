import React, { useState } from 'react'
import { BusinessController as BusinessSingleCard, useLanguage, useUtils, useOrder } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { Alert } from '../../../../../components/Confirm'

import { convertHoursToMinutes } from '../../../../../utils'

import {
  ContainerCard,
  WrapperBusinessCard,
  BusinessHero,
  BusinessHeader,
  BusinessTags,
  BusinessContent,
  BusinessInfo,
  BusinessInfoItem,
  BusinessName,
  BuinessMeta,
  MetaItem
} from './styles'
import GrStar from '@meronex/icons/gr/GrStar'
import FaCrown from '@meronex/icons/fa/FaCrown'
import { Button } from '../../styles/Buttons'

const BusinessControllerUI = (props) => {
  const {
    isSkeleton,
    business,
    getBusinessOffer,
    handleClick,
    isCustomLayout,
    isBusinessOpen,
    businessWillCloseSoonMinutes,
    isBusinessClose,
    isPickup
  } = props
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()
  const [orderState] = useOrder()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

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
      <ContainerCard isSkeleton={isSkeleton} isPickup={isPickup}>
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
                {(
                  <BuinessMeta>
                    {business?.delivery_price >= 0 ? (
                      <>
                        <MetaItem>
                          {t('DELIVERY_PRICE', 'Delivery Price')}{' '}
                          {business && parsePrice(business?.delivery_price)}
                        </MetaItem>
                        {' ◦ '}
                      </>
                    ) : (
                      <Skeleton width={70} />
                    )}
                    {Object.keys(business).length > 0 ? (
                      <MetaItem>
                        {convertHoursToMinutes(orderState?.options?.type === 1 ? business?.delivery_time : business?.pickup_time) || <Skeleton width={100} />}
                      </MetaItem>
                    ) : (
                      <Skeleton width={70} />
                    )}
                    {business?.distance >= 0 ? (
                      <>
                        {' ◦ '}
                        <MetaItem>
                          {parseDistance(business?.distance)}
                        </MetaItem>
                      </>
                    ) : (
                      <Skeleton width={70} />
                    )}

                  </BuinessMeta>
                )}
                <Button outline color='primary'>
                  {t('GOTO_STORE', 'Go To Store')}
                </Button>
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
