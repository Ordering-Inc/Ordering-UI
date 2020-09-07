import React from 'react'
import {
  LoginForm as LoginFormController,
  useLanguage
} from 'ordering-components'
import { LoginContainer, Triangle, FormSide, HeroSide } from './styles'

import logoHeader from '../../../template/logo-header.svg'
import { Tabs, Tab } from '../../styles/Tabs'

import { Input } from '../../Inputs'
import { ButtonPrimary } from '../../Buttons'

const LoginFormUI = (props) => {
  const {
    linkToSignup,
    useLoginByEmail,
    useLoginByCellphone,
    linkToForgetPassword,
    elementLinkToSignup,
    elementLinkToForgotPassword
  } = props
  const [, t] = useLanguage()
  return (
    <LoginContainer>
      <HeroSide>
        <h1>Hello Friend!</h1>
        <p>Enter your credentials and start journey with us.</p>
      </HeroSide>
      <Triangle />
      <FormSide>
        <img src={logoHeader} alt='Logo login' />
        {elementLinkToSignup && (
          <>
            {t('NEW_ON_PLATFORM')} {elementLinkToSignup}
          </>
        )}
        {linkToSignup && (
          <>
            {t('NEW_ON_PLATFORM')}{' '}
            <a href={linkToSignup}>{t('CREATE_AN_ACCOUNT')}</a>
          </>
        )}
        {useLoginByEmail && useLoginByCellphone && (
          <Tabs variant='primary'>
            <Tab>{t('LOGIN_WITH_EMAIL')}</Tab>
            <Tab>{t('LOGIN_WITH_CELLPHONE')}</Tab>
          </Tabs>
        )}
        {
          <>
            <Input placeholder='Email' style={{ width: '80%' }} />
            <Input placeholder='Password' style={{ width: '80%' }} />
          </>
        }
        {
          <>
            <ButtonPrimary style={{ width: '85%' }}>Login</ButtonPrimary>
          </>
        }
        {elementLinkToForgotPassword && (
          <>
            {t('FORGOT_YOUT_PASSWORD')} {elementLinkToForgotPassword}
          </>
        )}
        {linkToForgetPassword && (
          <>
            {t('NEW_ON_PLATFORM')}{' '}
            <a href={linkToForgetPassword}>{t('RESET_PASSWORD')}</a>
          </>
        )}
      </FormSide>
    </LoginContainer>
  )
}

export const LoginForm = (props) => {
  const loginControllerProps = {
    ...props,
    UIComponent: LoginFormUI
  }
  return <LoginFormController {...loginControllerProps} />
}
