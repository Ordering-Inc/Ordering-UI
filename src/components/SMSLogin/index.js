import React from 'react'
import {
  LoginForm as LoginFormController,
  useLanguage
} from 'ordering-components'
import MdSms from '@meronex/icons/md/MdSms'
import { SMSButton } from './styles'

const SMSLoginButtonUI = (props) => {
  const [, t] = useLanguage()
  const { handleSMSLogin } = props
  return (
    <SMSButton
      initialIcon
      color='secondary'
      onClick={() => handleSMSLogin()}
    >
      <MdSms />
      <div>{t('LOGIN_WITH_SMS', 'Login with SMS')}</div>
    </SMSButton>
  )
}

export const SMSLoginButton = (props) => {
  const smsLoginProps = {
    ...props,
    UIComponent: SMSLoginButtonUI
  }
  return <LoginFormController {...smsLoginProps} />
}
