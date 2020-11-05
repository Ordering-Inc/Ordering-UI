import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert } from '../Confirm'
import {
  ForgotPasswordForm as ForgotPasswordController,
  useLanguage
} from 'ordering-components'
import {
  ForgotPasswordContainer,
  FormSide,
  HeroSide,
  FormInput,
  TitleHeroSide,
  RedirectLink
} from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useTheme } from 'styled-components'

const ForgotPasswordUI = (props) => {
  const {
    hanldeChangeInput,
    handleButtonForgotPasswordClick,
    formState,
    formData,
    elementLinkToLogin,
    isPopup
  } = props

  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, title: '', content: [], success: false })
  const [, t] = useLanguage()
  const theme = useTheme()

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        ...alertState,
        success: false,
        open: true,
        title: t('ERROR_FORGOT_ERROR'),
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        ...alertState,
        success: false,
        open: true,
        title: t('ERROR_FORGOT_ERROR'),
        content: formState.result?.result || [t('ERROR')]
      })
    }
    if (!formState.loading && !formState.result?.error && alertState.success) {
      setAlertState({
        ...alertState,
        open: true,
        title: t('LINK_SEND_SUCCESSFULLY'),
        content: t('SUCCESS_SEND_FORGOT_PASSWORD').replace('_email_', formData.email)
      })
    }
  }, [formState.loading])

  const onSubmit = () => {
    setAlertState({ ...alertState, success: true })
    handleButtonForgotPasswordClick()
  }

  const closeAlert = () => {
    setAlertState({
      ...alertState,
      open: false,
      content: []
    })
  }
  return (
    <ForgotPasswordContainer isPopup={isPopup}>
      <HeroSide isPopup={isPopup}>
        <TitleHeroSide>
          <h1>{t('TITLE_FORGOT_PASSWORD', 'Forgot your password?')}</h1>
          <p>{t('SUBTITLE_FORGOT_PASSWORD', "Enter your email addres and we'll send you a link to reset your password.")}</p>
        </TitleHeroSide>
      </HeroSide>
      <FormSide isPopup={isPopup}>
        <img src={theme?.images?.logos?.logotype} alt='Logo' />
        <FormInput
          noValidate
          isPopup={isPopup}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type='text'
            name='email'
            aria-label='email'
            spellcheck='false'
            placeholder={t('EMAIL')}
            onChange={(e) => hanldeChangeInput(e)}
            ref={register({
              required: t('VALIDATION_ERROR_REQUIRED', 'Email is required').replace('_attribute_', t('EMAIL', 'Email')),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t('VALIDATION_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
              }
            })}
          />
          <Button color={formState.loading || alertState.success ? 'secondary' : 'primary'} type='submit' disabled={formState.loading || alertState.success}>
            {alertState.success && formState.result.result ? t('LINK_SEND_FORGOT_PASSWORD') : t('FRONT_RECOVER_PASSWORD')}
          </Button>
        </FormInput>
        {elementLinkToLogin && (
          <RedirectLink register isPopup={isPopup}>
            <span>{t('SIGN_IN_MESSAGE', 'Do you want to sign in?')}</span>
            {elementLinkToLogin}
          </RedirectLink>
        )}
      </FormSide>
      <Alert
        title={alertState.title}
        content={alertState.content}
        acceptText={t('ACCEPT')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </ForgotPasswordContainer>
  )
}

export const ForgotPasswordForm = (props) => {
  const ForgotPasswordProps = {
    ...props,
    UIComponent: ForgotPasswordUI
  }
  return <ForgotPasswordController {...ForgotPasswordProps} />
}
