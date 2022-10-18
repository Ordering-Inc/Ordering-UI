import React, { useState, useEffect } from 'react'
import { AddressDetails as AddressDetailsController, useOrder, useLanguage, useCustomer } from 'ordering-components'

import {
  AddressContainer,
  Header,
  Text
} from './styles'

import { Modal } from '../../../Modal'
import { Alert } from '../../../Confirm/layouts/pfchangs'
import { AddressList } from '../../../AddressList'

const AddressDetailsUI = (props) => {
  const {
    addressToShow,
    isCartPending,
    isCustomerMode,
    isFromCheckout
  } = props

  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [openModal, setOpenModal] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const [{ user }] = useCustomer()

  useEffect(() => {
    return () => setOpenModal(false)
  }, [])

  return (
    <>
      <AddressContainer>
        <Header>
          <Text>
            <h1>{addressToShow || orderState?.options?.address?.address}</h1>
            {orderState?.options?.type === 1 && !isCartPending &&
              <span onClick={() => setOpenModal(true)}>{t('CHANGE', 'Change')}</span>}
          </Text>
        </Header>
        <Modal
          open={openModal}
          width='70%'
          onClose={() => setOpenModal(false)}
        >
          <AddressList
            isModal
            changeOrderAddressWithDefault
            userId={isNaN(userCustomer?.id) ? null : userCustomer?.id}
            onCancel={() => setOpenModal(false)}
            userCustomerSetup={isCustomerMode && user}
            isFromCheckout={isFromCheckout}
            isCustomerMode={isCustomerMode}
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
      </AddressContainer>
    </>
  )
}

export const AddressDetails = (props) => {
  const addressDetailsProps = {
    ...props,
    UIComponent: AddressDetailsUI
  }
  return (
    <AddressDetailsController {...addressDetailsProps} />
  )
}
