import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-phone-number-input/style.css'
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input'
import { InputPhoneNumber as InputController, useLanguage } from 'ordering-components'

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

  useEffect(() => {
    if (value) {
      handleIsValid && handleIsValid(isPossiblePhoneNumber(value))
    }
  }, [value])

  useEffect(() => {
    if (countryData.number) {
      const number = `${countryData.number}${value?.replace('null', '')}`
      setValue(number, isPossiblePhoneNumber(number))
    }
  }, [countryData.number])

  return (
    <Container className='phone_number' disabled={disabled}>
      {countryData.loading ? (
        <Skeleton height={40} />
      ) : (
        <>
          <PhoneInput
            international
            defaultCountry={countryData.value}
            countryCallingCodeEditable={false}
            placeholder={t('PHONE_NUMBER', 'Phone number')}
            value={value}
            disabled={disabled}
            onChange={(val) => setValue(val, isPossiblePhoneNumber(val))}
          />
          {value && !isPossiblePhoneNumber(value) && !disabled && <ErrorMsg>{t('INVALID_ERROR_PHONE_NUMBER', 'Invalid phone number')}</ErrorMsg>}
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
