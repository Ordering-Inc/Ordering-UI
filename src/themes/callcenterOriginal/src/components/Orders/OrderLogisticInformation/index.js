import React from 'react'
import { useLanguage, useUtils, LogisticInformation as LogisticInformationController } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../../styles'
import {
  WraaperLogs,
  SkeletonHitory,
  BubbleConsole,
  UppercaseText
} from './styles'

const LogisticInformationUI = (props) => {
  const { logisticInformation, getLogistics } = props
  const [, t] = useLanguage()

  const [{ parseDate, parseDistance }] = useUtils()

  const getOrderStatus = (status) => {
    const orderStatus = [
      { key: 0, value: t('PENDING', 'Pending') },
      { key: 1, value: t('COMPLETED_BY_ADMIN', 'Completed by admin') },
      { key: 2, value: t('REJECTED_BY_ADMIN', 'Rejected by admin') },
      { key: 3, value: t('ORDER_STATUS_IN_BUSINESS', 'Driver arrived to business') },
      { key: 4, value: t('PREPARATION_COMPLETED', 'Preparation Completed') },
      { key: 5, value: t('REJECTED_BY_BUSINESS', 'Rejected by business') },
      { key: 6, value: t('REJECTED_BY_DRIVER', 'Rejected by driver') },
      { key: 7, value: t('ACCEPTED_BY_BUSINESS', 'Accepted by business') },
      { key: 8, value: t('ACCEPTED_BY_DRIVER', 'Accepted by driver') },
      { key: 9, value: t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver') },
      { key: 10, value: t('PICK_UP_FAILED_BY_DRIVER', 'Pick up Failed by driver') },
      { key: 11, value: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver') },
      { key: 12, value: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by driver') },
      { key: 13, value: t('PREORDER', 'Preorder') },
      { key: 14, value: t('ORDER_NOT_READY', 'Order not ready') },
      { key: 15, value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', 'Pickup completed by customer') },
      { key: 16, value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', 'Cancelled by customer') },
      { key: 17, value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', 'Not picked by customer') },
      { key: 18, value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', 'Driver almost arrived to business') },
      { key: 19, value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', 'Driver almost arrived to customer') },
      { key: 20, value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', 'Customer almost arrived to business') },
      { key: 21, value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', 'Customer arrived to business') },
      { key: 22, value: t('ORDER_LOOKING_FOR_DRIVER', 'Looking for driver') },
      { key: 23, value: t('ORDER_DRIVER_ON_WAY', 'Driver on way') }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)
    return objectStatus && objectStatus
  }

  return (
    <>
      {logisticInformation.loading ? (
        <>
          {[...Array(3)].map((item, i) => (
            <SkeletonHitory key={i}>
              <Skeleton width={400} height={40} />
              <Skeleton width={300} height={40} />
              <Skeleton width={380} height={40} />
              <Skeleton width={200} height={40} />
              <Skeleton width={450} height={40} />
            </SkeletonHitory>
          ))}
        </>
      ) : (
        <>
          {logisticInformation.error === null ? (
            <WraaperLogs>
              <Button
                rectangle
                color='primary'
                onClick={() => getLogistics()}
              >
                {t('RELOAD', 'Reload')}
              </Button>
              <BubbleConsole>
                <UppercaseText><strong>{t('DISTANCE_CUSTOMER_FROM_BUSINESS', 'DISTANCE FROM CUSTOMER TO BUSINESS')}</strong></UppercaseText>
                : {parseDistance((logisticInformation?.data?.distance_customer_from_business / 1000))}
              </BubbleConsole>
              <>
                <BubbleConsole>
                  <UppercaseText title='title'>{t('QUEUES', 'Queues')}</UppercaseText>
                </BubbleConsole>
                {logisticInformation.data.queues.length > 0 ? (
                  <>
                    {logisticInformation.data.queues.map((queue, i) => (
                      <React.Fragment key={queue.id}>
                        {queue?.name && (
                          <BubbleConsole>
                            <span>{i + 1}. {queue.name}</span>
                          </BubbleConsole>
                        )}
                        <BubbleConsole>
                          <strong>{t('AVAILABLE_DRIVERS', 'Available drivers')}: </strong>
                          <span>{queue.drivers.length}</span>
                        </BubbleConsole>
                        <BubbleConsole>
                          <strong>{t('PRIORITY', 'Priority')}: </strong>
                          <span>{queue.priority}</span>
                        </BubbleConsole>
                        <BubbleConsole>
                          <strong>{t('START_IN', 'Start in')}: </strong>
                          <span>{getOrderStatus(queue.orders_group_start_in_status)?.value}</span>
                        </BubbleConsole>
                        {queue.orders.length > 0 ? (
                          <BubbleConsole>
                            {queue.orders.map((order, i) => (
                              <div key={order.id}>
                                {i + 1}. {order.id} {order?.waiting_for_preorder && <span>({t('WAITING_FOR_PREORDER', 'waiting for preorder')})</span>}
                              </div>
                            ))}
                          </BubbleConsole>
                        ) : (
                          <BubbleConsole>
                            {t('WITHOUT_ORDERS', 'without orders')}
                          </BubbleConsole>
                        )}
                      </React.Fragment>
                    ))}
                  </>
                ) : (
                  <BubbleConsole>
                    <UppercaseText>{t('WITHOUT_QUEUES', 'Without Queues')}</UppercaseText>
                  </BubbleConsole>
                )}
              </>
              <>
                <BubbleConsole>
                  <UppercaseText title='title'>{t('HISTORY_ATTEMPTS', 'Attempts history')}</UppercaseText>
                </BubbleConsole>
                {logisticInformation.data.logistic_attempts.length > 0 ? (
                  <>
                    {logisticInformation.data.logistic_attempts.map(attempt => (
                      <BubbleConsole key={attempt.id}>
                        <strong>{t('DRIVER_GROUP', 'Driver group')}</strong>: <strong>{attempt?.driver_group_id}</strong> {t('AT', 'at')} {parseDate(attempt?.created_at, { utc: false })}
                      </BubbleConsole>
                    ))}
                  </>
                ) : (
                  <BubbleConsole>
                    <UppercaseText>{t('WITHOUT_HISTORY_ATTEMPTS', 'without history attempts')}</UppercaseText>
                  </BubbleConsole>
                )}
              </>
            </WraaperLogs>
          ) : (
            <>
              {logisticInformation.error}
            </>
          )}
        </>
      )}
    </>
  )
}

export const OrderLogisticInformation = (props) => {
  const logisticsProps = {
    ...props,
    orderId: props.orderId,
    UIComponent: LogisticInformationUI
  }
  return <LogisticInformationController {...logisticsProps} />
}
