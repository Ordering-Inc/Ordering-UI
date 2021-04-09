import React from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  OrderDetails as OrderDetailsController,
  useUtils,
  useConfig,
  GoogleMapsMap
} from 'ordering-components'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { useTheme } from 'styled-components'
import {
  OrderDetailsContainer,
  WrapperContainer,
  MapContainer,
  SkeletonBlockWrapp,
  SkeletonBlock,
  DeliveryDate,
  StatusBar,
  Step
} from './styles'

const OrderDetailsUI = (props) => {
  const {
    googleMapsControls,
    handleOrderRedirect
  } = props
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const [, t] = useLanguage()
  const { order, loading, error } = props.order
  const [{ parseDate }] = useUtils()

  const locations = [
    { ...order?.driver?.location, icon: order?.driver?.photo || theme.images?.dummies?.driverPhoto },
    { ...order?.business?.location, icon: order?.business?.logo || theme.images?.dummies?.businessLogo },
    { ...order?.customer?.location, icon: order?.customer?.photo || theme.images?.dummies?.customerPhoto }
  ]
  const locationsWithoutDriver = [
    { ...order?.business?.location, icon: order?.business?.logo || theme.images?.dummies?.businessLogo },
    { ...order?.customer?.location, icon: order?.customer?.photo || theme.images?.dummies?.customerPhoto }
  ]
  const isShowDriver = order?.driver?.location && parseInt(order?.status) === 9

  const getOrderStatus = (s) => {
    const status = parseInt(s)
    const orderStatus = [
      { key: 0, value: t('PENDING', 'Pending'), slug: 'PENDING', percentage: 33.33 },
      { key: 1, value: t('COMPLETED', 'Completed'), slug: 'COMPLETED', percentage: 100 },
      { key: 2, value: t('REJECTED', 'Rejected'), slug: 'REJECTED', percentage: 0 },
      { key: 3, value: t('ACCEPTED', 'Accepted'), slug: 'ACCEPTED', percentage: 66.66 },
      { key: 4, value: t('ACCEPTED', 'Accepted'), slug: 'ACCEPTED', percentage: 66.66 },
      { key: 5, value: t('REJECTED', 'Rejected'), slug: 'REJECTED', percentage: 0 },
      { key: 6, value: t('REJECTED', 'Rejected'), slug: 'REJECTED', percentage: 0 },
      { key: 7, value: t('ACCEPTED', 'Accepted'), slug: 'ACCEPTED', percentage: 66.66 },
      { key: 8, value: t('ACCEPTED', 'Accepted'), slug: 'ACCEPTED', percentage: 66.66 },
      { key: 9, value: t('ACCEPTED', 'Accepted'), slug: 'ACCEPTED', percentage: 66.66 },
      { key: 10, value: t('REJECTED', 'Rejected'), slug: 'REJECTED', percentage: 0 },
      { key: 11, value: t('COMPLETED', 'Completed'), slug: 'COMPLETED', percentage: 100 },
      { key: 12, value: t('REJECTED', 'Rejected'), slug: 'REJECTED', percentage: 0 }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {order && Object.keys(order).length > 0 && (
        <OrderDetailsContainer>
          <MapContainer>
            <GoogleMapsMap
              apiKey={configs?.google_maps_api_key?.value}
              location={isShowDriver ? order?.driver?.location : order?.customer?.location}
              locations={isShowDriver ? locations : locationsWithoutDriver}
              mapControls={googleMapsControls}
            />
            <DeliveryDate>
              {
                order?.delivery_datetime_utc
                  ? parseDate(order?.delivery_datetime_utc)
                  : parseDate(order?.delivery_datetime, { utc: false })
              }
            </DeliveryDate>
          </MapContainer>
          <h1>
            <span>{getOrderStatus(order?.status)?.value}</span>
          </h1>
          <StatusBar percentage={getOrderStatus(order?.status)?.percentage}>
            <div>
              <div>
                <Step active={getOrderStatus(order?.status)?.percentage >= 33.33}>
                  <img src={theme.images.order.pending} />
                </Step>
              </div>
              <div>
                <Step active={getOrderStatus(order?.status)?.percentage >= 66.66}>
                  <img src={theme.images.order.accepted} />
                </Step>
              </div>
              <div>
                <Step active={getOrderStatus(order?.status)?.percentage === 100}>
                  <img src={theme.images.order.completed} />
                </Step>
              </div>
            </div>
          </StatusBar>
        </OrderDetailsContainer>
      )}
      {loading && !error && (
        <WrapperContainer isLoading className='skeleton-loading'>
          <SkeletonBlockWrapp>
            <SkeletonBlock width={100}>
              <Skeleton height={400} />
            </SkeletonBlock>
            <SkeletonBlock width={91}>
              <Skeleton height={100} />
            </SkeletonBlock>
          </SkeletonBlockWrapp>
        </WrapperContainer>
      )}

      {!loading && error && (
        error.includes('ERROR_ACCESS_EXPIRED') ? (
          <NotFoundSource
            content={t(error[0], 'Sorry, the order has expired.')}
          />
        ) : (
          <NotFoundSource
            content={t('NOT_FOUND_ORDER', 'Sorry, we couldn\'t find the requested order.')}
            btnTitle={t('ORDERS_REDIRECT', 'Go to Orders')}
            onClickButton={handleOrderRedirect}
          />
        )
      )}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const OrderDetails = (props) => {
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const orderDetailsProps = {
    ...props,
    userCustomerId: userCustomer?.id,
    googleMapsControls: {
      defaultZoom: 15,
      zoomControl: true,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
      mapTypeControl: true,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite']
      }
    },
    UIComponent: OrderDetailsUI
  }

  return (
    <OrderDetailsController {...orderDetailsProps} />
  )
}
