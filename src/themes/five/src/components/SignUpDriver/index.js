import React, { useState, useEffect, useRef } from 'react'
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
  const emailInput = useRef(null)

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
      // return
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

  const handleChangeInputEmail = (e) => {
    handleChangeInput({ target: { name: 'email', value: e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '') } })
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''))
    emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (externalPhoneNumber) {
      setUserPhoneNumber(externalPhoneNumber)
      handleChangePhoneNumber(externalPhoneNumber, true)
    }
  }, [externalPhoneNumber])

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(error => error.message)
      })
    }
  }, [formMethods.errors])

  return (
    <SignupBusinessContainer>
      <SignUpHeroWrapper>
        <SignUpHero bgimage={theme.images?.general?.driverSignUpHero} />
      </SignUpHeroWrapper>
      <SignUpFormWrapper>
        <h1>{t('GET_STARTED', 'Get Started')}</h1>
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
            name='store_name'
            aria-label='store_name'
            className='form'
            placeholder={t('STORE_NAME', 'Store name')}
            onChange={handleChangeInput}
            required
            autoComplete='off'
            ref={formMethods.register({
              required: t('VALIDATION_ERROR_STORE_NAME_REQUIRED', 'Store name is required')
            })}
          />
          <Input
            type='text'
            name='store_address'
            aria-label='store_address'
            className='form'
            placeholder={t('STORE_ADDRESS', 'Store address')}
            onChange={handleChangeInput}
            required
            autoComplete='off'
            ref={formMethods.register({
              required: t('VALIDATION_ERROR_STORE_ADDRESS_REQUIRED', 'Store address is required')
            })}
          />
          <Input
            type='text'
            name='floor'
            aria-label='floor'
            className='form'
            placeholder={t('FLOOR_SUITE', 'Floor / Suite')}
            onChange={handleChangeInput}
            required
            autoComplete='off'
            ref={formMethods.register({
              required: t('VALIDATION_ERROR_FLOOR_SUITE_REQUIRED', 'Floor / Suite is required')
            })}
          />
          <Input
            type='text'
            name='first_name'
            aria-label='first_name'
            className='half-input'
            placeholder={t('FIRST_NAME', 'First name')}
            onChange={handleChangeInput}
            required
            autoComplete='off'
            ref={formMethods.register({
              required: t('VALIDATION_ERROR_FIRST_NAME_REQUIRED', 'First name is required')
            })}
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
            ref={formMethods.register({
              required: t('VALIDATION_ERROR_LAST_NAME_REQUIRED', 'Last name is required')
            })}
          />
          <Input
            type='email'
            name='email'
            aria-label='email'
            className='form'
            placeholder={t('EMAIL', 'Email')}
            onChange={handleChangeInputEmail}
            ref={(e) => {
              emailInput.current = e
            }}
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
        title={t('SIGN_UP_FOR_DRIVER', 'Sign up for driver')}
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

export const SignUpDriver = (props) => {
  const signUpBusinessProps = {
    ...props,
    UIComponent: SignUpBusinessUI
  }
  return <SignUpController {...signUpBusinessProps} />
}
