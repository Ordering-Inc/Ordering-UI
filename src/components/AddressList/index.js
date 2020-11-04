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
  WrappNotAddresses
} from './styles'

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
    onClosePopover,
    popover
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()

  const [curAddress, setCurAddress] = useState(false)
  const [addressOpen, setAddessOpen] = useState(false)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const theme = useTheme()

  const openAddress = (address) => {
    setCurAddress(address)
    setAddessOpen(true)
    const container = window.document.getElementsByClassName('form_edit')[0]
    scrollTo(container, 100, 500)
  }

  const handleSaveAddress = (address) => {
    let found = false
    const addresses = addressList.addresses.map(_address => {
      if (_address.id === address.id) {
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
    setAddessOpen(false)
  }

  const handleSetAddress = (address) => {
    handleSetDefault(address)
    onClosePopover && onClosePopover()
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

  /**
   * Close modals and alerts
   */
  useEffect(() => {
    return () => {
      setConfirm({ ...confirm, open: false })
      setAddessOpen(false)
    }
  }, [])

  return (
    <AddressListContainer>
      {
        (!popover || !addressOpen) && (
          <Button
            className='add'
            color='primary'
            onClick={() => openAddress({})}
          >
            {orderState?.loading ? t('LOADING', 'Loading...') : t('ADD_ADDRESS', 'Add Address')}
          </Button>
        )
      }
      {
        popover && addressOpen && (
          <AddressForm
            useValidationFileds
            address={curAddress}
            onCancel={() => setAddessOpen(false)}
            onSaveAddress={handleSaveAddress}
          />
        )
      }
      {!addressList.loading && !addressList.error ? (
        <>
          {addressList.addresses && addressList.addresses.length > 0 ? (
            <AddressListUl>
              {addressList.addresses.map(address => (
                <AddressItem key={address.id}>
                  <div className='wrapAddress' onClick={() => handleSetAddress(address)}>
                    <span className='radio'>
                      {address.address === orderState?.options?.address?.address ? <IosRadioButtonOn /> : <IosRadioButtonOff />}
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
          ) : (
            <WrappNotAddresses>
              <img src={theme.images?.general?.notFound} alt='Not Found' />
              <h1>{t('NOT_FOUND_ADDRESS.', 'Sorry, You don\'t seem to have any addresses.')}</h1>
            </WrappNotAddresses>
          )}
        </>
      ) : (
        <>
          {addressList.error && addressList.error.length > 0 ? (
            addressList.error.map((e, i) => (
              <p key={i}>{t('ERROR', 'Error')}: [{e}]</p>
            ))
          ) : (
            <AddressListUl>
              <Skeleton height={50} style={{ marginBottom: '10px' }} />
              <Skeleton height={50} style={{ marginBottom: '10px' }} />
            </AddressListUl>
          )}
        </>
      )}
      {
        !popover && (
          <Modal
            title={t('ADDRESS', 'Address')}
            open={!popover && addressOpen}
            onClose={() => setAddessOpen(false)}
          >
            <AddressForm
              useValidationFileds
              address={curAddress}
              onCancel={() => setAddessOpen(false)}
              onSaveAddress={handleSaveAddress}
            />
          </Modal>
        )
      }

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
