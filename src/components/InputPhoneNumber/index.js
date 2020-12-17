import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import parsePhoneNumber from 'libphonenumber-js'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {
  InputPhoneNumber as InputController,
  useLanguage,
  useConfig
} from 'ordering-components'

import { Container, ErrorMsg } from './styles'

const InputPhoneNumberUI = (props) => {
  const {
    value,
    setValue,
    handleIsValid,
    disabled,
    countryData
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()

  const isValidPhoneNumber = (number) => {
    if (!number) return
    const numberParser = parsePhoneNumber(number)
    return numberParser?.isValid()
  }

  useEffect(() => {
    if (value) {
      handleIsValid && handleIsValid(isValidPhoneNumber(value))
    }
  }, [value])

  useEffect(() => {
    if (countryData.number) {
      const number = `${countryData.number}${value?.replace('null', '')}`
      setValue(number, isValidPhoneNumber(number))
    }
  }, [countryData.number])

  return (
    <Container className='phone_number' disabled={disabled}>
      {countryData.loading || value === null ? (
        <Skeleton height={40} />
      ) : (
        <>
          <PhoneInput
            international
            defaultCountry={countryData.value || configs?.countryDefaultCode?.code || 'US'}
            countryCallingCodeEditable={false}
            placeholder={t('PHONE_NUMBER', 'Phone number')}
            value={value}
            disabled={disabled}
            onChange={(val) => setValue(val, isValidPhoneNumber(val))}
          />
          {value && !isValidPhoneNumber(value) && !disabled && <ErrorMsg>{t('INVALID_ERROR_PHONE_NUMBER', 'Invalid phone number')}</ErrorMsg>}
        </>
      )}
    </Container>
  )
}

export const InputPhoneNumber = (props) => {
  const inputProps = {
    ...props,
    UIComponent: InputPhoneNumberUI
  }
  return (
    <InputController {...inputProps} />
  )
}
