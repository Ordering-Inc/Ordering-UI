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
  const [, t] = useLanguage()

  return (
    <MenuLink onClick={props.handleLogoutClick}>
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
