import React, { useState } from 'react'
import { Modal } from '../Modal'
import { MessagesContainer, HeaderProfile, Image, Chat, BubbleCustomer, BubbleBusines, MessageBusiness, MessageCustomer, Send } from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { BsCardImage, FiSend } from 'react-icons/all'

export const Messages = () => {
  const [modalOpen, setModalOpen] = useState(true)

  return (
    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
      <MessagesContainer>
        <HeaderProfile>
          <Image>
            <img src='https://res.cloudinary.com/ordering2/image/upload/q_auto,c_pad,b_white,w_512,h_512/v1562277711/bk6kvzrnfkvqgav9qi7j.png' />
          </Image>
          <div>
            <p>McBonalds</p>
            <p>Online</p>
          </div>
        </HeaderProfile>
        <Chat>
          <MessageBusiness>
            <BubbleBusines>
                Order placed for 2019/07/12 92.20 AM via App
            </BubbleBusines>
          </MessageBusiness>
          <MessageCustomer>
            <BubbleCustomer>
              Thanks for that!
            </BubbleCustomer>
          </MessageCustomer>
        </Chat>
        <Send>
          <Input placeholder='Write a message' />
          <span>
            <BsCardImage />
          </span>
          <Button color='primary'> <span><FiSend /></span> Send</Button>
        </Send>
      </MessagesContainer>
    </Modal>
  )
}

/* export const Messages = (props) => {

} */
