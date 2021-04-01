import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useSession, useOrder } from 'ordering-components'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'
import { Modal } from '../Modal'
import { AddressForm } from '../AddressForm'
import { AddressList } from '../AddressList'

import {
  HeroContainer,
  ContentWrapper,
  Title,
  WrapInput
} from './styles'

export const HomeHero = (props) => {
  const {
    onFindBusiness
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [orderState] = useOrder()
  const [{ auth }] = useSession()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const userCustomer = parseInt(window.localStorage.getItem('user-customer'))

  const handleAddressInput = () => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }
  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setModals({ ...modals, formOpen: true })
      return
    }
    setModals({ listOpen: false, formOpen: false })
    onFindBusiness && onFindBusiness()
  }

  return (
    <HeroContainer bgimage={theme.images?.general?.homeHero}>
      <ContentWrapper>
        <Title>{t('YOUR_FAVORITE_RESTURANTS', 'Your favorite restaurants, delivered')}</Title>
        <WrapInput onClick={handleAddressInput}>
          <HiOutlineLocationMarker />
          <div>
            {orderState?.options?.address?.address || t('TYPE_AN_ADDRESS', 'Type an address')}
          </div>
        </WrapInput>
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
        width='70%'
        onClose={() => setModals({ ...modals, listOpen: false })}
      >
        <AddressList
          isModal
          changeOrderAddressWithDefault
          userId={isNaN(userCustomer) ? null : userCustomer}
          onCancel={() => setModals({ ...modals, listOpen: false })}
          onAccept={() => handleFindBusinesses()}
        />
      </Modal>
    </HeroContainer>
  )
}
