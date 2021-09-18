import React, { useState } from 'react'
import { LogoutAction, useLanguage } from 'ordering-components'

import BiLogOut from '@meronex/icons/bi/BiLogOut'
import { Confirm } from '../Confirm'

const LogoutButtonUI = (props) => {
  const { onCustomClick } = props
  const [, t] = useLanguage()
  const [openConfirm, setOpenConfirm] = useState(false)

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

  const handleOpenConfirm = () => {
    setOpenConfirm(true)
  }

  return (
    <>
      <BiLogOut onClick={handleOpenConfirm} size={20} />
      {openConfirm && (
        <Confirm
          open={openConfirm}
          title={t('LOGOUT', 'Logout')}
          content={t('DO_YOU_WANT_LOGOUT', 'Do you want logout?')} 
          onAccept={handleLogOutClick}
          onClose={() => setOpenConfirm(false)}
          onCancel={() => setOpenConfirm(false)}
        />
      )}
    </>
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
