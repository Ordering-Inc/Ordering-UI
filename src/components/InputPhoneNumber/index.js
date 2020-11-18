import React, { useEffect } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput, {
  isPossiblePhoneNumber
} from 'react-phone-number-input'
import { useLanguage } from 'ordering-components'

import { Container, ErrorMsg } from './styles'

export const InputPhoneNumber = (props) => {
  const {
    value,
    setValue,
    handleIsValid,
    disabled
  } = props

  const [, t] = useLanguage()

  useEffect(() => {
    if (value) {
      handleIsValid && handleIsValid(isPossiblePhoneNumber(value))
    }
  }, [value])

  return (
    <Container className='phone_number' disabled={disabled}>
      <PhoneInput
        international
        defaultCountry='US'
        countryCallingCodeEditable={false}
        placeholder={t('PHONE_NUMBER', 'Phone number')}
        value={value}
        disabled={disabled}
        onChange={(val) => setValue(val, isPossiblePhoneNumber(val))}
      />
      {value && !isPossiblePhoneNumber(value) && !disabled && <ErrorMsg>{t('INVALID_PHONE_NUMBER', 'Invalid phone number')}</ErrorMsg>}
    </Container>
  )
}
