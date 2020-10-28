import React from 'react'
import { useLanguage } from 'ordering-components'

import { AddressList } from '../AddressList'
import { AddressForm } from '../AddressForm'
import { Container, Title } from './styles'

export const AddressContent = (props) => {
  const {
    auth,
    addressState
  } = props

  const [, t] = useLanguage()

  return (
    <Container>
      {auth && (
        <>
          <Title>{t('ADDRESSES', 'Addresses')}</Title>
          <AddressList
            popover
            changeOrderAddressWithDefault
            onClosePopover={props.onClose}
          />
        </>)}
      {!auth && (
        <>
          <Title>{t('ADDRESS', 'Address')}</Title>
          <AddressForm
            useValidationFileds
            address={addressState || {}}
            onClose={() => props.onClose && props.onClose()}
            onCancel={() => props.onClose && props.onClose()}
            onSaveAddress={() => props.onClose && props.onClose()}
          />
        </>)}
    </Container>
  )
}
