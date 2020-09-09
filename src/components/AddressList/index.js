import React from 'react'
import { VscEdit, VscTrash } from 'react-icons/vsc'

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
  return (
    <AddressListContainer>
      <Button className='add' color='primary'>Add Address</Button>
      <AddressListUl>
        {[...Array(2)].map((x, i) =>
          <AddressItem key={i}>
            <div>
              <input type='radio' name='address' />
              <label>Address</label>
            </div>
            <AddressItemActions>
              <a>
                <VscEdit />
              </a>
              <a>
                <VscTrash />
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
