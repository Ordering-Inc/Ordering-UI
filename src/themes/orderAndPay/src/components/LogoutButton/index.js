import React, { useEffect, useState } from 'react'
import { LogoutAction, useLanguage, useToast, ToastType } from 'ordering-components'

import BiLogOut from '@meronex/icons/bi/BiLogOut'
import { Confirm } from '../Confirm'
import { useTheme } from 'styled-components'
const LogoutButtonUI = (props) => {
  const { onCustomClick, formState } = props
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [openConfirm, setOpenConfirm] = useState(false)
  const theme = useTheme()
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

  useEffect(() => {
    if (formState.result.error) {
      showToast(ToastType.Error, t(formState.result?.result))
    }
  }, [formState.loading])

  return (
    <>
      <BiLogOut onClick={handleOpenConfirm} size={20} color={theme.colors.darkTextColor} />
      {openConfirm && (
        <Confirm
          open={openConfirm}
          title={t('LOGOUT', 'Logout')}
          content={t('DO_YOU_WANT_LOGOUT', 'Do you want logout?')}
          onAccept={handleLogOutClick}
          onClose={() => setOpenConfirm(false)}
          onCancel={() => setOpenConfirm(false)}
          acceptText={formState.loading && t('LOADING', 'Loading...')}
          isLoading={formState.loading}
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
