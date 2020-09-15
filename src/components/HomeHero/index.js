import React, { useState } from 'react'
import {
  HeroContainer,
  ContentWrapper,
  Title,
  Slogan,
  WrapInput
} from './styles'

import { Button } from '../../styles/Buttons'
import { Input } from '../../styles/Inputs'

import { Modal } from '../Modal'
import { AddressForm } from '../AddressForm'
import { AddressList } from '../AddressList'

import { useSession } from 'ordering-components'

import locationIcon from '../../../template/assets/input-location-icon.svg'

export const HomeHero = (props) => {
  const [{ user, auth }] = useSession()

  const [modalFormIsOpen, setModalFormIsOpen] = useState(false)
  const [modalListIsOpen, setModalListIsOpen] = useState(false)

  const closeModal = (modal) => {
    if (modal === 'form') {
      setModalFormIsOpen(false)
    } else {
      setModalListIsOpen(false)
    }
  }

  const onBusinessClick = () => {
    if (!user?.address) {
      // setModalFormIsOpen(true)
      setModalListIsOpen(true)
    } else {
      /**
       * Put here function to redirect business
       */
    }
  }

  return (
    <HeroContainer>
      <ContentWrapper>
        <Title>All We need is Food</Title>
        <Slogan>Let's start to order food now</Slogan>
        <WrapInput withIcon={locationIcon}>
          <Input onClick={() => onBusinessClick()} placeholder={user?.address || 'Address or Zip Code'} />
        </WrapInput>
        <Button
          color='primary'
          onClick={() => onBusinessClick()}
        >
          Find Business
        </Button>
      </ContentWrapper>
      {((user?.address && modalFormIsOpen) || modalFormIsOpen) && (
        <Modal
          zx='1002'
          title='Address'
          open={modalFormIsOpen}
          onClose={() => closeModal('form')}
        >
          <AddressForm
            userId={1}
            useValidationFileds
            accessToken={auth || 'any text'}
            ordering={props.ordering}
            onCancel={() => closeModal('form')}
            onSaveAddressForm={() => closeModal('form')}
          />
        </Modal>)}

      {!user?.address && modalListIsOpen && (
        <Modal
          title='Address'
          open={modalListIsOpen}
          onClose={() => closeModal()}
          onCancel={() => closeModal()}
          onAccept={() => closeModal()}
        >
          <AddressList
            userId={1}
            accessToken={auth || 'any text'}
            ordering={props.ordering}
            changeOrderAddressWithDefault
            onAddAddress={() => setModalFormIsOpen(true)}
          />
        </Modal>)}
    </HeroContainer>
  )
}
