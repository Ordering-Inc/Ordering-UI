import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import parsePhoneNumber from 'libphonenumber-js'
import AiOutlineWhatsApp from '@meronex/icons/ai/AiOutlineWhatsApp'
import FaSms from '@meronex/icons/fa/FaSms'
import {
  Person,
  Envelope
} from 'react-bootstrap-icons'

import {
  useLanguage,
  useConfig,
  SignupForm as SignUpController
} from 'ordering-components'
import { SpinnerLoader } from '../../../../../../../components/SpinnerLoader'

import { Input } from '../../../../styles/Inputs'
import { Button } from '../../../../styles/Buttons'
import { Checkbox } from '../../../../../../../styles/Checkbox'
import { sortInputFields, formatSeconds } from '../../../../../../../utils'
import { InputPhoneNumber } from '../../../InputPhoneNumber'
import { Alert } from '../../../Confirm/layouts/pfchangs'
import { Modal } from '../../../Modal'
import {
  SignUpContainer,
  FormSide,
  FormInput,
  SkeletonWrapper,
  Title,
  InputWrapper,
  InputBeforeIcon,
  TermsConditionWrapper,
  CheckboxArea,
  PromotionsWrapper,
  ValidationText,
  InputContainer,
  DateContainer,
  WrapperButtons,
  OtpContainer,
  SendCodeContainer,
  Subtitle
} from './styles'
import { CountdownTimer, OtpWrapper, ResendCode } from '../../../LoginForm/layouts/pfchangs/styles'
import OtpInput from 'react-otp-input'
import { useCountdownTimer } from '../../../../../../../hooks/useCountdownTimer'

const notValidationFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'address_notes']

const SignUpFormUI = (props) => {
  const {
    handleChangeInput,
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
    handleChangePromotions,
    checkPhoneCodeState,
    otpDataUser,
    signUpOtpUser,
    openOtpOptions,
    otpState,
    setOtpState,
    socialOtpUser,
    setOpenOtpOptions,
    setWillVerifyOtpState,
    willVerifyOtpState,
    numOtpInputs
  } = props
  const otpPlaceholder = [...Array(numOtpInputs)].fill(0).join('')
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const formMethods = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [userPhoneNumber, setUserPhoneNumber] = useState('')
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)
  const [fieldNumber, setFieldNumber] = useState(1)
  const [cellphoneOtpType, setCellphoneOtpType] = useState('')
  const [otpLeftTime, _, resetOtpLeftTime] = useCountdownTimer(
    600, !checkPhoneCodeState?.loading && willVerifyOtpState)

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
    if (!formState.loading && formState.result.result && !formState.result.error && !otpDataUser?.social) {
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

  const openVerifyState = async (type) => {
    resetOtpLeftTime()
    setCellphoneOtpType(type)
    const enableOtp = await socialOtpUser(parseNumber(signupData.cellphone), type)
    if (enableOtp) {
      setWillVerifyOtpState(true)
      setAlertState({
        open: true,
        content: t('VERIFICATION_CODE_SENT', 'Verification code sent')
      })
    }
  }

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ATENTION', 'Atención')]
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
    if (checkPhoneCodeState?.result?.error && !checkPhoneCodeState?.loading) {
      setAlertState({
        open: true,
        content: checkPhoneCodeState?.result?.result || checkPhoneCodeState?.result?.error || [t('ATENTION', 'Atención')]
      })
    }
  }, [checkPhoneCodeState?.result])

  useEffect(() => {
    if (otpDataUser?.name) {
      handleChangeInput({ target: { name: 'name', value: otpDataUser?.name } })
      formMethods.setValue('name', otpDataUser?.name)
    }
    if (otpDataUser?.lastname) {
      handleChangeInput({ target: { name: 'lastname', value: otpDataUser?.lastname } })
      formMethods.setValue('lastname', otpDataUser?.lastname)
    }
    if (otpDataUser?.email) {
      handleChangeInput({ target: { name: 'email', value: otpDataUser?.email } })
      formMethods.setValue('email', otpDataUser?.email)
    }
    if (otpDataUser?.cellphone && otpDataUser?.country_code) {
      const cellphone = `+${otpDataUser?.country_code}${otpDataUser.cellphone}`
      handleChangePhoneNumber(cellphone, true)
      formMethods.setValue('cellphone', cellphone)
    }
  }, [otpDataUser, willVerifyOtpState])

  return (
    <>
      <SignUpContainer isPopup={isPopup}>
        <FormSide isPopup={isPopup}>
          <Title>
            {
              willVerifyOtpState
                ? t('SECURITY_VERIFICATION', 'Security verification')
                : otpDataUser?.social
                  ? t('COMPLETE_YOUR_INFORMATION', 'Complete your information')
                  : t('SIGN_UP', 'Sign up')
            }
          </Title>
          {willVerifyOtpState && (
            <Subtitle>
              {`${t('INSERT_CODE_SENT', 'Insert the code sent to')} +${signupData?.country_phone_code} ${signupData.cellphone}`}
            </Subtitle>
          )}
          <FormInput
            noValidate
            isPopup={isPopup}
            onSubmit={formMethods.handleSubmit(onSubmit)}
            isSkeleton={useChekoutFileds && validationFields?.loading}
          >
            {!willVerifyOtpState && !checkPhoneCodeState?.loading && (
              <>
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
                                        defaultValue={signupData[field.name] || ''}
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
                  {formState.loading ? `${t('LOADING', 'Loading')}...` : otpDataUser?.social ? t('SAVE', 'Save') : t('SIGN_UP', 'Sign up')}
                </Button>
              </>
            )}

            {(willVerifyOtpState && !checkPhoneCodeState?.loading) && (
              <OtpContainer>
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
                <ResendCode disabled={otpLeftTime > 500} onClick={() => openVerifyState(cellphoneOtpType)}>
                  {t('RESEND_AGAIN', 'Resend again')}?
                </ResendCode>
                <Button
                  type='button'
                  color='secundary'
                  disabled={formState.loading}
                  onClick={() => {
                    setWillVerifyOtpState(false)
                  }}
                >
                  {t('CANCEL', 'Cancel')}
                </Button>
              </OtpContainer>
            )}
          </FormInput>

          {(checkPhoneCodeState?.loading) && (
            <SpinnerLoader
              style={{ height: 160 }}
            />
          )}
        </FormSide>
        <Modal
          open={openOtpOptions && !willVerifyOtpState}
          onClose={() => setOpenOtpOptions(false)}
          width='500px'
        >
          <SendCodeContainer>
            <h2>{t('WILL_SEND_CODE_CONFIRM_PHONE', 'We will send you a code to confirm your cellphone')}</h2>
            <WrapperButtons>
              <Button
                color='primary'
                onClick={() => openVerifyState('whatsapp')}
                disabled={formState.loading || checkPhoneCodeState?.loading}
              >
                <AiOutlineWhatsApp />
                {t('WHATSAPP', 'Whatsapp')}
              </Button>
              <Button
                color='primary'
                onClick={() => openVerifyState('sms')}
                disabled={formState.loading || checkPhoneCodeState?.loading}
              >
                <FaSms />
                {t('SMS', 'Sms')}
              </Button>
            </WrapperButtons>
          </SendCodeContainer>
        </Modal>
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
  const _numOtpInputs = 4
  const loginControllerProps = {
    ...props,
    isRecaptchaEnable: false,
    numOtpInputs: _numOtpInputs,
    UIComponent: SignUpFormUI
  }
  return <SignUpController {...loginControllerProps} />
}
