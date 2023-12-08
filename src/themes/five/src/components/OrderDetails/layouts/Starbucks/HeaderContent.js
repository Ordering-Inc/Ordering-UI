import React, { useEffect, useState } from 'react'
import { useLanguage, useUtils } from 'ordering-components'
import { useTheme } from 'styled-components'

import {
  Container,
  StatusBarContainer,
  Icon,
  OrderTitle,
  DelayedTime,
  ReviewedText,
  MapWrapper,
  Map
} from './styles'
import { PoweredByOrdering } from '../../styles'
import moment from 'moment'
import { ReviewOrder } from '../../../ReviewOrder/layouts/Simple'
import { ReviewDriver } from '../../../ReviewDriver/layouts/Simple'

export const HeaderContent = (props) => {
  const {
    order,
    hashKey,
    orderId,
    showReview,
    changeIdToExternalId,
    enabledPoweredByOrdering,
    orderStatus,
    percentage,
    googleMapsUrl
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()

  const [reviewState, setReviewState] = useState({ order: false, driver: false })

  const getDelayMinutes = (order) => {
    const defaultDate = order?.fechaHoraAmasTardar ?? order?.delivery_datetime
    const offset = 300
    const cdtToutc = moment(defaultDate).add(offset, 'minutes').format('YYYY-MM-DD HH:mm:ss')
    const _delivery = order?.delivery_datetime_utc && !order?.fechaHoraAmasTardar
      ? parseDate(order?.delivery_datetime_utc, { outputFormat: 'YYYY-MM-DD HH:mm:ss' })
      : parseDate(cdtToutc, { outputFormat: 'YYYY-MM-DD HH:mm:ss' })
    const _eta = order?.eta_time
    const diffTimeAsSeconds = moment(_delivery).add(_eta, 'minutes').diff(moment().utc(), 'seconds')
    return Math.ceil(diffTimeAsSeconds / 60)
  }

  const displayDelayedTime = (order) => {
    let tagetedMin = getDelayMinutes(order)
    // get day, hour and minutes
    const sign = tagetedMin >= 0 ? '' : '- '
    tagetedMin = Math.abs(tagetedMin)
    let day = Math.floor(tagetedMin / 1440)
    const restMinOfTargetedMin = tagetedMin - 1440 * day
    let restHours = Math.floor(restMinOfTargetedMin / 60)
    let restMins = restMinOfTargetedMin - 60 * restHours
    // make standard time format
    day = day === 0 ? '' : `${day + ' ' + t('DAY', 'day') + ' '}`
    restHours = restHours < 10 ? '0' + restHours : restHours
    restMins = restMins < 10 ? '0' + restMins : restMins

    const finalTaget = sign + day + restHours + ':' + restMins
    return finalTaget
  }

  useEffect(() => {
    setReviewState({
      order: !!order?.review,
      driver: !!(order?.driver && order?.user_review)
    })
  }, [order])

  return (
    <Container>
      <OrderTitle>
        <div className='left'>
          <h1>
            {t('ORDER', theme?.defaultLanguages?.ORDER || 'Order')}
            {(changeIdToExternalId && orderId.external_id) || `#${orderId.id}`}
          </h1>
          {enabledPoweredByOrdering && (
            <PoweredByOrdering>
              {t('POWERED_BY', 'Powered by')}
              <a href='https://www.ordering.co'>
                {t('ORDERING_CO', 'Ordering.co')}
              </a>
            </PoweredByOrdering>
          )}
        </div>
        <DelayedTime className='center'>
          <div className='ring1'>
            <div className='ring2'>
              <div className='time'>
                <p>{t('DELAYED_TIME_MESSAGE', 'Arriving in')}</p>
                <span>{displayDelayedTime(order)}</span>
              </div>
            </div>
          </div>
        </DelayedTime>
      </OrderTitle>
      <p className='order-status'>{orderStatus}</p>
      <StatusBarContainer percentage={percentage}>
        <Icon
          position={0}
          bgColor={percentage >= 0 && theme.colors.primary}
        >
          <img src={theme.images.icons.store} />
        </Icon>
        <Icon
          position={33.33}
          bgColor={percentage >= 33.33 && theme.colors.primary}
        >
          <img src={theme.images.icons.driver} />
        </Icon>
        <Icon
          position={66.66}
          bgColor={percentage >= 66.66 && theme.colors.primary}
        >
          <img src={theme.images.icons.home} />
        </Icon>
        <Icon
          position={100}
          bgColor={percentage === 100 && theme.colors.primary}
        >
          <img src={theme.images.icons.delivered} />
        </Icon>
      </StatusBarContainer>
      {showReview && !reviewState.order && !order?.review && (
        <ReviewOrder
          order={order}
          hashKey={hashKey}
          defaultStar={5}
          setIsReviewed={() => setReviewState({ ...reviewState, order: true })}
        />
      )}
      {reviewState.order && !reviewState.driver && order?.driver && !order?.user_review && (
        <ReviewDriver
          order={order}
          hashKey={hashKey}
          defaultStar={5}
          setIsReviewed={() => setReviewState({ ...reviewState, driver: true })}
        />
      )}
      {(order?.review || reviewState.order) && ((order?.driver && (order?.user_review || reviewState.driver)) || !order?.driver) && (
        <ReviewedText>
          <p>{t('ORDER_ALREADY_REVIEWED_MESSAGE', 'This order has already been attended to, thank you for your preference.')}</p>
        </ReviewedText>
      )}
      {googleMapsUrl && (
        <MapWrapper>
          <Map style={{ width: '100%' }}>
            <img
              src={googleMapsUrl}
              id='google-maps-image'
              alt='google-maps-location'
              width='100%'
              height='100%'
              loading='lazy'
            />
          </Map>
        </MapWrapper>
      )}
    </Container>
  )
}
