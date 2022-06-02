import React, { useState } from 'react'
import { BusinessController as BusinessSingleCard, useLanguage, useUtils, useOrder, useConfig } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { Alert } from '../Confirm'
import { convertHoursToMinutes, shape } from '../../../../../utils'

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
  Medadata,
  CallCenterInformation,
  CallCenterInformationBullet,
  BusinessLogoWrapper,
  BusinessStarInfo,
  InfoLength,
  InfoDescription,
  RibbonBox
  // CardOverlay
} from './styles'
import GoPrimitiveDot from '@meronex/icons/go/GoPrimitiveDot'
import BisStar from '@meronex/icons/bi/BisStar'
import FaCrown from '@meronex/icons/fa/FaCrown'

const BusinessControllerUI = (props) => {
  const {
    isSkeleton,
    business,
    getBusinessOffer,
    handleClick,
    orderType,
    isCustomLayout,
    isCustomerMode,
    isBusinessOpen,
    businessWillCloseSoonMinutes,
    onPreorderBusiness,
    firstCard,
    minWidthEnabled,
    typeButton,
    children,
    businessHeader,
    businessFeatured,
    businessOffers,
    businessLogo,
    businessReviews,
    businessDeliveryPrice,
    businessDeliveryTime,
    businessPickupTime,
    businessDistance,
    businessesListeningSettings
  } = props

  const [configState] = useConfig()
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()
  const [orderState] = useOrder()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  // const handleShowAlert = () => {
  //   setAlertState({ open: true, content: [t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The Business is closed at the moment')] })
  // }

  const handleBusinessClick = () => {
    if (onPreorderBusiness && !isBusinessOpen) onPreorderBusiness(business)
    else handleClick(business)
  }

  const adjustCardHeight = () => {
    const addressHeight = 25
    const logoImgHeight = 50
    const headerImgHeight = 180
    let reduceHeight = ((!businessesListeningSettings?.information_show_status?.delivery_fee &&
                     businessesListeningSettings?.information_show_status?.delivery_fee !== undefined) &&
                    (!businessesListeningSettings?.information_show_status?.delivery_pickup_time &&
                      businessesListeningSettings?.information_show_status?.delivery_pickup_time !== undefined) &&
                    (!businessesListeningSettings?.information_show_status?.delivery_distance &&
                      businessesListeningSettings?.information_show_status?.delivery_distance !== undefined))
      ? -addressHeight : 0
    reduceHeight += (!businessesListeningSettings?.information_show_status?.address &&
                    businessesListeningSettings?.information_show_status?.address !== undefined)
      ? -addressHeight : 0
    reduceHeight += (!businessesListeningSettings?.information_show_status?.business_logo &&
                    businessesListeningSettings?.information_show_status?.business_logo !== undefined)
      ? -logoImgHeight : 0
    reduceHeight += (!businessesListeningSettings?.information_show_status?.business_header &&
        businessesListeningSettings?.information_show_status?.business_header !== undefined)
      ? -headerImgHeight : 0
    return reduceHeight
  }

  const hasInformationLength = (business?.available_drivers?.length + business?.busy_drivers?.length + business?.active_orders?.length) > 0

  if (typeButton) {
    return (
      <ContainerCard typeButton={typeButton}>
        {children}
      </ContainerCard>
    )
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ContainerCard isSkeleton={isSkeleton} isCustomerMode={isCustomerMode && hasInformationLength} firstCard={firstCard} minWidthEnabled={minWidthEnabled} adjustCardHeight={adjustCardHeight}>
        <WrapperBusinessCard isSkeleton={isSkeleton} onClick={() => !isSkeleton && handleClick && handleBusinessClick()}>
          {(businessesListeningSettings?.information_show_status?.business_header || businessesListeningSettings?.information_show_status?.business_header === undefined) && (
            <>
              {business?.ribbon?.enabled && (
                <RibbonBox
                  bgColor={business?.ribbon?.color}
                  isRoundRect={business?.ribbon?.shape === shape?.rectangleRound}
                  isCapsule={business?.ribbon?.shape === shape?.capsuleShape}
                >
                  {business?.ribbon?.text}
                </RibbonBox>
              )}
              <BusinessHero>
                {isSkeleton ? (
                  <Skeleton height={isCustomerMode ? 100 : 140} />
                ) : (
                  <BusinessHeader bgimage={optimizeImage((businessHeader || business?.header || theme.images?.dummies?.businessLogo), 'h_400,c_limit')} isClosed={!isBusinessOpen}>
                    <BusinessTags>
                      {(businessFeatured ?? business?.featured) &&
                        <span className='crown'>
                          <FaCrown />
                        </span>}
                      {!isCustomLayout && (configState?.configs?.preorder_status_enabled?.value === '1') && (
                        <div>
                          {getBusinessOffer((businessOffers ?? business?.offers)) && <span>{getBusinessOffer((businessOffers ?? business?.offers)) || parsePrice(0)}</span>}
                          {!isBusinessOpen && <span>{t('PREORDER', 'PreOrder')}</span>}
                        </div>
                      )}
                    </BusinessTags>
                    {!!businessWillCloseSoonMinutes && orderState?.options?.moment === null && isBusinessOpen && (
                      <h1>{businessWillCloseSoonMinutes} {t('MINUTES_TO_CLOSE', 'minutes to close')}</h1>
                    )}
                    {!isBusinessOpen && <h1 className='closed'>{t('CLOSED', 'Closed')}</h1>}
                  </BusinessHeader>
                )}
              </BusinessHero>
            </>
          )}
          <BusinessContent>
            <BusinessLogoWrapper logoStatus={(businessesListeningSettings?.information_show_status?.business_logo || businessesListeningSettings?.information_show_status?.business_logo === undefined)}>
              {(businessesListeningSettings?.information_show_status?.business_logo || businessesListeningSettings?.information_show_status?.business_logo === undefined) && (
                <WrapperBusinessLogo isSkeleton={isSkeleton} isCustomerMode={isCustomerMode}>
                  {!isSkeleton && (businessLogo || business?.logo || theme.images?.dummies?.businessLogo) ? (
                    <BusinessLogo bgimage={optimizeImage((businessLogo || business?.logo || theme.images?.dummies?.businessLogo), 'h_200,c_limit')} />
                  ) : (
                    <Skeleton height={70} width={70} />
                  )}
                </WrapperBusinessLogo>
              )}
              {(businessesListeningSettings?.information_show_status?.business_review || businessesListeningSettings?.information_show_status?.business_review === undefined) && (
                <BusinessStarInfo>
                  {!isSkeleton ? (
                    (businessReviews ?? business?.reviews?.total) > 0 && (
                      <div className='reviews'>
                        <BisStar />
                        <span>{(businessReviews ?? business?.reviews?.total)}</span>
                      </div>
                    )) : (
                    <Skeleton width={50} />
                  )}
                </BusinessStarInfo>
              )}
            </BusinessLogoWrapper>
            <BusinessInfo className='info'>
              <BusinessInfoItem>
                {(businessesListeningSettings?.information_show_status?.address || businessesListeningSettings?.information_show_status?.address === undefined) && (
                  <div>
                    {business?.name ? (
                      <BusinessName>{business?.name}</BusinessName>
                    ) : (
                      <Skeleton width={100} />
                    )}
                  </div>
                )}
                <Medadata isCustomerMode={isCustomerMode} isSkeleton={isSkeleton}>
                  {(orderType === 1 &&
                    (businessesListeningSettings?.information_show_status?.delivery_fee || businessesListeningSettings?.information_show_status?.delivery_fee === undefined)) &&
                    (
                      <>
                        {(businessDeliveryPrice ?? business?.delivery_price) >= 0 ? (
                          <p>
                            <span>{t('DELIVERY_FEE', 'Delivery fee')}</span>
                            {business && parsePrice((businessDeliveryPrice ?? business?.delivery_price))}
                          </p>
                        ) : (
                          <Skeleton width={isCustomerMode ? 70 : 65} />
                        )}
                      </>
                    )}

                  {(businessesListeningSettings?.information_show_status?.delivery_pickup_time || businessesListeningSettings?.information_show_status?.delivery_pickup_time === undefined) && (
                    <>
                      {Object.keys(business).length > 0 ? (
                        <p className='bullet'>
                          {(businessesListeningSettings?.information_show_status?.delivery_fee || businessesListeningSettings?.information_show_status?.delivery_fee === undefined) &&
                            <GoPrimitiveDot />}
                          {convertHoursToMinutes(orderState?.options?.type === 1 ? (businessDeliveryTime ?? business?.delivery_time) : (businessPickupTime ?? business?.pickup_time)) || <Skeleton width={100} />}
                        </p>
                      ) : (
                        <Skeleton width={65} />
                      )}
                    </>
                  )}

                  {(businessesListeningSettings?.information_show_status?.delivery_distance || businessesListeningSettings?.information_show_status?.delivery_distance === undefined) && (
                    <>
                      {((businessDistance ?? business?.distance) >= 0 && 1) ? (
                        <p className='bullet'>
                          {(businessesListeningSettings?.information_show_status?.delivery_pickup_time || businessesListeningSettings?.information_show_status?.delivery_fee === undefined) &&
                            <GoPrimitiveDot />}
                          {parseDistance((businessDistance ?? business?.distance))}
                        </p>
                      ) : (
                        <Skeleton width={65} />
                      )}
                    </>
                  )}

                  {isCustomerMode && hasInformationLength && (
                    <CallCenterInformation>
                      {business?.available_drivers?.length > 0 && (
                        <CallCenterInformationBullet>
                          <InfoLength>
                            {business?.available_drivers?.length}
                          </InfoLength>
                          <InfoDescription>{t('OPEN_ORDERS', 'Open orders')}</InfoDescription>
                        </CallCenterInformationBullet>
                      )}
                      {business?.busy_drivers?.length > 0 && (
                        <CallCenterInformationBullet>
                          <InfoLength>
                            {business?.busy_drivers?.length}
                          </InfoLength>
                          <InfoDescription>{t('BUSY_DRIVERS', 'Busy drivers')}</InfoDescription>
                        </CallCenterInformationBullet>
                      )}
                      {business?.active_orders?.length > 0 && (
                        <CallCenterInformationBullet>
                          <InfoLength>
                            {business?.active_orders?.length}
                          </InfoLength>
                          <InfoDescription>{t('AVAILABLE_DRIVERS', 'Avalable drivers')}</InfoDescription>
                        </CallCenterInformationBullet>
                      )}
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
