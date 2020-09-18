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

import { useSession, useOrder, useLanguage } from 'ordering-components'

import locationIcon from '../../../template/assets/input-location-icon.svg'

export const HomeHero = (props) => {
  const {
    onFindBusiness
  } = props

  const [{ user, auth }] = useSession()
  const [orderState] = useOrder()
  const [, t] = useLanguage()

  const [modalFormIsOpen, setModalFormIsOpen] = useState(false)
  const [modalListIsOpen, setModalListIsOpen] = useState(false)

  const [curAddress, setCurAddress] = useState(null)

  const onBusinessClick = ({ from }) => {
    if (from === 'button' && auth && user?.address) {
      onFindBusiness()
    } else if (from === 'input' && auth) {
      setModalListIsOpen(true)
    } else {
      setModalFormIsOpen(true)
    }
  }

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

  const handleEditAddress = (address) => {
    setCurAddress(address)
    switchModalsState()
  }

  const handlerRedirectAddress = () => {
    setModalListIsOpen(false)
    if (orderState?.options?.address?.location) {
      onFindBusiness()
    }
  }

  const switchModalsState = () => {
    setModalFormIsOpen(true)
    setModalListIsOpen(false)
  }

  const handlerSaveAddressForm = ({ type }) => {
    closeModal(type)
    if (!auth && orderState?.options?.address?.location) {
      onFindBusiness()
    }
  }

  return (
    <HeroContainer>
      <ContentWrapper>
        <Title>All We need is Food</Title>
        <Slogan>Let's start to order food now</Slogan>
        <WrapInput onClick={() => onBusinessClick({ from: 'input' })} withIcon={locationIcon}>
          <Input type='text' disabled placeholder={user?.address || 'Address or Zip Code'} />
        </WrapInput>
        <Button
          color='primary'
          onClick={() => onBusinessClick({ from: 'button' })}
        >
          Find Business
        </Button>
      </ContentWrapper>

      {modalFormIsOpen && (
        <Modal
          zx='1002'
          title={t('ADDRESS')}
          open={modalFormIsOpen}
          closeOnBackdrop={false}
          onClose={() => closeModal('form')}
        >
          <AddressForm
            ordering={props.ordering}
            useValidationFileds
            address={curAddress}
            onCancel={() => closeModal('form')}
            onSaveAddressForm={() => handlerSaveAddressForm({ type: 'form' })}
          />
        </Modal>)}

      {modalListIsOpen && (
        <Modal
          title={t('ADDRESS')}
          open={modalListIsOpen}
          closeOnBackdrop={false}
          onClose={() => closeModal()}
          onCancel={() => closeModal()}
          onAccept={() => handlerRedirectAddress()}
        >
          <AddressList
            ordering={props.ordering}
            changeOrderAddressWithDefault
            handleClickAddress={handleEditAddress}
            onAddAddress={() => switchModalsState()}
          />
        </Modal>)}
    </HeroContainer>
  )
}
