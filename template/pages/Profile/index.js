import React from 'react'
import { useOrderingTheme } from 'ordering-components'
import { UserProfileForm as UserProfileFormOriginal } from '../../../src/themes/five/src/components/UserProfileForm'
import { UserProfileForm as UserProfileFormOld } from '../../../src/components/UserProfileForm'
import { HelmetTags } from '../../components/HelmetTags'
import { useWindowSize } from '../../../src/hooks/useWindowSize'

export const Profile = (props) => {
  const windowSize = useWindowSize()

  const profileProps = {
    ...props,
    refreshSessionUser: true,
    showLogout: true,
    hideOptions: windowSize.width < 576
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
