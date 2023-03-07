import React from 'react'
import { useLanguage, useUtils, useConfig } from 'ordering-components'
import { ArrowRight, CheckCircleFill } from 'react-bootstrap-icons'
import { Button } from '../../styles/Buttons'
import { formatSeconds, getTraduction } from '../../../../../utils'
import {
  OrderHistoryContainer,
  HistoryItemWrapper,
  DetailWrapper,
  ButtonWrapper
} from './styles'

export const OrderHistory = (props) => {
  const {
    messages,
    order,
    handleOpenReview,
    onClose,
    enableReview
  } = props

  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()
  const [{ configs }] = useConfig()

  const getLogisticTagStatus = (status) => {
    switch (status) {
      case 0:
        return t('PENDING', 'Pending')
      case 1:
        return t('IN_PROGRESS', 'In Progress')
      case 2:
        return t('IN_QUEUE', 'In Queue')
      case 3:
        return t('EXPIRED', 'Logistic expired')
      case 4:
        return t('RESOLVED', 'Resolved')
      default:
        return status
    }
  }

  const handleReview = () => {
    onClose()
    setTimeout(() => {
      enableReview && handleOpenReview && handleOpenReview()
    }, 1)
  }

  const getStatus = (s) => {
    const status = parseInt(s)
    switch (status) {
      case 0:
        return 'ORDER_STATUS_PENDING'
      case 1:
        return 'ORDERS_COMPLETED'
      case 2:
        return 'ORDER_REJECTED'
      case 3:
        return 'ORDER_STATUS_IN_BUSINESS'
      case 4:
        return 'ORDER_READY'
      case 5:
        return 'ORDER_REJECTED_RESTAURANT'
      case 6:
        return 'ORDER_STATUS_CANCELLEDBYDRIVER'
      case 7:
        return 'ORDER_STATUS_ACCEPTEDBYRESTAURANT'
      case 8:
        return 'ORDER_CONFIRMED_ACCEPTED_BY_DRIVER'
      case 9:
        return 'ORDER_PICKUP_COMPLETED_BY_DRIVER'
      case 10:
        return 'ORDER_PICKUP_FAILED_BY_DRIVER'
      case 11:
        return 'ORDER_DELIVERY_COMPLETED_BY_DRIVER'
      case 12:
        return 'ORDER_DELIVERY_FAILED_BY_DRIVER'
      case 13:
        return 'PREORDER'
      case 14:
        return 'ORDER_NOT_READY'
      case 15:
        return 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER'
      case 16:
        return 'ORDER_STATUS_CANCELLED_BY_CUSTOMER'
      case 17:
        return 'ORDER_NOT_PICKEDUP_BY_CUSTOMER'
      case 18:
        return 'ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS'
      case 19:
        return 'ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER'
      case 20:
        return 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS'
      case 21:
        return 'ORDER_CUSTOMER_ARRIVED_BUSINESS'
      case 22:
        return 'ORDER_LOOKING_FOR_DRIVER'
      case 23:
        return 'ORDER_DRIVER_ON_WAY'
      default:
        return getTraduction(status)
    }
  }

  return (
    <OrderHistoryContainer>
      {!messages?.loading && order && (
        <HistoryItemWrapper>
          <CheckCircleFill />
          <DetailWrapper>
            <h3>
              {t('ORDER_PLACED', 'Order placed')} {' '}
              {t('VIA', 'Via')}{' '}
              {order.app_id ? t(order.app_id.toUpperCase(), order.app_id) : t('OTHER', 'Other')}
            </h3>
            <p>{parseDate(order.created_at, { outputFormat: `MMM DD, ${configs?.general_hour_format?.value}` })}</p>
          </DetailWrapper>
        </HistoryItemWrapper>
      )}
      {messages && messages?.messages.map((message, i) => message.type === 1 && (
        <HistoryItemWrapper
          key={i}
        >
          <CheckCircleFill />
          <DetailWrapper>
            {message.change?.attribute !== 'driver_id' ? (
              <h3>
                {message.change?.attribute === 'logistic_status'
                  ? getLogisticTagStatus(parseInt(message.change.new, 10))
                  : message.change?.attribute === 'delivered_in' ? (
                    <h3>
                      <strong>{t('TIME_ADDED_BY_DRIVER', 'Time added by driver')}</strong><br />
                      {formatSeconds(parseInt(message.change.new, 10))}
                    </h3>
                  )
                    : message.change?.attribute === 'prepared_in' ? (
                      <h3>
                        <strong>{t('TIME_ADDED_BY_BUSINESS', 'Time added by business')}</strong><br />
                        {formatSeconds(parseInt(message.change.new, 10))}
                      </h3>
                    )
                      : t(getStatus(parseInt(message.change.new, 10)))
                }
              </h3>
            ) : (
              <h3>
                {message.change.new ? (
                  <>
                    <strong>{message.driver?.name} {' '} {message.driver?.lastname && message.driver.lastname} </strong>
                    {t('WAS_ASSIGNED_AS_DRIVER', 'Was assigned as driver')}
                  </>
                ) : <>{t('DRIVER_UNASSIGNED', 'Driver unassigned')}</>}
              </h3>
            )}
            <p>{parseDate(message.created_at, { outputFormat: `MMM DD, ${configs?.general_hour_format?.value}` })}</p>
          </DetailWrapper>
        </HistoryItemWrapper>
      ))}
      <ButtonWrapper>
        <Button
          onClick={handleReview}
          color='primary'
        >
          {enableReview ? t('REVIEW_ORDER', 'Review order') : t('CONTINUE', 'Continue')}
          <ArrowRight />
        </Button>
      </ButtonWrapper>
    </OrderHistoryContainer>
  )
}
