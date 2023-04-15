import React, { useState, useEffect, useRef } from 'react'
import {
  LoginForm as LoginFormController,
  useLanguage,
  useConfig,
  useSession,
  ReCaptcha
} from 'ordering-components'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import OtpInput from 'react-otp-input'
import AiOutlineEye from '@meronex/icons/ai/AiOutlineEye'
import AiOutlineEyeInvisible from '@meronex/icons/ai/AiOutlineEyeInvisible'
import { useTheme } from 'styled-components'
import parsePhoneNumber from 'libphonenumber-js'

import { Tabs, Tab, Button, CustomInputContainer } from '../../styles'
import { GoogleLoginButton } from '../GoogleLogin'
import { FacebookLoginButton } from '../FacebookLogin'
import { AppleLogin } from '../AppleLogin'
import { InputPhoneNumber } from '../InputPhoneNumber'

import { Alert } from '../../../../../components/Confirm'
import { SpinnerLoader } from '../../../../../components/SpinnerLoader'
import { SmsLoginButton } from '../../../../../components/SmsLogin'
import { useCountdownTimer } from '../../../../../hooks/useCountdownTimer'
import { useRecaptcha } from '../../../../../hooks/useRecaptcha'
import { formatSeconds } from '../../../../../utils'

import {
  LoginContainer,
  FormSide,
  FormInput,
  RedirectLink,
  SocialButtons,
  LoginWith,
  SkeletonSocialWrapper,
  WrapperPassword,
  TogglePassword,
  OtpWrapper,
  CountdownTimer,
  ReCaptchaWrapper,
  Title,
  Description,
  DottedBorderBound
} from './styles'

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
    elementLinkToSignup,
    elementLinkToForgotPassword,
    formState,
    verifyPhoneState,
    checkPhoneCodeState,
    loginTab,
    isPopup,
    credentials,
    enableReCaptcha
  } = props
  const numOtpInputs = 4
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const formMethods = useForm()
  const [recaptchaConfig] = useRecaptcha(enableReCaptcha)
  const [reCaptchaVersion, setRecaptchaVersion] = useState({ version: '', siteKey: '' })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, { login }] = useSession()
  const theme = useTheme()
  const [passwordSee, setPasswordSee] = useState(false)
  const emailInput = useRef(null)
  const [loginWithOtpState, setLoginWithOtpState] = useState(false)
  const [willVerifyOtpState, setWillVerifyOtpState] = useState(false)
  const [validPhoneFieldState, setValidPhoneField] = useState(false)
  const [otpState, setOtpState] = useState('')
  const [otpLeftTime, , resetOtpLeftTime] = useCountdownTimer(
    600, !checkPhoneCodeState?.loading && willVerifyOtpState)

  const initParams = {
    client_id: configs?.google_login_client_id?.value,
    cookiepolicy: 'single_host_origin',
    scope: 'profile'
  }

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
      handleButtonLoginClick()
    }
  }

  const handleSuccessFacebook = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
  }

  const handleSuccessApple = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
  }

  const handleSuccessGoogle = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
  }

  const togglePasswordView = () => {
    setPasswordSee(!passwordSee)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
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
    if (emailInput?.current) {
      emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
    }
  }

  const handleChangePhoneNumber = (number, isValid) => {
    setValidPhoneField(isValid)
    handleChangeInput({ target: { name: 'cellphone', value: number } })
    formMethods.setValue('cellphone', number, '')
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
      if (formState.result?.result?.[0] === 'ERROR_AUTH_VERIFICATION_CODE') {
        if (configs?.security_recaptcha_site_key?.value) {
          setRecaptchaVersion({ version: 'v2', siteKey: configs?.security_recaptcha_site_key?.value })
          setAlertState({
            open: true,
            content: [t('TRY_AGAIN', 'Please try again')]
          })
          return
        }
        setAlertState({
          open: true,
          content: [t('CONFIG_DOESNOT_RECAPTCHA_KEY', 'the config doesn\'t have recaptcha site key')]
        })
        return
      }
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
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
    } else { resetOtpLeftTime() }
  }, [checkPhoneCodeState])

  useEffect(() => {
    if (verifyPhoneState?.result?.error) {
      setAlertState({
        open: true,
        content: verifyPhoneState?.result?.result || [t('ERROR', 'Error')]
      })
    } else { resetOtpLeftTime() }
  }, [verifyPhoneState])

  useEffect(() => {
    if (recaptchaConfig?.siteKey) {
      setRecaptchaVersion({ version: recaptchaConfig?.version, siteKey: recaptchaConfig?.siteKey })
    }
  }, [recaptchaConfig])

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
          <Title>{t('SIGN_IN_WITH_ORDERING', 'Sign in with Ordering')}</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum pharetra placerat massa risus aliquet purus arcu. Quis enim, interdum ac massa feugiat arcu nulla aliquet.
          </Description>
          {(!props.isDisableButtons && !loginWithOtpState) && (
            Object.keys(configs).length > 0 ? (
              <SocialButtons isPopup={isPopup}>
                {configs?.google_login_client_id?.value && (
                  <GoogleLoginButton
                    initParams={initParams}
                    handleSuccessGoogleLogin={handleSuccessGoogle}
                    onFailure={(data) => console.log('onFailure', data)}
                  />
                )}
                {(configs?.facebook_login?.value === 'true' ||
                  configs?.facebook_login?.value === '1') &&
                  configs?.facebook_id?.value &&
                  (
                    <FacebookLoginButton
                      appId={configs?.facebook_id?.value}
                      handleSuccessFacebookLogin={handleSuccessFacebook}
                    />
                  )}
                {configs?.apple_login_client_id?.value &&
                  (
                    <AppleLogin
                      onSuccess={handleSuccessApple}
                      onFailure={(data) => console.log('onFailure', data)}
                    />
                  )}
                {useLoginByCellphone && loginTab === 'cellphone' &&
                  configs && Object.keys(configs).length > 0 && (configs?.twilio_service_enabled?.value === 'true' ||
                    configs?.twilio_service_enabled?.value === '1') && (
                    <SmsLoginButton
                      handleSmsLogin={() => { setLoginWithOtpState(true) }}
                    />
                  )}
              </SocialButtons>
            ) : (
              <SkeletonSocialWrapper>
                <Skeleton height={43} />
                <Skeleton height={43} />
                <Skeleton height={43} />
                {useLoginByCellphone && loginTab === 'cellphone' && (
                  <Skeleton height={43} />
                )}
              </SkeletonSocialWrapper>
            )
          )}
          <DottedBorderBound />
          {(useLoginByEmail && useLoginByCellphone && !loginWithOtpState) && (
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
                    {t('LOGIN_WITH_CELLPHONE', theme?.defaultLanguages?.LOGIN_WITH_CELLPHONE || 'Login with Cellphone')}
                  </Tab>
                )}
              </Tabs>
            </LoginWith>
          )}

          {(useLoginByCellphone || useLoginByEmail) && (
            <FormInput
              noValidate
              isPopup={isPopup}
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
              {useLoginByEmail && loginTab === 'email' && (
                <CustomInputContainer
                  placeholder={t('EMAIL', 'Email')}
                >
                  <input
                    type='email'
                    name='email'
                    aria-label='email'
                    ref={emailInput}
                    placeholder={t('EMAIL', 'Email')}
                    onChange={handleChangeInputEmail}
                    autoComplete='off'
                  />
                </CustomInputContainer>
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
                </>
              )}

              {(verifyPhoneState?.loading || checkPhoneCodeState?.loading) && (
                <SpinnerLoader
                  style={{ height: 160 }}
                />
              )}

              {!loginWithOtpState && (
                <WrapperPassword>
                  <CustomInputContainer
                    placeholder={t('PASSWORD', 'Password')}
                  >
                    <input
                      type={!passwordSee ? 'password' : 'text'}
                      name='password'
                      aria-label='password'
                      placeholder={t('PASSWORD', 'Password')}
                      ref={formMethods.register({
                        required: t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
                      })}
                      onChange={(e) => handleChangeInput(e)}
                    />
                  </CustomInputContainer>
                  <TogglePassword onClick={togglePasswordView}>
                    {!passwordSee ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </TogglePassword>
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
              {props.isRecaptchaEnable && enableReCaptcha && (
                <ReCaptchaWrapper>
                  <ReCaptcha handleReCaptcha={handleReCaptcha} reCaptchaVersion={reCaptchaVersion} />
                </ReCaptchaWrapper>
              )}
              {!loginWithOtpState && (
                <RedirectLink isPopup={isPopup}>
                  {elementLinkToForgotPassword}
                </RedirectLink>
              )}
              {props.isRecaptchaEnable && enableReCaptcha && (
                <ReCaptchaWrapper>
                  <ReCaptcha handleReCaptcha={handleReCaptcha} />
                </ReCaptchaWrapper>
              )}
              {(!willVerifyOtpState &&
                <Button
                  color='primaryGradient'
                  onClick={formMethods.handleSubmit(onSubmit)}
                  disabled={formState.loading}
                >
                  {formState.loading
                    ? `${t('LOADING', 'Loading')}...`
                    : loginWithOtpState
                      ? t('GET_VERIFY_CODE', 'Get verify code')
                      : t('SIGN_IN_WITH_ORDERING', 'Sign in with Ordering')}
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
            </FormInput>
          )}
          <DottedBorderBound bottom />
          {(elementLinkToSignup && !loginWithOtpState) && (
            <RedirectLink register isPopup={isPopup} isCreateAccount>
              <span>{t('NEW_ON_PLATFORM', theme?.defaultLanguages?.NEW_ON_PLATFORM || 'New on Ordering?')}</span>
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
    isRecaptchaEnable: true,
    UIComponent: LoginFormUI
  }
  return <LoginFormController {...loginControllerProps} />
}
