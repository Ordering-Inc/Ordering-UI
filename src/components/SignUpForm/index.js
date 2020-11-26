import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { Alert } from '../Confirm'
import { InputPhoneNumber } from '../InputPhoneNumber'
import parsePhoneNumber from 'libphonenumber-js'

import {
  SignupForm as SignUpController,
  useLanguage,
  useConfig,
  useSession
} from 'ordering-components'
import {
  SignUpContainer,
  FormSide,
  HeroSide,
  FormInput,
  SocialButtons,
  TitleHeroSide,
  SignUpWith,
  RedirectLink
} from './styles'

import { Tabs, Tab } from '../../styles/Tabs'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

import { FacebookLoginButton } from '../FacebookLogin'
import { useTheme } from 'styled-components'

const notValidationFields = ['coupon', 'driver_tip', 'mobile_phone']

const SignUpFormUI = (props) => {
  const {
    handleChangeInput,
    handleButtonSignupClick,
    elementLinkToLogin,
    useChekoutFileds,
    validationFields,
    showField,
    isRequiredField,
    formState,
    handleSuccessSignup,
    useLoginByCellphone,
    useLoginByEmail,
    isPopup
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, { login }] = useSession()
  const theme = useTheme()

  const [userPhoneNumber, setUserPhoneNumber] = useState(null)
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)

  const handleSuccessFacebook = (user) => {
    login({
      user,
      token: user.session.access_token
    })
  }

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
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

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onSubmit = () => {
    const isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true
    if (!userPhoneNumber && validationFields?.fields?.cellphone?.required) {
      setAlertState({
        open: true,
        content: [t('ERROR_PHONE_NUMBER', 'The Phone Number field is required.')]
      })
      return
    }
    if (!isPhoneNumberValid) {
      setAlertState({
        open: true,
        content: [t('INVALID_PHONE_NUMBER', 'Invalid phone number')]
      })
      return
    }
    handleButtonSignupClick()
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

  const showInputPhoneNumber = () => validationFields?.fields?.cellphone?.enabled ?? false

  return (
    <SignUpContainer isPopup={isPopup}>
      <HeroSide>
        <TitleHeroSide>
          <h1>{t('TITLE_LOGIN', 'Welcome!')}</h1>
          <p>{t('SUBTITLE_LOGIN', 'Enter your personal details and start journey with us.')}</p>
        </TitleHeroSide>
      </HeroSide>
      <FormSide isPopup={isPopup}>
        <img id='logo' src={theme?.images?.logos?.logotype} alt='Logo login' />

        {useLoginByCellphone && useLoginByEmail && (
          <SignUpWith>
            <Tabs variant='primary'>
              <Tab>{t('SIGNUP_WITH_EMAIL', 'Signup by Email')}</Tab>
              <Tab>{t('SIGNUP_WITH_CELLPHONE', 'Signup by Cellphone')}</Tab>
            </Tabs>
          </SignUpWith>
        )}
        <FormInput
          noValidate
          isPopup={isPopup}
          onSubmit={handleSubmit(onSubmit)}
          isSkeleton={useChekoutFileds && validationFields.loading}
        >
          {
            !(useChekoutFileds && validationFields.loading) ? (
              <>
                {
                  Object.values(validationFields.fields).map(field => !notValidationFields.includes(field.code) && (
                    showField(field.code) && (
                      <Input
                        key={field.id}
                        type={field.enabled && field.required ? field.type : 'hidden'}
                        name={field.code}
                        aria-label={field.code}
                        className='form'
                        placeholder={t(field.name)}
                        onChange={handleChangeInput}
                        ref={register({
                          required: isRequiredField(field.code) ? t('VALIDATION_ERROR_REQUIRED', `${field.name} is required`).replace('_attribute_', t(field.name, field.code)) : null,
                          pattern: {
                            value: field.code === 'email' ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i : null,
                            message: field.code === 'email' ? t('VALIDATION_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email')) : null
                          }
                        })}
                        required={field.required}
                        autoComplete='off'
                      />
                    )
                  ))
                }
                {!!showInputPhoneNumber() && (
                  <InputPhoneNumber
                    value={userPhoneNumber}
                    setValue={handleChangePhoneNumber}
                    handleIsValid={setIsValidPhoneNumber}
                  />
                )}

                <Input
                  type='password'
                  name='password'
                  aria-label='password'
                  className='form'
                  placeholder={t('PASSWORD', 'Password')}
                  onChange={handleChangeInput}
                  required
                  ref={register({
                    required: isRequiredField('password') ? t('VALIDATION_ERROR_REQUIRED', 'password is required').replace('_attribute_', t('PASSWORD', 'password')) : null,
                    minLength: {
                      value: 5,
                      message: t('VALIDATION_ERROR_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                    }
                  })}
                />
              </>
            ) : (
              <>
                {[...Array(3)].map((item, i) => (
                  <Skeleton key={i} height={50} />
                ))}
              </>
            )
          }
          <Button
            color='primary'
            type='submit'
            disabled={formState.loading || validationFields.loading}
          >
            {formState.loading ? t('LOADING') + '...' : t('SIGNUP', 'Sign up')}
          </Button>
        </FormInput>
        {elementLinkToLogin && (
          <RedirectLink register isPopup={isPopup}>
            <span>{t('MOBILE_FRONT_ALREADY_HAVE_AN_ACCOUNT')}</span>
            {elementLinkToLogin}
          </RedirectLink>
        )}
        <SocialButtons isPopup={isPopup}>
          {configs?.facebook_id && (
            <FacebookLoginButton
              appId={configs?.facebook_id?.value}
              handleSuccessFacebookLogin={handleSuccessFacebook}
            />
          )}
        </SocialButtons>
      </FormSide>
      <Alert
        title={t('SIGNUP', 'Sign up')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </SignUpContainer>
  )
}

export const SignUpForm = (props) => {
  const loginControllerProps = {
    ...props,
    UIComponent: SignUpFormUI
  }
  return <SignUpController {...loginControllerProps} />
}
