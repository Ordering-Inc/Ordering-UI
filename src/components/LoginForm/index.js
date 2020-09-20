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
  ForgotPassword,
  SocialIcons,
  TitleHeroSide,
  LoginWith,
  NewOnPlatform
} from './styles'

import logoHeader from '../../../template/assets/images/logo-header.svg'
import { Tabs, Tab } from '../../styles/Tabs'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

import { AiOutlineGoogle, FaApple } from 'react-icons/all'
import { FacebookLoginButton } from '../FacebookLogin'

const LoginFormUI = (props) => {
  const {
    linkToSignup,
    useLoginByEmail,
    useLoginByCellphone,
    hanldeChangeInput,
    hanldeChangeTab,
    handleButtonLoginClick,
    linkToForgetPassword,
    elementLinkToSignup,
    elementLinkToForgotPassword,
    formState,
    loginTab,
    ordering
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, sessionDispatch] = useSession()

  const onSubmit = async () => {
    handleButtonLoginClick()
  }

  const handleSuccessFacebook = (user) => {
    sessionDispatch({
      type: 'login',
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
    <LoginContainer>
      <HeroSide>
        <TitleHeroSide>
          <h1>{t('TITLE_LOGIN', 'Hello Friend!')}</h1>
          <p>{t('SUBTITLE_LOGIN', 'Enter your credentials and start journey with us.')}</p>
        </TitleHeroSide>
      </HeroSide>
      <FormSide>
        <img src={logoHeader} alt='Logo login' />

        <NewOnPlatform>
          {elementLinkToSignup && (
            <>
              {t('NEW_ON_PLATFORM')} {elementLinkToSignup}
            </>
          )}
          {linkToSignup && (
            <>
              {t('NEW_ON_PLATFORM')}
              <a href={linkToSignup}>{t('CREATE_AN_ACCOUNT')}</a>
            </>
          )}
        </NewOnPlatform>
        <SocialIcons>
          {configs?.facebook_id && <FacebookLoginButton ordering={ordering} appId={configs.facebook_id.value} handleSuccessFacebookLogin={handleSuccessFacebook} />}
          {/* <FaApple />
          <AiOutlineGoogle /> */}
        </SocialIcons>
        {useLoginByEmail && useLoginByCellphone && (
          <LoginWith>
            <Tabs variant='primary'>
              {useLoginByEmail && (

                <Tab
                  onClick={() => hanldeChangeTab('email')}
                  active={loginTab === 'email'}
                >
                  {t('LOGIN_WITH_EMAIL', 'Login with Emai')}
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
        <>
          {(useLoginByCellphone || useLoginByEmail) &&
            (
              <FormInput onSubmit={handleSubmit(onSubmit)} noValidate>
                {
                  useLoginByEmail && loginTab === 'email' && (
                    <Input
                      type='email'
                      name='email'
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
                  )
                }
                {
                  useLoginByCellphone && loginTab === 'cellphone' && (
                    <Input
                      type='tel'
                      name='cellphone'
                      placeholder='Cellphone'
                      ref={register({
                        required: t('VALIDATION_ERROR_REQUIRED', 'Cellphone is required').replace('_attribute_', t('CELLPHONE', 'Cellphone'))
                      })}
                      onChange={(e) => hanldeChangeInput(e)}
                    />
                  )
                }
                <Input
                  type='password'
                  name='password'
                  placeholder={t('PASSWORD')}
                  ref={register({
                    required: t('VALIDATION_ERROR_REQUIRED', 'Password is required').replace('_attribute_', t('PASSWORD', 'Password')),
                    minLength: {
                      value: 5,
                      message: t('VALIDATION_ERROR_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                    }
                  })}
                  onChange={(e) => hanldeChangeInput(e)}
                />
                <Button color='primary' type='submit' disabled={formState.loading}>
                  {formState.loading ? t('LOADING') + '...' : t('LOGIN')}
                </Button>
              </FormInput>
            )}
        </>

        <ForgotPassword>
          {t('FORGOT_YOUT_PASSWORD')} {elementLinkToForgotPassword}
        </ForgotPassword>
        {linkToForgetPassword && (
          <>
            {t('NEW_ON_PLATFORM')}
            <a href={linkToForgetPassword}>{t('RESET_PASSWORD')}</a>
          </>
        )}
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
