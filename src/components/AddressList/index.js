import React from 'react'

import { TiPencil } from 'react-icons/ti'
import { VscTrash } from 'react-icons/vsc'

import { IoIosRadioButtonOn, IoIosRadioButtonOff } from 'react-icons/io'

import {
  AddressList as AddressListController
} from 'ordering-components'

import {
  AddressListContainer,
  AddressListUl,
  AddressItem,
  AddressItemActions
} from './styles'

import { Button } from '../../styles/Buttons'

const AddressListUI = (props) => {
  const {
    actionStatus,
    addressList,
    handleDelete,
    onAddAddress,
    handleClickAddress,
    handleSetDefault
  } = props

  return (
    <AddressListContainer>
      <Button className='add' color='primary' onClick={() => onAddAddress()}>Add Address</Button>

      {!addressList.loading && !addressList.error ? (
        <>
          {addressList.addresses && addressList.addresses.length > 0 ? (
            <AddressListUl>
              {addressList.addresses.map(address => (
                <AddressItem key={address.id}>
                  <div className='wrapAddress' onClick={() => handleSetDefault(address)}>
                    <span className='radio'>
                      {address.default ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
                    </span>
                    <div className='address'>
                      <span>{address.address}</span>
                      <span>{address.internal_number} {address.zipcode}</span>
                    </div>
                  </div>
                  <AddressItemActions>
                    <a className={actionStatus.loading ? 'disabled' : ''} onClick={() => handleClickAddress(address)}>
                      <TiPencil />
                    </a>
                    <a className={actionStatus.loading ? 'disabled' : ''} onClick={() => handleDelete(address)}>
                      <VscTrash />
                    </a>
                  </AddressItemActions>
                </AddressItem>
              ))}
            </AddressListUl>
          ) : (
            <p>Not found addresses</p>
          )}
        </>
      ) : (
        <>
          {addressList.error && addressList.error.length > 0 ? (
            addressList.error.map((e, i) => (
              <p key={i}>ERROR: [{e}]</p>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </>
      )}
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
