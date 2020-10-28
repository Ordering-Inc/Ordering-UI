import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { Alert } from '../Confirm'
import {
  SignupForm as SignUpController,
  useLanguage,
  useConfig,
  useSession
} from 'ordering-components'
import {
  SignUpContainer,
  FormSide,
  HeroSide,
  FormInput,
  SocialButtons,
  TitleHeroSide,
  SignUpWith,
  RedirectLink
} from './styles'

import { Tabs, Tab } from '../../styles/Tabs'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

import { FacebookLoginButton } from '../FacebookLogin'
import { useTheme } from 'styled-components'

const SignUpFormUI = (props) => {
  const {
    hanldeChangeInput,
    handleButtonSignupClick,
    elementLinkToLogin,
    useChekoutFileds,
    validationFields,
    showField,
    isRequiredField,
    formState,
    handleSuccessSignup,
    useLoginByCellphone,
    useLoginByEmail,
    isPopup
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, sessionDispatch] = useSession()
  const theme = useTheme()

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

  const onSubmit = () => {
    handleButtonSignupClick()
    if (!formState.loading && formState.result.result && !formState.result.error) {
      handleSuccessSignup(formState.result.result)
    }
  }

  return (
    <SignUpContainer isPopup={isPopup}>
      <HeroSide>
        <TitleHeroSide>
          <h1>{t('TITLE_LOGIN', 'Welcome!')}</h1>
          <p>{t('SUBTITLE_LOGIN', 'Enter your personal details and start journey with us.')}</p>
        </TitleHeroSide>
      </HeroSide>
      <FormSide isPopup={isPopup}>
        <img src={theme?.images?.logos?.logotype} alt='Logo login' />

        {useLoginByCellphone && useLoginByEmail && (
          <SignUpWith>
            <Tabs variant='primary'>
              <Tab>{t('SIGNUP_WITH_EMAIL', 'Signup by Email')}</Tab>
              <Tab>{t('SIGNUP_WITH_CELLPHONE', 'Signup by Cellphone')}</Tab>
            </Tabs>
          </SignUpWith>
        )}
        <FormInput
          noValidate
          isPopup={isPopup}
          onSubmit={handleSubmit(onSubmit)}
          isSkeleton={useChekoutFileds && validationFields.loading}
        >
          {
            !(useChekoutFileds && validationFields.loading) ? (
              <>
                {
                  Object.values(validationFields.fields).map(field => (
                    showField(field.code) && (
                      <Input
                        key={field.id}
                        type={field.enabled && field.required ? field.type : 'hidden'}
                        name={field.code}
                        placeholder={t(field.name)}
                        onChange={hanldeChangeInput}
                        ref={register({
                          required: isRequiredField(field.code) ? t('VALIDATION_ERROR_REQUIRED', `${field.name} is required`).replace('_attribute_', t(field.name, field.code)) : null,
                          pattern: {
                            value: field.code === 'email' ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i : null,
                            message: field.code === 'email' ? t('VALIDATION_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email')) : null
                          }
                        })}
                        required={field.required}
                      />
                    )
                  ))
                }
                <Input
                  type='password'
                  name='password'
                  placeholder={t('PASSWORD', 'Password')}
                  onChange={hanldeChangeInput}
                  required
                  ref={register({
                    required: isRequiredField('password') ? t('VALIDATION_ERROR_REQUIRED', 'password is required').replace('_attribute_', t('PASSWORD', 'password')) : null,
                    minLength: {
                      value: 5,
                      message: t('VALIDATION_ERROR_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                    }
                  })}
                />
              </>
            ) : (
              <>
                {[...Array(3)].map((item, i) => (
                  <Skeleton key={i} height={50} />
                ))}
              </>
            )
          }
          <Button
            color='primary'
            type='submit'
            disabled={formState.loading}
          >
            {formState.loading ? t('LOADING') + '...' : t('SIGNUP', 'Sign up')}
          </Button>
        </FormInput>
        {elementLinkToLogin && (
          <RedirectLink register isPopup={isPopup}>
            <span>{t('MOBILE_FRONT_ALREADY_HAVE_AN_ACCOUNT')}</span>
            {elementLinkToLogin}
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
        title={t('SIGNUP', 'Sign up')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </SignUpContainer>
  )
}

export const SignUpForm = (props) => {
  const loginControllerProps = {
    ...props,
    UIComponent: SignUpFormUI
  }
  return <SignUpController {...loginControllerProps} />
}
