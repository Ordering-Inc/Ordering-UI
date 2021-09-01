import React from 'react'
import { useOrder } from 'ordering-components'
import { AddressForm as AddressFormController } from '../../../src/themes/eight/src/components/AddressForm'
import { HelmetTags } from '../../components/HelmetTags'

export const AddressForm = (props) => {
  const [orderState] = useOrder()

  const addressFormProps = {
    ...props,
    useValidationFileds: true,
    address: orderState?.options?.address || {}
  }
  return (
    <>
      <HelmetTags page='address' />
      <AddressFormController {...addressFormProps} />
    </>
  )
}
