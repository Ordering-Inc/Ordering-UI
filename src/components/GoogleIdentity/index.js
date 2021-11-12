import React, { useEffect } from 'react'
import { GoogleIdentityButton as GoogleIdentityButtonController } from 'ordering-components'
import { GoogleButton } from './styles'

export const GoogleLoginButtonUI = (props) => {
  const { initParams, handleSigninSuccess, formState } = props
  console.log(formState)
  useEffect(() => {
    window.handleCredentialResponse = (response) => {
      console.log(response)
      handleSigninSuccess(response.credential)
    }
    const GoogleButton = document.getElementById('g_id_onload')
    GoogleButton.setAttribute('data-callback', 'handleCredentialResponse')
  })

  return (
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
  )
}

export const GoogleIdentityButton = (props) => {
  const googleLoginProps = {
    ...props,
    UIComponent: GoogleLoginButtonUI
  }
  return <GoogleIdentityButtonController {...googleLoginProps} />
}
