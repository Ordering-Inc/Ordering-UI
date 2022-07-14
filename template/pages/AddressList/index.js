import React from 'react'
import { AddressList as AddressListController, ProfileOptions } from '../../../src/themes/five/src/components/AddressList'
import { useLanguage, useSession } from 'ordering-components'
import { HelmetTags } from '../../components/HelmetTags'
import { SavedPlaces } from './styles'
import { useTheme } from 'styled-components'

export const AddressList = (props) => {
  const [{ user }] = useSession()
  const [, t] = useLanguage()
  const theme = useTheme()
  const addressListParams = {
    ...props,
    addressList: user?.addresses,
    isProfile: true,
    isModal: true
  }
  const showProfileOptions = theme.layouts?.profile?.components?.address_list?.components?.layout?.position === 'new_page'

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
