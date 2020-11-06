import React, { useState, useEffect } from 'react'
import TiPencil from '@meronex/icons/ti/TiPencil'
import { AddressDetails as AddressDetailsController, useOrder, useLanguage, useSession } from 'ordering-components'

import {
  AddressContainer,
  Header,
  Map,
  Text,
  WrappMap
} from './styles'

import { Modal } from '../Modal'
import { Alert } from '../Confirm'
import { AddressForm } from '../AddressForm'
import { AddressList } from '../AddressList'

const AddressDetailsUI = (props) => {
  const {
    userAddress,
    orderType,
    googleMapsUrl
  } = props

  const [{ auth }] = useSession()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [showMap, setShowMap] = useState(true)

  const handleClickAddress = (e) => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setAlertState({ open: true, content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select or add an address to search')] })
      return
    }
    setModals({ listOpen: false, formOpen: false })
    // onFindBusiness && onFindBusiness()
  }

  useEffect(() => {
    return () => setModals({ listOpen: false, formOpen: false })
  }, [])

  return (
    <AddressContainer>
      <Header>
        <Text>
          <h4>{userAddress}</h4>
          {orderType === 1 &&
            <TiPencil
              onClick={() => handleClickAddress()}
            />}
          <span onClick={() => setShowMap(!showMap)}>{showMap ? 'Hide map' : 'View map'}</span>
        </Text>
      </Header>
      {showMap && (
        <WrappMap>
          <Map>
            <img src={googleMapsUrl} alt='google-maps-location' />
          </Map>
        </WrappMap>
      )}

      <Modal
        title={t('ADDRESS')}
        open={modals.formOpen}
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
    </AddressContainer>
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
