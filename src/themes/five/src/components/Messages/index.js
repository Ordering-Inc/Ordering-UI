import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from 'styled-components'
import {
  Messages as MessagesController,
  useUtils,
  useLanguage,
  useSession
} from 'ordering-components'
import { useForm } from 'react-hook-form'
import IosSend from '@meronex/icons/ios/IosSend'
import Skeleton from 'react-loading-skeleton'
import {
  MessagesContainer,
  HeaderProfile,
  Image,
  Chat,
  BubbleCustomer,
  MessageCustomer,
  MyName,
  MessageBusiness,
  BubbleBusines,
  SkeletonBubbleCustomer,
  SkeletonBubbleBusiness,
  ChatImage,
  TimeofSent,
  SendForm,
  Send,
  SendImage,
  MessageConsole,
  BubbleConsole,
  WrapperDeleteImage,
  WrapperSendMessageButton,
  HeaderOnline,
  ImageContainer,
  ModalIcon,
  MessagesLayoutWrapper,
  MessagesLeftLayout,
  MessagesRightLayout,
  MessagesTitle,
  CustomerList,
  MessagesClose,
  InputWrapper,
  MessageContentWrapper,
  MessageCreatedDate,
  TimeofSentByAdmin,
  NotSendMessage,
  QuickMessageWrapper,
  ProfileMessageHeader,
  MessageType,
  OrderData,
  MessagesTypes
} from './styles'

import { Image as ImageWithFallback } from '../../../../../components/Image'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import BsCardImage from '@meronex/icons/bs/BsCardImage'
import RiUser2Fill from '@meronex/icons/ri/RiUser2Fill'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import MdClose from '@meronex/icons/md/MdClose'
import MdcCloseOctagonOutline from '@meronex/icons/mdc/MdcCloseOctagonOutline'
import { bytesConverter, getTraduction } from '../../../../../utils'
import { Alert } from '../Confirm'
import { Modal } from '../Modal'

const filterSpecialStatus = ['prepared_in', 'delivered_in']

const MessagesUI = (props) => {
  const {
    order,
    messages,
    handleSend,
    image,
    message,
    sendMessage,
    setImage,
    setMessage,
    business,
    driver,
    messagesToShow,
    readMessages,
    onClose,
    onMessages,
    setCanRead,
    profileMessages
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const { handleSubmit, register, errors, setValue } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [{ user }] = useSession()
  const [{ parseDate, parseTime }] = useUtils()
  const buttonRef = useRef(null)
  const [modalImage, setModalImage] = useState({ open: false, src: '' })
  const imageRef = useRef(null)

  const quickMessageList = [
    { key: 'message_1', text: t('CUSTOMER_MESSAGE_1', 'Lorem ipsum 1') },
    { key: 'message_2', text: t('CUSTOMER_MESSAGE_2', 'Lorem ipsum 2') },
    { key: 'message_3', text: t('CUSTOMER_MESSAGE_3', 'Lorem ipsum 3') },
    { key: 'message_4', text: t('CUSTOMER_MESSAGE_4', 'Lorem ipsum 4') }
  ]

  const handleClickQuickMessage = (index) => {
    setValue('message', `${message} ${index}`)
    setMessage(`${message} ${index}`)
  }

  const handleModalImage = (src) => {
    setModalImage({ open: true, src })
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  useEffect(() => {
    if (!sendMessage.loading && sendMessage?.error) {
      setAlertState({
        open: true,
        content: sendMessage.error || [t('ERROR', 'Error')]
      })
    }
    if (sendMessage.loading) {
      clearInputs()
    }
  }, [sendMessage])

  useEffect(() => {
    if (business) setCanRead({ business: true, administrator: true, customer: true, driver: false })
    else if (driver) setCanRead({ business: false, administrator: true, customer: true, driver: true })
  }, [business, driver])

  useEffect(() => {
    const chat = document.getElementById('chat')
    chat.scrollTop = chat.scrollHeight
    readMessages && readMessages()
  }, [messages?.messages?.length])

  useEffect(() => {
    setImage(null)
  }, [alertState.open])

  const onChangeMessage = (e) => {
    setMessage(e.target.value)
  }

  const removeImage = (e) => {
    setImage(null)
    imageRef.current.value = ''
  }

  const onChangeImage = e => {
    const files = e.target.files[0]
    const reader = new window.FileReader()
    reader.readAsDataURL(files)
    reader.onload = () => {
      setImage(reader.result)
    }
    const type = files.type.split('/')[0]
    if (type !== 'image') {
      setAlertState({
        open: true,
        content: t('ERROR_ONLY_IMAGES', 'Only images can be accepted')
      })
      return
    }

    if (bytesConverter(files[0]?.size) > 2048) {
      setAlertState({
        open: true,
        content: t('IMAGE_MESSAGES_MAXIMUM_SIZE', 'Images larger than 2 megabytes cannot be sent')
      })
      return
    }
    buttonRef.current.focus()
    reader.onerror = error => {
      console.log(error)
      setAlertState({
        open: true,
        content: t('ERROR_READ_FILE', 'Failed to read file')
      })
    }
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
    const input = document.getElementById('message')
    if (input) {
      input.value = ''
    }
    removeImage()
    setMessage('')
  }

  const onSubmit = (values) => {
    handleSend()
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const MapMessages = ({ messages }) => {
    return (
      <>
        {props.beforeElements?.map((BeforeElement, i) => (
          <React.Fragment key={i}>
            {BeforeElement}
          </React.Fragment>))}
        {props.beforeComponents?.map((BeforeComponent, i) => (
          <BeforeComponent key={i} {...props} />))}
        {messages?.messages.map((message) => (
          <React.Fragment key={message.id}>
            {message.type === 1 && (
              <MessageContentWrapper key={message.id}>
                {message.change?.attribute !== 'driver_id' ? (
                  <>
                    <MessageCreatedDate>
                      <span>{parseDate(message.created_at, { outputFormat: 'MMM DD, YYYY' })}</span>
                    </MessageCreatedDate>
                    <MessageConsole>
                      <BubbleConsole>
                        {t('ORDER', 'Order')} {' '}
                        <strong>{t(message.change.attribute.toUpperCase(), message.change.attribute.replace('_', ' '))}</strong> {' '}
                        {t('CHANGED_FROM', 'Changed from')} {' '}
                        {filterSpecialStatus.includes(message.change.attribute) ? (
                          <>
                            {message.change.old === null ? <strong>0</strong> : (
                              <>
                                <strong>{message.change.old}</strong> {' '}
                              </>
                            )}
                            <> {t('TO', 'to')} {' '} <strong>{message.change.new}</strong> {t('MINUTES', 'Minutes')}</>
                          </>
                        ) : (
                          <>
                            {message.change.old !== null && (
                              <>
                                <strong>{t(getStatus(parseInt(message.change.old, 10)))}</strong> {' '}
                              </>
                            )}
                            <> {t('TO', 'to')} {' '} <strong>{t(getStatus(parseInt(message.change.new, 10)))}</strong> </>
                          </>
                        )}
                        <TimeofSent>{parseTime(message.created_at)}</TimeofSent>
                      </BubbleConsole>
                    </MessageConsole>
                  </>
                ) : (
                  <>
                    <MessageCreatedDate>
                      <span>{parseDate(message.created_at, { outputFormat: 'MMM DD, YYYY' })}</span>
                    </MessageCreatedDate>
                    <MessageConsole>
                      <BubbleConsole>
                        {message.change.new ? (
                          <>
                            <strong>{message.driver?.name} {' '} {message.driver?.lastname && message.driver.lastname} </strong>
                            {t('WAS_ASSIGNED_AS_DRIVER', 'Was assigned as driver')}
                            {message.comment && (<><br /> {message.comment.length}</>)}
                          </>
                        ) : <>{t('DRIVER_UNASSIGNED', 'Driver unassigned')}</>}
                        <TimeofSent>{parseTime(message.created_at)}</TimeofSent>
                      </BubbleConsole>
                    </MessageConsole>
                  </>
                )}
              </MessageContentWrapper>

            )}
            {(messagesToShow?.messages?.length || (message?.can_see?.includes('2') && business) || (message?.can_see?.includes('4') && driver)) && (
              <>
                {message.type === 2 && user?.id === message.author_id && (
                  <MessageContentWrapper>
                    <MessageCreatedDate>
                      <span>{parseDate(message.created_at, { outputFormat: 'MMM DD, YYYY' })}</span>
                    </MessageCreatedDate>
                    <MessageCustomer>
                      <BubbleCustomer>
                        <strong>
                          <MyName>
                            {message.author.name} ({order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level)})
                          </MyName>
                        </strong>
                        {message.comment}
                        <TimeofSent>{parseTime(message.created_at)}</TimeofSent>
                      </BubbleCustomer>
                    </MessageCustomer>
                  </MessageContentWrapper>
                )}
                {message.type === 3 && user.id === message.author_id && (
                  <MessageContentWrapper>
                    <MessageCreatedDate>
                      <span>{parseDate(message.created_at, { outputFormat: 'MMM DD, YYYY' })}</span>
                    </MessageCreatedDate>
                    <MessageCustomer>
                      <BubbleCustomer name='image'>
                        <strong>
                          <MyName>
                            {message.author.name} ({order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level)})
                          </MyName>
                        </strong>
                        <ChatImage><img src={message.source} onClick={() => handleModalImage(message.source)} alt='chat-image' width='168px' height='300px' /></ChatImage>
                        {message.comment && (
                          <>
                            {message.comment}
                          </>
                        )}
                        <TimeofSent>{parseTime(message.created_at)}</TimeofSent>
                      </BubbleCustomer>
                    </MessageCustomer>
                  </MessageContentWrapper>

                )}
                {message.type === 2 && user?.id !== message.author_id && (
                  <MessageContentWrapper>
                    <MessageCreatedDate>
                      <span>{parseDate(message.created_at, { outputFormat: 'MMM DD, YYYY' })}</span>
                    </MessageCreatedDate>
                    <MessageBusiness>
                      <BubbleBusines>
                        <strong>
                          <MyName>
                            {message.author.name} ({order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level)})
                          </MyName>
                        </strong>
                        {message.comment}
                        <TimeofSentByAdmin>{parseTime(message.created_at)}</TimeofSentByAdmin>
                      </BubbleBusines>
                    </MessageBusiness>
                  </MessageContentWrapper>
                )}
                {message.type === 3 && user.id !== message.author_id && (
                  <MessageContentWrapper>
                    <MessageCreatedDate>
                      <span>{parseDate(message.created_at, { outputFormat: 'MMM DD, YYYY' })}</span>
                    </MessageCreatedDate>
                    <MessageBusiness>
                      <BubbleBusines name='image'>
                        <strong>
                          <MyName>
                            {message.author.name} ({order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level)})
                          </MyName>
                        </strong>
                        <ChatImage><img src={message.source} onClick={() => handleModalImage(message.source)} alt='chat-image' width='168px' height='300px' /></ChatImage>
                        {message.comment && (
                          <>
                            {message.comment}
                          </>
                        )}
                        <TimeofSent>{parseTime(message.created_at)}</TimeofSent>
                      </BubbleBusines>
                    </MessageBusiness>
                  </MessageContentWrapper>
                )}
              </>
            )}
          </React.Fragment>
        ))}
        {props.afterComponents?.map((AfterComponent, i) => (
          <AfterComponent key={i} {...props} />))}
        {props.afterElements?.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>))}
      </>
    )
  }

  return (
    <MessagesContainer profileMessages={profileMessages}>
      <MessagesLayoutWrapper>
        {!profileMessages && (
          <>
            <MessagesClose onClick={onClose}>
              <MdClose />
            </MessagesClose>
            <MessagesLeftLayout>
              <MessagesTitle>
                <h1>{t('MESSAGES', 'Messages')}</h1>
              </MessagesTitle>
              <CustomerList>
                {
                  order.business && (
                    <HeaderProfile
                      active={business}
                      onClick={() => onMessages({ business: true, driver: false })}
                      isCursor
                    >
                      <Image>
                        <ImageWithFallback
                          src={order.business?.logo || theme.images?.dummies?.businessLogo}
                          fallback={<FaUserAlt />}
                        />
                      </Image>
                      <HeaderOnline>
                        <h1>{order.business?.name}</h1>
                        <span>{t('BUSINESS', 'Business')}</span>
                      </HeaderOnline>
                    </HeaderProfile>
                  )
                }
                {
                  order?.driver && (
                    <HeaderProfile
                      active={driver}
                      onClick={() => onMessages({ business: false, driver: true })}
                      isCursor
                    >
                      <Image>
                        <ImageWithFallback
                          src={order.driver?.photo}
                          fallback={<RiUser2Fill />}
                        />
                      </Image>
                      <HeaderOnline>
                        <h1>{order.driver?.name}</h1>
                        <span>{t('DRIVER', 'Driver')}</span>
                      </HeaderOnline>
                    </HeaderProfile>
                  )
                }
              </CustomerList>
            </MessagesLeftLayout>
          </>
        )}
        <MessagesRightLayout profileMessages={profileMessages}>
          {!profileMessages ? (
            <HeaderProfile>
              <Image>
                {
                  business && (
                    <ImageWithFallback
                      src={order.business?.logo || theme.images?.dummies?.businessLogo}
                      fallback={<FaUserAlt />}
                    />
                  )
                }
                {
                  driver && (
                    <ImageWithFallback
                      src={order.driver?.photo}
                      fallback={<RiUser2Fill />}
                    />
                  )
                }
              </Image>
              {business && (
                <HeaderOnline>
                  <h1>{order.business?.name}</h1>
                  <span>{t('BUSINESS', 'Business')}</span>
                </HeaderOnline>
              )}
              {driver && (
                <HeaderOnline>
                  <h1>{order.driver?.name}</h1>
                  <span>{t('DRIVER', 'Driver')}</span>
                </HeaderOnline>
              )}
            </HeaderProfile>
          ) : (
            <ProfileMessageHeader>
              <OrderData>
                <h2>{t('INVOICE_ORDER_NO', 'Order No.')} {order?.id}</h2>
                <p>
                  {order?.delivery_datetime_utc
                    ? parseDate(order?.delivery_datetime_utc)
                    : parseDate(order?.delivery_datetime, { utc: false })}
                </p>
              </OrderData>
              <MessagesTypes>
                {
                  order.business && (
                    <MessageType
                      active={business}
                      onClick={() => onMessages({ business: true, driver: false })}
                      isCursor
                    >
                      <Image>
                        <ImageWithFallback
                          src={order.business?.logo || theme.images?.dummies?.businessLogo}
                          fallback={<FaUserAlt />}
                        />
                      </Image>
                    </MessageType>
                  )
                }
                {
                  order?.driver && (
                    <MessageType
                      active={driver}
                      onClick={() => onMessages({ business: false, driver: true })}
                      isCursor
                    >
                      <Image>
                        <ImageWithFallback
                          src={order.driver?.photo}
                          fallback={<RiUser2Fill />}
                        />
                      </Image>
                    </MessageType>
                  )
                }
              </MessagesTypes>

            </ProfileMessageHeader>
          )}

          <Chat id='chat' profileMessages={profileMessages}>
            {
              messages?.loading && (
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
              )
            }
            {
              !messages?.loading && order && (
                <MessageContentWrapper>
                  <MessageCreatedDate>
                    <span>{parseDate(order.created_at, { outputFormat: 'MMM DD, YYYY' })}</span>
                  </MessageCreatedDate>
                  <MessageConsole>
                    <BubbleConsole>
                      {t('ORDER_PLACED_FOR', 'Order placed for')} {' '}
                      <strong>{parseDate(order.created_at)}</strong> {' '}
                      {t('VIA', 'Via')}{' '}
                      <strong>
                        {order.app_id ? t(order.app_id.toUpperCase(), order.app_id) : t('OTHER', 'Other')}
                      </strong>{' '}
                      <TimeofSent>{parseTime(order.created_at)}</TimeofSent>
                    </BubbleConsole>
                  </MessageConsole>
                  <MapMessages messages={messagesToShow?.messages?.length ? messagesToShow : messages} />
                </MessageContentWrapper>
              )
            }
          </Chat>
          {(parseInt(order?.status) === 1 ||
            parseInt(order?.status) === 2 ||
            parseInt(order?.status) === 5 ||
            parseInt(order?.status) === 6 ||
            parseInt(order?.status) === 10 ||
            parseInt(order?.status) === 11 ||
            parseInt(order?.status) === 12
          ) && driver
            ? (
              <NotSendMessage>
                <MdcCloseOctagonOutline />
                <p>{t('NOT_SEND_MESSAGES', 'You can\'t send messages because the order has ended')}</p>
              </NotSendMessage>
            )
            : (
              <SendForm>
                <QuickMessageWrapper>
                  {quickMessageList.map((quickMessage, i) => (
                    <Button
                      key={i}
                      color='secundary'
                      onClick={() => handleClickQuickMessage(quickMessage.text)}
                    >
                      {quickMessage.text}
                    </Button>
                  ))}
                </QuickMessageWrapper>
                <Send onSubmit={handleSubmit(onSubmit)} noValidate>
                  <InputWrapper>
                    <Input
                      placeholder={t('TYPE_YOUR_MESSAGE_HERE', 'Type your message here')}
                      onChange={onChangeMessage}
                      name='message'
                      id='message'
                      ref={register({
                        required: !image
                      })}
                      autoComplete='off'
                    />
                    <SendImage htmlFor='chat_image' hidden={image}>
                      <input
                        type='file'
                        name='image'
                        id='chat_image'
                        accept='image/png,image/jpg,image/jpeg'
                        onChange={onChangeImage}
                        ref={imageRef}
                      />
                      <BsCardImage />
                    </SendImage>
                    {image && (
                      <WrapperDeleteImage>
                        <div>
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
                        </div>
                      </WrapperDeleteImage>
                    )}
                  </InputWrapper>
                  <WrapperSendMessageButton>
                    <Button
                      color='primary'
                      type='submit'
                      disabled={sendMessage?.loading || (message === '' && !image) || messages?.loading}
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
                            {t('SEND', 'Send')}
                          </span>)}
                    </Button>
                  </WrapperSendMessageButton>
                </Send>
              </SendForm>
            )}
        </MessagesRightLayout>
      </MessagesLayoutWrapper>
      <Alert
        title={t('ERROR', 'Error')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      <Modal
        onClose={() => setModalImage({ ...modalImage, open: false })}
        open={modalImage.open}
        padding='0'
        hideCloseDefault
        isTransparent
        height='auto'
      >
        <ImageContainer>
          <ModalIcon>
            <MdClose onClick={() => setModalImage({ ...modalImage, open: false })} />
          </ModalIcon>
          <img src={modalImage.src} width='320px' height='180px' loading='lazy' />
        </ImageContainer>
      </Modal>
    </MessagesContainer>
  )
}

export const Messages = (props) => {
  const MessagesProps = {
    ...props,
    UIComponent: MessagesUI
  }
  return <MessagesController {...MessagesProps} />
}
