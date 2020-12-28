import React, { useEffect } from 'react'
// import Skeleton from 'react-loading-skeleton'
import parsePhoneNumber from 'libphonenumber-js'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {
  // InputPhoneNumber as InputController,
  useLanguage,
  useConfig
} from 'ordering-components'
// import { InputPhoneNumber as InputController } from './test'

import { Container, ErrorMsg } from './styles'

export const InputPhoneNumber = (props) => {
  const {
    user,
    value,
    setValue,
    handleIsValid,
    disabled
    // countryData
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()

  const isValidPhoneNumber = (number) => {
    if (!number) return
    const numberParser = parsePhoneNumber(number)
    return numberParser?.isValid()
  }

  const handleChange = (val) => {
    console.log('val', val)
    setValue(val, isValidPhoneNumber(val))
  }

  useEffect(() => {
    if (value) {
      handleIsValid && handleIsValid(isValidPhoneNumber(value))
    }
  }, [value])

  // useEffect(() => {
  //   if (countryData.number && value.includes('null')) {
  //     const number = `${countryData.number}${value?.replace('null', '')}`
  //     setValue(number, isValidPhoneNumber(number))
  //   }
  // }, [countryData.number])

  return (
    <Container className='phone_number' disabled={disabled}>
      <>
        <PhoneInput
          disabled={disabled}
          placeholder={t('PHONE_NUMBER', 'Phone number')}
          defaultCountry={
            !user?.country_phone_code && user?.cellphone
              ? null
              : user?.country_phone_code && user?.cellphone
                ? null
                : configs?.countryDefaultCode?.value || 'US'
          }
          value={value || null}
          onChange={(val) => handleChange(val)}
        />
        {value && !isValidPhoneNumber(value) && !disabled && <ErrorMsg>{t('INVALID_ERROR_PHONE_NUMBER', 'Invalid phone number')}</ErrorMsg>}
      </>
    </Container>
  )
}

// const InputPhoneNumber = (props) => {
//   const inputProps = {
//     ...props,
//     UIComponent: InputPhoneNumberUI
//   }
//   return (
//     <InputController {...inputProps} />
//   )
// }
