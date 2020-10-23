import React, { useState, useEffect } from 'react'
import { DropDownCircleImage } from '../Dropdown/style'
import {
  Messages as MessagesController,
  useLanguage,
  useSession
} from 'ordering-components'
import { useForm } from 'react-hook-form'
import {
  MessagesContainer,
  HeaderProfile,
  Image,
  Chat,
  BubbleCustomer,
  MessageCustomer,
  MessageBusiness,
  BubbleBusines,
  SendForm,
  Send,
  MessageConsole,
  BubbleConsole,
  WrapperSendMessageButton,
  HeaderOnline
} from './styles'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { BsCardImage, IoIosSend, RiUser2Fill, FaUserAlt } from 'react-icons/all'
import moment from 'moment'
import { Alert } from '../Confirm'

export const MessagesUI = (props) => {
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
    driver
  } = props

  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [{ user }] = useSession()

  console.log(image)

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
        content: sendMessage.error || [t('ERROR')]
      })
    }
    clearInputs()
  }, [sendMessage])

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
    }
    reader.onerror = error => {
      console.log(error)
    }
  }

  const getStatus = (status) => {
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
      default:
        return status
    }
  }

  const clearInputs = () => {
    const input = document.getElementById('message')
    if (input) {
      input.value = ''
    }
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
  return (
    <MessagesContainer>
      <HeaderProfile>
        <Image>
          {
            business && (
              <DropDownCircleImage
                src={order.business?.logo}
                fallback={<FaUserAlt />}
              />
            )
          }
          {
            driver && (
              <DropDownCircleImage
                src={order.driver?.photo}
                fallback={<RiUser2Fill />}
              />
            )
          }
        </Image>
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
      </HeaderProfile>
      {!messages.loading ? (
        <Chat>
          <MessageConsole>
            <BubbleConsole>
              {t('ORDER_PLACED_FOR', 'Order placed for')} {' '}
              <strong>{moment.utc(order.created_at).format('YYYY/MM/DD hh:mm A')}</strong> {' '}
              {t('VIA', 'via')} <strong>{order.app_id}</strong>{' '}
              <p>{moment.utc(order.created_at).fromNow()}</p>
            </BubbleConsole>
          </MessageConsole>
          {messages?.messages.map((message) => (
            <MessageConsole key={message.id}>
              {message.type === 1 && (
                message.change?.attribute !== 'driver_id' ? (
                  <BubbleConsole>
                    {t('ORDER', 'Order')}
                    <strong>{message.change.attribute} </strong>
                    {t('CHANGED_FROM', 'Changed from')} {' '}
                    {message.change.old !== null && (
                      <>
                        <strong>{t(getStatus(parseInt(message.change.old, 10)))} </strong>
                      </>
                    )}
                    <> {t('TO', 'to')} {t(getStatus(parseInt(message.change.new, 10)))} </>
                    <p>
                      {
                        moment.utc(message.created_at).fromNow()
                      }
                    </p>
                  </BubbleConsole>
                ) : (
                  <BubbleConsole>
                    <strong>{message.driver?.name} {' '} {message.driver?.lastname && message.driver.lastname}</strong>
                    {t('WAS_ASSIGNED_AS_DRIVER', 'was assigned as driver')}
                    {message.comment && (<><br /> {message.comment.length}</>)}
                    <p>{moment.utc(message.created_at).fromNow()}</p>
                  </BubbleConsole>
                )
              )}
            </MessageConsole>
          ))}
          {messages?.messages.map((message) => (
            <React.Fragment key={message.id}>
              {message.type === 2 && user.id === message.author_id && (
                <MessageCustomer>
                  <BubbleCustomer>
                    <strong>{message.author.name}</strong><br />
                    {message.comment}
                    <p>{moment.utc(message.created_at).fromNow()}</p>
                  </BubbleCustomer>
                </MessageCustomer>
              )}
              {message.type === 3 && user.id === message.author_id && (
                <MessageCustomer>
                  <BubbleCustomer name='image'>
                    <strong>{message.author.name}</strong><br />
                    <img src={message.source} width='200px' height='150px' />
                    {message.comment && (
                      <>
                        {message.comment}
                        <p>{moment.utc(message.created_at).fromNow()}</p>
                      </>
                    )}
                  </BubbleCustomer>
                </MessageCustomer>
              )}
              {message.type === 2 && user.id !== message.author_id && (
                <MessageBusiness>
                  <BubbleBusines>
                    <strong>{message.author.name}</strong><br />
                    {message.comment}
                    <p>{moment.utc(message.created_at).fromNow()}</p>
                  </BubbleBusines>
                </MessageBusiness>
              )}
              {message.type === 3 && user.id !== message.author_id && (
                <MessageBusiness>
                  <BubbleBusines name='image'>
                    <strong>{message.author.name}</strong><br />
                    <img src={message.source} width='200px' height='150px' />
                    {message.comment && (
                      <>
                        {message.comment}
                        <p>{moment.utc(message.created_at).fromNow()}</p>
                      </>
                    )}
                  </BubbleBusines>
                </MessageBusiness>
              )}
            </React.Fragment>
          ))}
        </Chat>
      ) : (
        <span>{t('LOADING_MESSAGES', 'Loading Messages...')}</span>
      )}
      <SendForm>
        <Send onSubmit={handleSubmit(onSubmit)} noValidate>
          <Input
            placeholder={t('WRITE_A_MESSAGE', 'Write a message')}
            onChange={onChangeMessage}
            name='message'
            id='message'
            ref={register({
              required: !image
            })}
          />
          {!image && (
            <label htmlFor='chat_image'>
              <input
                type='file'
                name='image'
                id='chat_image'
                accept='image/png,image/jpg,image/jpeg'
                onChange={onChangeImage}
              />
              <BsCardImage />
            </label>
          )}
          {image && (
            <Button
              circle
              onClick={removeImage}
              name='delete'
              disabled={sendMessage.loading}
            >
              {t('X', 'X')}
            </Button>
          )}
          <WrapperSendMessageButton>
            <Button
              color='primary'
              type='submit'
              disabled={errors.message || sendMessage.loading || (message === '' && !image)}
            >
              <IoIosSend />
              {sendMessage.loading ? (
                <>
                  {t('SENDING_MESSAGE', 'Sending...')}
                </>
              )
                : (
                  <>
                    {t('SEND', 'send')}
                  </>)}
            </Button>
          </WrapperSendMessageButton>
        </Send>
      </SendForm>
      <Alert
        title={t('ERROR', 'error')}
        content={alertState.content}
        acceptText={t('ACCEPT')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
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
