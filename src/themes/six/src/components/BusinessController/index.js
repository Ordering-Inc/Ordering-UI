import React, { useState, useRef } from 'react'
import { BusinessController as BusinessSingleCard, useLanguage, useSession, useUtils } from 'ordering-components'
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
  BusinessInfomation,
  Address,
  SelectStoreContainer
} from './styles'
import GrClock from '@meronex/icons/gr/GrClock'
import GrDeliver from '@meronex/icons/gr/GrDeliver'
import GrLocation from '@meronex/icons/gr/GrLocation'
import GrStar from '@meronex/icons/gr/GrStar'
import BiCar from '@meronex/icons/bi/BiCar'
import BiBasket from '@meronex/icons/bi/BiBasket'
import { Heart as DisLike, HeartFill as Like } from 'react-bootstrap-icons'
import dayjs from 'dayjs'
import { Button } from '../../../../five'
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
    handleFavoriteBusiness
  } = props
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()
  const [{ auth }] = useSession()
  const favoriteRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const layout = theme?.business_listing_view?.components?.layout?.type || 'starbucks'
  const hideCategories = theme?.business_listing_view?.components?.business?.components?.categories?.hidden
  const hideAddress = theme?.business_listing_view?.components?.business?.components?.address?.hidden ?? true
  const hideBusinessFavorite = theme?.business_listing_view?.components?.business?.components?.favorite?.hidden

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

  const handleChangeFavorite = () => {
    if (auth) {
      handleFavoriteBusiness && handleFavoriteBusiness(!business?.favorite)
    }
  }

  const scheduleFormatted = ({ hour, minute }) => {
    const checkTime = (val) => val < 10 ? `0${val}` : val
    return `${checkTime(hour)}:${checkTime(minute)}`
  }

  const getScheduleOpen = (business) => {
    const currentDate = dayjs().tz(business?.timezone)
    let lapse = null
    if (business?.today?.enabled) {
      lapse = business?.today?.lapses?.find(lapse => {
        const from = currentDate.hour(lapse.open.hour).minute(lapse.open.minute)
        const to = currentDate.hour(lapse.close.hour).minute(lapse.close.minute)
        return currentDate.unix() >= from.unix() && currentDate.unix() <= to.unix()
      })
    }
    return lapse ? `${scheduleFormatted(lapse.open)} - ${scheduleFormatted(lapse.close)}` : ''
  }

  const handleClickBusiness = (e, business) => {
    if (favoriteRef?.current?.contains(e.target)) return
    handleClick(business)
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
        <WrapperBusinessCard isSkeleton={isSkeleton} onClick={(e) => !isSkeleton && handleClick && (!business?.open && isCustomLayout ? handleShowAlert() : handleClickBusiness(e, business))}>
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
                <NameWrapper>
                  {business?.name ? (
                    <BusinessName>{business?.name}</BusinessName>
                  ) : (
                    <Skeleton width={100} />
                  )}
                  {layout === 'mapview' && (
                    <BusinessInfomation>
                      {business?.reviews?.total > 0 ? (
                        <div className='reviews'>
                          <GrStar />
                          <span>{business?.reviews?.total}</span>
                        </div>
                      ) : (
                        business?.reviews?.total !== 0 && <Skeleton width={50} />
                      )}
                      {!hideBusinessFavorite && (
                        <div className='favorite' ref={favoriteRef} onClick={handleChangeFavorite}>
                          {!isSkeleton ? (
                            <>
                              {(business?.favorite) ? <Like /> : <DisLike />}
                            </>
                          ) : (
                            <Skeleton width={16} height={16} />
                          )}
                        </div>
                      )}
                      {
                        (business && handleShowBusinessInfo) ? (
                          <BsExclamationCircle onClick={() => handleShowBusinessInfo(business)} />
                        ) : (
                          <Skeleton width={20} />
                        )
                      }
                    </BusinessInfomation>
                  )}
                </NameWrapper>
                {!isShowCallcenterInformation && !hideCategories && (
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
                {!isShowCallcenterInformation && !hideAddress && (
                  <Address>
                    {
                      Object.keys(business).length > 0 ? (
                        business?.address
                      ) : (
                        <Skeleton width={100} />
                      )
                    }
                  </Address>
                )}
                {layout !== 'mapview' && (
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
                  </Medadata>
                )}
                <Medadata>
                  {!isSkeleton > 0 ? (
                    <>
                      <div className='schedule'>
                        {`${t('SCHEDULE', 'Schedule')}: ${getScheduleOpen(business)}`}
                      </div>
                      <SelectStoreContainer>
                        <Button
                          outline
                        >
                          {t('SELECT_BUSINESS', 'Select business')}
                        </Button>
                      </SelectStoreContainer>
                    </>
                  ) : (
                    <>
                      <Skeleton width={70} />
                      <Skeleton width={120} height={20} />
                    </>
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
