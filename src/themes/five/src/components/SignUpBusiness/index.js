import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import parsePhoneNumber from 'libphonenumber-js'
import { useLanguage } from 'ordering-components'
import { SignupForm as SignUpController } from './naked'
import { Button } from '../../styles/Buttons'
import { Input } from '../../styles/Inputs'
import { Alert } from '../Confirm'
import { InputPhoneNumber } from '../../../../../components/InputPhoneNumber'
import {
  SignupBusinessContainer,
  SignUpHeroWrapper,
  SignUpHero,
  SignUpFormWrapper,
  FormInput,
  PhoneInputWrapper
} from './styles'

const SignUpBusinessUI = (props) => {
  const {
    formState,
    handleChangeInput,
    externalPhoneNumber,
    validationFields
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const formMethods = useForm()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [userPhoneNumber, setUserPhoneNumber] = useState('')
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)

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
    // handleButtonSignupClick && handleButtonSignupClick()
    // if (!formState.loading && formState.result.result && !formState.result.error) {
    //   handleSuccessSignup(formState.result.result)
    // }
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

  useEffect(() => {
    if (externalPhoneNumber) {
      setUserPhoneNumber(externalPhoneNumber)
      handleChangePhoneNumber(externalPhoneNumber, true)
    }
  }, [externalPhoneNumber])

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  return (
    <SignupBusinessContainer>
      <SignUpHeroWrapper>
        <SignUpHero bgimage={theme.images?.general?.businessSignUpHero} />
      </SignUpHeroWrapper>
      <SignUpFormWrapper>
        <h1>{t('SIGN_UP_NOW', 'Sign up now')}</h1>
        <FormInput
          noValidate
          onSubmit={formMethods.handleSubmit(onSubmit)}
        >
          {props.beforeMidElements?.map((BeforeMidElements, i) => (
            <React.Fragment key={i}>
              {BeforeMidElements}
            </React.Fragment>))}
          {props.beforeMidComponents?.map((BeforeMidComponents, i) => (
            <BeforeMidComponents key={i} {...props} />))}
          <Input
            type='text'
            name='first_name'
            aria-label='first_name'
            className='half-input'
            placeholder={t('FIRST_NAME', 'First name')}
            onChange={handleChangeInput}
            required
            autoComplete='off'
          />
          <Input
            type='text'
            name='last_name'
            aria-label='last_name'
            className='half-input'
            placeholder={t('LAST_NAME', 'Last name')}
            onChange={handleChangeInput}
            required
            autoComplete='off'
          />
          <Input
            type='text'
            name='store_name'
            aria-label='store_name'
            className='form'
            placeholder={t('STORE_NAME', 'Store name')}
            onChange={handleChangeInput}
            required
            autoComplete='off'
          />
          <Input
            type='password'
            name='password'
            aria-label='password'
            className='form'
            placeholder={t('PASSWORD', 'Password')}
            onChange={handleChangeInput}
            required
            autoComplete='off'
          />
          <PhoneInputWrapper>
            <InputPhoneNumber
              value={userPhoneNumber}
              setValue={handleChangePhoneNumber}
              handleIsValid={setIsValidPhoneNumber}
            />
          </PhoneInputWrapper>
          <Input
            type='text'
            name='country'
            aria-label='country'
            className='form'
            placeholder={t('COUNTRY', 'Country')}
            onChange={handleChangeInput}
            required
            autoComplete='off'
          />
          <Input
            type='text'
            name='invite_code'
            aria-label='invite_code'
            className='form'
            placeholder={t('INVITE_CODE', 'Invite code')}
            onChange={handleChangeInput}
            required
            autoComplete='off'
          />
          {props.afterMidElements?.map((MidElement, i) => (
            <React.Fragment key={i}>
              {MidElement}
            </React.Fragment>))}
          {props.afterMidComponents?.map((MidComponent, i) => (
            <MidComponent key={i} {...props} />))}

          <Button
            color='primary'
            type='submit'
            disabled={formState.loading}
          >
            {formState.loading ? `${t('LOADING', 'Loading')}...` : t('SUBMIT', 'Submit')}
          </Button>
        </FormInput>
      </SignUpFormWrapper>
      <Alert
        title={t('SIGN_UP', 'Sign up')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </SignupBusinessContainer>
  )
}

export const SignUpBusiness = (props) => {
  const signUpBusinessProps = {
    ...props,
    UIComponent: SignUpBusinessUI
  }
  return <SignUpController {...signUpBusinessProps} />
}
