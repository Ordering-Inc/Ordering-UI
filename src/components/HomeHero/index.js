import React, { useState, useEffect } from 'react'

import {
  HeroContainer,
  ContentWrapper,
  Title,
  Slogan,
  WrapInput,
  InputSpan
} from './styles'

import { Button } from '../../styles/Buttons'

import { Modal } from '../Modal'
import { AddressForm } from '../AddressForm'
import { AddressList } from '../AddressList'

import { useSession, useOrder, useLanguage } from 'ordering-components'

import { Alert } from '../Confirm'
import { useTheme } from 'styled-components'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'

export const HomeHero = (props) => {
  const {
    onFindBusiness
  } = props

  const [{ auth }] = useSession()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const theme = useTheme()

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setAlertState({ open: true, content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select or add an address to search')] })
      return
    }
    setModals({ listOpen: false, formOpen: false })
    onFindBusiness && onFindBusiness()
  }

  const handleAddressInput = () => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  useEffect(() => {
    return () => setModals({ listOpen: false, formOpen: false })
  }, [])

  return (
    <HeroContainer bgimage={theme.images?.general?.homeHero}>
      <ContentWrapper>
        <Title>{t('TITLE_HOME', 'All We need is Food.')}</Title>
        <Slogan>{t('SUBTITLE_HOME', 'Let\'s start to order food now')}</Slogan>
        <WrapInput onClick={handleAddressInput} withIcon>
          <HiOutlineLocationMarker />
          <InputSpan
            name='address-selection'
            aria-label='address selection'
            type='text'
            placeholder={orderState?.options?.address?.address || t('TYPE_AN_ADDRESS', 'Type an address')}
          />
          <div>
            {orderState?.options?.address?.address || t('TYPE_AN_ADDRESS', 'Type an address')}
          </div>
        </WrapInput>
        <Button
          color='primary'
          name='find-business'
          onClick={handleFindBusinesses}
        >
          {t('FIND_BUSINESSES', 'Find businesses')}
        </Button>
      </ContentWrapper>

      <Modal
        title={t('ADDRESS', 'Address')}
        open={modals.formOpen}
        onClose={() => setModals({ ...modals, formOpen: false })}
      >
        <AddressForm
          useValidationFileds
          address={orderState?.options?.address || {}}
          onClose={() => setModals({ ...modals, formOpen: false })}
          onSaveAddress={() => setModals({ ...modals, formOpen: false })}
          onCancel={() => setModals({ ...modals, formOpen: false })}
        />
      </Modal>
      <Modal
        title={t('ADDRESSES', 'Addresses')}
        open={modals.listOpen}
        onClose={() => setModals({ ...modals, listOpen: false })}
        onCancel={() => setModals({ ...modals, listOpen: false })}
        onAccept={() => handleFindBusinesses()}
      >
        <AddressList
          changeOrderAddressWithDefault
        />
      </Modal>

      <Alert
        title={t('SEARCH', 'Search')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </HeroContainer>
  )
}
