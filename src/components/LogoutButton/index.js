import React from 'react'
import { LogoutAction, useLanguage } from 'ordering-components'

import FaSignOutAlt from '@meronex/icons/fa/FaSignOutAlt'

import {
  MenuLink,
  WrappContent,
  MenuLinkIcon,
  MenuLinkText,
  TextInfo,
  MenuLinkSeparator
} from '../SidebarMenu/styles'

const LogoutButtonUI = (props) => {
  const { onCustomClick } = props
  const [, t] = useLanguage()

  const handleLogOutClick = () => {
    props.handleLogoutClick()
    onCustomClick && onCustomClick()
  }

  return (
    <MenuLink onClick={handleLogOutClick}>
      <WrappContent>
        <MenuLinkIcon>
          <FaSignOutAlt />
        </MenuLinkIcon>
        <MenuLinkText>
          <TextInfo>
            {t('LOGOUT', 'Logout')}
          </TextInfo>
        </MenuLinkText>
        <MenuLinkSeparator>
          <div>
            <hr />
          </div>
        </MenuLinkSeparator>
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
