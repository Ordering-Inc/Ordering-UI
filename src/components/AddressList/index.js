import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import TiPencil from '@meronex/icons/ti/TiPencil'
import VscTrash from '@meronex/icons/vsc/VscTrash'
import IosRadioButtonOn from '@meronex/icons/ios/IosRadioButtonOn'
import IosRadioButtonOff from '@meronex/icons/ios/IosRadioButtonOff'

import {
  AddressList as AddressListController,
  useLanguage,
  useOrder
} from 'ordering-components'

import {
  AddressListContainer,
  AddressListUl,
  AddressItem,
  AddressItemActions,
  WrappNotAddresses,
  FormActions
} from './styles'

import { NotFoundSource } from '../NotFoundSource'
import { Button } from '../../styles/Buttons'
import { Modal } from '../Modal'
import { AddressForm } from '../AddressForm'
import { Confirm } from '../Confirm'
import { useTheme } from 'styled-components'
import { scrollTo } from '../../utils'

const AddressListUI = (props) => {
  const {
    actionStatus,
    addressList,
    handleDelete,
    setAddressList,
    handleSetDefault,
    popover,
    isProductForm,
    onCancel,
    onAccept
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()

  const [curAddress, setCurAddress] = useState(false)
  const [addressOpen, setAddressOpen] = useState(false)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const theme = useTheme()

  const uniqueAddressesList = (addressList.addresses && addressList.addresses.filter(
    (address, i, self) =>
      i === self.findIndex(obj => (
        address.address === obj.address &&
        address.address_notes === obj.address_notes &&
        address.zipcode === obj.zipcode &&
        address.internal_number === obj.internal_number
      )))) || []

  const openAddress = (address) => {
    setCurAddress(address)
    setAddressOpen(true)
    const container = window.document.getElementsByClassName('form_edit')[0]
    container && scrollTo(container, 0, 500)
  }

  const handleSaveAddress = (address) => {
    let found = false
    const addresses = addressList.addresses.map(_address => {
      if (_address?.id === address?.id) {
        Object.assign(_address, address)
        found = true
      } else if (address.default) {
        _address.default = false
      }
      return _address
    })
    if (!found) {
      addresses.push(address)
    }
    setAddressList({
      ...addressList,
      addresses
    })
    setAddressOpen(false)
  }

  const handleSetAddress = (address) => {
    if (address.id === orderState?.options?.address_id) return
    setAddressOpen(false)
    handleSetDefault(address)
  }

  const handleDeleteClick = (address) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ADDRESS', 'Are you sure that you want to delete the address?'),
      handleOnAccept: () => {
        handleDelete(address)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const checkAddress = (address) => {
    if (!orderState?.options?.address) return true

    const props = ['address', 'address_notes', 'zipcode', 'location', 'internal_number']
    const values = []
    props.forEach(prop => {
      if (address[prop]) {
        if (prop === 'location') {
          values.push(address[prop].lat === orderState?.options?.address[prop]?.lat &&
            address[prop].lng === orderState?.options?.address[prop]?.lng)
        } else {
          values.push(address[prop] === orderState?.options?.address[prop])
        }
      } else {
        values.push(orderState?.options?.address[prop] === null || orderState?.options?.address[prop] === '')
      }
    })
    return values.every(value => value)
  }

  /**
   * Close modals and alerts
   */
  useEffect(() => {
    return () => {
      setConfirm({ ...confirm, open: false })
      setAddressOpen(false)
    }
  }, [])

  return (
    <AddressListContainer id='address_control' isLoading={actionStatus?.loading || orderState?.loading}>
      {
        (!popover || !addressOpen) && (
          <Button
            className='add'
            color='primary'
            onClick={() => openAddress({})}
            disabled={orderState?.loading || actionStatus.loading}
          >
            {(orderState?.loading || actionStatus.loading) ? t('LOADING', 'Loading') : t('ADD_ADDRESS', 'Add Address')}
          </Button>
        )
      }
      {
        popover && addressOpen && (
          <AddressForm
            userId={props?.userId}
            addressesList={addressList?.addresses}
            useValidationFileds
            address={curAddress}
            onCancel={() => setAddressOpen(false)}
            onSaveAddress={handleSaveAddress}
          />
        )
      }
      {
        !popover && (
          <Modal
            title={t('ADDRESS', 'Address')}
            open={!popover && addressOpen}
            onClose={() => setAddressOpen(false)}
          >
            <AddressForm
              addressesList={addressList?.addresses}
              useValidationFileds
              address={curAddress}
              onCancel={() => setAddressOpen(false)}
              onSaveAddress={handleSaveAddress}
            />
          </Modal>
        )
      }

      {!addressList.loading && !actionStatus.loading && !orderState.loading && !addressList.error && addressList?.addresses?.length > 0 && (
        <AddressListUl id='list'>
          {uniqueAddressesList.map(address => (
            <AddressItem key={address?.id}>
              <div className='wrapAddress' onClick={() => handleSetAddress(address)}>
                <span className='radio'>
                  {checkAddress(address) ? <IosRadioButtonOn /> : <IosRadioButtonOff />}
                </span>
                <div className='address'>
                  <span>{address.address}</span>
                  <span>{address.internal_number} {address.zipcode}</span>
                </div>
              </div>
              <AddressItemActions className='form'>
                <a className={actionStatus.loading ? 'disabled' : ''} onClick={() => openAddress(address)}>
                  <TiPencil />
                </a>
                <a className={actionStatus.loading || address.default ? 'disabled' : ''} onClick={() => handleDeleteClick(address)}>
                  <VscTrash />
                </a>
              </AddressItemActions>
            </AddressItem>
          ))}
        </AddressListUl>
      )}

      {!addressList.loading && !addressList.error && addressList?.addresses?.length === 0 && !isProductForm && (
        <WrappNotAddresses>
          <img src={theme.images?.general?.notFound} alt='Not Found' width='200px' height='112px' />
          <h1>{t('NOT_FOUND_ADDRESS.', 'Sorry, You don\'t seem to have any addresses.')}</h1>
        </WrappNotAddresses>
      )}

      {!addressList.loading && addressList.error && (
        addressList.error.length > 0 && (
          <NotFoundSource
            content={addressList.error[0]?.message || addressList.error[0]}
          />
        )
      )}

      {(addressList.loading || actionStatus.loading || orderState.loading) && !isProductForm && (
        <AddressListUl>
          <Skeleton height={50} count={3} style={{ marginBottom: '10px' }} />
        </AddressListUl>
      )}

      {onCancel && onAccept && (
        <FormActions>
          <Button
            outline
            type='button'
            disabled={(addressList.loading || actionStatus.loading || orderState.loading)}
            onClick={() => onCancel()}
          >
            {t('CANCEL', 'Cancel')}
          </Button>
          <Button
            disabled={(addressList.loading || actionStatus.loading || orderState.loading)}
            id='second-btn'
            color='primary'
            onClick={() => onAccept()}
          >
            {t('ACCEPT', 'Accept')}
          </Button>
        </FormActions>
      )}

      <Confirm
        title={t('SEARCH', 'Search')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </AddressListContainer>
  )
}

export const AddressList = (props) => {
  const addressListProps = {
    ...props,
    UIComponent: AddressListUI
  }

  return <AddressListController {...addressListProps} />
}
