import React, { useState } from 'react'
import { BusinessController as BusinessSingleCard, useLanguage, useUtils, useOrder } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { Alert } from '../Confirm'
import { Button } from '../../styles/Buttons'

import { convertHoursToMinutes } from '../../../../../utils'
import GrClock from '@meronex/icons/gr/GrClock'
import GrDeliver from '@meronex/icons/gr/GrDeliver'
import GrLocation from '@meronex/icons/gr/GrLocation'
import BiCar from '@meronex/icons/bi/BiCar'
import BiBasket from '@meronex/icons/bi/BiBasket'

import {
  Medadata,
  CallCenterInformation,
  CallCenterInformationBullet,
  BranchListContainer,
  BranchTitle,
  BranchContent,
  BranchInfoBlock,
  OrderBtnWrapper,
  OrderTypeList,
  OrderType
} from './styles'

const BusinessControllerUI = (props) => {
  const {
    isSkeleton,
    business,
    handleClick,
    orderType,
    isCustomLayout,
    isShowCallcenterInformation,
    isBusinessOpen,
    businessWillCloseSoonMinutes
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice, parseDistance }] = useUtils()
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
      <BranchListContainer>
        {
          isSkeleton ? (
            <>
              <BranchTitle>
                <Skeleton width={200} height={30} />
              </BranchTitle>
              <BranchContent>
                <BranchInfoBlock>
                  <Skeleton width={250} />
                  <OrderTypeList>
                    {[...Array(4).keys()].map(i => (
                      <OrderType isSkeleton={isSkeleton} key={i}>
                        <Skeleton width={40} height={20} />
                      </OrderType>
                    ))}
                  </OrderTypeList>
                  <Skeleton width={100} height={25} />
                </BranchInfoBlock>
                <OrderBtnWrapper>
                  <Skeleton width={100} height={35} />
                </OrderBtnWrapper>
              </BranchContent>
            </>
          ) : (
            <>
              <BranchTitle>{business?.name}</BranchTitle>
              <BranchContent>
                <BranchInfoBlock>
                  <p>{business?.address}</p>
                  <OrderTypeList>
                    {Object.keys(business).length > 0 && (
                      <OrderType>
                        <GrClock />
                        <span>
                          {convertHoursToMinutes(orderState?.options?.type === 1 ? business?.delivery_time : business?.pickup_time)}
                        </span>
                      </OrderType>
                    )}
                    {business?.distance >= 0 && (
                      <OrderType>
                        <GrLocation />
                        <span>
                          {parseDistance(business?.distance)}
                        </span>
                      </OrderType>
                    )}
                    {orderType === 1 && business?.delivery_price >= 0 && (
                      <OrderType>
                        <GrDeliver />
                        <span>
                          {business && parsePrice(business?.delivery_price)}
                        </span>
                      </OrderType>
                    )}
                  </OrderTypeList>
                  <Medadata isCustomerMode={isShowCallcenterInformation}>
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
                  {!isBusinessOpen && <span>{t('PREORDER', 'PreOrder')}</span>}
                  {!!businessWillCloseSoonMinutes && orderState?.options?.moment === null && isBusinessOpen && (
                    <h1>{businessWillCloseSoonMinutes} {t('MINUTES_TO_CLOSE', 'minutes to close')}</h1>
                  )}
                  {!isBusinessOpen && <h1>{t('CLOSED', 'Closed')}</h1>}
                </BranchInfoBlock>
                <OrderBtnWrapper>
                  <Button
                    outline
                    color='primary'
                    onClick={() => !isSkeleton && handleClick && (!isBusinessOpen && isCustomLayout ? handleShowAlert() : handleClick(business))}
                  >
                    {t('START_ORDER', 'Start order')}
                  </Button>
                </OrderBtnWrapper>
              </BranchContent>
            </>
          )
        }
      </BranchListContainer>
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
