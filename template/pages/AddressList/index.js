import React from 'react'
import { AddressList as AddressListController } from '../../../src/themes/five/src/components/AddressList'
import { ProfileOptions } from '../../../src/themes/five/src/components/UserProfileForm/ProfileOptions'
import { useLanguage, useSession, useOrderingTheme } from 'ordering-components'
import { HelmetTags } from '../../components/HelmetTags'
import { SavedPlaces } from './styles'

export const AddressList = (props) => {
  const [{ user }] = useSession()
  const [, t] = useLanguage()
  const [orderingTheme] = useOrderingTheme()
  const addressListParams = {
    ...props,
    addressList: user?.addresses,
    isProfile: true,
    isModal: true
  }
  const showProfileOptions = orderingTheme?.theme?.profile?.components?.address_list?.components?.layout?.position === 'new_page'

  return (
    <>
      <HelmetTags page='addresses' />
      {showProfileOptions && (
        <ProfileOptions value='addresses' />
      )}
      <SavedPlaces>
        <h1>
          {t('SAVED_PLACES', 'Saved places')}
        </h1>
        <AddressListController {...addressListParams} />
      </SavedPlaces>
    </>
  )
}
