import React from 'react'

import {
  MessagesIcon,
  ExclamationWrapper,
  ActionsBlock
} from './styles'

import BiStoreAlt from '@meronex/icons/bi/BiStoreAlt'
import AiFillExclamationCircle from '@meronex/icons/ai/AiFillExclamationCircle'
import BsPhone from '@meronex/icons/bs/BsPhone'
import BiMessageRounded from '@meronex/icons/bi/BiMessageRounded'

export const ActionsSection = (props) => {
  const {
    actionType,
    order,
    handleBusinessRedirect,
    businessData,
    unreadAlert,
    setOpenMessages,
    readMessages,
    setUnreadAlert,
    showPhone,
    showMessages
  } = props

  const handleOpenMessages = (data) => {
    setOpenMessages(data)
    readMessages()
    if (order?.unread_count > 0) {
      data.business
        ? setUnreadAlert({ ...unreadAlert, business: false })
        : setUnreadAlert({ ...unreadAlert, driver: false })
    }
  }

  return (
    <ActionsBlock>
      {order?.[actionType] && order?.[actionType]?.phone && showPhone &&
        <span onClick={() => window.open(`tel:${order?.[actionType]?.phone}`)}>
          <BsPhone />
        </span>}
      {actionType === 'business' && (
        <span>
          <BiStoreAlt onClick={() => handleBusinessRedirect(businessData?.slug)} />
        </span>
      )}
      {showMessages && (
        <MessagesIcon onClick={() => handleOpenMessages({ driver: actionType === 'driver', business: actionType === 'business' })}>
          {order?.unread_count > 0 && unreadAlert?.[actionType] && (
            <ExclamationWrapper>
              <AiFillExclamationCircle />
            </ExclamationWrapper>
          )}
          <BiMessageRounded />
        </MessagesIcon>
      )}
    </ActionsBlock>
  )
}
