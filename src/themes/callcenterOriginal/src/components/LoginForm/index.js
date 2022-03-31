import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import parsePhoneNumber from 'libphonenumber-js'
import OtpInput from 'react-otp-input'

import {
  LoginForm as LoginFormController,
  useLanguage,
  ReCaptcha,
  useApi
} from 'ordering-components'

import {
  Envelope,
  Lock,
  Eye,
  EyeSlash,
  BoxArrowInRight
} from 'react-bootstrap-icons'

import {
  LoginContainer,
  FormSide,
  FormInput,
  RedirectLink,
  LoginWith,
  TogglePassword,
  OtpWrapper,
  CountdownTimer,
  ReCaptchaWrapper,
  InputBeforeIcon,
  InputWrapper,
  Title,
  HeroSide,
  ButtonContainer,
  LogotypeContainer
} from './styles'

import { Tabs, Tab } from '../../styles/Tabs'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useCountdownTimer } from '../../../../../hooks/useCountdownTimer'
import { formatSeconds } from '../../../../../utils'
import { Alert } from '../Confirm'
import { SpinnerLoader } from '../../../../../components/SpinnerLoader'
import { InputPhoneNumber } from '../InputPhoneNumber'

import {InputPhoneNumber} from 'ordering-ui/callcenter_original'


const LoginFormUI = (props) => {
  const {
    useLoginByEmail,
    useLoginByCellphone,
    handleChangeInput,
    handleReCaptcha,
    handleChangeTab,
    handleButtonLoginClick,
    handleSendVerifyCode,
    handleCheckPhoneCode,
    elementLinkToForgotPassword,
    formState,
    verifyPhoneState,
    checkPhoneCodeState,
    loginTab,
    isPopup,
    credentials,
    enableReCaptcha,
    useRootPoint
  } = props
  const numOtpInputs = 4

  const [ordering, { setOrdering }] = useApi()
  const [, t] = useLanguage()
  const theme = useTheme()
  const formMethods = useForm()

  const emailInput = useRef(null)

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [passwordSee, setPasswordSee] = useState(false)
  const [loginWithOtpState, setLoginWithOtpState] = useState(false)
  const [willVerifyOtpState, setWillVerifyOtpState] = useState(false)
  const [validPhoneFieldState, setValidPhoneField] = useState(false)

  const [projectName, setProjectName] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [otpState, setOtpState] = useState('')
  const [otpLeftTime, _, resetOtpLeftTime] = useCountdownTimer(
    600, !checkPhoneCodeState?.loading && willVerifyOtpState)

  const onSubmit = async () => {
    if (loginWithOtpState) {
      if (!validPhoneFieldState) {
        setAlertState({
          open: true,
          content: [t('INVALID_PHONE_NUMBER', 'Invalid phone number')]
        })

        return
      }
      setWillVerifyOtpState(true)
    } else {
      if (projectName) {
        setOrdering({ ...ordering, project: projectName })
        localStorage.setItem('project_name', projectName)
        setSubmitted(true)
        return
      }

      handleButtonLoginClick()
    }
  }

  const togglePasswordView = () => {
    setPasswordSee(!passwordSee)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    if (checkPhoneCodeState?.result?.error || verifyPhoneState?.result?.error) {
      setOtpState('')
    }
  }

  const parseNumber = (unparsedNumber) => {
    if (!unparsedNumber) return {}

    const parsedNumber = parsePhoneNumber(unparsedNumber)
    const cellphone = parsedNumber?.nationalNumber
    const countryPhoneCode = +(parsedNumber?.countryCallingCode)

    return {
      cellphone,
      countryPhoneCode
    }
  }

  const handleChangeInputEmail = (e) => {
    handleChangeInput({ target: { name: 'email', value: e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '') } })
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''))
    emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
  }

  const handleChangePhoneNumber = (number, isValid) => {
    setValidPhoneField(isValid)
    handleChangeInput({ target: { name: 'cellphone', value: number } })
    formMethods.setValue('cellphone', number, '')
  }

  const handleChangeProject = (e) => {
    setSubmitted(false)
    setProjectName(e.target.value)
  }

  const handleSendOtp = () => {
    if (willVerifyOtpState) {
      const { cellphone, countryPhoneCode } = parseNumber(credentials?.cellphone)

      resetOtpLeftTime()

      handleSendVerifyCode({
        cellphone: cellphone,
        country_phone_code: countryPhoneCode
      })
    }
  }

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
      setSubmitted(false)
    }
  }, [formState])

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(error => error.message)
      })
    }
  }, [formMethods.errors])

  useEffect(() => {
    formMethods.register('email', {
      required: loginTab === 'email'
        ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email'))
        : null,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    })
    formMethods.register('cellphone', {
      required: loginTab === 'cellphone'
        ? t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required').replace('_attribute_', t('CELLPHONE', 'Cellphone'))
        : null
    })
    if (useRootPoint) {
      formMethods.register('project', {
        required: t('VALIDATION_ERROR_PROJECT_REQUIRED', 'The field project is required').replace('_attribute_', t('PROJECT', 'Project'))
      })
    }
  }, [formMethods])

  useEffect(() => {
    handleSendOtp()
  }, [willVerifyOtpState])

  useEffect(() => {
    if (otpState?.length === numOtpInputs) {
      const { cellphone, countryPhoneCode } = parseNumber(credentials?.cellphone)

      handleCheckPhoneCode({
        cellphone: cellphone,
        country_phone_code: countryPhoneCode,
        code: otpState
      })
    }
  }, [otpState])

  useEffect(() => {
    if (checkPhoneCodeState?.result?.error) {
      setAlertState({
        open: true,
        content: checkPhoneCodeState?.result?.result || [t('ERROR', 'Error')]
      })
    } else resetOtpLeftTime()
  }, [checkPhoneCodeState])

  useEffect(() => {
    if (verifyPhoneState?.result?.error) {
      setAlertState({
        open: true,
        content: verifyPhoneState?.result?.result || [t('ERROR', 'Error')]
      })
    } else resetOtpLeftTime()
  }, [verifyPhoneState])

  useEffect(() => {
    if (ordering.project === null || !submitted || !useRootPoint) return
    handleButtonLoginClick()
  }, [ordering, submitted])

  return (
    <LoginContainer isPopup={isPopup}>
      <HeroSide>
        <img alt='Logotype' width='530px' height='620px' src={theme?.images?.general?.callcenterHero} loading='lazy' />
      </HeroSide>
      <FormSide isPopup={isPopup}>
        <LogotypeContainer>
          <img alt='Logotype-callcenter' width='250px' height='105px' src={theme?.images?.logos?.logoCallcenter} loading='lazy' />
        </LogotypeContainer>
        {(useLoginByEmail && useLoginByCellphone && !loginWithOtpState) && (
          <LoginWith isPopup={isPopup}>
            <Title>{t('LOGIN', 'Login')}</Title>
            <Tabs variant='primary'>
              {useLoginByEmail && (
                <Tab
                  onClick={() => handleChangeTab('email')}
                  active={loginTab === 'email'}
                  borderBottom={loginTab === 'email'}
                >
                  {t('BY_EMAIL', 'by Email')}
                </Tab>
              )}
              {useLoginByCellphone && (
                <Tab
                  onClick={() => handleChangeTab('cellphone')}
                  active={loginTab === 'cellphone'}
                  borderBottom={loginTab === 'cellphone'}
                >
                  {t('BY_PHONE', 'by Phone')}
                </Tab>
              )}
            </Tabs>
          </LoginWith>
        )}

        {(useLoginByCellphone || useLoginByEmail || useRootPoint) && (
          <FormInput
            noValidate
            isPopup={isPopup}
          >
            {useRootPoint && (
              <InputWrapper>
                <Input
                  type='text'
                  name='project'
                  aria-label='project'
                  placeholder={t('PROJECT', 'Project')}
                  ref={formMethods.register({
                    required: t(
                      'VALIDATION_ERROR_REQUIRED',
                      'Project is required'
                    ).replace('_attribute_', t('PROJECT', 'Project'))
                  })}
                  onChange={(e) => handleChangeProject(e)}
                  autoComplete='off'
                  autoCapitalize='off'
                />
                <InputBeforeIcon>
                  <BoxArrowInRight />
                </InputBeforeIcon>
              </InputWrapper>
            )}
            {useLoginByEmail && loginTab === 'email' && (
              <InputWrapper>
                <Input
                  type='email'
                  name='email'
                  aria-label='email'
                  placeholder={t('EMAIL', 'Email')}
                  ref={(e) => (emailInput.current = e)}
                  onChange={handleChangeInputEmail}
                  autoComplete='off'
                />
                <InputBeforeIcon>
                  <Envelope />
                </InputBeforeIcon>
              </InputWrapper>
            )}
            {(useLoginByCellphone && loginTab === 'cellphone' && !willVerifyOtpState) && (
              <InputPhoneNumber
                value={credentials?.cellphone}
                setValue={handleChangePhoneNumber}
                handleIsValid={() => { }}
              />
            )}

            {(!verifyPhoneState?.loading && willVerifyOtpState && !checkPhoneCodeState?.loading) && (
              <>
                <CountdownTimer>
                  <span>{formatSeconds(otpLeftTime)}</span>
                  <span onClick={handleSendOtp}>
                    {t('RESEND_AGAIN', 'Resend again')}?
                  </span>
                </CountdownTimer>

                <OtpWrapper>
                  <OtpInput
                    value={otpState}
                    onChange={otp => setOtpState(otp)}
                    numInputs={numOtpInputs}
                    containerStyle='otp-container'
                    inputStyle='otp-input'
                    placeholder='0000'
                    isInputNum
                    shouldAutoFocus
                  />
                </OtpWrapper>

                <Button
                  type='button'
                  color='secundary'
                  disabled={formState.loading}
                  onClick={() => {
                    setLoginWithOtpState(false)
                    setWillVerifyOtpState(false)
                  }}
                >
                  {t('CANCEL', 'Cancel')}
                </Button>
              </>
            )}

            {(verifyPhoneState?.loading || checkPhoneCodeState?.loading) && (
              <SpinnerLoader
                style={{ height: 160 }}
              />
            )}

            {!loginWithOtpState && (
              <InputWrapper>
                <Input
                  type={!passwordSee ? 'password' : 'text'}
                  name='password'
                  aria-label='password'
                  placeholder={t('PASSWORD', 'Password')}
                  ref={formMethods.register({
                    required: t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
                  })}
                  onChange={(e) => handleChangeInput(e)}
                />
                <TogglePassword onClick={togglePasswordView}>
                  {!passwordSee ? <Eye /> : <EyeSlash />}
                </TogglePassword>
                <InputBeforeIcon>
                  <Lock />
                </InputBeforeIcon>
              </InputWrapper>
            )}
            {!loginWithOtpState && (
              <RedirectLink RedirectLinkisPopup={isPopup}>
                <span>{t('FORGOT_YOUR_PASSWORD', 'Forgot your password?')}</span>
                {elementLinkToForgotPassword}
              </RedirectLink>
            )}
            {props.isRecaptchaEnable && enableReCaptcha && (
              <ReCaptchaWrapper>
                <ReCaptcha handleReCaptcha={handleReCaptcha} />
              </ReCaptchaWrapper>
            )}
            <ButtonContainer>

              {(!willVerifyOtpState &&
                <Button
                  color='primary'
                  onClick={formMethods.handleSubmit(onSubmit)}
                  disabled={formState.loading}
                >
                  {formState.loading
                    ? `${t('LOADING', 'Loading')}...`
                    : loginWithOtpState
                      ? t('GET_VERIFY_CODE', 'Get verify code')
                      : t('LOGIN', 'Login')}
                </Button>
              )}
              {(loginWithOtpState && !willVerifyOtpState) && (
                <Button
                  type='button'
                  color='secundary'
                  disabled={formState.loading}
                  onClick={() => {
                    setLoginWithOtpState(false)
                  }}
                >
                  {t('CANCEL', 'Cancel')}
                </Button>
              )}
            </ButtonContainer>
          </FormInput>
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
  )
}

export const LoginForm = (props) => {
  const loginControllerProps = {
    ...props,
    UIComponent: LoginFormUI
  }
  return <LoginFormController {...loginControllerProps} />
}
