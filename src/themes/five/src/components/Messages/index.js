import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from 'styled-components'
import {
  Messages as MessagesController,
  useUtils,
  useLanguage,
  useEvent
} from 'ordering-components'
import { useForm } from 'react-hook-form'
import IosSend from '@meronex/icons/ios/IosSend'
import Skeleton from 'react-loading-skeleton'
import {
  MessagesContainer,
  HeaderProfile,
  Image,
  Chat,
  MessageCustomer,
  MessageBusiness,
  SkeletonBubbleCustomer,
  SkeletonBubbleBusiness,
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
import { MapMessages } from './MapMessages'

const filterSpecialStatus = ['prepared_in', 'delivered_in', 'delivery_datetime']

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
  const [events] = useEvent()
  const [{ parseDate, parseTime }] = useUtils()
  const buttonRef = useRef(null)
  const [modalImage, setModalImage] = useState({ open: false, src: '' })
  const imageRef = useRef(null)
  const previousStatus = [1, 2, 5, 6, 10, 11, 12, 16, 17]
  const chatDisabled = previousStatus.includes(order?.status)

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

  const goToBusiness = (slug) => {
    events.emit('go_to_page', { page: 'business', params: { business_slug: slug } })
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
                      <Image onClick={() => goToBusiness(order?.business?.slug)}>
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
                  <MapMessages
                    messages={messagesToShow?.messages?.length ? messagesToShow : messages}
                    messagesToShow={messagesToShow}
                    order={order}
                    filterSpecialStatus={filterSpecialStatus}
                    handleModalImage={handleModalImage}
                    getLevel={getLevel}
                    business={business}
                    driver={driver}
                    getLogisticTagStatus={getLogisticTagStatus}
                    getStatus={getStatus}
                  />
                </MessageContentWrapper>
              )
            }
          </Chat>
          {chatDisabled
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
