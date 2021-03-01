import React from 'react'
import { LogoutAction, useLanguage } from 'ordering-components'
import IosCloseCircleOutline from '@meronex/icons/ios/IosCloseCircleOutline'

import {
  MenuLink,
  WrappContent,
  MenuLinkIcon,
  MenuLinkText,
  TextInfo
} from '../../../SidebarMenu/styles'

const LogoutButtonUI = (props) => {
  const { onCustomClick } = props
  const [, t] = useLanguage()

  const isHome = window.location.pathname === '/' || window.location.pathname === '/home'

  const handleLogOutClick = () => {
    window.FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        window.FB.logout()
      }
    })

    props.handleLogoutClick()
    onCustomClick && onCustomClick()
  }

  return (
    <MenuLink onClick={handleLogOutClick} isHome={isHome}>
      <WrappContent>
        <MenuLinkIcon isHome={isHome}>
          <IosCloseCircleOutline />
        </MenuLinkIcon>
        <MenuLinkText>
          <TextInfo isHome={isHome}>
            {t('SIGNOUT', 'Sign out')}
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
