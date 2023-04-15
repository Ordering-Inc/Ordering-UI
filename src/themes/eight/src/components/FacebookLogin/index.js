import React from 'react'
import {
  FacebookLoginButton as FacebookLoginController,
  useLanguage
} from 'ordering-components'
import FaFacebook from '@meronex/icons/fa/FaFacebook'
import {
  FacebookButton,
  IconWrapper,
  Content
} from './styles'

const FacebookLoginButtonUI = (props) => {
  const {
    isSignup
  } = props
  const [, t] = useLanguage()
  const { handleFacebookLogin } = props
  return (
    <FacebookButton
      isSignup={isSignup}
      onClick={() => handleFacebookLogin()}
    >
      <Content isSignup={isSignup}>
        <IconWrapper>
          <FaFacebook />
        </IconWrapper>
        <div>{t('LOGIN_WITH_FACEBOOK', 'Login with Facebook')}</div>
      </Content>
    </FacebookButton>
  )
}

export const FacebookLoginButton = (props) => {
  const facebookLoginProps = {
    ...props,
    UIComponent: FacebookLoginButtonUI
  }
  return <FacebookLoginController {...facebookLoginProps} />
}
