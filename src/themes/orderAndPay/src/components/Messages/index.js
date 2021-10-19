import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from 'styled-components'
import {
  Messages as MessagesController,
  useUtils,
  useLanguage,
  useSession
} from 'ordering-components'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import {
  MessagesContainer,
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
  ModalIconHeader
} from './styles'
import { Image as ImageWithFallback } from '../../../../../components/Image'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import BsCardImage from '@meronex/icons/bs/BsCardImage'
import RiUser2Fill from '@meronex/icons/ri/RiUser2Fill'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import MdClose from '@meronex/icons/md/MdClose'
import BsArrowLeft from '@meronex/icons/bs/BsArrowLeft'
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
    onClose
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [{ user }] = useSession()
  const [{ parseDate, getTimeAgo, optimizeImage }] = useUtils()
  const buttonRef = useRef(null)
  const [modalImage, setModalImage] = useState({ open: false, src: '' })
  const imageRef = useRef(null)

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
              <MessageConsole key={message.id}>
                {message.change?.attribute !== 'driver_id' ? (
                  <BubbleConsole>
                    {t('ORDER', 'Order')} {' '}
                    <strong>{t(message.change.attribute.toUpperCase(), message.change.attribute.replace('_', ' '))}</strong> {}
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
                    <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                  </BubbleConsole>
                ) : (
                  <BubbleConsole>
                    {message.change.new ? (
                      <>
                        <strong>{message.driver?.name} {' '} {message.driver?.lastname && message.driver.lastname} </strong>
                        {t('WAS_ASSIGNED_AS_DRIVER', 'Was assigned as driver')}
                        {message.comment && (<><br /> {message.comment.length}</>)}
                      </>
                    ) : <>{t('DRIVER_UNASSIGNED', 'Driver unassigned')}</>}
                    <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                  </BubbleConsole>
                )}
              </MessageConsole>
            )}
            {(messagesToShow?.messages?.length || (message?.can_see?.includes('2') && business) || (message?.can_see?.includes('4') && driver)) && (
              <>
                {message.type === 2 && user?.id === message.author_id && (
                  <MessageCustomer>
                    <BubbleCustomer>
                      {message.comment}
                      <TimeofSent white>{getTimeAgo(message.created_at)}</TimeofSent>
                    </BubbleCustomer>
                  </MessageCustomer>
                )}
                {message.type === 3 && user.id === message.author_id && (
                  <MessageCustomer>
                    <BubbleCustomer name='image'>
                      <ChatImage><img src={optimizeImage(message.source, 'h_300,c_limit')} onClick={() => handleModalImage(message.source)} alt='chat-image' width='168px' height='300px' /></ChatImage>
                      {message.comment && (
                        <>
                          {message.comment}
                        </>
                      )}
                      <TimeofSent white>{getTimeAgo(message.created_at)}</TimeofSent>
                    </BubbleCustomer>
                  </MessageCustomer>
                )}
                {message.type === 2 && user?.id !== message.author_id && (
                  <MessageBusiness>
                    <BubbleBusines>
                      <strong>
                        <MyName>
                          {message.author.name} ({order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level)})
                        </MyName>
                      </strong>
                      {message.comment}
                      <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                    </BubbleBusines>
                  </MessageBusiness>
                )}
                {message.type === 3 && user.id !== message.author_id && (
                  <MessageBusiness>
                    <BubbleBusines name='image'>
                      <strong>
                        <MyName>
                          {message.author.name} ({order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level)})
                        </MyName>
                      </strong>
                      <ChatImage><img src={optimizeImage(message.source, 'h_300,c_limit')} onClick={() => handleModalImage(message.source)} alt='chat-image' width='168px' height='300px' /></ChatImage>
                      {message.comment && (
                        <>
                          {message.comment}
                        </>
                      )}
                      <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                    </BubbleBusines>
                  </MessageBusiness>
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
    <div>
      <ModalIconHeader>
        <BsArrowLeft size={20} onClick={onClose} color={theme.colors.arrowColor} />
        {
          business && (
            <ImageWithFallback
              src={optimizeImage(order.business?.logo || theme.images?.dummies?.businessLogo, 'h_300,c_limit')}
              fallback={<FaUserAlt className='fallback' />}
            />
          )
        }
        {
          driver && (
            <ImageWithFallback
              src={optimizeImage(order.driver?.photo, 'h_300,c_limit')}
              fallback={<RiUser2Fill className='fallback' />}
            />
          )
        }
        {business && (
          <HeaderOnline>
            <h1>{order.business?.name}</h1>
            <span>{t('ONLINE', 'Online')}</span>
          </HeaderOnline>
        )}
        {driver && (
          <HeaderOnline>
            <h1>{order.driver?.name}</h1>
            <span>{t('ONLINE', 'Online')}</span>
          </HeaderOnline>
        )}
      </ModalIconHeader>
      <MessagesContainer>
        <Chat id='chat'>
          {messages?.loading && (
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
          )}
          {
            !messages?.loading && order && (
              <>
                <MessageConsole>
                  <BubbleConsole>
                    {t('ORDER_PLACED_FOR', 'Order placed for')} {' '}
                    <strong>{parseDate(order.created_at)}</strong> {' '}
                    {t('VIA', 'Via')}{' '}
                    <strong>
                      {order.app_id ? t(order.app_id.toUpperCase(), order.app_id) : t('OTHER', 'Other')}
                    </strong>{' '}
                    <TimeofSent>{getTimeAgo(order.created_at)}</TimeofSent>
                  </BubbleConsole>
                </MessageConsole>
                <MapMessages messages={messagesToShow?.messages?.length ? messagesToShow : messages} />
              </>
            )
          }
        </Chat>
        <SendForm>
          <Send onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
              placeholder={t('TYPE_YOUR_MESSAGE_HERE', 'Type your message here')}
              onChange={onChangeMessage}
              name='message'
              id='message'
              ref={register({
                required: !image
              })}
              style={{ borderColor: '#F8F9FA', background: '#F8F9FA', fontSize: '12px', color: theme.colors.darkTextColor }}
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
            <WrapperSendMessageButton>
              <Button
                color='primary'
                type='submit'
                disabled={sendMessage?.loading || (message === '' && !image) || messages?.loading}
                ref={buttonRef}
              >
                <img src={theme.images?.general?.arrowSend} />
              </Button>
            </WrapperSendMessageButton>
          </Send>
        </SendForm>
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
    </div>
  )
}

export const Messages = (props) => {
  const MessagesProps = {
    ...props,
    UIComponent: MessagesUI
  }
  return <MessagesController {...MessagesProps} />
}
