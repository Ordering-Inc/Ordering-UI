import React, { useEffect, useRef } from 'react'
import parsePhoneNumber from 'libphonenumber-js'
import PhoneInput from 'react-phone-number-input'
import BsPhone from '@meronex/icons/bs/BsPhone'
import { useLanguage, useConfig, useSession } from 'ordering-components'

import { Container, ErrorMsg, InputBeforeIconWrapper, ContainerUserForm } from './styles'

export const InputPhoneNumber = (props) => {
  const {
    user,
    value,
    setValue,
    handleIsValid,
    disabled,
    isError,
    useProfileFormStyle
  } = props

  const [, t] = useLanguage()
  const [{ auth }] = useSession()
  const [{ configs }] = useConfig()

  const phoneRef = useRef(null)
  const UKCodes = ['44']

  const isValidPhoneNumber = (number) => {
    if (!number) return
    if (!parseInt(configs?.validation_phone_number_lib?.value ?? 1, 10)) {
      return true
    }
    const numberParser = parsePhoneNumber(number)
    let enableIspossibly = false
    if (UKCodes.includes(numberParser?.countryCallingCode)) {
      const inputNumber = returnRawNumber(number)
      const validationsForUK = ['01', '02', '07', '0800', '0808', '0845', '0870', '0871', '16']
      const result = validationsForUK.some(areaCode => inputNumber?.number?.startsWith(areaCode))
      enableIspossibly = result
    }

    return enableIspossibly ? numberParser?.isPossible?.() : numberParser?.isValid?.()
  }

  const returnRawNumber = (number) => {
    if (!number) return null
    if (!parseInt(configs?.validation_phone_number_lib?.value ?? 1, 10)) {
      return null
    }
    const numberParser = parsePhoneNumber(number)
    const validations = ['0', '+']
    if (validations.includes(phoneRef?.current?.value[0]) && UKCodes.includes(numberParser?.countryCallingCode)) {
      const numberInput = phoneRef?.current?.value.replace('-', '')
      let numberRaw = ''
      numberInput?.split(' ')?.filter((_splited, i) => i > 0 || (i === 0 && _splited[0] === '0'))?.map(splited => {
        numberRaw = `${numberRaw}${splited}`
        return numberRaw
      })

      return {
        number: numberRaw,
        countryCallingCode: numberParser?.countryCallingCode ? `+${numberParser?.countryCallingCode}` : null
      }
    }

    return number
  }

  const ContainerStyled = useProfileFormStyle ? ContainerUserForm : Container

  useEffect(() => {
    if (value) {
      handleIsValid && handleIsValid(isValidPhoneNumber(value))
    }
  }, [value])

  return (
    <ContainerStyled className='phone_number' disabled={disabled} isValid={value ? isValidPhoneNumber(value) : true} isError={isError}>
      {!useProfileFormStyle && (
        <InputBeforeIconWrapper>
          <BsPhone />
        </InputBeforeIconWrapper>
      )}
      <PhoneInput
        ref={phoneRef}
        disabled={disabled}
        placeholder={t('PHONE_NUMBER', 'Phone number')}
        defaultCountry={configs?.default_country_code?.value}
        value={value}
        name='telefono'
        initialValueFormat='national'
        onChange={(val) => setValue && setValue(val, isValidPhoneNumber(val), returnRawNumber(val))}
      />
      {value && !isValidPhoneNumber(value) && !disabled && (
        <>
          {(((auth && user?.country_phone_code) || !auth || value.includes('+')) && phoneRef?.current?.value) && (
            <ErrorMsg>{t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')}</ErrorMsg>
          )}

          {auth && !user?.country_phone_code && !value.includes('+') && (
            <ErrorMsg>{t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid')}</ErrorMsg>
          )}
        </>
      )}
    </ContainerStyled>
  )
}
