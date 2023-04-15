import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { Alert } from '../../../../../components/Confirm'
import { InputPhoneNumber } from '../InputPhoneNumber'
import parsePhoneNumber from 'libphonenumber-js'
import MdCheckBox from '@meronex/icons/md/MdCheckBox'
import MdCheckBoxOutlineBlank from '@meronex/icons/md/MdCheckBoxOutlineBlank'

import {
  SignupForm as SignUpController,
  useLanguage,
  useConfig,
  useSession,
  ReCaptcha
} from 'ordering-components'
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
  FormTitle,
  FormInline,
  FormBottom,
  AccountLogin,
  WrapperBirthday,
  ConditionCheck,
  Terms
} from './styles'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { FacebookLoginButton } from '../../../../../components/FacebookLogin'
import { GoogleLoginButton } from '../../../../../components/GoogleLogin'
import { AppleLogin } from '../../../../../components/AppleLogin'
import AiOutlineEye from '@meronex/icons/ai/AiOutlineEye'
import AiOutlineEyeInvisible from '@meronex/icons/ai/AiOutlineEyeInvisible'
import { sortInputFields } from '../../../../../utils'
import { useRecaptcha } from '../../../../../hooks/useRecaptcha'

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
    enableReCaptcha
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const formMethods = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [recaptchaConfig] = useRecaptcha(enableReCaptcha)
  const [reCaptchaVersion, setRecaptchaVersion] = useState({ version: '', siteKey: '' })
  const [, { login }] = useSession()
  const emailInput = useRef(null)
  const [userPhoneNumber, setUserPhoneNumber] = useState('')
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)
  const [passwordSee, setPasswordSee] = useState(false)
  const [conditionCheck, setConditionCheck] = useState(false)
  const showInputPhoneNumber = validationFields?.fields?.checkout?.cellphone?.enabled ?? false

  const initParams = {
    client_id: configs?.google_login_client_id?.value,
    cookiepolicy: 'single_host_origin',
    scope: 'profile'
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

  const onSubmit = () => {
    const isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true
    if (!userPhoneNumber &&
      validationFields?.fields?.checkout?.cellphone?.enabled &&
      validationFields?.fields?.checkout?.cellphone?.required
    ) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required.')]
      })
      return
    }
    if (!isPhoneNumberValid) {
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
      })
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
    if (emailInput?.current) {
      emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
    }
  }

  const toggleSelect = () => {
    setConditionCheck(!conditionCheck)
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
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(error => error.message)
      })
    }
  }, [formMethods.errors])

  useEffect(() => {
    if (!validationFields.loading) {
      Object.values(validationFields?.fields?.checkout).map(field => !notValidationFields.includes(field.code) && (
        field.code === 'email' ? (
          formMethods.register('email', {
            required: isRequiredField(field.code)
              ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email'))
              : null,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
            }
          })
        ) : (
          formMethods.register(field.code, {
            required: isRequiredField(field.code)
              ? t(`VALIDATION_ERROR_${field.code.toUpperCase()}_REQUIRED`, `${field.name} is required`).replace('_attribute_', t(field.name, field.code))
              : null
          })
        )
      ))
    }
  }, [formMethods])

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
      <SignUpContainer isPopup={isPopup}>
        <FormSide isPopup={isPopup}>
          <FormTitle>{t('SIGN_UP_FORM_TITLE', 'Register in archies and enjoy the benefits we have for you.')}</FormTitle>
          {
            !(useChekoutFileds && validationFields?.loading) ? (
              <FormInput
                noValidate
                isPopup={isPopup}
                onSubmit={formMethods.handleSubmit(onSubmit)}
                isSkeleton={useChekoutFileds && validationFields?.loading}
              >
                {props.beforeMidElements?.map((BeforeMidElements, i) => (
                  <React.Fragment key={i}>
                    {BeforeMidElements}
                  </React.Fragment>))}
                {props.beforeMidComponents?.map((BeforeMidComponents, i) => (
                  <BeforeMidComponents key={i} {...props} />))}

                <>
                  {validationFields?.fields?.checkout &&
                    sortInputFields({ values: validationFields?.fields?.checkout }).map(field =>
                      showField && showField(field.code) && (
                        <React.Fragment key={field.id}>
                          {field.code === 'email' ? (
                            <FormInline>
                              <Input
                                type={field.type}
                                name={field.code}
                                aria-label={field.code}
                                className='form'
                                placeholder={t(field.code.toUpperCase(), field.name)}
                                onChange={handleChangeInputEmail}
                                ref={(e) => {
                                  emailInput.current = e
                                }}
                                required={!!field.required}
                                autoComplete='off'
                              />
                            </FormInline>
                          ) : (
                            <FormInline>
                              <Input
                                type={field.type}
                                name={field.code}
                                aria-label={field.code}
                                className='form'
                                placeholder={t(field.code.toUpperCase(), field.name)}
                                onChange={handleChangeInput}
                                required={field.required}
                                autoComplete='off'
                              />
                            </FormInline>
                          )}
                        </React.Fragment>
                      )
                    )}
                  {!!showInputPhoneNumber && (
                    <FormInline>
                      <InputPhoneNumber
                        value={userPhoneNumber}
                        setValue={handleChangePhoneNumber}
                        handleIsValid={setIsValidPhoneNumber}
                      />
                    </FormInline>
                  )}

                  {(!fieldsNotValid || (fieldsNotValid && !fieldsNotValid.includes('password'))) && (
                    <FormInline>
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
                        />
                        <TogglePassword onClick={togglePasswordView}>
                          {!passwordSee ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </TogglePassword>
                      </WrapperPassword>
                    </FormInline>
                  )}

                  <FormInline>
                    <WrapperBirthday>
                      <Input
                        type='date'
                        defaultValue={new Date()}
                        name='birthdate'
                        className='form birthdate-input'
                        placeholder={t('BIRTHDATE_ARCHIES', 'yy-mm-dd')}
                        onChange={handleChangeInput}
                        ref={formMethods.register({
                          required: t('VALIDATION_ERROR_BIRTHDAY_REQUIRED', 'The field birthdate is required')
                        })}
                      />
                    </WrapperBirthday>
                  </FormInline>

                  <ConditionCheck>
                    <span onClick={() => toggleSelect()}>
                      <span className='condition-checkbox'>
                        {conditionCheck ? (
                          <MdCheckBox />
                        ) : (
                          <MdCheckBoxOutlineBlank disabled />
                        )}
                      </span>
                      <span className='condition-link-text'>
                        {t('ARCHIES_AGREE_TEXT', 'You must agree with')}
                      </span>
                    </span>
                    <a href={t('ARCHIES_PRIVACY_LINK', 'https://tupedidostarbucks.co/pages/privacidad-starbucks')} target='_blank' rel='noopener noreferrer' className='condition-link'>
                      <span>
                        {t('ARCHIES_TERMS_AND_CONDITIONS_LINK_TEXT', 'Terms and Conditions')}
                      </span>
                    </a>
                  </ConditionCheck>

                  <Terms>
                    {t('TERMS_WEB_ARCHIES', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
                  </Terms>

                  {props.afterMidElements?.map((MidElement, i) => (
                    <React.Fragment key={i}>
                      {MidElement}
                    </React.Fragment>))}
                  {props.afterMidComponents?.map((MidComponent, i) => (
                    <MidComponent key={i} {...props} />))}
                </>

                {props.isRecaptchaEnable && enableReCaptcha && (
                  <FormInline>
                    <ReCaptchaWrapper>
                      <ReCaptcha handleReCaptcha={handleReCaptcha} reCaptchaVersion={reCaptchaVersion} />
                    </ReCaptchaWrapper>
                  </FormInline>
                )}
                <FormInline>
                  <Button
                    color='primary'
                    type='submit'
                    disabled={formState.loading || validationFields?.loading || !conditionCheck}
                  >
                    {formState.loading
                      ? `${t('LOADING', 'Loading')}...`
                      // : isSignupBusiness
                      //   ? t('SIGN_UP_AS_BUSINESS', 'Sign up as business')
                      : t('SIGN_UP', 'Sign up')}
                  </Button>
                </FormInline>
              </FormInput>
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

          {!externalPhoneNumber && (
            <>
              {Object.keys(configs).length > 0 ? (
                <SocialButtons isPopup={isPopup}>
                  {configs?.facebook_login?.value && configs?.facebook_id?.value && (
                    <FormInline>
                      <FacebookLoginButton
                        appId={configs?.facebook_id?.value}
                        handleSuccessFacebookLogin={handleSuccessFacebook}
                      />
                    </FormInline>
                  )}
                  {configs?.apple_login_client_id?.value && (
                    <FormInline>
                      <AppleLogin
                        onSuccess={handleSuccessApple}
                        onFailure={(data) => console.log('onFailure', data)}
                      />
                    </FormInline>
                  )}
                  {configs?.google_login_client_id?.value && (
                    <FormInline>
                      <GoogleLoginButton
                        initParams={initParams}
                        handleSuccessGoogleLogin={handleSuccessGoogle}
                        onFailure={(data) => console.log('onFailure', data)}
                      />
                    </FormInline>

                  )}
                </SocialButtons>
              ) : (
                <SkeletonSocialWrapper>
                  <Skeleton height={40} />
                  <Skeleton height={40} />
                  <Skeleton height={40} />
                </SkeletonSocialWrapper>
              )}
            </>
          )}

          {elementLinkToLogin && (
            <RedirectLink register isPopup={isPopup}>
              <FormBottom>
                <span>{t('MOBILE_FRONT_ALREADY_HAVE_AN_ACCOUNT', 'Already have an account?')}</span>
                <AccountLogin>
                  {elementLinkToLogin}
                  <Button outline>{t('SIGN_IN', 'Log In')}</Button>
                </AccountLogin>
              </FormBottom>
            </RedirectLink>
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
  const loginControllerProps = {
    ...props,
    isRecaptchaEnable: true,
    UIComponent: SignUpFormUI
  }
  return <SignUpController {...loginControllerProps} />
}
