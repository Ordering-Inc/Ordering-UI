import React from 'react'
import {
  FacebookLoginButton as FacebookLoginController,
  useLanguage
} from 'ordering-components'
import iconFacebook from '../../../template/assets/IconFacebook.svg'
import { Button } from '../../styles/Buttons'

const FacebookLoginButtonUI = (props) => {
  const [, t] = useLanguage()
  const { handleFacebookLogin } = props
  return (
    <Button color='secondary' initialIcon onClick={() => handleFacebookLogin()}>
      <img src={iconFacebook} width={30} />
      <span>{t('LOGIN_WITH_FACEBOOK', 'Login with Facebook')}</span>
    </Button>
  )
}

export const FacebookLoginButton = (props) => {
  const facebookLoginProps = {
    ...props,
    UIComponent: FacebookLoginButtonUI
  }
  return <FacebookLoginController {...facebookLoginProps} />
}
