import React, { useState, useEffect } from 'react'
import BiArrowBack from '@meronex/icons/bi/BiArrowBack'
import { useForm } from 'react-hook-form'
import {
  LoginForm as LoginFormController,
  useLanguage
} from 'ordering-components'
import { Alert } from '../../../../../components/Confirm'
import {
  LoginContainer,
  FormSide,
  FormInput,
  RedirectLink,
  LoginWith,
  WrapperPassword,
  WelcomeTitle,
  ReturnContainer,
  BackButton
} from './styles'

import { Tabs, Tab } from '../../styles/Tabs'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useTheme } from 'styled-components'

const LoginFormUI = (props) => {
  const {
    useLoginByEmail,
    useLoginByCellphone,
    handleChangeInput,
    handleChangeTab,
    handleButtonLoginClick,
    elementLinkToSignup,
    elementLinkToForgotPassword,
    formState,
    loginTab,
    isPopup
  } = props
  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const theme = useTheme()
  const [passwordSee, setPasswordSee] = useState(false)

  const onSubmit = async () => {
    if (passwordSee) {
      handleButtonLoginClick()
    } else {
      setPasswordSee(true)
    }
  }

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
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
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <LoginContainer isPopup={isPopup}>
        <FormSide isPopup={isPopup}>
          <img src={theme?.images?.logos?.logotype} alt='Logo login' width='200' height='66' loading='lazy' />
          <WelcomeTitle>
            {t('WELCOME_AGAIN', 'Welcome again')}
          </WelcomeTitle>
          {!passwordSee && (
            <>
              {useLoginByEmail && useLoginByCellphone && (
                <LoginWith isPopup={isPopup}>
                  <Tabs variant='primary'>
                    {useLoginByEmail && (
                      <Tab
                        onClick={() => handleChangeTab('email')}
                        active={loginTab === 'email'}
                      >
                        {t('LOGIN_WITH_EMAIL', 'Login with Email')}
                      </Tab>
                    )}
                    {useLoginByCellphone && (
                      <Tab
                        onClick={() => handleChangeTab('cellphone')}
                        active={loginTab === 'cellphone'}
                      >
                        {t('LOGIN_WITH_CELLPHONE', 'Login with Cellphone')}
                      </Tab>
                    )}
                  </Tabs>
                </LoginWith>
              )}
            </>
          )}

          {(useLoginByCellphone || useLoginByEmail) && (
            <FormInput
              noValidate
              isPopup={isPopup}
              onSubmit={handleSubmit(onSubmit)}
            >
              {
              props.beforeMidElements?.map((BeforeMidElements, i) => (
                <React.Fragment key={i}>
                  {BeforeMidElements}
                </React.Fragment>))
              }
              {
              props.beforeMidComponents?.map((BeforeMidComponents, i) => (
                <BeforeMidComponents key={i} {...props} />))
              }
              {!passwordSee && (
                <>
                  {useLoginByEmail && loginTab === 'email' && (
                    <Input
                      type='email'
                      name='email'
                      aria-label='email'
                      placeholder={t('EMAIL', 'Email')}
                      ref={register({
                        required: t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')),
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
                        }
                      })}
                      onChange={(e) => handleChangeInput(e)}
                      autoComplete='off'
                    />
                  )}
                  {useLoginByCellphone && loginTab === 'cellphone' && (
                    <Input
                      type='tel'
                      name='cellphone'
                      aria-label='cellphone'
                      placeholder='Cellphone'
                      ref={register({
                        required: t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required').replace('_attribute_', t('CELLPHONE', 'Cellphone'))
                      })}
                      onChange={(e) => handleChangeInput(e)}
                      autoComplete='off'
                    />
                  )}
                </>
              )}
              {passwordSee && (
                <WrapperPassword>
                  <Input
                    type='password'
                    name='password'
                    aria-label='password'
                    placeholder={t('PASSWORD', 'Password')}
                    ref={register({
                      required: t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
                    })}
                    onChange={(e) => handleChangeInput(e)}
                  />
                </WrapperPassword>
              )}
              {
              props.afterMidElements?.map((MidElement, i) => (
                <React.Fragment key={i}>
                  {MidElement}
                </React.Fragment>))
              }
              {
              props.afterMidComponents?.map((MidComponent, i) => (
                <MidComponent key={i} {...props} />))
              }
              <Button
                color='green'
                type='submit'
                disabled={formState.loading}
              >
                {formState.loading ? `${t('LOADING', 'Loading')}...` : t('CONTINUE', 'Continue')}
              </Button>
              {passwordSee && (
                <ReturnContainer>
                  <BackButton onClick={() => setPasswordSee(false)}>
                    <BiArrowBack />
                  </BackButton>
                  <RedirectLink isPopup={isPopup}>
                    <span>{t('FORGOT_YOUR_PASSWORD', 'Forgot your password?')}</span>
                    {elementLinkToForgotPassword}
                  </RedirectLink>
                </ReturnContainer>
              )}
            </FormInput>
          )}

          {!passwordSee && elementLinkToSignup && (
            <RedirectLink register isPopup={isPopup}>
              <span>{t('NEW_ON_PLATFORM', 'New on Ordering?')}</span>
              {elementLinkToSignup}
            </RedirectLink>
          )}
        </FormSide>
        <Alert
          title={t('LOGIN', 'Login')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
      </LoginContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const LoginForm = (props) => {
  const loginControllerProps = {
    ...props,
    UIComponent: LoginFormUI
  }
  return <LoginFormController {...loginControllerProps} />
}
