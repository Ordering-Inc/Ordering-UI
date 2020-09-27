import React, { useState } from 'react'
import { Messages as MessagesController, ExamineClick } from 'ordering-components'
import { Modal } from '../Modal'
import { useForm } from 'react-hook-form'
import {
  MessagesContainer,
  HeaderProfile,
  Image,
  Chat,
  BubbleCustomer,
  BubbleBusines,
  MessageBusiness,
  MessageCustomer,
  Send
} from './styles'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { BsCardImage, FiSend } from 'react-icons/all'

export const MessagesUI = (props) => {
  const {
    open,
    setOpen,
    order,
    messages,
    canRead,
    handleSend,
    image,
    sendMessage,
    setImage,
    setMessage
  } = props

  const { handleSubmit, register, errors } = useForm()
  const onChangeMessage = e => {
    setMessage(e.target.value)
  }

  const removeImage = e => {
    const input = document.getElementById('chat_image')
    input.value = ''
    setImage(null)
  }
  const onChangeImage = e => {
    console.log(e.target.files)
    const files = Array.from(e.target.files)
    if (files.length > 0) {
      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => {
        const img = new Image()
        img.onload = () => {
          setImage(reader.result)
        }
        img.src = reader.result
      }
      reader.onerror = error => {
        console.log(error)
      }
      setImage(files[0])
    }
  }

  const getRole = level => {
    switch (level) {
      case 0:
        return 'admin'
      case 2:
        return 'business'
      case 4:
        return 'driver'
      default:
        return 'Customer'
    }
  }

  const getStatus = status => {
    switch (status) {
      case 0:
        return 'Pending'
      case 1:
        return 'Delivery Completed'
      case 7:
        return 'Accepted by Business'
      case 11:
        return 'Delivery Completed by Driver'
      default:
        return ''
    }
  }

  const onSubmit = async () => {
    handleSend()
  }

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <MessagesContainer>
        <HeaderProfile>
          <Image>
            <img src={order.business?.logo} />
          </Image>
          <div>
            <p>{order.business?.name}</p>
            <p>Online</p>
          </div>
        </HeaderProfile>
        {!messages.loading ? (
          <Chat>
            <BubbleBusines>
                Order placed for {order.created_at} via {order.app_id}
            </BubbleBusines>
            {messages?.messages.map((message) => (
              <MessageBusiness key={message.id}>
                {message.type === 1 &&
                (
                  <BubbleBusines>
                    Order <strong>{message.change.attribute}</strong> {message.change.attribute}
                    {message.change.old && (
                      <>
                        from <strong>{getStatus(message.change.old)}</strong>
                      </>
                    )}
                    <>
                      to {getStatus(message.change.new)}
                    </>
                  </BubbleBusines>
                )}
              </MessageBusiness>
            ))}
            {messages?.messages.map(message => (
              <MessageCustomer key={message.id}>
                {message.type === 2 && (
                  <BubbleCustomer>
                    <strong>{message.author.name}</strong> {getRole(message.author.level)} <br />
                    {message.comment}
                  </BubbleCustomer>
                )}
                {message.type === 3 && (
                  <BubbleCustomer>
                    <strong>{message.author.name}</strong> {getRole(message.author.level)}  <br />
                    <img src={message.source} />
                    {message.comment}
                  </BubbleCustomer>
                )}
              </MessageCustomer>
            ))}
          </Chat>
        ) : (
          <span>Loading Messages...</span>
        )}
        <Send onSubmit={handleSubmit(onSubmit)} noValidate>
          <Input
            placeholder='Write a message' onChange={onChangeMessage} name='message' ref={register({
              required: 'Write something'
            })}
          />
          <span>
            <ExamineClick onFiles={onChangeImage} accept='image/png,image/jpg,image/jpeg'>
              <BsCardImage />
            </ExamineClick>
          </span>
          {
            image && <Button circle onClick={removeImage}>X</Button>
          }
          <Button color={errors.message?.message ? 'secondary' : 'primary'} type='submit' disabled={errors.message?.message}>
            <FiSend />
            Send
          </Button>
          {
            sendMessage.loading && <span>Sending Message...</span>
          }
          {
            (sendMessage.error) &&
              <>
                <br />
                <span style={{ color: 'red' }}>{sendMessage.error}</span>
              </>
          }
        </Send>
      </MessagesContainer>
    </Modal>
  )
}

export const Messages = (props) => {
  const MessagesProps = {
    ...props,
    UIComponent: MessagesUI
  }
  return <MessagesController {...MessagesProps} />
}
