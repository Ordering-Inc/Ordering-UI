import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  useEvent,
  useUtils,
  OrderDetails as OrderDetailsController,
  useConfig
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
    setMessages,
    showProgressBar,
    getOrderStatus
  } = props

  const { order } = props.order

  const theme = useTheme()
  const [, t] = useLanguage()
  const [events] = useEvent()
  const [{ parsePrice, parseDate }] = useUtils()
  const [{ configs }] = useConfig()
  const [openMessages, setOpenMessages] = useState({ business: false, driver: false })
  const [unreadAlert, setUnreadAlert] = useState({ business: false, driver: false })
  const hideIndividualButton = configs.multi_business_checkout_remove_individual_buttons?.value === '1'

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
        {!hideIndividualButton && (
          <Button
            outline
            color='primary'
            onClick={() => handleGoToOrderDetails(order?.uuid)}
          >
            {t('ORDER_DETAILS', 'Order Details')}
          </Button>
        )}
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
      {showProgressBar && (
        <>
          <StatusBar percentage={getOrderStatus(order?.status)?.percentage} />
          <p className='order-status'>{getOrderStatus(order?.status)?.value}</p>
        </>
      )}
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
