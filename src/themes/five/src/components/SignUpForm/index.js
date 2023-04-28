import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import parsePhoneNumber from 'libphonenumber-js'
import OtpInput from 'react-otp-input'

import {
  Person,
  Envelope,
  Lock,
  Eye,
  EyeSlash
} from 'react-bootstrap-icons'

import {
  SignupForm as SignUpController,
  useLanguage,
  useConfig,
  useSession,
  useToast, ToastType,
  ReCaptcha,
  useEvent
} from 'ordering-components'
import { useCountdownTimer } from '../../../../../hooks/useCountdownTimer'
import { useRecaptcha } from '../../../../../hooks/useRecaptcha'
import { SpinnerLoader } from '../../../../../components/SpinnerLoader'

import { Tabs, Tab } from '../../styles/Tabs'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { Checkbox } from '../../../../../styles/Checkbox'
import { sortInputFields, formatSeconds } from '../../../../../utils'
import { InputPhoneNumber } from '../InputPhoneNumber'
import { FacebookLoginButton } from '../FacebookLogin'
import { GoogleLoginButton } from '../GoogleLogin'
import { AppleLogin } from '../AppleLogin'
import { Alert } from '../Confirm'

import { LoginWith as SignupWith, CountdownTimer, OtpWrapper, ResendCode } from '../LoginForm/styles'

import {
  SignUpContainer,
  FormSide,
  FormInput,
  SocialButtons,
  RedirectLink,
  SkeletonWrapper,
  SkeletonSocialWrapper,
  WrapperPassword,
  TogglePassword,
  ReCaptchaWrapper,
  LoginDivider,
  DividerLine,
  Title,
  InputWrapper,
  InputBeforeIcon,
  TermsConditionWrapper,
  BussinessAndDriverSignUp,
  CheckboxArea,
  PromotionsWrapper,
  ValidationText,
  InputContainer
} from './styles'

const notValidationFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'address_notes']

const SignUpFormUI = (props) => {
  const {
    handleChangeInput,
    handleButtonSignupClick,
    handleReCaptcha,
    elementLinkToLogin,
    useChekoutFileds,
    validationFields,
    showField,
    isRequiredField,
    formState,
    handleSuccessSignup,
    isPopup,
    externalPhoneNumber,
    saveCustomerUser,
    fieldsNotValid,
    signupData,
    enableReCaptcha,
    closeModal,
    handleChangePromotions,
    isCustomerMode,
    checkPhoneCodeState,
    generateOtpCode,
    numOtpInputs,
    setWillVerifyOtpState,
    willVerifyOtpState,
    setOtpState,
    otpState,
    setSignUpTab,
    signUpTab,
    useSignUpFullDetails,
    useSignUpOtpEmail,
    useSignUpOtpCellphone,
    isGuest
  } = props
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()
  const [{ configs }] = useConfig()
  const formMethods = useForm()
  const [events] = useEvent()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [recaptchaConfig] = useRecaptcha(enableReCaptcha)
  const [reCaptchaVersion, setRecaptchaVersion] = useState({ version: '', siteKey: '' })
  const [, { login }] = useSession()
  const isFacebookLogin = configs?.facebook_login?.value === 'true' || configs?.facebook_login?.value === '1'
  const googleLoginEnabled = configs?.google_login_enabled?.value === '1' || !configs?.google_login_enabled?.enabled
  const facebookLoginEnabled = configs?.facebook_login_enabled?.value === '1' || !configs?.facebook_login_enabled?.enabled
  const appleLoginEnabled = configs?.apple_login_enabled?.value === '1' || !configs?.apple_login_enabled?.enabled

  const [otpLeftTime, , resetOtpLeftTime] = useCountdownTimer(600, !checkPhoneCodeState?.loading && willVerifyOtpState)
  const [userPhoneNumber, setUserPhoneNumber] = useState('')
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)
  const [passwordSee, setPasswordSee] = useState(false)
  const [fieldNumber, setFieldNumber] = useState(1)
  const [currentPhoneNumber, setCurrentPhoneNumber] = useState(null)

  const showInputPhoneNumber = (validationFields?.fields?.checkout?.cellphone?.enabled ?? false) || configs?.verification_phone_required?.value === '1'

  const initParams = {
    client_id: configs?.google_login_client_id?.value,
    cookiepolicy: 'single_host_origin',
    scope: 'profile'
  }

  const hasSocialLogin = (
    (configs?.facebook_login?.value === 'true' || configs?.facebook_login?.value === '1') && configs?.facebook_id?.value) ||
    (configs?.google_login_client_id?.value && configs?.google_login_auth_domain?.value && configs?.google_login_api_key?.value && googleLoginEnabled) ||
    (configs?.apple_login_client_id?.value && appleLoginEnabled)
  const hasSocialEnabled = googleLoginEnabled || facebookLoginEnabled || appleLoginEnabled

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

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
    closeModal && closeModal()
  }

  const handleSendOtp = () => {
    if (otpLeftTime < 520 && willVerifyOtpState) {
      resetOtpLeftTime()
      onSubmit()
    }
  }

  const handleSignUpTab = (tab) => {
    setSignUpTab(tab)
    formMethods.clearErrors()
  }

  const onSubmit = async () => {
    const isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true
    if (!userPhoneNumber &&
      ((validationFields?.fields?.checkout?.cellphone?.enabled &&
        validationFields?.fields?.checkout?.cellphone?.required) ||
        configs?.verification_phone_required?.value === '1') && signUpTab !== 'otpEmail'
    ) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required.')]
      })
      return
    }
    if (!isPhoneNumberValid && signUpTab !== 'otpEmail') {
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
      })
      return
    }
    if (signUpTab === 'otpEmail' || signUpTab === 'otpCellphone') {
      generateOtpCode()
      return
    }
    handleButtonSignupClick && handleButtonSignupClick()
    if (!formState.loading && formState.result.result && !formState.result.error) {
      handleSuccessSignup(formState.result.result)
    }
  }

  const handleChangePhoneNumber = (number, isValid) => {
    setUserPhoneNumber(number)

    let phoneNumberParser = null
    let phoneNumber = {
      country_phone_code: {
        name: 'country_phone_code',
        value: ''
      },
      cellphone: {
        name: 'cellphone',
        value: ''
      }
    }
    if (isValid) {
      phoneNumberParser = parsePhoneNumber(number)
    }
    if (phoneNumberParser) {
      phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: phoneNumberParser.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: phoneNumberParser.nationalNumber
        }
      }
    }
    handleChangeInput(phoneNumber, true)
  }

  const handleChangeInputEmail = (e) => {
    handleChangeInput({ target: { name: 'email', value: e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '') } })
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''))
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
    } else if (!formState.loading && !formState.result?.error && formState.result?.result) {
      saveCustomerUser && saveCustomerUser(formState.result?.result)
    }
  }, [formState])

  useEffect(() => {
    Object.keys(signupData).map(fieldName => {
      formMethods.setValue(fieldName, signupData[fieldName])
    })
  }, [signupData])

  useEffect(() => {
    if (externalPhoneNumber) {
      setUserPhoneNumber(externalPhoneNumber)
      handleChangePhoneNumber(externalPhoneNumber, true)
    }
  }, [externalPhoneNumber])

  useEffect(() => {
    if (useChekoutFileds && validationFields?.loading) return
    let fieldnum = 0
    if (validationFields?.fields?.checkout) {
      sortInputFields({ values: validationFields?.fields?.checkout }).forEach(field => {
        if (showField && showField(field.code) && field.code !== 'email') fieldnum += 1
      })
    }
    setFieldNumber(fieldnum)
  }, [validationFields])

  useEffect(() => {
    if (signUpTab === 'default' || signUpTab === 'otpCellphone') {
      formMethods.register('cellphone', {
        required: isRequiredField('cellphone')
          ? t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required').replace('_attribute_', t('CELLPHONE', 'Cellphone'))
          : null
      })
    } else {
      formMethods.unregister('cellphone')
    }
  }, [formMethods, signUpTab])

  useEffect(() => {
    if (checkPhoneCodeState?.result?.error) {
      showToast(ToastType.Error, checkPhoneCodeState?.result?.result || [t('ERROR', 'Error')])
    } else if (checkPhoneCodeState?.result?.result && checkPhoneCodeState?.result?.result?.[0] === 'VERIFICATION_CODE_WAS_SENT_TO') {
      showToast(ToastType.Success, t('CODE_SENT', 'The code has been sent'))
      resetOtpLeftTime()
    }
  }, [checkPhoneCodeState])

  useEffect(() => {
    if (recaptchaConfig?.siteKey) {
      setRecaptchaVersion({ version: recaptchaConfig?.version, siteKey: recaptchaConfig?.siteKey })
    }
  }, [recaptchaConfig])

  const preventWhiteSpaceOnKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault()
    }
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <SignUpContainer isPopup={isPopup}>
        <FormSide isPopup={isPopup}>
          <Title>{t('SIGN_UP', 'Sign up')}</Title>
          {((Number(useSignUpFullDetails) + Number(useSignUpOtpEmail) + Number(useSignUpOtpCellphone)) > 1 && !willVerifyOtpState) && (
            <SignupWith isPopup={isPopup}>
              <Tabs variant='primary'>
                {useSignUpFullDetails && (
                  <Tab
                    onClick={() => handleSignUpTab('default')}
                    active={signUpTab === 'default'}
                    borderBottom={signUpTab === 'default'}
                  >
                    {t('DEFAULT', 'Default')}
                  </Tab>
                )}
                {useSignUpOtpEmail && (
                  <Tab
                    onClick={() => handleSignUpTab('otpEmail')}
                    active={signUpTab === 'otpEmail'}
                    borderBottom={signUpTab === 'otpEmail'}
                  >
                    {t('BY_OTP_EMAIL', 'by Otp Email')}
                  </Tab>
                )}
                {useSignUpOtpCellphone && (
                  <Tab
                    onClick={() => handleSignUpTab('otpCellphone')}
                    active={signUpTab === 'otpCellphone'}
                    borderBottom={signUpTab === 'otpCellphone'}
                  >
                    {t('BY_OTP_CELLPHONE', 'by Otp Cellphone')}
                  </Tab>
                )}
              </Tabs>
            </SignupWith>
          )}
          {(!willVerifyOtpState) && (
            <FormInput
              noValidate
              isPopup={isPopup}
              onSubmit={formMethods.handleSubmit(onSubmit)}
              isSkeleton={useChekoutFileds && validationFields?.loading}
              autoComplete='on'
            >
              {props.beforeMidElements?.map((BeforeMidElements, i) => (
                <React.Fragment key={i}>
                  {BeforeMidElements}
                </React.Fragment>))}
              {props.beforeMidComponents?.map((BeforeMidComponents, i) => (
                <BeforeMidComponents key={i} {...props} />))}
              {
                !(useChekoutFileds && validationFields?.loading) ? (
                  <>
                    {validationFields?.fields?.checkout &&
                      sortInputFields({ values: validationFields?.fields?.checkout }).map(field =>
                        showField && showField(field.code) && (
                          <React.Fragment key={field.id}>
                            {field.code === 'email' ? (
                              <>
                                {(signUpTab === 'default' || signUpTab === 'otpEmail') && (
                                  <InputContainer>
                                    {formMethods?.errors?.email?.type === 'required' && !notValidationFields.includes(field.code) && (
                                      <ValidationText>
                                        {formMethods.errors?.email?.message} *
                                      </ValidationText>
                                    )}
                                    {formMethods.errors?.email?.type === 'pattern' && !notValidationFields.includes(field.code) && (
                                      <ValidationText>
                                        {t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))}
                                      </ValidationText>
                                    )}
                                    <InputWrapper>
                                      <Input
                                        type={field.type}
                                        name={field.code}
                                        aria-label={field.code}
                                        className='form'
                                        placeholder={t(field.code.toUpperCase(), field.name)}
                                        onChange={handleChangeInputEmail}
                                        ref={formMethods.register({
                                          required: isRequiredField(field.code)
                                            ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email'))
                                            : null,
                                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                        })}
                                        onKeyDown={preventWhiteSpaceOnKeyDown}
                                        required={!!field.required}
                                        autoComplete='on'
                                        isError={formMethods.errors?.email && !notValidationFields.includes(field.code)}
                                      />
                                      <InputBeforeIcon>
                                        <Envelope />
                                      </InputBeforeIcon>
                                    </InputWrapper>
                                  </InputContainer>
                                )}
                              </>
                            ) : (
                              <>
                                {(signUpTab === 'default') && (
                                  <InputContainer isHalf={fieldNumber % 2 === 0}>
                                    {formMethods.errors?.[`${field.code}`] && !notValidationFields.includes(field.code) && (
                                      <ValidationText>
                                        {formMethods.errors?.[`${field.code}`]?.message} *
                                      </ValidationText>
                                    )}
                                    <InputWrapper>
                                      <Input
                                        type={field.type}
                                        name={field.code}
                                        aria-label={field.code}
                                        className='form'
                                        placeholder={t(field.code.toUpperCase(), field.name)}
                                        onChange={handleChangeInput}
                                        ref={formMethods.register({
                                          required: isRequiredField(field.code)
                                            ? t(`VALIDATION_ERROR_${field.code.toUpperCase()}_REQUIRED`, `${field.name} is required`).replace('_attribute_', t(field.name, field.code))
                                            : null
                                        })}
                                        required={field.required}
                                        autoComplete='off'
                                        isError={formMethods.errors?.[`${field.code}`] && !notValidationFields.includes(field.code)}
                                      />
                                      <InputBeforeIcon>
                                        <Person />
                                      </InputBeforeIcon>
                                    </InputWrapper>
                                  </InputContainer>
                                )}
                              </>
                            )}
                          </React.Fragment>
                        )
                      )}
                    {(!!showInputPhoneNumber && (signUpTab === 'default' || signUpTab === 'otpCellphone')) && (
                      <>
                        {formMethods.errors?.cellphone && !userPhoneNumber && (
                          <ValidationText>
                            {formMethods.errors?.cellphone?.message} {formMethods?.errors?.cellphone?.type === 'required' && '*'}
                          </ValidationText>
                        )}
                        <InputPhoneNumber
                          value={userPhoneNumber}
                          currentCountryCode={signupData?.country_phone_code}
                          setValue={handleChangePhoneNumber}
                          handleIsValid={setIsValidPhoneNumber}
                          setCurrentPhoneNumber={setCurrentPhoneNumber}
                          isError={formMethods.errors?.cellphone && !userPhoneNumber}
                        />
                      </>
                    )}

                    {(signUpTab === 'default' && (!fieldsNotValid || (fieldsNotValid && !fieldsNotValid.includes('password')))) && (
                      <>
                        {formMethods.errors?.password && (
                          <ValidationText>
                            {formMethods.errors?.password?.message} {formMethods?.errors?.password?.type === 'required' && '*'}
                          </ValidationText>
                        )}
                        <WrapperPassword>
                          <Input
                            type={!passwordSee ? 'password' : 'text'}
                            name='password'
                            aria-label='password'
                            className='form'
                            placeholder={t('PASSWORD', 'Password')}
                            onChange={handleChangeInput}
                            required
                            ref={formMethods.register({
                              required: isRequiredField('password') ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'password')) : null,
                              minLength: {
                                value: 8,
                                message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                              }
                            })}
                            isError={formMethods.errors?.password}
                          />
                          <TogglePassword onClick={togglePasswordView}>
                            {!passwordSee ? <Eye /> : <EyeSlash />}
                          </TogglePassword>
                          <InputBeforeIcon>
                            <Lock />
                          </InputBeforeIcon>
                        </WrapperPassword>
                      </>
                    )}

                    {props.afterMidElements?.map((MidElement, i) => (
                      <React.Fragment key={i}>
                        {MidElement}
                      </React.Fragment>))}
                    {props.afterMidComponents?.map((MidComponent, i) => (
                      <MidComponent key={i} {...props} />))}
                  </>
                ) : (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <SkeletonWrapper key={i}>
                        <Skeleton height={43} />
                      </SkeletonWrapper>
                    ))}
                  </>
                )
              }
              {props.isRecaptchaEnable && enableReCaptcha && (
                <ReCaptchaWrapper>
                  <ReCaptcha handleReCaptcha={handleReCaptcha} reCaptchaVersion={reCaptchaVersion} />
                </ReCaptchaWrapper>
              )}

              <CheckboxArea>
                {(signUpTab === 'default') && (
                  <PromotionsWrapper>
                    <Checkbox
                      name='promotions'
                      id='promotions'
                      onChange={handleChangePromotions}
                    />
                    <label
                      htmlFor='promotions'
                    >
                      <span>{t('RECEIVE_NEWS_EXCLUSIVE_PROMOTIONS', 'Receive newsletters and exclusive promotions')}</span>
                    </label>
                  </PromotionsWrapper>
                )}

                {configs?.terms_and_conditions?.value === 'true' && (
                  <>
                    {formMethods.errors?.acceptTerms && (
                      <ValidationText>
                        {formMethods.errors?.acceptTerms?.message} *
                      </ValidationText>
                    )}
                    <TermsConditionWrapper>
                      <Checkbox
                        name='acceptTerms'
                        ref={formMethods.register({
                          required: t('ERROR_ACCEPT_TERMS', 'You must accept the Terms & Conditions.')
                        })}
                        id='acceptTerms'
                      />
                      <label
                        htmlFor='acceptTerms'
                      >
                        <span>{t('TERMS_AND_CONDITIONS_TEXT', 'I’m agree with')}</span>
                        <a
                          href={configs?.terms_and_conditions_url?.value}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {t('TERMS_AND_CONDITIONS', 'Terms & Conditions')}
                        </a>
                      </label>
                    </TermsConditionWrapper>
                  </>

                )}
              </CheckboxArea>

              <Button
                color='primary'
                type='submit'
                disabled={formState.loading || validationFields?.loading}
              >
                {formState.loading ? `${t('LOADING', 'Loading')}...` : signUpTab === 'default' ? t('SIGN_UP', 'Sign up') : t('GET_VERIFY_CODE', 'Get verify code')}
              </Button>
            </FormInput>
          )}
          {(willVerifyOtpState) && (
            <>
              <CountdownTimer>
                <span>{formatSeconds(otpLeftTime)}</span>
              </CountdownTimer>
              <OtpWrapper>
                <OtpInput
                  value={otpState}
                  onChange={otp => setOtpState(otp)}
                  numInputs={numOtpInputs || 6}
                  containerStyle='otp-container'
                  inputStyle='otp-input'
                  isInputNum
                  shouldAutoFocus
                />
              </OtpWrapper>
              <ResendCode disabled={otpLeftTime > 520} onClick={handleSendOtp}>
                {t('LANG_SEND_AGAIN', 'Send again')}?
              </ResendCode>
              <Button
                type='button'
                color='secundary'
                disabled={formState.loading}
                onClick={() => { setWillVerifyOtpState(false) }}
              >
                {t('CANCEL', 'Cancel')}
              </Button>
            </>
          )}

          {(checkPhoneCodeState?.loading) && (
            <SpinnerLoader
              style={{ height: 160 }}
            />
          )}
          {elementLinkToLogin && (
            <RedirectLink register isPopup={isPopup}>
              <span>{t('MOBILE_FRONT_ALREADY_HAVE_AN_ACCOUNT', 'Already have an account?')}</span>
              {elementLinkToLogin}
            </RedirectLink>
          )}
          {Object.keys(configs).length > 0 && !isGuest && (
            configs?.business_signup_allow?.value === '1' || configs?.driver_signup_allow?.value === '1'
          ) && !isCustomerMode &&
            (
              <BussinessAndDriverSignUp>
                {configs?.business_signup_allow?.value === '1' && (
                  <Button
                    color='primaryContrast'
                    onClick={() => handleGoToPage({ page: 'signup_business' })}
                  >
                    {t('SIGNUP_FOR_BUSINESS', 'Sign up for business')}
                  </Button>
                )}
                {configs?.driver_signup_allow?.value === '1' && (
                  <Button
                    color='primaryContrast'
                    onClick={() => handleGoToPage({ page: 'signup_driver' })}
                  >
                    {t('SIGNUP_FOR_DRIVER', 'Sign up for driver')}
                  </Button>
                )}
              </BussinessAndDriverSignUp>
            )}
          {hasSocialLogin && hasSocialEnabled && (
            <LoginDivider>
              <DividerLine />
              <p>{t('OR', 'or')}</p>
              <DividerLine />
            </LoginDivider>
          )}
          {!externalPhoneNumber && (
            <>
              {Object.keys(configs).length > 0 ? (
                <SocialButtons isPopup={isPopup}>
                  {isFacebookLogin && configs?.facebook_id?.value && facebookLoginEnabled && (
                    <FacebookLoginButton
                      appId={configs?.facebook_id?.value}
                      handleSuccessFacebookLogin={handleSuccessFacebook}
                    />
                  )}
                  {configs?.apple_login_client_id?.value && appleLoginEnabled && (
                    <AppleLogin
                      onSuccess={handleSuccessApple}
                      onFailure={(data) => setAlertState({
                        open: true,
                        content: data
                      })}
                    />
                  )}
                  {configs?.google_login_client_id?.value && configs?.google_login_auth_domain?.value && configs?.google_login_api_key?.value && googleLoginEnabled && (
                    <GoogleLoginButton
                      initParams={initParams}
                      handleSuccessGoogleLogin={handleSuccessGoogle}
                      onFailure={(data) => console.log('onFailure', data)}
                    />
                  )}
                </SocialButtons>
              ) : (
                <SkeletonSocialWrapper>
                  <Skeleton height={43} />
                </SkeletonSocialWrapper>
              )}
            </>
          )}
        </FormSide>
        <Alert
          title={t('SIGN_UP', 'Sign up')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
      </SignUpContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const SignUpForm = (props) => {
  const _numOtpInputs = 6
  const loginControllerProps = {
    ...props,
    isRecaptchaEnable: true,
    numOtpInputs: _numOtpInputs,
    UIComponent: SignUpFormUI
  }
  return <SignUpController {...loginControllerProps} />
}
