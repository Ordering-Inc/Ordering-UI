import React, { useRef, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert } from '../Confirm'
import {
  useLanguage,
  ResetPassword as ResetPasswordController,
  useEvent
} from 'ordering-components'
import {
  ResetPasswordContainer,
  FormSide,
  HeroSide,
  FormInput,
  TitleHeroSide
} from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useTheme } from 'styled-components'

const ResetPasswordUI = (props) => {
  const {
    handleResetPassword,
    handleChangeInput,
    formState
  } = props

  const { handleSubmit, register, errors, watch } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, t] = useLanguage()
  const theme = useTheme()
  const [events] = useEvent()

  const password = useRef({})

  password.current = watch('password', '')

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleGoToPage = (page) => {
    events.emit('go_to_page', { page })
    closeAlert()
  }

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    } else if (!formState.loading && formState.result?.result?.length) {
      setAlertState({
        open: true,
        content: formState.result?.result
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

  return (
    <ResetPasswordContainer>
      <HeroSide>
        <TitleHeroSide>
          <h1>{t('TITLE_RESET_PASSWORD', 'Reset password')}</h1>
          <p>{t('SUBTITLE_RESET_PASSWORD', 'Reset your password')}</p>
        </TitleHeroSide>
      </HeroSide>
      <FormSide>
        <img src={theme?.images?.logos?.logotype} alt='Logo' width='200' height='66' />
        <FormInput
          noValidate
          onSubmit={handleSubmit(handleResetPassword)}
        >
          <Input
            type='password'
            name='password'
            aria-label='password'
            spellcheck='false'
            ref={register({
              required: t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field password is required'),
              minLength: {
                value: 8,
                message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
              }
            })}
            placeholder={t('NEW_PASSWORD', 'New passowrd')}
            onChange={handleChangeInput}
            autoComplete='off'
          />
          <Input
            type='password'
            name='confirm-password'
            aria-label='confirm-password'
            spellcheck='false'
            ref={register({
              required: t('VALIDATION_ERROR_PASSWORD_CONFIRM_REQUIRED', 'The field password confirm is required'),
              validate: value =>
                value === password.current || t('VALIDATION_ERROR_PASSWORDS_MATCH', 'The passwords do not match')
            })}
            placeholder={t('CONFIRM_PASSWORD', 'Confirm Password')}
            onChange={handleChangeInput}
            autoComplete='off'
          />
          <Button
            type='submit'
            color={formState.loading || formState.result?.result?.length ? 'secondary' : 'primary'}
            disabled={formState.loading || formState.result?.result?.length}
          >
            {!formState.loading ? t('CHANGE_PASSWORD', 'Change Password') : t('LOADING', 'Loading')}
          </Button>
        </FormInput>
      </FormSide>
      <Alert
        title={t('RESET_PASSWORD', 'Reset Password')}
        content={alertState?.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => !formState.loading && formState.result?.result?.length ? handleGoToPage('signin') : closeAlert()}
        onAccept={() => !formState.loading && formState.result?.result?.length ? handleGoToPage('signin') : closeAlert()}
        closeOnBackdrop={false}
      />
    </ResetPasswordContainer>
  )
}

export const ResetPassword = (props) => {
  const resetPasswordProps = {
    ...props,
    UIComponent: ResetPasswordUI
  }

  return <ResetPasswordController {...resetPasswordProps} />
}
