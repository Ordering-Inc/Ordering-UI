import React from 'react'
import { UserProfileForm as UserProfileFormOriginal } from '../../../src/themes/five/src/components/UserProfileForm'
import { UserProfileForm as UserProfileFormOld } from '../../../src/components/UserProfileForm'
import { HelmetTags } from '../../components/HelmetTags'
import { useOrderingTheme } from 'ordering-components'
export const Profile = (props) => {
  const profileProps = {
    ...props,
    refreshSessionUser: true,
    showLogout: true
  }

  const [orderingTheme] = useOrderingTheme()
  const layout = orderingTheme?.theme?.profile?.components?.layout?.type

  return (
    <>
      <HelmetTags page='profile' />
      {layout === 'old' ? (
        <UserProfileFormOld {...profileProps} />
      ) : (
        <UserProfileFormOriginal {...profileProps} />
      )}
    </>
  )
}
