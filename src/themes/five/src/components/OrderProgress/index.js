import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  useUtils,
  useEvent,
  useConfig,
  OrderList as OrderListController
} from 'ordering-components'
import { Button } from '../../styles/Buttons'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import { OrderEta } from '../OrderDetails/OrderEta'
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
  TimeWrapper,
  OrderProgressWrapper
} from './styles'
import { getOrderStatus } from '../../../../../utils'

const OrderProgressUI = (props) => {
  const {
    orderList,
    isCustomerMode
  } = props
  const [, t] = useLanguage()
  const [{ optimizeImage, parseTime, parseDate }] = useUtils()
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const [events] = useEvent()
  const [lastOrder, setLastOrder] = useState(null)
  const statusToShow = [0, 3, 4, 7, 8, 9, 13, 14, 18, 19, 20, 21, 22, 23]

  const isChew = theme?.header?.components?.layout?.type?.toLowerCase() === 'chew'

  const handleGoToPage = (index) => {
    events.emit('go_to_page', { page: index, params: { orderId: lastOrder?.uuid } })
  }

  useEffect(() => {
    if (orderList?.orders.length > 0) {
      const sortedOrders = orderList.orders.filter(order => !!order?.business).sort((a, b) => a.id > b.id ? -1 : 1)
      const orderInProgress = sortedOrders.find(({ status }) => (statusToShow.includes(status)))

      let _lastOrder = null
      if (orderInProgress) {
        _lastOrder = orderInProgress
      } else {
        _lastOrder = sortedOrders[0]
      }
      setLastOrder(_lastOrder)
    }
  }, [orderList?.orders])

  return (
    <>
      {orderList?.loading && (
        <OrderProgressWrapper isChew={props.isChew}>
          <Skeleton height={150} />
        </OrderProgressWrapper>
      )}
      {!orderList?.loading && orderList?.orders?.length > 0 && lastOrder && (
        <OrderProgressWrapper isChew={props.isChew}>
          <OrderProgressContainer>
            <OrderInfoWrapper>
              <ProgressLogo
                bgimage={orderList?.orders.length === 1
                  ? optimizeImage(lastOrder?.business?.logo || theme.images?.dummies?.businessLogo, 'h_91,c_limit')
                  : isChew ? theme.images.logos.chewLogoReverse : theme.images.logos.logotype}
              />
              <ProgressDescriptionWrapper>
                <h2>{statusToShow.includes(lastOrder?.status) ? t('ORDER_IN_PROGRESS', 'Order in progress') : t('ORDER', 'Order')}</h2>
                {statusToShow.includes(lastOrder?.status) && (
                  <p>{t('RESTAURANT_PREPARING_YOUR_ORDER', 'The restaurant is preparing your order')}</p>
                )}
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
                <StatusWrapper>{getOrderStatus(lastOrder?.status)?.value}</StatusWrapper>
                <TimeWrapper>
                  <span>{lastOrder?.delivery_type === 1 ? t('ESTIMATED_DELIVERY', 'Estimated delivery') : t('ESTIMATED_TIME', 'Estimated time')}:&nbsp;</span>
                  <span>
                    {lastOrder?.delivery_datetime_utc
                      ? parseTime(lastOrder?.delivery_datetime_utc, { outputFormat: 'hh:mm A', utc: false })
                      : parseTime(lastOrder?.delivery_datetime, { utc: false })}
                    &nbsp;-&nbsp;
                    {statusToShow.includes(lastOrder?.status) ? (
                      <OrderEta order={lastOrder} outputFormat={configs?.general_hour_format?.value || 'HH:mm'} />
                    ) : (
                      parseDate(lastOrder?.reporting_data?.at[`status:${lastOrder.status}`], { outputFormat: configs?.general_hour_format?.value })
                    )}
                  </span>
                </TimeWrapper>
              </ProgressTextWrapper>
            </ProgressBarWrapper>
          </OrderProgressContainer>
        </OrderProgressWrapper>
      )}
    </>

  )
}

export const OrderProgress = (props) => {
  const orderProgressProps = {
    ...props,
    UIComponent: OrderProgressUI,
    orderStatus: [0, 3, 4, 7, 8, 9, 13, 14, 18, 19, 20, 21, 22, 23],
    useDefualtSessionManager: true,
    paginationSettings: {
      initialPage: 1,
      pageSize: 10,
      controlType: 'infinity'
    }
  }
  return <OrderListController {...orderProgressProps} />
}
