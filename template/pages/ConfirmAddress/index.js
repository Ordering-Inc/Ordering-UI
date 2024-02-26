import React from 'react'
import { AddressForm as ConfirmAddressController } from '../../../src/themes/five/src/components/AdvancedAddressForm'
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
      <SavedPlaces>
        <h1>
          {t('ADD_YOUR_ADDRESS', 'Add your address')}
        </h1>
        <ConfirmAddressController {...confirmAddressParams} />
      </SavedPlaces>
    </>
  )
}

export default ConfirmAddress
