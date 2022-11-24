import React, { useEffect } from 'react'
import parsePhoneNumber from 'libphonenumber-js'
import PhoneInput from 'react-phone-number-input'
import BsPhone from '@meronex/icons/bs/BsPhone'
import { useLanguage, useConfig, useSession } from 'ordering-components'

import { Container, ErrorMsg, InputBeforeIconWrapper } from './styles'

export const InputPhoneNumber = (props) => {
  const {
    user,
    value,
    setValue,
    handleIsValid,
    disabled,
    isError
  } = props

  const [, t] = useLanguage()
  const [{ auth }] = useSession()
  const [{ configs }] = useConfig()

  const isValidPhoneNumber = (number) => {
    if (!number) return
    if (!parseInt(configs?.validation_phone_number_lib?.value ?? 1, 10)) {
      return true
    }
    const numberParser = parsePhoneNumber(number)
    return numberParser?.isValid()
  }

  useEffect(() => {
    if (value) {
      handleIsValid && handleIsValid(isValidPhoneNumber(value))
    }
  }, [value])

  return (
    <Container className='phone_number' disabled={disabled} isValid={value ? isValidPhoneNumber(value) : true} isError={isError}>
      <>
        {props.beforeElements?.map((BeforeElement, i) => (
          <React.Fragment key={i}>
            {BeforeElement}
          </React.Fragment>))}
        {props.beforeComponents?.map((BeforeComponent, i) => (
          <BeforeComponent key={i} {...props} />))}
        <InputBeforeIconWrapper>
          <BsPhone />
        </InputBeforeIconWrapper>
        <PhoneInput
          disabled={disabled}
          placeholder={t('PHONE_NUMBER', 'Phone number')}
          defaultCountry={configs?.default_country_code?.value}
          value={value}
          name='telefono'
          displayInitialValueAsLocalNumber
          onChange={(val) => setValue && setValue(val, isValidPhoneNumber(val))}
        />
        {value && !isValidPhoneNumber(value) && !disabled && (
          <>
            {((auth && user?.country_phone_code) || !auth || value.includes('+')) && (
              <ErrorMsg>{t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')}</ErrorMsg>
            )}

            {auth && !user?.country_phone_code && !value.includes('+') && (
              <ErrorMsg>{t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid')}</ErrorMsg>
            )}
          </>
        )}
        {props.afterComponents?.map((AfterComponent, i) => (
          <AfterComponent key={i} {...props} />))}
        {props.afterElements?.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>))}
      </>
    </Container>
  )
}
