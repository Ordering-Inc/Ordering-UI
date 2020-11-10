import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
  LoginForm as LoginFormController,
  useLanguage,
  useConfig,
  useSession
} from 'ordering-components'
import { Alert } from '../Confirm'
import {
  LoginContainer,
  FormSide,
  HeroSide,
  FormInput,
  RedirectLink,
  TitleHeroSide,
  SocialButtons,
  LoginWith
} from './styles'

import { Tabs, Tab } from '../../styles/Tabs'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { FacebookLoginButton } from '../FacebookLogin'
import { useTheme } from 'styled-components'

const LoginFormUI = (props) => {
  const {
    useLoginByEmail,
    useLoginByCellphone,
    hanldeChangeInput,
    hanldeChangeTab,
    handleButtonLoginClick,
    elementLinkToSignup,
    elementLinkToForgotPassword,
    formState,
    loginTab,
    isPopup
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, { login }] = useSession()
  const theme = useTheme()

  const onSubmit = async () => {
    handleButtonLoginClick()
  }

  const handleSuccessFacebook = (user) => {
    login({
      user,
      token: user.session.access_token
    })
  }

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR')]
      })
    }
  }, [formState])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  return (
    <LoginContainer isPopup={isPopup}>
      <HeroSide>
        <TitleHeroSide>
          <h1>{t('TITLE_LOGIN', 'Hello Friend!')}</h1>
          <p>{t('SUBTITLE_LOGIN', 'Enter your credentials and start journey with us.')}</p>
        </TitleHeroSide>
      </HeroSide>
      <FormSide isPopup={isPopup}>
        <img src={theme?.images?.logos?.logotype} alt='Logo login' />

        {useLoginByEmail && useLoginByCellphone && (
          <LoginWith isPopup={isPopup}>
            <Tabs variant='primary'>
              {useLoginByEmail && (
                <Tab
                  onClick={() => hanldeChangeTab('email')}
                  active={loginTab === 'email'}
                >
                  {t('LOGIN_WITH_EMAIL', 'Login with Email')}
                </Tab>
              )}
              {useLoginByCellphone && (
                <Tab
                  onClick={() => hanldeChangeTab('cellphone')}
                  active={loginTab === 'cellphone'}
                >
                  {t('LOGIN_WITH_CELLPHONE', 'Login with Cellphone')}
                </Tab>
              )}
            </Tabs>
          </LoginWith>
        )}

        {(useLoginByCellphone || useLoginByEmail) && (
          <FormInput
            noValidate
            isPopup={isPopup}
            onSubmit={handleSubmit(onSubmit)}
          >
            {useLoginByEmail && loginTab === 'email' && (
              <Input
                type='email'
                name='email'
                aria-label='email'
                placeholder={t('EMAIL')}
                ref={register({
                  required: t('VALIDATION_ERROR_REQUIRED', 'Email is required').replace('_attribute_', t('EMAIL', 'Email')),
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t('VALIDATION_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
                  }
                })}
                onChange={(e) => hanldeChangeInput(e)}
              />
            )}
            {useLoginByCellphone && loginTab === 'cellphone' && (
              <Input
                type='tel'
                name='cellphone'
                aria-label='cellphone'
                placeholder='Cellphone'
                ref={register({
                  required: t('VALIDATION_ERROR_REQUIRED', 'Cellphone is required').replace('_attribute_', t('CELLPHONE', 'Cellphone'))
                })}
                onChange={(e) => hanldeChangeInput(e)}
              />
            )}
            <Input
              type='password'
              name='password'
              aria-label='password'
              placeholder={t('PASSWORD')}
              ref={register({
                required: t('VALIDATION_ERROR_REQUIRED', 'Password is required').replace('_attribute_', t('PASSWORD', 'Password')),
                minLength: {
                  value: 5,
                  message: t('VALIDATION_ERROR_MIN_STRING', 'The Password must be at least 8 characters.')
                    .replace('_attribute_', t('PASSWORD', 'Password'))
                    .replace('_min_', 8)
                }
              })}
              onChange={(e) => hanldeChangeInput(e)}
            />
            <RedirectLink isPopup={isPopup}>
              <span>{t('FORGOT_YOUR_PASSWORD', 'Forgot your password?')}</span>
              {elementLinkToForgotPassword}
            </RedirectLink>
            <Button
              color='primary'
              type='submit'
              disabled={formState.loading}
            >
              {formState.loading ? t('LOADING') + '...' : t('LOGIN')}
            </Button>
          </FormInput>
        )}

        {elementLinkToSignup && (
          <RedirectLink register isPopup={isPopup}>
            <span>{t('NEW_ON_PLATFORM', 'New on Ordering?')}</span>
            {elementLinkToSignup}
          </RedirectLink>
        )}

        <SocialButtons isPopup={isPopup}>
          {configs?.facebook_id && (
            <FacebookLoginButton
              appId={configs?.facebook_id?.value}
              handleSuccessFacebookLogin={handleSuccessFacebook}
            />
          )}
        </SocialButtons>
      </FormSide>
      <Alert
        title={t('LOGIN')}
        content={alertState.content}
        acceptText={t('ACCEPT')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
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
