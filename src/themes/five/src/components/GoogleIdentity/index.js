import React, { useState, useEffect } from 'react'
import { GoogleIdentityButton as GoogleIdentityButtonController, useLanguage } from 'ordering-components'
import { GoogleButton } from './styles'
import { Alert } from '../Confirm'
import { Alert as AlertPFChangs } from '../Confirm/layouts/pfchangs'
import { useTheme } from 'styled-components'

export const GoogleLoginButtonUI = (props) => {
  const { initParams, handleSigninSuccess, formState } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const AlertComponent = theme?.layouts?.general?.components?.layout?.type === 'pfchangs'
    ? AlertPFChangs
    : Alert

  useEffect(() => {
    window.handleCredentialResponse = (response) => {
      handleSigninSuccess(response.credential)
    }
    const GoogleButton = document.getElementById('g_id_onload')
    GoogleButton.setAttribute('data-callback', 'handleCredentialResponse')
  })

  useEffect(() => {
    if (formState.error) {
      setAlertState({
        open: true,
        content: formState.result
      })
    }
  }, [formState])

  return (
    <>
      <GoogleButton
        initialIcon
        color='secondary'
        id='g_id_onload'
        data-client_id={initParams.client_id}
        data-auto_prompt='false'
      >
        <div
          className='g_id_signin'
          data-size='medium'
          data-shape='pill'
          data-text='signin_with'
          data-locale='en'
        />
      </GoogleButton>
      <AlertComponent
        open={alertState.open}
        title={t('GOOGLE_LOGIN_ERROR', 'Google Login error')}
        content={alertState?.result}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
      />
    </>
  )
}

export const GoogleIdentityButton = (props) => {
  const googleLoginProps = {
    ...props,
    UIComponent: GoogleLoginButtonUI
  }
  return <GoogleIdentityButtonController {...googleLoginProps} />
}
