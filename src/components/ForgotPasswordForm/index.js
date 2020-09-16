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
  TitleHeroSide
} from './styles'
// import triangle from '../../../template/triangle.svg'

import logoHeader from '../../../template/logo-header.svg'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

const ForgotPasswordUI = (props) => {
  const {
    hanldeChangeInput,
    handleButtonForgotPasswordClick,
    formState,
    formData
  } = props

  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, title: '', content: [], success: false })
  const [, t] = useLanguage()

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
    <ForgotPasswordContainer>
      <HeroSide>
        <TitleHeroSide>
          <h1>{t('TITLE_FORGOT_PASSWORD', 'Forgot your password?')}</h1>
          <p>{t('SUBTITLE_FORGOT_PASSWORD', "Enter your email addres and we'll send you a link to reset your password.")}</p>
        </TitleHeroSide>
      </HeroSide>
      <FormSide>
        <img src={logoHeader} alt='Logo' />
        {(
          <FormInput onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
              type='text'
              name='email'
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
