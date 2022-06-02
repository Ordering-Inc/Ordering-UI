import React, { useState } from 'react'
import { BusinessController as BusinessSingleCard, useLanguage, useUtils } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { Alert } from '../../../../../components/Confirm'
import BsExclamationCircle from '@meronex/icons/bs/BsExclamationCircle'
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
  NameWrapper,
  BusinessInfomation
} from './styles'
import GrClock from '@meronex/icons/gr/GrClock'
import GrDeliver from '@meronex/icons/gr/GrDeliver'
import GrLocation from '@meronex/icons/gr/GrLocation'
import GrStar from '@meronex/icons/gr/GrStar'
import BiCar from '@meronex/icons/bi/BiCar'
import BiBasket from '@meronex/icons/bi/BiBasket'
// import BusinessInformation from '../BusinessInformation'

const BusinessControllerUI = (props) => {
  const {
    isSkeleton,
    business,
    orderState,
    handleClick,
    orderType,
    isCustomLayout,
    isShowCallcenterInformation,
    handleShowBusinessInfo,
    businessesListeningSettings
  } = props
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()
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
        <WrapperBusinessCard isSkeleton={isSkeleton} onClick={() => !isSkeleton && handleClick && (!business?.open && isCustomLayout ? handleShowAlert() : handleClick(business))}>
          <BusinessContent>
            {(businessesListeningSettings?.information_show_status?.business_logo || businessesListeningSettings?.information_show_status?.business_logo === undefined) && (
              <WrapperBusinessLogo isSkeleton={isSkeleton}>
                {!isSkeleton && (business?.logo || theme.images?.dummies?.businessLogo) ? (
                  <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
                ) : (
                  <Skeleton height={70} width={70} />
                )}
              </WrapperBusinessLogo>
            )}
            <BusinessInfo className='info'>
              <BusinessInfoItem>
                {(businessesListeningSettings?.information_show_status?.address || businessesListeningSettings?.information_show_status?.address === undefined) && (
                  <NameWrapper>
                    {business?.name ? (
                      <BusinessName>{business?.name}</BusinessName>
                    ) : (
                      <Skeleton width={100} />
                    )}
                  </NameWrapper>
                )}
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
                  {(businessesListeningSettings?.information_show_status?.delivery_pickup_time || businessesListeningSettings?.information_show_status?.delivery_pickup_time === undefined) && (
                    <>
                      {Object.keys(business).length > 0 ? (
                        <p className='bullet'>
                          <GrClock />
                          {convertHoursToMinutes(orderState?.options?.type === 1 ? business?.delivery_time : business?.pickup_time) || <Skeleton width={100} />}
                        </p>
                      ) : (
                        <Skeleton width={70} />
                      )}
                    </>
                  )}
                  {(businessesListeningSettings?.information_show_status?.delivery_distance || businessesListeningSettings?.information_show_status?.delivery_distance === undefined) && (
                    <>
                      {business?.distance >= 0 ? (
                        <p className='bullet'>
                          <GrLocation />
                          {parseDistance(business?.distance)}
                        </p>
                      ) : (
                        <Skeleton width={70} />
                      )}
                    </>
                  )}
                  {(orderType === 1 &&
                    (businessesListeningSettings?.information_show_status?.delivery_fee || businessesListeningSettings?.information_show_status?.delivery_fee === undefined)) &&
                    (
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
                  {(businessesListeningSettings?.information_show_status?.business_review || businessesListeningSettings?.information_show_status?.business_review === undefined) && (
                    <>
                      {business?.reviews?.total > 0 ? (
                        <div className='reviews'>
                          <GrStar />
                          <span>{business?.reviews?.total}</span>
                        </div>
                      ) : (
                        business?.reviews?.total !== 0 && <Skeleton width={50} />
                      )}
                    </>
                  )}

                </Medadata>
              </BusinessInfoItem>
            </BusinessInfo>
          </BusinessContent>
        </WrapperBusinessCard>
        <BusinessInfomation>
          {
            (business && handleShowBusinessInfo) ? (
              <BsExclamationCircle onClick={() => handleShowBusinessInfo(business)} />
            ) : (
              <Skeleton width={20} />
            )
          }
        </BusinessInfomation>
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
