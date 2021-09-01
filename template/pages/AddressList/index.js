import React from 'react'
import { AddressList as AddressListController } from '../../../src/themes/eight/src/components/AddressList'
import { HelmetTags } from '../../components/HelmetTags'

export const AddressList = (props) => {
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const addressListProps = {
    ...props,
    // isModal: true,
    changeOrderAddressWithDefault: true,
    userId: isNaN(userCustomer?.id) ? null : userCustomer?.id
  }
  return (
    <>
      <HelmetTags page='addresslist' />
      <AddressListController {...addressListProps} />
    </>
  )
}
