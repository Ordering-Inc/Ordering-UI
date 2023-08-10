import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import parsePhoneNumber from 'libphonenumber-js'
import OtpInput from 'react-otp-input'
import Skeleton from 'react-loading-skeleton'
import {
  LoginForm as LoginFormController,
  useLanguage,
  useConfig,
  useSession,
  useApi
} from 'ordering-components'
import { Alert } from '../../../Confirm/layouts/pfchangs'
import { InputPhoneNumber } from '../../../InputPhoneNumber'
import {
  LoginContainer,
  FormSide,
  FormInput,
  RedirectLink,
  SocialButtons,
  LoginWith,
  SkeletonSocialWrapper,
  OtpWrapper,
  CountdownTimer,
  InputBeforeIcon,
  InputWrapper,
  LoginDivider,
  DividerLine,
  Title,
  ValidationText,
  LogotypeContainer,
  HeroSide,
  ResendCode,
  WrapperButtons
} from './styles'

import { Tabs, Tab } from '../../../../styles/Tabs'

import { Input } from '../../../../styles/Inputs'
import { Button } from '../../../../styles/Buttons'
import { FacebookLoginButton } from '../../../FacebookLogin'
// import { AppleLogin } from '../../../AppleLogin'
import { useCountdownTimer } from '../../../../../../../hooks/useCountdownTimer'
import { formatSeconds } from '../../../../../../../utils'
import { GoogleLoginButton } from '../../../GoogleLogin'
import {
  Envelope
} from 'react-bootstrap-icons'
import AiOutlineWhatsApp from '@meronex/icons/ai/AiOutlineWhatsApp'
import FaSms from '@meronex/icons/fa/FaSms'

const LoginFormUI = (props) => {
  const {
    useLoginByEmail,
    useLoginByCellphone,
    handleChangeInput,
    handleChangeTab,
    handleButtonLoginClick,
    handleCheckPhoneCode,
    elementLinkToForgotPassword,
    formState,
    verifyPhoneState,
    checkPhoneCodeState,
    loginTab,
    isPopup,
    credentials,
    useRootPoint,
    isCustomerMode,
    otpType,
    setOtpType,
    otpState,
    setOtpState,
    alseaOtpInitialize,
    alseaOtpCreateUser,
    createOtpUser,
    handleLoginFacebookAlsea,
    handleLoginGoogleAlsea,
    isDirectLogin
  } = props
  const numOtpInputs = 4
  const otpPlaceholder = [...Array(numOtpInputs)].fill(0).join('')
  const [ordering] = useApi()
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ configs }] = useConfig()
  const formMethods = useForm()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [{ user }, { login }] = useSession()
  const [loginWithOtpState, setLoginWithOtpState] = useState(false)
  const [willVerifyOtpState, setWillVerifyOtpState] = useState(false)
  const [validPhoneFieldState, setValidPhoneField] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [cellphoneOtpType, setCellphoneOtpType] = useState('')
  const [otpLeftTime, _, resetOtpLeftTime] = useCountdownTimer(
    600, !checkPhoneCodeState?.loading && willVerifyOtpState)
  const isOtpEmail = loginTab === 'otp' && otpType === 'email'
  const isOtpCellphone = loginTab === 'otp' && otpType === 'cellphone'
  const initParams = {
    client_id: configs?.google_login_client_id?.value,
    cookiepolicy: 'single_host_origin',
    scope: 'profile'
  }

  const googleLoginEnabled = configs?.google_login_enabled?.value === '1' || !configs?.google_login_enabled?.enabled
  const facebookLoginEnabled = configs?.facebook_login_enabled?.value === '1' || !configs?.facebook_login_enabled?.enabled
  const appleLoginEnabled = configs?.apple_login_enabled?.value === '1' || !configs?.apple_login_enabled?.enabled

  const hasSocialLogin = (
    (configs?.facebook_login?.value === 'true' || configs?.facebook_login?.value === '1') && configs?.facebook_id?.value) ||
    (configs?.google_login_client_id?.value && configs?.google_login_auth_domain?.value && configs?.google_login_api_key?.value && googleLoginEnabled) ||
    (configs?.apple_login_client_id?.value && appleLoginEnabled) ||
    (loginTab === 'cellphone' && (configs?.twilio_service_enabled?.value === 'true' ||
      configs?.twilio_service_enabled?.value === '1'))
  const hasSocialEnabled = googleLoginEnabled || facebookLoginEnabled || appleLoginEnabled

  const onSubmit = async (type) => {
    if (!validPhoneFieldState && (loginTab !== 'otp' || (otpType === 'cellphone' && loginTab === 'otp'))) {
      setAlertState({
        open: true,
        content: [t('INVALID_PHONE_NUMBER', 'Invalid phone number')]
      })

      return
    }
    if (loginTab === 'otp') {
      let available = false
      if (otpType === 'cellphone') {
        resetOtpLeftTime()
        setCellphoneOtpType(type)
        available = await alseaOtpInitialize(parseNumber(credentials.cellphone), type)
      } else {
        available = await alseaOtpInitialize(credentials?.email, 'email')
      }
      if (available) {
        setWillVerifyOtpState(true)
      }
    }
  }

  const handleSuccessApple = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
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
  }

  const handleChangePhoneNumber = (number, isValid) => {
    setValidPhoneField(isValid)
    handleChangeInput({ target: { name: 'cellphone', value: number } })
    formMethods.setValue('cellphone', number, '')
  }

  const handleChangeOtpType = (type) => {
    handleChangeTab('otp')
    setOtpType(type)
  }

  useEffect(() => {
    if (isDirectLogin && user?.cellphone) {
      handleChangePhoneNumber(user?.cellphone)
    }
  }, [isDirectLogin, user])

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ATENTION', 'Atención')]
      })
      setSubmitted(false)
    }
  }, [formState])

  useEffect(() => {
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
    if (otpState?.length === numOtpInputs) {
      if (loginTab === 'otp') {
        if (createOtpUser) {
          alseaOtpCreateUser({
            country_code: parseNumber(credentials?.cellphone).countryPhoneCode,
            cellphone: parseNumber(credentials?.cellphone).cellphone,
            code: otpState
          })
        } else {
          handleButtonLoginClick({
            country_code: parseNumber(credentials?.cellphone).countryPhoneCode
          })
        }
      } else {
        const { cellphone, countryPhoneCode } = parseNumber(credentials?.cellphone)
        handleCheckPhoneCode({
          cellphone: cellphone,
          country_phone_code: countryPhoneCode,
          code: otpState
        })
      }
    }
  }, [otpState])

  useEffect(() => {
    if (checkPhoneCodeState?.result?.error && !checkPhoneCodeState?.loading) {
      setAlertState({
        open: true,
        content: checkPhoneCodeState?.result?.error || checkPhoneCodeState?.result?.result || [t('ATENTION', 'Atención')]
      })
      if (checkPhoneCodeState?.result?.result) {
        setWillVerifyOtpState(false)
      }
    } else if (checkPhoneCodeState?.result?.result && !checkPhoneCodeState?.loading) {
      setAlertState({
        open: true,
        content: t('CODE_SENT', 'The code has been sent')
      })
      resetOtpLeftTime()
    }
  }, [checkPhoneCodeState])

  useEffect(() => {
    if (otpLeftTime === 0) {
      setAlertState({
        open: true,
        content: t('TIME_IS_UP_PLEASE_RESEND_CODE', 'Time is up. Please resend code again')
      })
    }
  }, [otpLeftTime])

  useEffect(() => {
    if (verifyPhoneState?.result?.error) {
      setAlertState({
        open: true,
        content: verifyPhoneState?.result?.result || [t('ATENTION', 'Atención')]
      })
    } else resetOtpLeftTime()
  }, [verifyPhoneState])

  useEffect(() => {
    formMethods.reset()
  }, [loginTab])

  useEffect(() => {
    if (ordering.project === null || !submitted || !useRootPoint) return
    handleButtonLoginClick()
  }, [ordering, submitted])

  return (
    <>
      <LoginContainer isPopup={isPopup}>
        {isCustomerMode && (
          <HeroSide>
            <img alt='Logotype' width='530px' height='620px' src={theme?.images?.general?.callcenterHero} loading='lazy' />
          </HeroSide>
        )}
        <FormSide isPopup={isPopup} isCustomerMode={isCustomerMode}>
          {isCustomerMode ? (
            <LogotypeContainer>
              <img alt='Logotype-callcenter' width='250px' height='105px' src={theme?.images?.logos?.logoCallcenter} loading='lazy' />
            </LogotypeContainer>
          ) : (
            isDirectLogin ? <Title>{t('VERIFICATIOn', 'Verificacion')}</Title> : <Title>{t('LOGIN', 'Login')}</Title>
          )}

          {!loginWithOtpState && !willVerifyOtpState && !isDirectLogin && (
            <LoginWith isPopup={isPopup}>
              <Tabs variant='primary'>
                <Tab
                  onClick={() => handleChangeOtpType('cellphone')}
                  active={isOtpCellphone}
                  borderBottom={isOtpCellphone}
                  activeColor={theme?.colors?.gold}
                  fromLogin
                >
                  {t('BY_OTP_CELLPHONE', 'by Otp Cellphone')}
                </Tab>
                <Tab
                  onClick={() => handleChangeOtpType('email')}
                  active={isOtpEmail}
                  borderBottom={isOtpEmail}
                  activeColor={theme?.colors?.gold}
                  fromLogin
                >
                  {t('BY_OTP_EMAIL', 'by Otp Email')}
                </Tab>
              </Tabs>
            </LoginWith>
          )}

          <FormInput
            noValidate
            isPopup={isPopup}
          >
            {(((useLoginByEmail && loginTab === 'email') || (loginTab === 'otp' && otpType === 'email')) && !willVerifyOtpState) && (
              <>
                {formMethods?.errors?.email?.type === 'required' && (
                  <ValidationText>
                    {formMethods.errors?.email?.message} *
                  </ValidationText>
                )}
                {formMethods.errors?.email?.type === 'pattern' && (
                  <ValidationText>
                    {t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))}
                  </ValidationText>
                )}
                <InputWrapper>
                  <Input
                    type='email'
                    name='email'
                    aria-label='email'
                    placeholder={t('EMAIL', 'Email')}
                    ref={formMethods.register({
                      required: t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')),
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    })}
                    onChange={handleChangeInputEmail}
                    autoComplete='off'
                    isError={formMethods.errors?.email}
                  />
                  <InputBeforeIcon>
                    <Envelope />
                  </InputBeforeIcon>
                </InputWrapper>
              </>
            )}
            {(((useLoginByCellphone && loginTab === 'cellphone') || (loginTab === 'otp' && otpType === 'cellphone')) && !willVerifyOtpState) && (
              <>
                {formMethods.errors?.cellphone && !credentials?.cellphone && (
                  <ValidationText>
                    {formMethods.errors?.cellphone?.message} {formMethods?.errors?.cellphone?.type === 'required' && '*'}
                  </ValidationText>
                )}
                <InputPhoneNumber
                  user={user}
                  value={credentials?.cellphone}
                  setValue={handleChangePhoneNumber}
                  handleIsValid={() => { }}
                  isError={formMethods.errors?.cellphone && !credentials?.cellphone}
                />
              </>
            )}

            {(!verifyPhoneState?.loading && willVerifyOtpState && !checkPhoneCodeState?.loading) && (
              <>
                <CountdownTimer>
                  <span>{formatSeconds(otpLeftTime)}</span>
                </CountdownTimer>

                <OtpWrapper>
                  <OtpInput
                    value={otpState}
                    onChange={otp => setOtpState(otp)}
                    numInputs={numOtpInputs}
                    containerStyle='otp-container'
                    inputStyle='otp-input'
                    placeholder={otpPlaceholder}
                    isInputNum
                    shouldAutoFocus
                  />
                </OtpWrapper>
                <ResendCode disabled={otpLeftTime > 500} onClick={formMethods.handleSubmit(() => onSubmit(cellphoneOtpType))}>
                  {t('RESEND_AGAIN', 'Resend again')}?
                </ResendCode>
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
            {!loginWithOtpState && loginTab !== 'otp' && elementLinkToForgotPassword && (
              <RedirectLink isPopup={isPopup}>
                <span>{t('FORGOT_YOUR_PASSWORD', 'Forgot your password?')}</span>
                {elementLinkToForgotPassword}
              </RedirectLink>
            )}
            {otpType === 'email' ? (
              <>
                <Button
                  color='primary'
                  onClick={formMethods.handleSubmit(onSubmit)}
                  disabled={formState.loading || checkPhoneCodeState?.loading}
                >
                  {t('CONTINUE', 'Continue')}
                </Button>
              </>
            ) : (
              <WrapperButtons>
                {(!willVerifyOtpState &&
                  <Button
                    color='primary'
                    onClick={formMethods.handleSubmit(() => onSubmit('whatsapp'))}
                    disabled={formState.loading || checkPhoneCodeState?.loading}
                  >
                    <AiOutlineWhatsApp />
                    {formState.loading
                      ? `${t('LOADING', 'Loading')}...`
                      : loginWithOtpState || loginTab === 'otp'
                        ? t('WHATSAPP', 'Whatsapp')
                        : t('LOGIN', 'Login')}
                  </Button>
                )}
                {(!willVerifyOtpState &&
                  <Button
                    color='primary'
                    onClick={formMethods.handleSubmit(() => onSubmit('sms'))}
                    disabled={formState.loading || checkPhoneCodeState?.loading}
                  >
                    <FaSms />
                    {formState.loading
                      ? `${t('LOADING', 'Loading')}...`
                      : loginWithOtpState || loginTab === 'otp'
                        ? t('SMS', 'Sms')
                        : t('LOGIN', 'Login')}
                  </Button>
                )}
              </WrapperButtons>
            )}
            {(loginWithOtpState && !willVerifyOtpState) && (
              <Button
                type='button'
                color='secundary'
                disabled={formState.loading || checkPhoneCodeState?.loading}
                onClick={() => {
                  setLoginWithOtpState(false)
                }}
              >
                {t('CANCEL', 'Cancel')}
              </Button>
            )}
          </FormInput>

          {!props.isDisableButtons && hasSocialLogin && hasSocialEnabled && !isDirectLogin && (
            <LoginDivider isPopup={isPopup}>
              <DividerLine />
              <p>{t('OR', 'or')}</p>
              <DividerLine />
            </LoginDivider>
          )}
          {(!props.isDisableButtons && !loginWithOtpState && !isDirectLogin) && (
            Object.keys(configs).length > 0 ? (
              <SocialButtons isPopup={isPopup}>
                {(configs?.facebook_login?.value === 'true' ||
                  configs?.facebook_login?.value === '1') &&
                  configs?.facebook_id?.value &&
                  facebookLoginEnabled &&
                  (
                    <FacebookLoginButton
                      appId={configs?.facebook_id?.value}
                      handleButtonFacebookLoginClick={handleLoginFacebookAlsea}
                    />
                  )}
                {configs?.google_login_client_id?.value && configs?.google_login_auth_domain?.value && configs?.google_login_api_key?.value && googleLoginEnabled && (
                  <GoogleLoginButton
                    initParams={initParams}
                    handleSuccessGoogleLogin={handleLoginGoogleAlsea}
                  />
                )}
                {/* {configs?.apple_login_client_id?.value && appleLoginEnabled &&
                  (
                    <AppleLogin
                      onSuccess={handleSuccessApple}
                      onFailure={(data) => setAlertState({
                        open: true,
                        content: data
                      })}
                    />
                  )} */}
              </SocialButtons>
            ) : (
              <SkeletonSocialWrapper>
                <Skeleton height={43} />
                <Skeleton height={43} />
                {useLoginByCellphone && loginTab === 'cellphone' && (
                  <Skeleton height={43} />
                )}
              </SkeletonSocialWrapper>
            )
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
    </>
  )
}

export const LoginForm = (props) => {
  const isKioskApp = props.useKioskApp
  const loginControllerProps = {
    ...props,
    isRecaptchaEnable: false,
    elementLinkToForgotPassword: isKioskApp ? null : props.elementLinkToForgotPassword,
    useLoginByCellphone: isKioskApp ? null : props.useLoginByCellphone,
    elementLinkToSignup: isKioskApp ? null : props.elementLinkToSignup,
    isDisableButtons: isKioskApp ? true : props.isDisableButtons,
    isPFChangsLayout: true,
    UIComponent: LoginFormUI
  }
  return <LoginFormController {...loginControllerProps} />
}
