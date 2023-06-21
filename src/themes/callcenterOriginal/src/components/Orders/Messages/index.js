import React, { useState, useEffect, useRef } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useUtils, useLanguage, useSession, MessagesDashboard as MessagesController } from 'ordering-components'
import { useForm, Controller } from 'react-hook-form'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import AiOutlineInfoCircle from '@meronex/icons/ai/AiOutlineInfoCircle'
import MdcCloseOctagonOutline from '@meronex/icons/mdc/MdcCloseOctagonOutline'
import MdClose from '@meronex/icons/md/MdClose'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import {
  MessagesContainer,
  WrapperContainer,
  HeaderProfile,
  WrapperHeader,
  ImageContainer,
  Chat,
  BubbleCustomer,
  MessageCustomer,
  MessageBusiness,
  BubbleBusines,
  SkeletonBubbleCustomer,
  SkeletonBubbleBusiness,
  ChatImage,
  TimeofSent,
  SendForm,
  Send,
  WrapperSendInput,
  SendImage,
  MessageConsole,
  BubbleConsole,
  WrapperDeleteImage,
  WrapperSendMessageButton,
  OrderNumber,
  WrapperHitoryHeader,
  TabItem,
  SkeletonHitory,
  WrapperLogistics,
  WrapperLogisticInformation,
  HeaderInfo,
  SearchAndDetailControlContainer,
  MessagesSearch,
  OrderDetailIconButton,
  ChatHeader,
  ChatContactInfoContainer,
  InfoBlock,
  SendToContainer,
  MessageSender,
  QuickMessageWrapper,
  NotSendMessage
} from './styles'
import { Alert, Image as ImageWithFallback } from '../../Shared'
import { Button, Input } from '../../../styles'
import BsCardImage from '@meronex/icons/bs/BsCardImage'
import IosSend from '@meronex/icons/ios/IosSend'
import RiUser2Fill from '@meronex/icons/ri/RiUser2Fill'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import BisBusiness from '@meronex/icons/bi/BisBusiness'
import { Logistics } from '../Logistics'
import { OrderLogisticInformation } from '../OrderLogisticInformation'

export const MessagesUI = (props) => {
  const {
    isChat,
    order,
    messages,
    handleSend,
    image,
    message,
    sendMessage,
    setImage,
    setMessage,
    canRead,
    setCanRead,
    history,
    messageDashboardView,
    handleMessageOrderDetail,
    handleReadMessages,
    isTourOpen,
    setCurrentTourStep,
    orderDetailClose,
    getHistoryComment
  } = props

  const routerHistory = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const theme = useTheme()
  const { handleSubmit, setValue, errors, control } = useForm()
  const [{ user }] = useSession()
  const [{ parseDate, getTimeAgo, optimizeImage }] = useUtils()
  const buttonRef = useRef(null)
  const messageInputRef = useRef(null)

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [tabActive, setTabActive] = useState('order_history')
  const [messageSearchValue, setMessageSearchValue] = useState('')
  const [filteredMessages, setFilteredMessages] = useState([])
  const [load, setLoad] = useState(0)
  const [messageList, setMessageList] = useState([])
  const [isChatDisabled, setIsChatDisabled] = useState(false)
  const previousStatus = [1, 2, 5, 6, 10, 11, 12, 16, 17]
  const chatDisabled = previousStatus.includes(order?.status)

  const adminMessageList = [
    { key: 'message_1', text: t('ADMIN_MESSAGE_1', 'admin_message_1') },
    { key: 'message_2', text: t('ADMIN_MESSAGE_2', 'admin_message_2') },
    { key: 'message_3', text: t('ADMIN_MESSAGE_3', 'admin_message_3') },
    { key: 'message_4', text: t('ADMIN_MESSAGE_4', 'admin_message_4') }
  ]

  const storeMessageList = [
    { key: 'message_1', text: t('STORE_MESSAGE_1', 'store_message_1') },
    { key: 'message_2', text: t('STORE_MESSAGE_2', 'store_message_2') },
    { key: 'message_3', text: t('STORE_MESSAGE_3', 'store_message_3') },
    { key: 'message_4', text: t('STORE_MESSAGE_4', 'store_message_4') }
  ]

  const handleClickQuickMessage = (msg) => {
    const quickMsg = message ? `${message} ${msg}` : msg
    setValue('message', quickMsg)
    setMessage(quickMsg)
    const msgElement = messageInputRef?.current
    if (msgElement) {
      msgElement.value = quickMsg
      msgElement.focus()
      msgElement.selectionStart = msgElement.selectionEnd = msgElement.value.length
      msgElement.scrollLeft = msgElement.scrollWidth
    }
  }

  useEffect(() => {
    if (user.level === 0) setMessageList(adminMessageList)
    else if (user.level === 2) setMessageList(storeMessageList)
    else setMessageList([])
  }, [user])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  useEffect(() => {
    setMessageSearchValue('')
  }, [order.id])

  useEffect(() => {
    if (!sendMessage.loading && sendMessage?.error) {
      setAlertState({
        open: true,
        content: sendMessage.error || [t('ERROR')]
      })
    }
    if (sendMessage.loading) {
      clearInputs()
    }
  }, [sendMessage])

  useEffect(() => {
    if (history) return
    if (load < 3) {
      const chat = document.getElementById('chat')
      if (chat) {
        chat.scrollTop = chat?.scrollHeight
      }
    }
  }, [load])

  useEffect(() => {
    if (history) return
    const chat = document.getElementById('chat')
    if (chat) {
      chat.scrollTop = chat?.scrollHeight
    }
  }, [messages.messages.length, filteredMessages])

  useEffect(() => {
    if (history) return
    setTimeout(() => {
      const chat = document.getElementById('chat')
      if (chat) {
        chat.scrollTop = chat?.scrollHeight
      }
    }, 10)
  }, [isChat])

  const onChangeMessage = (e) => {
    setMessage(e.target.value)
  }

  const removeImage = (e) => {
    setImage(null)
  }

  const onChangeImage = e => {
    const files = e.target.files[0]
    const reader = new window.FileReader()
    reader.readAsDataURL(files)
    reader.onload = () => {
      setImage(reader.result)
      buttonRef.current.focus()
    }
    reader.onerror = error => {
      console.log(error)
    }
  }

  const getLevel = (level) => {
    switch (level) {
      case 0:
        return t('ADMIN', 'Admin')
      case 1:
        return t('CITY_MANAGER', 'City Manager')
      case 2:
        return t('BUSINESS', 'Business')
      case 3:
        return t('CUSTOMER', 'Customer')
      case 4:
        return t('DRIVER', 'Driver')
      case 5:
        return t('DRIVER_MANAGER', 'Driver Manager')
    }
  }

  const clearInputs = () => {
    const input = messageInputRef?.current
    if (input) {
      input.value = ''
      setValue('message', '')
    }
    removeImage()
    setMessage('')
  }

  const onSubmit = (values) => {
    handleSend()
    if (isTourOpen && setCurrentTourStep && orderDetailClose) {
      orderDetailClose()
      setCurrentTourStep(4)
    }
  }

  const handleChangeTour = (evt) => {
    if (isTourOpen && !evt.target.closest('.message-footer')) {
      orderDetailClose()
      setCurrentTourStep(4)
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const unreadMessageControl = () => {
    if (messages.loading || messages.messages.length === 0) return
    if (messages.messages[messages.messages.length - 1].read) return
    handleReadMessages(messages.messages[messages.messages.length - 1].id)
  }

  useEffect(() => {
    if (!isChat) return
    if (order?.driver) {
      setCanRead({ administrator: true, business: true, customer: true, driver: true })
    } else {
      setCanRead({ administrator: true, business: true, customer: true, driver: false })
    }
  }, [isChat, order])

  useEffect(() => {
    if (!isChat || !order?.id || messages.loading) return
    unreadMessageControl()
  }, [isChat, order?.id, messages])

  useEffect(() => {
    if (messages.loading) return
    const _filteredMessages = messages.messages.filter(message => {
      if (message.type === 2) {
        return message.comment.toLocaleLowerCase().includes(messageSearchValue.toLocaleLowerCase())
      }
      return true
    })
    setFilteredMessages(_filteredMessages)
  }, [messages, messageSearchValue])

  useEffect(() => {
    if (user?.level !== 2) {
      if (!canRead?.business && !canRead?.customer && !canRead?.driver) setIsChatDisabled(true)
      else setIsChatDisabled(false)
    } else {
      if (!canRead?.customer && !canRead?.driver) setIsChatDisabled(true)
      else setIsChatDisabled(false)
    }
  }, [canRead])

  const handleTabClick = (tab, isInitialRender) => {
    setTabActive(tab)
    if (!isInitialRender) {
      const orderId = query.get('id')
      const section = query.get('section')
      routerHistory.replace(`${location.pathname}?id=${orderId}&section=${section}&tab=${tab}`)
    }
  }

  useEffect(() => {
    if (!history) return
    const tab = query.get('tab')
    if (tab) {
      handleTabClick(tab, true)
    } else {
      handleTabClick('order_history')
    }
  }, [history])

  return (
    <MessagesContainer>
      <WrapperContainer onClick={handleChangeTour}>
        <HeaderProfile>
          <WrapperHeader
            messageDashboardView={messageDashboardView}
            historyView={history}
          >
            <HeaderInfo>
              {isChat && (
                <ChatHeader>
                  <OrderNumber>
                    {t('INVOICE_ORDER_NO', 'Order No')} {order.id}
                  </OrderNumber>
                  <ImageContainer>
                    {user?.level !== 2 && (
                      <ImageWithFallback
                        src={optimizeImage(order.business?.logo, 'h_40,c_limit')}
                        fallback={<BisBusiness />}
                      />
                    )}
                    <ImageWithFallback
                      src={optimizeImage(order.customer?.photo, 'w_40,c_limit')}
                      fallback={<FaUserAlt />}
                    />
                    {order?.driver && (
                      <ImageWithFallback
                        src={optimizeImage(order.driver?.photo, 'w_40,c_limit')}
                        fallback={<RiUser2Fill />}
                      />
                    )}
                  </ImageContainer>
                </ChatHeader>
              )}
              {history && (
                <WrapperHitoryHeader>
                  <TabItem active={tabActive === 'order_history'} onClick={() => handleTabClick('order_history')}>
                    {t('MOBILE_ORDER_HISTORY', 'Order History')}
                  </TabItem>
                  <TabItem active={tabActive === 'logistics'} onClick={() => handleTabClick('logistics')}>
                    {t('LOGISTICS', 'Logistics')}
                  </TabItem>
                  <TabItem active={tabActive === 'logistic_information'} onClick={() => handleTabClick('logistic_information')}>
                    {t('LOGISTIC_INFORMATION', 'Logistics information')}
                  </TabItem>
                </WrapperHitoryHeader>
              )}
            </HeaderInfo>
            {messageDashboardView && (
              <SearchAndDetailControlContainer>
                <MessagesSearch>
                  <img src={theme?.images?.icons?.search} alt='search' />
                  <input
                    type='text'
                    name='search'
                    placeholder='Search'
                    value={messageSearchValue}
                    onChange={(e) => setMessageSearchValue(e.target.value)}
                  />
                </MessagesSearch>
                <OrderDetailIconButton onClick={() => handleMessageOrderDetail(true)}>
                  <AiOutlineInfoCircle />
                </OrderDetailIconButton>
              </SearchAndDetailControlContainer>
            )}
          </WrapperHeader>
        </HeaderProfile>
        <Chat id='chat'>
          {
            messages.loading && (
              <>
                {!history ? (
                  <>
                    <MessageBusiness>
                      <SkeletonBubbleBusiness>
                        <Skeleton width={200} height={100} />
                      </SkeletonBubbleBusiness>
                    </MessageBusiness>
                    <MessageCustomer>
                      <SkeletonBubbleCustomer>
                        <Skeleton width={250} height={100} />
                      </SkeletonBubbleCustomer>
                    </MessageCustomer>
                    <MessageBusiness>
                      <SkeletonBubbleBusiness>
                        <Skeleton width={150} height={100} />
                      </SkeletonBubbleBusiness>
                    </MessageBusiness>
                    <MessageCustomer>
                      <SkeletonBubbleCustomer>
                        <Skeleton width={200} height={100} />
                      </SkeletonBubbleCustomer>
                    </MessageCustomer>
                  </>
                ) : (
                  <>
                    {[...Array(5)].map((item, i) =>
                      <SkeletonHitory key={i}>
                        <Skeleton width={400} height={50} />
                        <Skeleton width={300} height={50} />
                        <Skeleton width={380} height={50} />
                        <Skeleton width={200} height={50} />
                        <Skeleton width={450} height={50} />
                      </SkeletonHitory>
                    )}
                  </>
                )}
              </>
            )
          }
          {
            !messages.loading && (
              <>
                {!tabActive === 'logistic_information' && (
                  <MessageConsole>
                    <BubbleConsole>
                      {t('ORDER_PLACED_FOR', 'Order placed for')} {' '}
                      <strong>{parseDate(order.created_at)}</strong> {' '}
                      {t('VIA', 'via')} <strong>{order.app_id ? t(order.app_id.toUpperCase(), `${order.app_id}`) : ''}</strong>{' '}
                      <OverlayTrigger
                        placement='top'
                        overlay={
                          <Tooltip>
                            {parseDate(order.created_at)}
                          </Tooltip>
                        }
                      >
                        <TimeofSent>{getTimeAgo(order.created_at)}</TimeofSent>
                      </OverlayTrigger>
                    </BubbleConsole>
                  </MessageConsole>
                )}
                {history && (
                  <>
                    {tabActive === 'logistics' && (
                      <WrapperLogistics>
                        <Logistics orderId={order.id} />
                      </WrapperLogistics>
                    )}
                    {tabActive === 'logistic_information' && (
                      <WrapperLogisticInformation>
                        <OrderLogisticInformation orderId={order.id} />
                      </WrapperLogisticInformation>
                    )}
                  </>
                )}
                {filteredMessages.length > 0 && filteredMessages.map((message) => (
                  <React.Fragment key={message.id}>
                    {history && tabActive === 'order_history' && (
                      <>
                        {message.type === 0 && (
                          <MessageConsole key={message.id}>
                            <BubbleConsole>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: t('ORDER_PLACED_FOR_VIA', 'Order placed for _for_ via _via_.')
                                    .replace('_for_', '<b>' + parseDate(order.delivery_datetime) + '</b>')
                                    .replace('_via_', '<b>' + t(order.app_id ? order.app_id.toUpperCase() : 'OTHER') + '</b>')
                                }}
                              />
                              <div><strong>{t('APP_ID', 'App ID')}: </strong>{message?.app_id}</div>
                              <div><strong>{t('AUTHOR', 'Author')}: </strong>{message?.author?.name} {message?.author?.lastname}</div>
                              <div><strong>{t('USER_AGENT', 'User agent')}: </strong>{message?.user_agent}</div>
                              <div><strong>{t('IP', 'IP')}: </strong>{message?.ip}</div>
                              <TimeofSent>{getTimeAgo(message?.created_at)}</TimeofSent>
                            </BubbleConsole>
                          </MessageConsole>
                        )}
                        {message.type === 1 && (
                          <MessageConsole key={message.id} style={{ display: `${tabActive === 'order_history' ? 'inline-flex' : 'none'}` }}>
                            {getHistoryComment(message) && (
                              <BubbleConsole>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: getHistoryComment(message)
                                  }}
                                />
                                <OverlayTrigger
                                  placement='top'
                                  overlay={<Tooltip>{parseDate(message.created_at)}</Tooltip>}
                                >
                                  <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                                </OverlayTrigger>
                              </BubbleConsole>
                            )}
                          </MessageConsole>
                        )}
                      </>
                    )}
                    {isChat && (
                      <>
                        {message.type === 0 && (
                          <MessageConsole key={message.id}>
                            <BubbleConsole>
                              <p>
                                {t('ORDER_PLACED_FOR', 'Order placed for')} {' '}
                                <strong>{parseDate(order.created_at)}</strong> {' '}
                                {t('VIA', 'Via')}{' '}
                                <strong>
                                  {order.app_id ? t(order.app_id.toUpperCase(), order.app_id) : t('OTHER', 'Other')}
                                </strong>{' '}
                              </p>
                              <div><strong>{t('APP_ID', 'App ID')}: </strong>{message?.app_id}</div>
                              <div><strong>{t('AUTHOR', 'Author')}: </strong>{message?.author?.name} {message?.author?.lastname}</div>
                              <div><strong>{t('USER_AGENT', 'User agent')}: </strong>{message?.user_agent}</div>
                              <div><strong>{t('IP', 'IP')}: </strong>{message?.ip}</div>
                              <TimeofSent>{getTimeAgo(message?.created_at)}</TimeofSent>
                            </BubbleConsole>
                          </MessageConsole>
                        )}
                        {message.type === 1 && (
                          <MessageConsole key={message.id} style={{ display: `${tabActive === 'order_history' ? 'inline-flex' : 'none'}` }}>
                            {getHistoryComment(message) && (
                              <BubbleConsole>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: getHistoryComment(message)
                                  }}
                                />
                                <OverlayTrigger
                                  placement='top'
                                  overlay={<Tooltip>{parseDate(message.created_at)}</Tooltip>}
                                >
                                  <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                                </OverlayTrigger>
                              </BubbleConsole>
                            )}
                          </MessageConsole>
                        )}
                        {message.type === 2 && user.id === message.author_id && (
                          <MessageCustomer>
                            <BubbleCustomer>
                              <MessageSender>{message.author.name} ({order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level)})</MessageSender>
                              {message.comment}
                              <OverlayTrigger
                                placement='top'
                                overlay={
                                  <Tooltip>
                                    {parseDate(message.created_at)}
                                  </Tooltip>
                                }
                              >
                                <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                              </OverlayTrigger>
                            </BubbleCustomer>
                            <SendToContainer>
                              <p>{t('SEND_TO', 'Send to')}:</p>
                              <ImageContainer isCircle>
                                {message.can_see.includes(2) && (
                                  <ImageWithFallback
                                    src={order.business?.logo}
                                    fallback={<BisBusiness />}
                                  />
                                )}
                                {message.can_see.includes(3) && (
                                  <ImageWithFallback
                                    src={order.customer?.photo}
                                    fallback={<FaUserAlt />}
                                  />
                                )}
                                {message.can_see.includes(4) && (
                                  <>
                                    {order?.driver && (
                                      <ImageWithFallback
                                        src={order.driver?.photo}
                                        fallback={<RiUser2Fill />}
                                      />
                                    )}
                                  </>
                                )}
                              </ImageContainer>
                            </SendToContainer>
                          </MessageCustomer>
                        )}
                        {message.type === 3 && user.id === message.author_id && (
                          <MessageCustomer>
                            <BubbleCustomer name='image'>
                              <MessageSender>{message.author.name} ({order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level)})</MessageSender>
                              <ChatImage><img src={message.source} onLoad={() => setLoad(load + 1)} alt='chat-image' /></ChatImage>
                              {message.comment && (
                                <>
                                  {message.comment}
                                </>
                              )}
                              <OverlayTrigger
                                placement='top'
                                overlay={
                                  <Tooltip>
                                    {parseDate(message.created_at)}
                                  </Tooltip>
                                }
                              >
                                <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                              </OverlayTrigger>
                            </BubbleCustomer>
                            <SendToContainer>
                              <p>{t('SEND_TO', 'Send to')}:</p>
                              <ImageContainer isCircle>
                                {message.can_see.includes(2) && (
                                  <ImageWithFallback
                                    src={order.business?.logo}
                                    fallback={<BisBusiness />}
                                  />
                                )}
                                {message.can_see.includes(3) && (
                                  <ImageWithFallback
                                    src={order.customer?.photo}
                                    fallback={<FaUserAlt />}
                                  />
                                )}
                                {message.can_see.includes(4) && (
                                  <>
                                    {order?.driver && (
                                      <ImageWithFallback
                                        src={order.driver?.photo}
                                        fallback={<RiUser2Fill />}
                                      />
                                    )}
                                  </>
                                )}
                              </ImageContainer>
                            </SendToContainer>
                          </MessageCustomer>
                        )}
                        {message.type === 2 && user.id !== message.author_id && (
                          <MessageBusiness>
                            <BubbleBusines>
                              <MessageSender>{message.author.name} ({order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level)})</MessageSender>
                              {message.comment}
                              <OverlayTrigger
                                placement='top'
                                overlay={
                                  <Tooltip>
                                    {parseDate(message.created_at)}
                                  </Tooltip>
                                }
                              >
                                <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                              </OverlayTrigger>
                            </BubbleBusines>
                            <SendToContainer isReceived>
                              <p>{t('SEND_TO', 'Send to')}:</p>
                              <ImageContainer isCircle isReceived>
                                {message.can_see.includes(2) && (
                                  <ImageWithFallback
                                    src={order.business?.logo}
                                    fallback={<BisBusiness />}
                                  />
                                )}
                                {message.can_see.includes(3) && (
                                  <ImageWithFallback
                                    src={order.customer?.photo}
                                    fallback={<FaUserAlt />}
                                  />
                                )}
                                {message.can_see.includes(4) && (
                                  <>
                                    {order?.driver && (
                                      <ImageWithFallback
                                        src={order.driver?.photo}
                                        fallback={<RiUser2Fill />}
                                      />
                                    )}
                                  </>
                                )}
                              </ImageContainer>
                            </SendToContainer>
                          </MessageBusiness>
                        )}
                        {message.type === 3 && user.id !== message.author_id && (
                          <MessageBusiness>
                            <MessageSender>{message.author.name} ({order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level)})</MessageSender>
                            <BubbleBusines name='image'>
                              <ChatImage><img src={message.source} onLoad={() => setLoad(load + 1)} alt='chat-image' /></ChatImage>
                              {message.comment && (
                                <>
                                  {message.comment}
                                </>
                              )}
                              <OverlayTrigger
                                placement='top'
                                overlay={
                                  <Tooltip>
                                    {parseDate(message.created_at)}
                                  </Tooltip>
                                }
                              >
                                <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                              </OverlayTrigger>
                            </BubbleBusines>
                            <SendToContainer isReceived>
                              <p>{t('SEND_TO', 'Send to')}:</p>
                              <ImageContainer isCircle isReceived>
                                {message.can_see.includes(2) && (
                                  <ImageWithFallback
                                    src={order.business?.logo}
                                    fallback={<BisBusiness />}
                                  />
                                )}
                                {message.can_see.includes(3) && (
                                  <ImageWithFallback
                                    src={order.customer?.photo}
                                    fallback={<FaUserAlt />}
                                  />
                                )}
                                {message.can_see.includes(4) && (
                                  <>
                                    {order?.driver && (
                                      <ImageWithFallback
                                        src={order.driver?.photo}
                                        fallback={<RiUser2Fill />}
                                      />
                                    )}
                                  </>
                                )}
                              </ImageContainer>
                            </SendToContainer>
                          </MessageBusiness>
                        )}
                      </>
                    )}
                  </React.Fragment>
                ))}
              </>
            )
          }
        </Chat>

        {!history && (
          <SendForm className='message-footer'>
            <ImageContainer>
              {user?.level !== 2 && (
                <ChatContactInfoContainer
                  disabled={!canRead?.business}
                  onClick={() => setCanRead({ ...canRead, business: !canRead?.business })}
                >
                  <ImageWithFallback
                    src={optimizeImage(order.business?.logo, 'h_40,c_limit')}
                    fallback={<BisBusiness />}
                  />
                  <InfoBlock>
                    <p>{order.business?.name}</p>
                    <p>{t('BUSINESS', 'Business')}</p>
                  </InfoBlock>
                </ChatContactInfoContainer>
              )}
              <ChatContactInfoContainer
                disabled={!canRead?.customer}
                onClick={() => setCanRead({ ...canRead, customer: !canRead?.customer })}
              >
                <ImageWithFallback
                  src={optimizeImage(order.customer?.photo, 'w_40,c_limit')}
                  fallback={<FaUserAlt />}
                />
                <InfoBlock>
                  <p>{order.customer?.name} {order.customer?.lastname}</p>
                  <p>{t('CUSTOMER', 'Customer')}</p>
                </InfoBlock>
              </ChatContactInfoContainer>
              {order?.driver && (
                <ChatContactInfoContainer
                  disabled={!canRead?.driver}
                  onClick={() => setCanRead({ ...canRead, driver: !canRead?.driver })}
                >
                  <ImageWithFallback
                    src={optimizeImage(order.driver?.photo, 'w_40,c_limit')}
                    fallback={<RiUser2Fill />}
                  />
                  <InfoBlock>
                    <p>{order.driver?.name} {order.driver?.lastname}</p>
                    <p>{t('DRIVER', 'Driver')}</p>
                  </InfoBlock>
                </ChatContactInfoContainer>
              )}
            </ImageContainer>
            {chatDisabled ? (
              <NotSendMessage>
                <MdcCloseOctagonOutline />
                <p>{t('NOT_SEND_MESSAGES', 'You can\'t send messages because the order has ended')}</p>
              </NotSendMessage>
            ) : (
              <>
                {messageList.length > 0 && (
                  <QuickMessageWrapper>
                    {messageList.map((quickMessage, i) => (
                      <Button
                        key={i}
                        color='secundaryDark'
                        onClick={() => handleClickQuickMessage(quickMessage.text)}
                      >
                        {quickMessage.text}
                      </Button>
                    ))}
                  </QuickMessageWrapper>
                )}

                <Send onSubmit={handleSubmit(onSubmit)} noValidate>
                  <WrapperSendInput>
                    <Controller
                      name='message'
                      control={control}
                      render={({ onChange, value }) => (
                        <Input
                          placeholder={t('WRITE_A_MESSAGE', 'Write a message...')}
                          value={value}
                          onChange={e => {
                            onChange(e.target.value)
                            onChangeMessage(e)
                          }}
                          onFocus={unreadMessageControl}
                          name='message'
                          ref={messageInputRef}
                          autoComplete='off'
                          readOnly={isChatDisabled}
                        />
                      )}
                      rules={{
                        required: !image
                      }}
                      defaultValue=''
                    />
                    {!image && (
                      <SendImage htmlFor='chat_image'>
                        <input
                          type='file'
                          name='image'
                          id='chat_image'
                          accept='image/png,image/jpg,image/jpeg'
                          onChange={onChangeImage}
                          disabled={isChatDisabled}
                        />
                        <BsCardImage />
                      </SendImage>
                    )}
                    {image && (
                      <WrapperDeleteImage>
                        <Button
                          circle
                          onClick={removeImage}
                          type='reset'
                        >
                          <MdClose />
                        </Button>
                        <img
                          src={image}
                          loading='lazy'
                        />
                      </WrapperDeleteImage>
                    )}
                  </WrapperSendInput>
                  <WrapperSendMessageButton>
                    <Button
                      borderRadius='8px'
                      color='primary'
                      type='submit'
                      disabled={sendMessage.loading || (message === '' && !image) || messages.loading}
                      ref={buttonRef}
                    >
                      <IosSend />
                      {sendMessage.loading ? (
                        <span>
                          {t('SENDING_MESSAGE', 'Sending...')}
                        </span>
                      )
                        : (
                          <span>
                            {t('SEND', 'send')}
                          </span>)}
                    </Button>
                  </WrapperSendMessageButton>
                </Send>
              </>
            )}
          </SendForm>
        )}
        <Alert
          title={t('ERROR', 'error')}
          content={alertState.content}
          acceptText={t('ACCEPT')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
      </WrapperContainer>
    </MessagesContainer>
  )
}

export const Messages = (props) => {
  const MessagesProps = {
    ...props,
    asDashboard: true,
    UIComponent: MessagesUI
  }
  return <MessagesController {...MessagesProps} />
}
