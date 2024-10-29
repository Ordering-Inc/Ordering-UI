import React, { useState, useEffect } from 'react'
import parsePhoneNumber from 'libphonenumber-js'
import { formatPhoneNumber } from 'react-phone-number-input'
import { Person } from 'react-bootstrap-icons'
import {
  PaymentOptionStripeLink as PaymentOptionStripeLinkController,
  useLanguage,
  useCustomer,
  useConfig
} from 'ordering-components'

import { Alert } from '../Confirm'
import { InputPhoneNumber } from '../InputPhoneNumber'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

import {
  StripeLinkContainer,
  InputPhoneNumberWrapper,
  InputBeforeIconWrapper,
  CodeSentContainer
} from './styles'

export const PaymentOptionStripeLinkUI = (props) => {
  const {
    userInfo,
    businessConfigs,
    stripeLinkState,
    setStripeLinkState,
    handleSendStripeLink,
    handleChangeUserInfo
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useCustomer()
  const [{ configs }] = useConfig()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)
  const [userPhoneNumber, setUserPhoneNumber] = useState(null)
  const [showCountdown, setShowCountdown] = useState(false)
  const [countdown, setCountdown] = useState(59)

  const isWhatappEnabled = businessConfigs?.find(config => config?.key === 'allow_text_messages_whatsapp')?.value === '1'
  const isSmsEnabled = businessConfigs?.find(config => config?.key === 'allow_text_messages_sms')?.value === '1'

  const setUserCellPhone = (_user) => {
    if (userPhoneNumber && !userPhoneNumber.includes('null')) {
      setUserPhoneNumber(userPhoneNumber)
      return
    }
    const cellphone = _user?.guest_id ? _user?.guest_cellphone : _user?.cellphone
    if (cellphone) {
      let phone = null
      if (_user?.country_phone_code) {
        phone = `+${_user?.country_phone_code} ${cellphone}`
      } else {
        phone = cellphone
      }
      setUserPhoneNumber(phone)
      handleChangeUserInfo({
        name: user?.name,
        lastname: user?.lastname,
        country_phone_code: _user?.country_phone_code,
        cellphone: cellphone
      })
      return
    }
    setUserPhoneNumber(cellphone || '')
  }

  const handleChangePhoneNumber = (number, isValid, rawNumber) => {
    setUserPhoneNumber(number)

    let phoneNumberParser = null
    let phoneNumber = {
      country_phone_code: '',
      cellphone: ''
    }
    if (isValid) {
      phoneNumberParser = parsePhoneNumber(number)
      if (!parseInt(configs?.validation_phone_number_lib?.value ?? 1, 10)) {
        if (phoneNumberParser?.nationalNumber) phoneNumberParser.nationalNumber = formatPhoneNumber(number)?.replace?.(/\s/g, '')
      }
    }
    if (phoneNumberParser) {
      phoneNumber = {
        country_phone_code: phoneNumberParser?.countryCallingCode,
        cellphone: phoneNumberParser?.nationalNumber
      }
    }
    handleChangeUserInfo({ ...phoneNumber })
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    setStripeLinkState({ ...stripeLinkState, error: null })
  }

  const onSubmit = (type) => {
    const isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true
    const content = []
    if (!userPhoneNumber) {
      content.push(t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone Number is required.'))
      setAlertState({
        open: true,
        content: content
      })
      return
    }
    if (!isPhoneNumberValid && userPhoneNumber) {
      if (user?.country_phone_code) {
        content.push(t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid'))
        setAlertState({
          open: true,
          content: content
        })
        return
      }
      content.push(t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid'))
      setAlertState({
        open: true,
        content: content
      })
      return
    }
    if (Object.keys(userInfo).length > 0 && isPhoneNumberValid) {
      if (content?.length > 0) {
        setAlertState({
          open: true,
          content: content
        })
        return
      }
      if (!stripeLinkState?.paymentURL) {
        setAlertState({
          open: true,
          content: [t('ERROR_LINK_NOT_AVAILABLE', 'The link is not available please reload the page')]
        })
        return
      }
      handleSendStripeLink(type, () => {
        setShowCountdown(true)
      })
    }
  }

  useEffect(() => {
    let timer
    if (showCountdown && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000)
    } else if (countdown === 0) {
      setShowCountdown(false)
      setCountdown(59)
    }
    return () => clearTimeout(timer)
  }, [showCountdown, countdown])

  useEffect(() => {
    if (user) {
      setUserCellPhone(user)
    }
  }, [user])

  useEffect(() => {
    if ((!stripeLinkState?.loading && stripeLinkState?.error)) {
      setAlertState({
        open: true,
        content: stripeLinkState?.error || [t('ERROR', 'Error')]
      })
    }
  }, [stripeLinkState?.loading])

  return (
    <>
      {showCountdown ? (
        <CodeSentContainer>
          <h3>{t('CODE_HAS_BEEN_SENT_TO', 'Link has been sent to _phone_').replace('_phone_', userPhoneNumber)}</h3>
          <div className='countdown'>
            <div>
              <p>{countdown}</p>
            </div>
          </div>
          <Button
            color='primary'
            disabled
          >
            {t('RESEND_LINK', 'Resend link')}
          </Button>
        </CodeSentContainer>
      ) : (
        <StripeLinkContainer>
          <p className='message'>{t('SEND_SMS_WHATSAPP_MESSAGE', 'The link will be send to the following number')}</p>
          <div className='user-info'>
            <div className='inputs-wrapper'>
              <div className='first-input'>
                <InputBeforeIconWrapper>
                  <Person />
                </InputBeforeIconWrapper>
                <Input
                  type='text'
                  name='name'
                  className='form'
                  placeholder={t('NAME', 'Name')}
                  defaultValue={userInfo?.name ?? user?.name ?? ''}
                  onChange={(e) => handleChangeUserInfo({ name: e.target.value })}
                  autoComplete='off'
                />
              </div>
              <div>
                <InputBeforeIconWrapper>
                  <Person />
                </InputBeforeIconWrapper>
                <Input
                  type='text'
                  name='lastname'
                  className='form'
                  placeholder={t('LAST_NAME', 'Last name')}
                  defaultValue={userInfo?.lastname ?? user?.lastname ?? ''}
                  onChange={(e) => handleChangeUserInfo({ lastname: e.target.value })}
                  autoComplete='off'
                />
              </div>
            </div>
            <InputPhoneNumberWrapper>
              <InputPhoneNumber
                user={user}
                value={userPhoneNumber}
                setValue={handleChangePhoneNumber}
                handleIsValid={setIsValidPhoneNumber}
              />
            </InputPhoneNumberWrapper>
          </div>
          <div className='buttons-wrapper'>
            {isSmsEnabled && (
              <div>
                <Button
                  color='primary'
                  onClick={() => onSubmit('sms')}
                  disabled={stripeLinkState.loading}
                >
                  {t('SEND_SMS', 'Send SMS')}
                </Button>
              </div>
            )}
            {isWhatappEnabled && (
              <div>
                <Button
                  color='primary'
                  outline
                  onClick={() => onSubmit('whatsapp')}
                  disabled={stripeLinkState.loading}
                >
                  {t('SEND_WHATSAPP', 'Send WhatsApp')}
                </Button>
              </div>
            )}

            {!isSmsEnabled && !isWhatappEnabled && (
              <div className='url-link'>
                {stripeLinkState?.loading ? (
                  <div className='loading'>
                    <p>{t('LOADING', 'Loading...')}</p>
                  </div>
                ) : (
                  <div>
                    <a href={stripeLinkState?.paymentURL ?? ''} rel='noopener noreferrer' target='_blank'>{stripeLinkState?.paymentURL ?? ''}</a>
                  </div>
                )}
              </div>
            )}
          </div>
        </StripeLinkContainer>
      )}
      <Alert
        title={t('ERROR', 'Error')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const PaymentOptionStripeLink = (props) => {
  const paymentOptionStripeProps = {
    ...props,
    UIComponent: PaymentOptionStripeLinkUI
  }
  return (
    <PaymentOptionStripeLinkController {...paymentOptionStripeProps} />
  )
}
