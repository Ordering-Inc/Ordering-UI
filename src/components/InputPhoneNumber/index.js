import React, { useEffect, useState } from 'react'
import parsePhoneNumber from 'libphonenumber-js'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useLanguage, useConfig } from 'ordering-components'

import { Container, ErrorMsg } from './styles'

export const InputPhoneNumber = (props) => {
  const {
    value,
    setValue,
    handleIsValid,
    disabled
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [countryState, setCountryState] = useState(configs?.countryDefaultCode?.value)

  const isValidPhoneNumber = (number) => {
    if (!number) return
    const numberParser = parsePhoneNumber(number)
    return numberParser?.isValid()
  }

  const handleCountryChange = (val) => {
    if (val) {
      setCountryState(val)
    }
  }

  useEffect(() => {
    if (value) {
      handleIsValid && handleIsValid(isValidPhoneNumber(value))
    }
  }, [value])

  return (
    <Container className='phone_number' disabled={disabled}>
      <>
        <PhoneInput
          disabled={disabled}
          placeholder={t('PHONE_NUMBER', 'Phone number')}
          defaultCountry={countryState}
          value={value}
          onChange={(val) => setValue(val, isValidPhoneNumber(val))}
          onCountryChange={(val) => handleCountryChange(val)}
        />
        {value && !isValidPhoneNumber(value) && !disabled && <ErrorMsg>{t('INVALID_ERROR_PHONE_NUMBER', 'Invalid phone number')}</ErrorMsg>}
      </>
    </Container>
  )
}
