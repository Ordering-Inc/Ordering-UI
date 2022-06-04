import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import parsePhoneNumber from 'libphonenumber-js'
import OtpInput from 'react-otp-input'
import Skeleton from 'react-loading-skeleton'

import {
  // LoginForm as LoginFormController,
  useLanguage,
  useConfig,
  useSession,
  ReCaptcha,
  useApi
} from 'ordering-components'
import { LoginForm as LoginFormController } from './naked'
import { Alert } from '../../../Confirm'
import { SpinnerLoader } from '../../../../../../../components/SpinnerLoader'
import { InputPhoneNumber } from '../../../InputPhoneNumber'
import {
  LoginContainer,
  FormSide,
  FormInput,
  RedirectLink,
  SocialButtons,
  LoginWith,
  SkeletonSocialWrapper,
  TogglePassword,
  OtpWrapper,
  CountdownTimer,
  ReCaptchaWrapper,
  InputBeforeIcon,
  InputWrapper,
  LoginDivider,
  DividerLine,
  Title,
  ValidationText,
  LogotypeContainer,
  HeroSide
} from './styles'

import { Tabs, Tab } from '../../../../styles/Tabs'

import { Input } from '../../../../styles/Inputs'
import { Button } from '../../../../styles/Buttons'
import { FacebookLoginButton } from '../../../FacebookLogin'
import { AppleLogin } from '../../../AppleLogin'
import { useCountdownTimer } from '../../../../../../../hooks/useCountdownTimer'
import { formatSeconds } from '../../../../../../../utils'
import { GoogleLoginButton } from '../../../GoogleLogin'
import {
  Envelope,
  Lock,
  Eye,
  EyeSlash,
  BoxArrowInRight
} from 'react-bootstrap-icons'

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
    enableReCaptcha,
    useRootPoint,
    isCustomerMode
  } = props
  const numOtpInputs = 4
  const [ordering, { setOrdering }] = useApi()
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ configs }] = useConfig()
  const formMethods = useForm()

  const emailInput = useRef(null)

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, { login }] = useSession()
  const [passwordSee, setPasswordSee] = useState(false)
  const [willVerifyOtpState, setWillVerifyOtpState] = useState(false)
  const [validPhoneFieldState, setValidPhoneField] = useState(false)
  const [projectName, setProjectName] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [otpState, setOtpState] = useState('')

  const [otpLeftTime, _, resetOtpLeftTime] = useCountdownTimer(
    600, !checkPhoneCodeState?.loading && willVerifyOtpState)

  const initParams = {
    client_id: configs?.google_login_client_id?.value,
    cookiepolicy: 'single_host_origin',
    scope: 'profile'
  }

  const hasSocialLogin = (
    (configs?.facebook_login?.value === 'true' || configs?.facebook_login?.value === '1') && configs?.facebook_id?.value && configs?.facebook_login_enabled?.value === '1') ||
    (configs?.google_login_client_id?.value && configs?.google_login_enabled?.value === '1') ||
    (configs?.apple_login_client_id?.value && configs?.apple_login_enabled?.value === '1')

  const onSubmit = async () => {
    if (loginTab === 'cellphone_otp') {
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
    formMethods.register('cellphone', {
      required: (loginTab === 'cellphone' || loginTab === 'cellphone_otp')
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
    handleChangePhoneNumber('')
    formMethods.reset()
  }, [loginTab])

  useEffect(() => {
    if (ordering.project === null || !submitted || !useRootPoint) return
    handleButtonLoginClick()
  }, [ordering, submitted])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
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
            <Title>{t('LOGIN', 'Login')}</Title>
          )}

          {(useLoginByEmail && useLoginByCellphone) && (
            <LoginWith isPopup={isPopup}>
              <Tabs variant='primary'>
                {useLoginByEmail && (
                  <Tab
                    onClick={() => {
                      handleChangeTab('email')
                      setWillVerifyOtpState(false)
                    }}
                    active={loginTab === 'email'}
                    borderBottom={loginTab === 'email'}
                  >
                    {t('BY_EMAIL', 'by Email')}
                  </Tab>
                )}
                {useLoginByCellphone && (
                  <Tab
                    onClick={() => {
                      handleChangeTab('cellphone')
                      setWillVerifyOtpState(false)
                    }}
                    active={loginTab === 'cellphone'}
                    borderBottom={loginTab === 'cellphone'}
                  >
                    {t('BY_PHONE', 'by Phone')}
                  </Tab>
                )}
                {
                  useLoginByCellphone &&
                  configs && Object.keys(configs).length > 0 &&
                  (configs?.twilio_service_enabled?.value === 'true' || configs?.twilio_service_enabled?.value === '1') &&
                  configs?.otp_cellphone_enabled?.value === '1' && (
                    <Tab
                      onClick={() => handleChangeTab('cellphone_otp')}
                      active={loginTab === 'cellphone_otp'}
                      borderBottom={loginTab === 'cellphone_otp'}
                    >
                      {t('BY_PHONE_OTP', 'by Phone OTP')}
                    </Tab>)
                }
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
                        required: loginTab === 'email'
                          ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email'))
                          : null,
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
              {(useLoginByCellphone && (loginTab === 'cellphone' || loginTab === 'cellphone_otp') && !willVerifyOtpState) && (
                <>
                  {formMethods.errors?.cellphone && !credentials?.cellphone && (
                    <ValidationText>
                      {formMethods.errors?.cellphone?.message} {formMethods?.errors?.cellphone?.type === 'required' && '*'}
                    </ValidationText>
                  )}
                  <InputPhoneNumber
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
                    onClick={() => setWillVerifyOtpState(false)}
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

              {loginTab !== 'cellphone_otp' && (
                <>
                  {formMethods.errors?.password && (
                    <ValidationText>
                      {formMethods.errors?.password?.message} {formMethods?.errors?.password?.type === 'required' && '*'}
                    </ValidationText>
                  )}
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
                      isError={formMethods.errors?.password}
                    />
                    <TogglePassword onClick={togglePasswordView}>
                      {!passwordSee ? <Eye /> : <EyeSlash />}
                    </TogglePassword>
                    <InputBeforeIcon>
                      <Lock />
                    </InputBeforeIcon>
                  </InputWrapper>
                </>
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
              {loginTab !== 'cellphone_otp' && (
                <RedirectLink isPopup={isPopup}>
                  <span>{t('FORGOT_YOUR_PASSWORD', 'Forgot your password?')}</span>
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
                  color='primary'
                  onClick={formMethods.handleSubmit(onSubmit)}
                  disabled={formState.loading}
                >
                  {formState.loading
                    ? `${t('LOADING', 'Loading')}...`
                    : loginTab === 'cellphone_otp'
                      ? t('GET_VERIFY_CODE', 'Get verify code')
                      : t('LOGIN', 'Login')}
                </Button>
              )}
            </FormInput>
          )}

          {(elementLinkToSignup && loginTab !== 'cellphone_otp') && (
            <RedirectLink register isPopup={isPopup}>
              <span>{t('NEW_ON_PLATFORM', theme?.defaultLanguages?.NEW_ON_PLATFORM || 'New on Ordering?')}</span>
              {elementLinkToSignup}
            </RedirectLink>
          )}
          {hasSocialLogin && (
            <LoginDivider isPopup={isPopup}>
              <DividerLine />
              <p>{t('OR', 'or')}</p>
              <DividerLine />
            </LoginDivider>
          )}
          {!props.isDisableButtons && (
            Object.keys(configs).length > 0 ? (
              <SocialButtons isPopup={isPopup}>
                {(configs?.facebook_login?.value === 'true' ||
                  configs?.facebook_login?.value === '1') &&
                  configs?.facebook_id?.value && configs?.facebook_login_enabled?.value === '1' &&
                  (
                    <FacebookLoginButton
                      appId={configs?.facebook_id?.value}
                      handleSuccessFacebookLogin={handleSuccessFacebook}
                    />
                  )}
                {configs?.google_login_client_id?.value && configs?.google_login_enabled?.value === '1' && (
                  <GoogleLoginButton
                    initParams={initParams}
                    handleSuccessGoogleLogin={handleSuccessGoogle}
                    onFailure={(data) => console.log('onFailure', data)}
                  />
                )}
                {configs?.apple_login_client_id?.value && configs?.apple_login_enabled?.value === '1' &&
                  (
                    <AppleLogin
                      onSuccess={handleSuccessApple}
                      onFailure={(data) => console.log('onFailure', data)}
                    />
                  )}
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
