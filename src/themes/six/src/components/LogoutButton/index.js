import React from 'react'
import { LogoutAction, useLanguage } from 'ordering-components'
import FaSignOutAlt from '@meronex/icons/fa/FaSignOutAlt'

import {
  MenuLink,
  WrappContent,
  MenuLinkIcon,
  MenuLinkText,
  TextInfo
} from '../SidebarMenu/styles'

const LogoutButtonUI = (props) => {
  const { onCustomClick, inSide } = props
  const [, t] = useLanguage()
  const handleLogOutClick = () => {
    window.FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        window.FB.logout()
      }
    })

    const GoogleAuth = window?.gapi?.auth2?.getAuthInstance()
    if (GoogleAuth) {
      const signedIn = GoogleAuth.isSignedIn.get()
      if (signedIn) {
        GoogleAuth.signOut().then(() => {
          GoogleAuth.disconnect()
        })
      }
    }

    props.handleLogoutClick()
    onCustomClick && onCustomClick()
  }

  return (
    <MenuLink onClick={handleLogOutClick} inSide={inSide}>
      <WrappContent>
        <MenuLinkIcon inSide={inSide}>
          {!inSide && <FaSignOutAlt />}
        </MenuLinkIcon>
        <MenuLinkText>
          <TextInfo>
            {t('LOGOUT', 'Logout')}
          </TextInfo>
        </MenuLinkText>
      </WrappContent>
    </MenuLink>
  )
}

export const LogoutButton = (props) => {
  const logoutButtonProps = {
    ...props,
    UIComponent: LogoutButtonUI
  }
  return (
    <LogoutAction {...logoutButtonProps} />
  )
}
