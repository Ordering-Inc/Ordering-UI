import React, { useState } from 'react'
import { useLanguage, useUtils, GoogleMapsMap, useConfig } from 'ordering-components'
import { useTheme } from 'styled-components'
import {
  Container,
  InnerContainer,
  HeaderSection,
  StatusBar,
  StatusBarWrapper,
  StatusTextWrapper,
  ReviewOrderLink,
  BusinessCardWrapper,
  BusinessInfoWrapper,
  BusinessLogo,
  BusinessInfo,
  Map
} from './styles'

export const Appointment = (props) => {
  const {
    isCustomerMode,
    googleMapsControls
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parseDate, optimizeImage }] = useUtils()
  const [{ configs }] = useConfig()
  const { order } = props.order

  const [isReviewOpen, setIsReviewOpen] = useState(false)
  const [reviewStatus, setReviewStatus] = useState({ order: false, product: false, driver: false })
  const [isOrderReviewed, setIsOrderReviewed] = useState(false)
  const [isProductReviewed, setIsProductReviewed] = useState(false)
  const [isDriverReviewed, setIsDriverReviewed] = useState(false)

  const isOriginalLayout = theme?.layouts?.confirmation?.components?.layout?.type === 'original'
  const showDeliveryType = !theme?.layouts?.confirmation?.components?.delivery_type?.hidden
  const showDeliveryDate = !theme?.layouts?.confirmation?.components?.delivery_date?.hidden
  const showDeliveryProgress = !theme?.layouts?.confirmation?.components?.delivery_progress?.hidden
  const showBusinessPhone = !theme?.layouts?.confirmation?.components?.business_information?.components?.phone?.hidden
  const showBusinessMessages = !theme?.layouts?.confirmation?.components?.business_information?.components?.messages?.hidden
  const showBusinessEmail = !theme?.layouts?.confirmation?.components?.business_information?.components?.email?.hidden
  const showBusinessAddress = !theme?.layouts?.confirmation?.components?.business_information?.components?.address?.hidden
  const showBusinessMap = !theme?.layouts?.confirmation?.components?.business_information?.components?.map?.hidden
  const showDriverName = !theme?.layouts?.confirmation?.components?.driver_information?.components?.name?.hidden
  const showDriverPhone = !theme?.layouts?.confirmation?.components?.driver_information?.components?.phone?.hidden
  const showDriverMessages = !theme?.layouts?.confirmation?.components?.driver_information?.components?.messages?.hidden
  const showDriverEmail = !theme?.layouts?.confirmation?.components?.driver_information?.components?.email?.hidden
  const showDriverPhoto = !theme?.layouts?.confirmation?.components?.driver_information?.components?.photo?.hidden
  const showCustomerPhone = !theme?.layouts?.confirmation?.components?.customer_information?.components?.phone?.hidden
  const showCustomerAddress = !theme?.layouts?.confirmation?.components?.customer_information?.components?.address?.hidden
  const showCustomerEmail = !theme?.layouts?.confirmation?.components?.customer_information?.components?.email?.hidden

  const locations = [
    { ...order?.driver?.location, icon: order?.driver?.photo || theme.images?.dummies?.driverPhoto },
    { ...order?.business?.location, icon: order?.business?.logo || theme.images?.dummies?.businessLogo },
    { ...order?.customer?.location, icon: order?.customer?.photo || theme.images?.dummies?.customerPhoto }
  ]

  const getOrderStatus = (s) => {
    const status = parseInt(s)
    const orderStatus = [
      { key: 0, value: t('PENDING', theme?.defaultLanguages?.PENDING || 'Pending'), slug: 'PENDING', percentage: 25 },
      { key: 1, value: t('COMPLETED', theme?.defaultLanguages?.COMPLETED || 'Completed'), slug: 'COMPLETED', percentage: 100 },
      { key: 2, value: t('REJECTED', theme?.defaultLanguages?.REJECTED || 'Rejected'), slug: 'REJECTED', percentage: 0 },
      { key: 3, value: t('DRIVER_IN_BUSINESS', theme?.defaultLanguages?.DRIVER_IN_BUSINESS || 'Driver in business'), slug: 'DRIVER_IN_BUSINESS', percentage: 60 },
      { key: 4, value: t('PREPARATION_COMPLETED', theme?.defaultLanguages?.PREPARATION_COMPLETED || 'Preparation Completed'), slug: 'PREPARATION_COMPLETED', percentage: 70 },
      { key: 5, value: t('REJECTED_BY_BUSINESS', theme?.defaultLanguages?.REJECTED_BY_BUSINESS || 'Rejected by business'), slug: 'REJECTED_BY_BUSINESS', percentage: 0 },
      { key: 6, value: t('REJECTED_BY_DRIVER', theme?.defaultLanguages?.REJECTED_BY_DRIVER || 'Rejected by Driver'), slug: 'REJECTED_BY_DRIVER', percentage: 0 },
      { key: 7, value: t('ACCEPTED_BY_BUSINESS', theme?.defaultLanguages?.ACCEPTED_BY_BUSINESS || 'Accepted by business'), slug: 'ACCEPTED_BY_BUSINESS', percentage: 35 },
      { key: 8, value: t('ACCEPTED_BY_DRIVER', theme?.defaultLanguages?.ACCEPTED_BY_DRIVER || 'Accepted by driver'), slug: 'ACCEPTED_BY_DRIVER', percentage: 45 },
      { key: 9, value: t('PICK_UP_COMPLETED_BY_DRIVER', theme?.defaultLanguages?.PICK_UP_COMPLETED_BY_DRIVER || 'Pick up completed by driver'), slug: 'PICK_UP_COMPLETED_BY_DRIVER', percentage: 80 },
      { key: 10, value: t('PICK_UP_FAILED_BY_DRIVER', theme?.defaultLanguages?.PICK_UP_FAILED_BY_DRIVER || 'Pick up Failed by driver'), slug: 'PICK_UP_FAILED_BY_DRIVER', percentage: 0 },
      { key: 11, value: t('DELIVERY_COMPLETED_BY_DRIVER', theme?.defaultLanguages?.DELIVERY_COMPLETED_BY_DRIVER || 'Delivery completed by driver'), slug: 'DELIVERY_COMPLETED_BY_DRIVER', percentage: 100 },
      { key: 12, value: t('DELIVERY_FAILED_BY_DRIVER', theme?.defaultLanguages?.DELIVERY_FAILED_BY_DRIVER || 'Delivery Failed by driver'), slug: 'DELIVERY_FAILED_BY_DRIVER', percentage: 0 },
      { key: 13, value: t('PREORDER', theme?.defaultLanguages?.PREORDER || 'PreOrder'), slug: 'PREORDER', percentage: 0 },
      { key: 14, value: t('ORDER_NOT_READY', theme?.defaultLanguages?.ORDER_NOT_READY || 'Order not ready'), slug: 'ORDER_NOT_READY', percentage: 65 },
      { key: 15, value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER || 'Order picked up completed by customer'), slug: 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', percentage: 100 },
      { key: 16, value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_STATUS_CANCELLED_BY_CUSTOMER || 'Order cancelled by customer'), slug: 'ORDER_STATUS_CANCELLED_BY_CUSTOMER', percentage: 0 },
      { key: 17, value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_NOT_PICKEDUP_BY_CUSTOMER || 'Order not picked up by customer'), slug: 'ORDER_NOT_PICKEDUP_BY_CUSTOMER', percentage: 0 },
      { key: 18, value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS || 'Driver almost arrived to business'), slug: 'ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', percentage: 55 },
      { key: 19, value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', theme?.defaultLanguages?.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER || 'Driver almost arrived to customer'), slug: 'ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', percentage: 90 },
      { key: 20, value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS || 'Customer almost arrived to business'), slug: 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', percentage: 90 },
      { key: 21, value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ARRIVED_BUSINESS || 'Customer arrived to business'), slug: 'ORDER_CUSTOMER_ARRIVED_BUSINESS', percentage: 95 },
      { key: 22, value: t('ORDER_LOOKING_FOR_DRIVER', theme?.defaultLanguages?.ORDER_LOOKING_FOR_DRIVER || 'Looking for driver'), slug: 'ORDER_LOOKING_FOR_DRIVER', percentage: 35 },
      { key: 23, value: t('ORDER_DRIVER_ON_WAY', theme?.defaultLanguages?.ORDER_DRIVER_ON_WAY || 'Driver on way'), slug: 'ORDER_DRIVER_ON_WAY', percentage: 45 }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
  }

  const handleOpenReview = () => {
    if (!order?.review && !isOrderReviewed) setReviewStatus({ order: true, product: false, driver: false })
    else if (!isProductReviewed) setReviewStatus({ order: false, product: true, driver: false })
    else if (order?.driver && !order?.user_review && !isDriverReviewed) setReviewStatus({ order: false, product: false, driver: true })
    else {
      setIsReviewOpen(false)
      return
    }
    setIsReviewOpen(true)
  }

  const OrderMapSection = () => {
    const validStatuses = [9, 19, 23]
    return (
      <>
        {showBusinessMap && order?.driver?.location?.lat && order?.driver?.location?.lng && validStatuses.includes(parseInt(order?.status)) && (
          <>
            <Map isCustomerMode={isCustomerMode || isOriginalLayout}>
              <GoogleMapsMap
                apiKey={configs?.google_maps_api_key?.value}
                location={order?.driver?.location}
                locations={locations}
                mapControls={googleMapsControls}
              />
            </Map>
          </>
        )}
      </>
    )
  }

  return (
    <Container>
      <InnerContainer>
        <HeaderSection>
          <h1>{t('APPOINTMENT', 'Appointment')} #{order?.id}</h1>
          <p>{t('SERVICE_AT_HOME', 'Service at home')}</p>
          <p className='date'>
            {
              order?.delivery_datetime_utc
                ? parseDate(order?.delivery_datetime_utc, { outputFormat: 'dddd, MMM DD, YYYY hh:mm A' })
                : parseDate(order?.delivery_datetime, { utc: false, outputFormat: 'dddd, MMM DD, YYYY hh:mm A' })
            }
          </p>
        </HeaderSection>
        <StatusBarWrapper>
          <StatusBar percentage={getOrderStatus(order?.status)?.percentage} />
          <StatusTextWrapper>
            <span className='status'>{getOrderStatus(order?.status)?.value}</span>
            <ReviewOrderLink
              className='Review-order'
              active={(
                parseInt(order?.status) === 1 ||
                parseInt(order?.status) === 2 ||
                parseInt(order?.status) === 5 ||
                parseInt(order?.status) === 6 ||
                parseInt(order?.status) === 10 ||
                parseInt(order?.status) === 11 ||
                parseInt(order?.status) === 12
              ) && (!order?.review || (order.driver && !order?.user_review)) && (!isOrderReviewed || !isProductReviewed || !isDriverReviewed)}
            >
              <span onClick={handleOpenReview}>{t('REVIEW_ORDER', theme?.defaultLanguages?.REVIEW_ORDER || 'Review your Order')}</span>
            </ReviewOrderLink>
          </StatusTextWrapper>
        </StatusBarWrapper>
        <BusinessCardWrapper>
          <BusinessInfoWrapper>
            <BusinessLogo bgimage={optimizeImage((order?.business?.logo || theme.images?.dummies?.businessLogo), 'h_200,c_limit')} />
            <BusinessInfo>
              <h2>{order?.business?.name}</h2>
              <p>{order?.business?.email}</p>
              <p>{order?.business?.cellphone}</p>
              <p>{order?.business?.address}</p>
            </BusinessInfo>
          </BusinessInfoWrapper>
          <OrderMapSection />
        </BusinessCardWrapper>
      </InnerContainer>
    </Container>
  )
}
