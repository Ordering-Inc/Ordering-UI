import React, { useState, useEffect } from 'react'

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
import homeBusiness from '../../../template/assets/homeBusiness.png'
import { Alert } from '../Confirm'

export const HomeHero = (props) => {
  const {
    onFindBusiness,
    FontHomeTheme
  } = props

  const [{ auth }] = useSession()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const fontName = 'Lobster'

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setAlertState({ open: true, content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select an address to search')] })
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
    <HeroContainer bgimage={homeBusiness}>
      <ContentWrapper>
        <FontHomeTheme fontName={fontName}>
          <Title>{t('TITLE_HOME', 'All We need is Food.')}</Title>
        </FontHomeTheme>
        <Slogan>{t('SUBTITLE_HOME', 'Let\'s start to order food now')}</Slogan>
        <WrapInput onClick={handleAddressInput} withIcon={locationIcon}>
          <Input type='text' disabled placeholder={orderState?.options?.address?.address || t('TYPE_ADDRESS', 'Type address')} />
        </WrapInput>
        <Button
          color='primary'
          onClick={handleFindBusinesses}
        >
          {t('FIND_BUSINESSES', 'Find businesses')}
        </Button>
      </ContentWrapper>

      <Modal
        title={t('ADDRESS')}
        open={modals.formOpen}
        closeOnBackdrop={false}
        onClose={() => setModals({ ...modals, formOpen: false })}
      >
        <AddressForm
          useValidationFileds
          address={orderState?.options?.address || {}}
          onClose={() => setModals({ ...modals, formOpen: false })}
          onSaveAddress={() => setModals({ ...modals, formOpen: false })}
        />
      </Modal>
      <Modal
        title={t('ADDRESSES')}
        open={modals.listOpen}
        closeOnBackdrop={false}
        onClose={() => setModals({ ...modals, listOpen: false })}
        onCancel={() => setModals({ ...modals, listOpen: false })}
        onAccept={() => handleFindBusinesses()}
      >
        <AddressList
          changeOrderAddressWithDefault
        />
      </Modal>

      <Alert
        title={t('SEARCH')}
        content={alertState.content}
        acceptText={t('ACCEPT')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </HeroContainer>
  )
}
