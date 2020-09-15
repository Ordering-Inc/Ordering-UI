import React from 'react'

import trash from '../../../template/assets/trash.svg'
import pencil from '../../../template/assets/pencil.svg'

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
    handleDelete,
    onAddAddress
  } = props
  return (
    <AddressListContainer>
      <Button className='add' color='primary' onClick={() => onAddAddress()}>Add Address</Button>
      <AddressListUl>
        {[...Array(2)].map((address, i) =>
          <AddressItem key={i}>
            <div>
              <input type='radio' id={i} name='address' />
              <label htmlFor={i}>Address</label>
            </div>
            <AddressItemActions>
              <a>
                <img src={pencil} alt='edit' />
              </a>
              <a onClick={() => handleDelete(address)}>
                <img src={trash} alt='delete' />
              </a>
            </AddressItemActions>
          </AddressItem>
        )}
      </AddressListUl>
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
