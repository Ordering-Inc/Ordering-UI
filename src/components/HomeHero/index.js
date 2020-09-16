import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
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

  const [isRedirect, setIsRedirect] = useState(false)

  const [curAddress, setCurAddress] = useState(null)

  const closeModal = (type) => {
    if (type === 'form') {
      setModalFormIsOpen(false)
      if (auth) {
        setModalListIsOpen(true)
      }
    } else {
      setModalListIsOpen(false)
    }
  }

  const onBusinessClick = () => {
    auth ? setModalListIsOpen(true) : setModalFormIsOpen(true)
  }

  const handleSelectAddress = (address) => {
    setCurAddress(address)
    switchModalsOpen()
  }

  const handlerRedirectAddress = () => {
    setModalListIsOpen(false)
    setIsRedirect(true)
  }

  const switchModalsOpen = () => {
    setModalFormIsOpen(true)
    setModalListIsOpen(false)
  }

  return (
    <HeroContainer>
      <ContentWrapper>
        <Title>All We need is Food</Title>
        <Slogan>Let's start to order food now</Slogan>
        <WrapInput onClick={() => onBusinessClick()} withIcon={locationIcon}>
          <Input type='text' disabled placeholder={user?.address || 'Address or Zip Code'} />
        </WrapInput>
        <Button
          color='primary'
          onClick={() => onBusinessClick()}
        >
          Find Business
        </Button>
      </ContentWrapper>

      {modalFormIsOpen && (
        <Modal
          zx='1002'
          title='Address'
          open={modalFormIsOpen}
          onClose={() => closeModal('form')}
        >
          <AddressForm
            ordering={props.ordering}
            useValidationFileds
            address={curAddress}
            onCancel={() => closeModal('form')}
            onSaveAddressForm={() => closeModal('form')}
          />
        </Modal>)}

      {modalListIsOpen && (
        <Modal
          title='Address'
          open={modalListIsOpen}
          onClose={() => closeModal()}
          onCancel={() => closeModal()}
          onAccept={() => handlerRedirectAddress()}
        >
          <AddressList
            ordering={props.ordering}
            changeOrderAddressWithDefault
            handleClickAddress={handleSelectAddress}
            onAddAddress={() => switchModalsOpen()}
          />
        </Modal>)}
      {isRedirect && <Redirect to='/search' />}
    </HeroContainer>
  )
}
