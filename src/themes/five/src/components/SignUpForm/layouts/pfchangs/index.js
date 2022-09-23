import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import parsePhoneNumber from 'libphonenumber-js'

import {
  Person,
  Envelope
} from 'react-bootstrap-icons'

import {
  useLanguage,
  useConfig,
  ReCaptcha,
  SignupForm as SignUpController
} from 'ordering-components'
import { SpinnerLoader } from '../../../../../../../components/SpinnerLoader'

import { Input } from '../../../../styles/Inputs'
import { Button } from '../../../../styles/Buttons'
import { Checkbox } from '../../../../../../../styles/Checkbox'
import { sortInputFields } from '../../../../../../../utils'
import { InputPhoneNumber } from '../../../InputPhoneNumber'
import { Alert } from '../../../Confirm'
import {
  SignUpContainer,
  FormSide,
  FormInput,
  SkeletonWrapper,
  ReCaptchaWrapper,
  Title,
  InputWrapper,
  InputBeforeIcon,
  TermsConditionWrapper,
  CheckboxArea,
  PromotionsWrapper,
  ValidationText,
  InputContainer,
  DateContainer
} from './styles'

const notValidationFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'address_notes']

const SignUpFormUI = (props) => {
  const {
    handleChangeInput,
    handleReCaptcha,
    useChekoutFileds,
    validationFields,
    showField,
    isRequiredField,
    formState,
    handleSuccessSignup,
    isPopup,
    externalPhoneNumber,
    saveCustomerUser,
    signupData,
    enableReCaptcha,
    handleChangePromotions,
    checkPhoneCodeState,
    otpDataUser,
    signUpOtpUser
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const formMethods = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [userPhoneNumber, setUserPhoneNumber] = useState('')
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)
  const [fieldNumber, setFieldNumber] = useState(1)

  const showInputPhoneNumber = (validationFields?.fields?.checkout?.cellphone?.enabled ?? false) || configs?.verification_phone_required?.value === '1'

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onSubmit = () => {
    const isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true
    if (!userPhoneNumber &&
      ((validationFields?.fields?.checkout?.cellphone?.enabled &&
        validationFields?.fields?.checkout?.cellphone?.required) ||
        configs?.verification_phone_required?.value === '1')
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
    signUpOtpUser && signUpOtpUser()
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

  const getMaxDate = () => {
    const today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    const yyyy = today.getFullYear()
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }

    return yyyy + '-' + mm + '-' + dd
  }

  const dateIsValid = (dateStr) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/

    if (dateStr.match(regex) === null) {
      return t('ERROR_WRONG_DATE_FORMAT', 'Wrong date format')
    }

    const [year, month, day] = dateStr.split('-')

    const isoFormattedStr = `${year}-${month}-${day}`

    const date = new Date(isoFormattedStr)

    const timestamp = date.getTime()

    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
      return t('ERROR_WRONG_DATE_FORMAT', 'Wrong date format')
    }

    if (new Date('1964-01-01').getTime() > timestamp) {
      return t('MINIMUM_DATE_ERROR', 'Minimum date error')
    }

    if (new Date(getMaxDate()).getTime() < timestamp) {
      return t('MAXIMUM_DATE_ERROR', 'Maximum date error')
    }

    return date.toISOString().startsWith(isoFormattedStr)
  }

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
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
    sortInputFields({ values: validationFields?.fields?.checkout }).forEach(field => {
      if (showField && showField(field.code) && field.code !== 'email') fieldnum += 1
    })
    setFieldNumber(fieldnum)
  }, [validationFields])

  useEffect(() => {
    formMethods.register('cellphone', {
      required: isRequiredField('cellphone') && !otpDataUser?.cellphone && !otpDataUser?.country_code
        ? t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required').replace('_attribute_', t('CELLPHONE', 'Cellphone'))
        : null
    })
  }, [otpDataUser])

  useEffect(() => {
    if (checkPhoneCodeState?.result?.error) {
      setAlertState({
        open: true,
        content: checkPhoneCodeState?.result?.error || [t('ERROR', 'Error')]
      })
    }
  }, [checkPhoneCodeState])

  useEffect(() => {
    if (otpDataUser?.email) {
      handleChangeInput({ target: { name: 'email', value: otpDataUser?.email } })
      formMethods.setValue('email', otpDataUser?.email)
    }
    if (otpDataUser?.cellphone && otpDataUser?.country_code) {
      const cellphone = `+${otpDataUser?.country_code}${otpDataUser.cellphone}`
      handleChangePhoneNumber(cellphone, true)
      formMethods.setValue('cellphone', cellphone)
    }
  }, [otpDataUser])

  return (
    <>
      <SignUpContainer isPopup={isPopup}>
        <FormSide isPopup={isPopup}>
          <Title>{t('SIGN_UP', 'Sign up')}</Title>

          <FormInput
            noValidate
            isPopup={isPopup}
            onSubmit={formMethods.handleSubmit(onSubmit)}
            isSkeleton={useChekoutFileds && validationFields?.loading}
          >
            {
              !(useChekoutFileds && validationFields?.loading) ? (
                <>
                  {validationFields?.fields?.checkout &&
                    sortInputFields({ values: validationFields?.fields?.checkout }).map(field =>
                      showField && showField(field.code) && (
                        <React.Fragment key={field.id}>
                          {field.code === 'email' ? (
                            <>
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
                                      required: isRequiredField(field.code) && !otpDataUser?.email
                                        ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email'))
                                        : null,
                                      pattern: !otpDataUser?.email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                    })}
                                    disabled={otpDataUser?.email}
                                    required={!!field.required}
                                    autoComplete='off'
                                    isError={formMethods.errors?.email && !notValidationFields.includes(field.code)}
                                  />
                                  <InputBeforeIcon>
                                    <Envelope />
                                  </InputBeforeIcon>
                                </InputWrapper>
                              </InputContainer>
                            </>
                          ) : (
                            <>
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
                            </>
                          )}
                        </React.Fragment>
                      )
                    )}
                  {(!!showInputPhoneNumber) && (
                    <>
                      {formMethods.errors?.cellphone && !userPhoneNumber && (
                        <ValidationText>
                          {formMethods.errors?.cellphone?.message} {formMethods?.errors?.cellphone?.type === 'required' && '*'}
                        </ValidationText>
                      )}
                      <InputPhoneNumber
                        value={userPhoneNumber}
                        setValue={handleChangePhoneNumber}
                        handleIsValid={setIsValidPhoneNumber}
                        isError={formMethods.errors?.cellphone && !userPhoneNumber}
                        disabled={otpDataUser?.cellphone && otpDataUser?.country_code}
                      />
                    </>
                  )}
                  <DateContainer>
                    <label>
                      {formMethods.errors?.birthdate ? (
                        <ValidationText>
                          {formMethods.errors?.birthdate?.message} {formMethods?.errors?.birthdate?.type === 'required' && '*'}
                        </ValidationText>
                      ) : (
                        <>
                          {t('BIRTHDATE', 'Birthdate')}
                        </>
                      )}
                    </label>
                    <Input
                      type='date'
                      name='birthdate'
                      placeholder='dd-mm-yyyy'
                      value={signupData.birthdate}
                      min='1964-01-01'
                      onChange={(e) => handleChangeInput(e)}
                      max={getMaxDate()}
                      ref={formMethods.register({
                        required: t('VALIDATION_ERROR_BIRTH_DATE_REQUIRED', 'Birthdate is required'),
                        validate: value => dateIsValid(value),
                        valueAsDate: true
                      })}
                      pattern='\d{4}-\d{2}-\d{2}'
                    />
                  </DateContainer>
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
                <ReCaptcha handleReCaptcha={handleReCaptcha} />
              </ReCaptchaWrapper>
            )}

            <CheckboxArea>
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
              {formState.loading ? `${t('LOADING', 'Loading')}...` : t('SIGN_UP', 'Sign up')}
            </Button>
          </FormInput>

          {(checkPhoneCodeState?.loading) && (
            <SpinnerLoader
              style={{ height: 160 }}
            />
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
