import React, { useEffect } from 'react'
import { useLanguage } from 'ordering-components'
import { GoogleLoginButton as GoogleLoginController } from './test'
import FcGoogle from '@meronex/icons/fc/FcGoogle'
import { GoogleButton } from './styles'

export const GoogleLoginButtonUI = (props) => {
  const [, t] = useLanguage()
  const { signIn, initParams, handleSigninSuccess } = props

  useEffect(() => {
    console.log(document.getElementById('g_id_onload'))
    window.handleCredentialResponse = (response) => {
      handleSigninSuccess(response.credential)
      console.log(response)
    }
    document.getElementById('g_id_onload').setAttribute('data-callback', 'handleCredentialResponse')
  })
  return (
    <GoogleButton>
      <div
        id='g_id_onload'
        data-client_id={initParams.client_id}
        data-auto_prompt='false'
      />
      <div
        className='g_id_signin'
        data-type='standard'
        data-size='large'
        data-theme='outline'
        data-text='sign_in_with'
        data-shape='rectangular'
        data-logo_alignment='left'
      />
    </GoogleButton>
  )
}

export const GoogleLoginButton = (props) => {
  const googleLoginProps = {
    ...props,
    UIComponent: GoogleLoginButtonUI
  }
  return <GoogleLoginController {...googleLoginProps} />
}
