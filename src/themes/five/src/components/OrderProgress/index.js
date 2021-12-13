import React from 'react'
import {
  useLanguage,
  useUtils,
  useEvent,
  OrderList as OrderListController
} from 'ordering-components'
import { Button } from '../../styles/Buttons'
import moment from 'moment'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import {
  OrderProgressContainer,
  OrderInfoWrapper,
  ProgressLogo,
  ProgressDescriptionWrapper,
  ProgressBarWrapper,
  ProgressContentWrapper,
  ProgressBar,
  ProgressTextWrapper,
  StatusWrapper,
  TimeWrapper
} from './styles'

const OrderProgressUI = (props) => {
  const {
    orderList
  } = props
  const [, t] = useLanguage()
  const [{ optimizeImage, parseDate, parseTime }] = useUtils()
  const theme = useTheme()
  const [events] = useEvent()

  const imageFails = theme.images?.general?.emptyPastOrders

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
      { key: 21, value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ARRIVED_BUSINESS || 'Customer arrived to business'), slug: 'ORDER_CUSTOMER_ARRIVED_BUSINESS', percentage: 95 }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
  }

  const convertDiffToHours = (time, order) => {
    const deliveryTime = order?.delivery_datetime_utc
      ? parseDate(order?.delivery_datetime_utc, { outputFormat: 'YYYY-MM-DD hh:mm A' })
      : parseDate(order?.delivery_datetime, { utc: false, outputFormat: 'YYYY-MM-DD hh:mm A' })
    const [hour, minute] = time.split(':')
    const result = time ? (parseInt(hour, 10) * 60) + parseInt(minute, 10) : 0
    const returnedDate = moment(deliveryTime).add(result, 'minutes').format('hh:mm A')
    return returnedDate
  }

  const handleGoToPage = (index) => {
    events.emit('go_to_page', { page: index })
  }

  return (
    <>
      {orderList?.loading && <Skeleton height={150} />}
      {!orderList?.loading && orderList?.orders?.length > 0 && orderList?.orders.map((order, i) => (
        <OrderProgressContainer key={i}>
          <OrderInfoWrapper>
            <ProgressLogo bgimage={optimizeImage(order?.business?.logo || theme.images?.dummies?.businessLogo, 'h_91,c_limit')} />
            <ProgressDescriptionWrapper>
              <h2>{t('ORDER_IN_PROGRESS', 'Order in progress')}</h2>
              <p>{('RESTAURANT_PREPARING_YOUR_ORDER', 'The restaurant is preparing your order')}</p>
              <Button
                color='primaryContrast'
                naked
                onClick={() => handleGoToPage('orders')}
              >
                {t('GO_TO_MY_ORDERS', 'Go to my orders')}
                <BsArrowRight />
              </Button>
            </ProgressDescriptionWrapper>
          </OrderInfoWrapper>
          <ProgressBarWrapper>
            <ProgressContentWrapper>
              <ProgressBar style={{ width: getOrderStatus(order.status)?.percentage ? `${getOrderStatus(order.status).percentage}%` : '0%' }} />
            </ProgressContentWrapper>
            <ProgressTextWrapper>
              <StatusWrapper>{getOrderStatus(order.status).value}</StatusWrapper>
              <TimeWrapper>{t('ESTIMATED_DELIVERY', 'Estimated delivery')}:
                {order?.delivery_datetime_utc
                  ? parseTime(order?.delivery_datetime_utc, { outputFormat: 'hh:mm A' })
                  : parseTime(order?.delivery_datetime, { utc: false })}
                  -
                {convertDiffToHours(order.delivery_type === 1 ? order?.business?.delivery_time : order?.business?.pickup_time, order)}
              </TimeWrapper>
            </ProgressTextWrapper>
          </ProgressBarWrapper>
        </OrderProgressContainer>
      ))}
      {!orderList?.loading && orderList?.orders?.length === 0 && (
        <NotFoundSource
          image={imageFails}
          content={t('NO_RESULTS_FOUND', 'Sorry, no results found')}
          conditioned
        />
      )}
    </>

  )
}

export const OrderProgress = (props) => {
  const orderProgressProps = {
    ...props,
    UIComponent: OrderProgressUI,
    orderStatus: [0, 3, 4, 7, 8, 9, 13, 14, 15, 18, 19, 20, 21],
    useDefualtSessionManager: true,
    paginationSettings: {
      initialPage: 1,
      pageSize: 1,
      controlType: 'infinity'
    }
  }
  return <OrderListController {...orderProgressProps} />
}
