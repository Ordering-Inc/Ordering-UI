import React, { useState, useRef } from 'react'
import { BusinessController as BusinessSingleCard, useLanguage, useSession, useUtils } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { Alert } from '../../../Confirm'
import { convertHoursToMinutes } from '../../../../../../../utils'
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
  NameWrapper,
  BusinessInfomation,
  Address,
  SelectStoreContainer,
  FavoriteWrapper
} from './styles'
import BisStar from '@meronex/icons/bi/BisStar'
import GoPrimitiveDot from '@meronex/icons/go/GoPrimitiveDot'
import { Heart as DisLike, HeartFill as Like } from 'react-bootstrap-icons'
import dayjs from 'dayjs'
import { Button } from '../../../../styles/Buttons'

const BusinessControllerUI = (props) => {
  const {
    isSkeleton,
    business,
    orderState,
    handleClick,
    isCustomLayout,
    isShowCallcenterInformation,
    handleFavoriteBusiness,
    businessDeliveryPrice,
    businessDeliveryTime,
    businessDistance,
    businessPickupTime
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

      <ContainerCard isSkeleton={isSkeleton}>
        <WrapperBusinessCard isSkeleton={isSkeleton}>
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
                  <BusinessInfomation>
                    {business?.reviews?.total > 0 ? (
                      <div className='reviews'>
                        <BisStar />
                        <span>{business?.reviews?.total}</span>
                      </div>
                    ) : (
                      business?.reviews?.total !== 0 && <Skeleton width={50} />
                    )}
                    {!hideBusinessFavorite && (
                      <FavoriteWrapper ref={favoriteRef} onClick={handleChangeFavorite}>
                        {!isSkeleton ? (
                          <>
                            {(business?.favorite) ? <Like /> : <DisLike />}
                          </>
                        ) : (
                          <Skeleton width={16} height={16} />
                        )}
                      </FavoriteWrapper>
                    )}

                  </BusinessInfomation>
                </NameWrapper>
                {!isShowCallcenterInformation && !hideCategories && (
                  <Categories>
                    {
                      Object.keys(business).length > 0 ? (
                        <>
                          {business?.address}
                        </>
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
                    {(businessDeliveryPrice || business?.delivery_price) >= 0 ? (
                      <p>
                        <span>{t('DELIVERY_FEE', 'Delivery fee')}</span>
                        {business && parsePrice((businessDeliveryPrice ?? business?.delivery_price))}
                      </p>
                    ) : (
                      <Skeleton width={65} />
                    )}
                    <>
                      {Object.keys(business).length > 0 ? (
                        <p className='bullet'>
                          <GoPrimitiveDot />
                          {convertHoursToMinutes(orderState?.options?.type === 1 ? (businessDeliveryTime ?? business?.delivery_time) : (businessPickupTime ?? business?.pickup_time)) || <Skeleton width={100} />}
                        </p>
                      ) : (
                        <Skeleton width={65} />
                      )}
                    </>
                    <>
                      {(businessDistance ?? business?.distance) >= 0 ? (
                        <p className='bullet'>
                          <GoPrimitiveDot />
                          {parseDistance((businessDistance ?? business?.distance))}
                        </p>
                      ) : (
                        <Skeleton width={65} />
                      )}
                    </>
                  </Medadata>
                )}
                <Medadata final>
                  {!isSkeleton > 0 ? (
                    <>
                      <div className='schedule'>
                        {`${t('SCHEDULE', 'Schedule')}: ${getScheduleOpen(business)}`}
                      </div>
                      <SelectStoreContainer>
                        <Button
                          outline
                          onClick={(e) => !isSkeleton && handleClick && (!business?.open && isCustomLayout ? handleShowAlert() : handleClickBusiness(e, business))}
                        >
                          {t('START_ORDER', 'Start order')}
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
