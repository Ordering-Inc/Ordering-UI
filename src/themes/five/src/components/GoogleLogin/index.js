import React from 'react'
import { useLanguage, FirebaseGoogleLoginButton as GoogleLoginController } from 'ordering-components'
import FcGoogle from '@meronex/icons/fc/FcGoogle'
import { GoogleButton } from './styles'

const GoogleLoginButtonUI = (props) => {
  const [, t] = useLanguage()
  const { signInWithGoogle } = props

  return (
    <GoogleButton
      initialIcon
      color='secondary'
      onClick={signInWithGoogle}
    >
      <FcGoogle />
      <div>{t('CONTINUE_WITH_GOOGLE', 'Continue with Google')}</div>
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
