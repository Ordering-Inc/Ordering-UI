import React from 'react'
import { AddressForm as ConfirmAddressController } from '../../../src/themes/callcenterOriginal/src/components/AdvancedAddressForm'
import { HelmetTags } from '../../components/HelmetTags'
import { useLanguage } from 'ordering-components'
import { SavedPlaces } from '../AddressList/styles'

export const ConfirmAddress = (props) => {
  const params = new URLSearchParams(document.location.search)
  const [, t] = useLanguage()
  const confirmAddressParams = {
    ...props,
    confirmAddress: true,
    user_token: params.token
  }

  return (
    <>
      <HelmetTags page='confirm_address' />
      <ConfirmAddressController {...confirmAddressParams} />
    </>
  )
}

export default ConfirmAddress
