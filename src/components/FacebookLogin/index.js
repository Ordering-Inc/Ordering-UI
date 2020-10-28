import React from 'react'
import {
  FacebookLoginButton as FacebookLoginController,
  useLanguage
} from 'ordering-components'
import FaFacebook from '@meronex/icons/fa/FaFacebook'
import { FacebookButton } from './styles'

const FacebookLoginButtonUI = (props) => {
  const [, t] = useLanguage()
  const { handleFacebookLogin } = props
  return (
    <FacebookButton
      initialIcon
      color='secondary'
      onClick={() => handleFacebookLogin()}
    >
      <FaFacebook />
      {t('LOGIN_WITH_FACEBOOK', 'Login with Facebook')}
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
