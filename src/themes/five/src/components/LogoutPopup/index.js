import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Lock, Eye, EyeSlash } from 'react-bootstrap-icons'

import {
  LogoutAction,
  useLanguage,
  useSession,
  useApi
} from 'ordering-components'

import {
  LoginContainer,
  FormSide,
  FormInput,
  TogglePassword,
  InputBeforeIcon,
  InputWrapper,
  Title,
  ValidationText,
  SubTitle
} from './styles'

import { Alert } from '../Confirm'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

const LogoutUI = (props) => {
  const {
    handleLogoutClick,
    onClose
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const formMethods = useForm()

  const [passwordSee, setPasswordSee] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [logoutState, setLogoutState] = useState({ loading: false, error: false, result: [] })

  const cleanLogState = () => {
    setLogoutState({ loading: false, error: false, result: [] })
  }

  const closeAlert = () => {
    setAlertState({ open: false, content: [] })
  }

  const fetchPassword = async (body) => {
    try {
      setLogoutState({ ...logoutState, loading: true })
      const response = await fetch(`${ordering.root}/users/check_password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(body)
      })
      const { error, result } = await response.json()
      setLogoutState({
        ...logoutState,
        loading: false,
        error,
        result
      })
      return { error, result }
    } catch (e) {
      setLogoutState({
        ...logoutState,
        loading: false,
        error: true,
        result: [e?.message]
      })
    }
  }

  const onSubmit = async (values) => {
    try {
      const result = await fetchPassword(values)
      if (result?.result === 'OK') {
        handleLogoutClick()
        onClose()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LoginContainer>
      <FormSide>
        <Title>{t('LOGOUT', 'Logout')}</Title>

        <FormInput>
          <SubTitle>
            {t('ONLY_MANAGER_LOGOUT', 'Only the manager has the password to sign out this App.')}
          </SubTitle>
          {formMethods.errors?.password && (
            <ValidationText>
              {formMethods.errors?.password?.message} {formMethods?.errors?.password?.type === 'required' && '*'}
            </ValidationText>
          )}
          {logoutState.error && logoutState.result && (
            <ValidationText>
              {logoutState.result[0]}
            </ValidationText>
          )}
          <InputWrapper>
            <Input
              type={!passwordSee ? 'password' : 'text'}
              name='password'
              aria-label='password'
              placeholder={t('PASSWORD', 'Password')}
              onChange={cleanLogState}
              ref={formMethods.register({
                required: t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
              })}
              isError={formMethods.errors?.password || logoutState.error}
            />
            <TogglePassword onClick={() => setPasswordSee(!passwordSee)}>
              {!passwordSee ? <Eye /> : <EyeSlash />}
            </TogglePassword>
            <InputBeforeIcon>
              <Lock />
            </InputBeforeIcon>
          </InputWrapper>

          <Button
            color='primary'
            onClick={formMethods.handleSubmit(onSubmit)}
            disabled={logoutState.loading}
          >
            {logoutState.loading
              ? `${t('LOADING', 'Loading')}...`
              : t('SIGN_OUT', 'Sign out')}
          </Button>
        </FormInput>
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
  )
}

export const LogoutPopup = (props) => {
  const logoutProps = {
    ...props,
    isNative: true,
    UIComponent: LogoutUI
  }
  return <LogoutAction {...logoutProps} />
}
