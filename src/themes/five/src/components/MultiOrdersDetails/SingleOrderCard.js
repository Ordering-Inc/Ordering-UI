import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  useEvent,
  useUtils,
  OrderDetails as OrderDetailsController
} from 'ordering-components'
import { useTheme } from 'styled-components'
import { Messages } from '../../../../../components/Messages'
import AiFillExclamationCircle from '@meronex/icons/ai/AiFillExclamationCircle'
import { Phone, Chat } from 'react-bootstrap-icons'
import { Button } from '../../styles/Buttons'
import { Modal } from '../Modal'

import {
  SingleOrderContainer,
  SingleOrderHeader,
  OrderBusinessDetails,
  OrderBusinessWrapper,
  PhotoWrapper,
  BusinessData,
  ActionsBlock,
  StatusBar,
  MessagesIcon,
  ExclamationWrapper
} from './styles'

const SingleOrderCardUI = (props) => {
  const {
    orderTypes,
    readMessages,
    messages,
    setMessages
  } = props

  const { order } = props.order

  const theme = useTheme()
  const [, t] = useLanguage()
  const [events] = useEvent()
  const [{ parsePrice, parseDate }] = useUtils()
  const [openMessages, setOpenMessages] = useState({ business: false, driver: false })
  const [unreadAlert, setUnreadAlert] = useState({ business: false, driver: false })

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

  const handleGoToOrderDetails = (uuid) => {
    events.emit('go_to_page', { page: 'order_detail', params: { orderId: uuid }, replace: true })
  }

  const handleOpenMessages = (data) => {
    setOpenMessages(data)
    readMessages()
    if (order?.unread_count > 0) {
      data.business
        ? setUnreadAlert({ ...unreadAlert, business: false })
        : setUnreadAlert({ ...unreadAlert, driver: false })
    }
  }

  const unreadMessages = () => {
    const length = messages?.messages.length
    const unreadLength = order?.unread_count
    const unreadedMessages = messages.messages.slice(length - unreadLength, length)
    const business = unreadedMessages.some(message => message?.can_see?.includes(2))
    const driver = unreadedMessages.some(message => message?.can_see?.includes(4))
    setUnreadAlert({ business, driver })
  }

  useEffect(() => {
    unreadMessages()
  }, [messages?.messages])

  return (
    <SingleOrderContainer>
      <SingleOrderHeader>
        <div>
          <h2>{t('ORDER', 'Order')} #{order.id}</h2>
          <div>
            <p>
              {orderTypes?.find(type => order?.delivery_type === type?.value)?.text}:
            </p>
            <p className='date'>
              {
                order?.delivery_datetime_utc
                  ? parseDate(order?.delivery_datetime_utc)
                  : parseDate(order?.delivery_datetime, { utc: false })
              }
            </p>
          </div>
        </div>
        <Button
          outline
          color='primary'
          onClick={() => handleGoToOrderDetails(order?.uuid)}
        >
          {t('ORDER_DETAILS', 'Order Details')}
        </Button>
      </SingleOrderHeader>
      <OrderBusinessDetails>
        <OrderBusinessWrapper>
          <PhotoWrapper>
            <img src={order?.business?.logo || theme.images?.dummies?.businessLogo} alt='' />
          </PhotoWrapper>
          <BusinessData>
            <p className='bold'>{order?.business?.name}</p>
            <p>{order?.business?.email}</p>
            <p>{order?.business?.cellphone}</p>
          </BusinessData>
        </OrderBusinessWrapper>
        <ActionsBlock>
          {order?.business?.cellphone &&
            <span onClick={() => window.open(`tel:${order?.business.phone}`)}>
              <Phone />
            </span>}
          <MessagesIcon
            onClick={() => handleOpenMessages({ driver: false, business: true })}
          >
            {order?.unread_count > 0 && unreadAlert?.business && (
              <ExclamationWrapper>
                <AiFillExclamationCircle />
              </ExclamationWrapper>
            )}
            <Chat />
          </MessagesIcon>
        </ActionsBlock>
      </OrderBusinessDetails>
      <StatusBar percentage={getOrderStatus(order?.status)?.percentage} />
      <p className='order-status'>{getOrderStatus(order?.status)?.value}</p>
      <p className='order-total'>{t('EXPORT_ORDER_TOTAL', 'Order total')}: {parsePrice(order?.summary?.total ?? order?.total)}</p>

      {openMessages.business && (
        <Modal
          open={openMessages.business}
          onClose={() => setOpenMessages({ driver: false, business: false })}
          width='70%'
          // padding='0'
        >
          <Messages
            orderId={order?.id}
            order={order}
            business={openMessages.business}
            driver={openMessages.driver}
            messages={messages}
            setMessages={setMessages}
            readMessages={readMessages}
          />
        </Modal>
      )}
    </SingleOrderContainer>
  )
}

export const SingleOrderCard = (props) => {
  const [, t] = useLanguage()
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const orderDetailsProps = {
    ...props,
    userCustomerId: userCustomer?.id,
    orderTypes: props.orderTypes || [
      { value: 1, text: t('DELIVERY', 'Delivery') },
      { value: 2, text: t('PICKUP', 'Pickup') },
      { value: 3, text: t('EAT_IN', 'Eat in') },
      { value: 4, text: t('CURBSIDE', 'Curbside') },
      { value: 5, text: t('DRIVE_THRU', 'Drive thru') }
    ],
    UIComponent: SingleOrderCardUI
  }

  return (
    <OrderDetailsController {...orderDetailsProps} />
  )
}
