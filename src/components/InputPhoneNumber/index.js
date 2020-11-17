import React, { useEffect } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isPossiblePhoneNumber
} from 'react-phone-number-input'
import { useLanguage } from 'ordering-components'

import { Container, ErrorMsg } from './styles'

export const InputPhoneNumber = (props) => {
  const {
    value,
    setValue,
    handleIsValid
  } = props

  const [, t] = useLanguage()

  useEffect(() => {
    if (value) {
      handleIsValid && handleIsValid(isPossiblePhoneNumber(value))
    }
  }, [value])

  return (
    <Container className='phone_number'>
      <PhoneInput
        // international
        // defaultCountry='US'
        placeholder={t('PHONE_NUMBER', 'Phone number')}
        value={value}
        onChange={setValue}
        // error={value ? (isPossiblePhoneNumber(value) ? undefined : '') : 'Phone number required'}
      />
      {value && !isPossiblePhoneNumber(value) && <ErrorMsg>{t('INVALID_PHONE_NUMBER', 'Invalid phone number')}</ErrorMsg>}

      {/* <p>Is valid: {value && isPossiblePhoneNumber(value) ? 'true' : 'false'}</p>
      <p>National: {value && formatPhoneNumber(value)}</p>
      <p>International: {value && formatPhoneNumberIntl(value)}</p> */}
    </Container>
  )
}
