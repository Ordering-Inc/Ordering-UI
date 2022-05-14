import React, { useState, useEffect } from 'react'
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
    orderList,
    isCustomerMode
  } = props
  const [, t] = useLanguage()
  const [{ optimizeImage, parseDate, parseTime }] = useUtils()
  const theme = useTheme()
  const [events] = useEvent()
  const [lastOrder, setLastOrder] = useState(null)

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

  const convertDiffToHours = (time) => {
    if (!time) return
    const deliveryTime = lastOrder?.delivery_datetime_utc
      ? parseDate(lastOrder?.delivery_datetime_utc, { outputFormat: 'YYYY-MM-DD hh:mm A' })
      : parseDate(lastOrder?.delivery_datetime, { utc: false, outputFormat: 'YYYY-MM-DD hh:mm A' })
    const hour = time?.split(':')[0]
    const minute = time?.split(':')[1]
    const result = time ? (parseInt(hour, 10) * 60) + parseInt(minute, 10) : 0
    const returnedDate = moment(new Date(deliveryTime)).add(result, 'minutes').format('hh:mm A')
    return returnedDate
  }

  const handleGoToPage = (index) => {
    events.emit('go_to_page', { page: index, params: { orderId: lastOrder?.uuid } })
  }

  useEffect(() => {
    if (orderList?.orders.length > 0) {
      const sortedOrders = orderList.orders.sort((a, b) => a.id > b.id ? -1 : 1)
      setLastOrder(sortedOrders[0])
    }
  }, [orderList?.orders])

  return (
    <>
      {orderList?.loading && <Skeleton height={150} />}
      {!orderList?.loading && orderList?.orders?.length > 0 && lastOrder && (
        <OrderProgressContainer>
          <OrderInfoWrapper>
            <ProgressLogo bgimage={optimizeImage(lastOrder?.business?.logo || theme.images?.dummies?.businessLogo, 'h_91,c_limit')} />
            <ProgressDescriptionWrapper>
              <h2>{t('ORDER_IN_PROGRESS', 'Order in progress')}</h2>
              <p>{t('RESTAURANT_PREPARING_YOUR_ORDER', 'The restaurant is preparing your order')}</p>
              <Button
                color='primaryContrast'
                naked
                onClick={() => handleGoToPage(isCustomerMode ? 'order_detail' : 'orders')}
              >
                {isCustomerMode ? (
                  <>
                    {t('GO_TO_THE_ORDER', 'Go to the order')}
                  </>
                ) : (
                  <>
                    {t('GO_TO_MY_ORDERS', 'Go to my orders')}
                  </>
                )}
                <BsArrowRight />
              </Button>
            </ProgressDescriptionWrapper>
          </OrderInfoWrapper>
          <ProgressBarWrapper>
            <ProgressContentWrapper>
              <ProgressBar style={{ width: getOrderStatus(lastOrder.status)?.percentage ? `${getOrderStatus(lastOrder.status).percentage}%` : '0%' }} />
            </ProgressContentWrapper>
            <ProgressTextWrapper>
              <StatusWrapper>{getOrderStatus(lastOrder.status).value}</StatusWrapper>
              <TimeWrapper>
                <span>{t('ESTIMATED_DELIVERY', 'Estimated delivery')}:&nbsp;</span>
                <span>
                  {lastOrder?.delivery_datetime_utc
                    ? parseTime(lastOrder?.delivery_datetime_utc, { outputFormat: 'hh:mm A' })
                    : parseTime(lastOrder?.delivery_datetime, { utc: false })}
                    &nbsp;-&nbsp;
                  {convertDiffToHours(lastOrder.delivery_type === 1 ? lastOrder?.business?.delivery_time : lastOrder?.business?.pickup_time)}
                </span>
              </TimeWrapper>
            </ProgressTextWrapper>
          </ProgressBarWrapper>
        </OrderProgressContainer>
      )}
    </>

  )
}

export const OrderProgress = (props) => {
  const orderProgressProps = {
    ...props,
    UIComponent: OrderProgressUI,
    orderStatus: [0, 3, 4, 7, 8, 9, 13, 14, 15, 18, 19, 20, 21, 22, 23],
    useDefualtSessionManager: true,
    paginationSettings: {
      initialPage: 1,
      pageSize: 1,
      controlType: 'infinity'
    }
  }
  return <OrderListController {...orderProgressProps} />
}
