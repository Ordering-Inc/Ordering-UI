import React from 'react'
import {
  GoogleLoginButton as GoogleLoginController,
  useLanguage
} from 'ordering-components'
import FcGoogle from '@meronex/icons/fc/FcGoogle'
import {
  GoogleButton,
  IconWrapper,
  Content
} from './styles'

export const GoogleLoginButtonUI = (props) => {
  const {
    isSignup
  } = props
  const [, t] = useLanguage()
  const { signIn } = props

  return (
    <GoogleButton
      onClick={signIn}
      isSignup={isSignup}
    >
      <Content isSignup={isSignup}>
        <IconWrapper>
          <FcGoogle />
        </IconWrapper>
        <div>{t('LOGIN_WITH_GOOGLE', 'Login with Google')}</div>
      </Content>
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
