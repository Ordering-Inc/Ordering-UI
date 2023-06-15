import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import parsePhoneNumber from 'libphonenumber-js'
import {
  useLanguage,
  CheckPassword as CheckPasswordController,
  useSession
} from 'ordering-components'
import { Modal } from '../Modal'
import { Button, Input } from '../../../styles'
import { Alert } from '../Confirm'
import { useCountdownTimer } from '../../../../../../hooks/useCountdownTimer'
import { formatSeconds } from '../../../../../../utils'

import {
  WrapperCheckPassword,
  FormController,
  Tabs,
  Tab,
  CountdownTimer,
  OtpWrapper,
  ResendCode
} from './styles'
import { InputPhoneNumber } from '../InputPhoneNumber'
import OtpInput from 'react-otp-input'

const ConfirmAdminUI = (props) => {
  const {
    checkPasswordStatus,
    getCheckPassword,
    open,
    onClose,
    onConfirm,

    confirmTab,
    otpType,
    setOtpType,
    handleChangeTab,
    setOtpState,
    otpState,
    generateOtpCode,

    checkCodeState,
    handleChangeInput,
    handleChangeCredentials
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [willVerifyOtpState, setWillVerifyOtpState] = useState(false)
  const [userPhoneNumber, setUserPhoneNumber] = useState(null)
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState('')

  const numOtpInputs = confirmTab === 'otp' ? 6 : 4
  const otpPlaceholder = [...Array(numOtpInputs)].fill(0).join('')
  const [otpLeftTime, , resetOtpLeftTime] = useCountdownTimer(600, !checkCodeState?.loading && willVerifyOtpState)
  const isOtpEmail = confirmTab === 'otp' && otpType === 'email'
  const isOptCellphone = confirmTab === 'otp' && otpType === 'cellphone'

  const handleChangeOtpType = (type) => {
    setWillVerifyOtpState(false)
    handleChangeTab('otp')
    setOtpType(type)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    setOtpState('')
  }

  const handleChangePhoneNumber = (number, isValid) => {
    setUserPhoneNumber(number)
    let phoneNumberParser = null
    let values = { country_phone_code: '', cellphone: '' }

    if (isValid) {
      phoneNumberParser = parsePhoneNumber(number)
    }
    if (phoneNumberParser) {
      values = {
        country_phone_code: phoneNumberParser.countryCallingCode,
        cellphone: phoneNumberParser.nationalNumber
      }
    }
    handleChangeCredentials(values)
  }

  const handleSendOtp = () => {
    if (willVerifyOtpState) {
      setOtpState('')
      resetOtpLeftTime()
      if (confirmTab === 'otp') {
        generateOtpCode()
        setWillVerifyOtpState(true)
      }
    }
  }

  const onSubmit = () => {
    if (confirmTab === 'otp' && otpType === 'cellphone') {
      const isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true
      if (!userPhoneNumber) {
        setAlertState({
          open: true,
          content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone Number is required.')]
        })
        return
      }
      if (!isPhoneNumberValid && userPhoneNumber) {
        setAlertState({
          open: true,
          content: [t('PHONE_NUMBER_IS_NOT_VALID', 'Phone number is not valid')]
        })
        return
      }
    }
    if (confirmTab === 'password') {
      getCheckPassword()
    }
    if (confirmTab === 'otp') {
      generateOtpCode()
      setWillVerifyOtpState(true)
    }
  }

  useEffect(() => {
    if (otpState?.length === numOtpInputs) {
      if (confirmTab === 'otp') {
        onConfirm(otpState)
      }
    }
  }, [otpState])

  useEffect(() => {
    if (checkPasswordStatus.error) {
      setAlertState({
        open: true,
        content: checkPasswordStatus.error
      })
      return
    }
    if (checkPasswordStatus.result === 'OK') {
      onConfirm()
    }
  }, [checkPasswordStatus.error, checkPasswordStatus.result])

  useEffect(() => {
    if (checkCodeState?.result?.error) {
      setAlertState({
        open: true,
        content: checkCodeState?.result?.error || [t('ERROR', 'Error')]
      })
    } else if (checkCodeState?.result?.result) {
      setAlertState({
        open: true,
        content: t('CODE_SENT', 'The code has been sent')
      })
      resetOtpLeftTime()
    }
  }, [checkCodeState])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map((error) => error.message)
      })
    }
  }, [errors])

  useEffect(() => {
    const _credentials = {}
    if (user) {
      if (user?.cellphone) {
        let phone = null
        if (user?.cellphone && user?.country_phone_code) {
          phone = `+${user?.country_phone_code} ${user?.cellphone}`
          _credentials.country_phone_code = user.country_phone_code
          _credentials.cellphone = user.cellphone
        } else if (user?.country_phone_code) {
          phone = `+${user?.country_phone_code} ${user?.cellphone}`
          _credentials.country_phone_code = user.country_phone_code
          _credentials.cellphone = user?.cellphone
        } else {
          phone = user?.cellphone
          _credentials.cellphone = user?.cellphone
        }
        setUserPhoneNumber(phone)
      }
      if (user?.email) {
        _credentials.email = user?.email
      }
      handleChangeCredentials(_credentials)
    }
  }, [user])

  return (
    <Modal
      open={open}
      width={props.width || '600px'}
      onClose={() => onClose()}
    >
      <WrapperCheckPassword
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3>{t('CONFIRM_PASSWORD', 'Confirm password')}</h3>
        <Tabs>
          <Tab
            active={confirmTab === 'password'}
            onClick={() => {
              setWillVerifyOtpState(false)
              handleChangeTab('password')
            }}
          >
            {t('BY_PASSWORD', 'by Password')}
          </Tab>
          <Tab
            active={isOtpEmail}
            onClick={() => handleChangeOtpType('email')}
          >
            {t('BY_OTP_EMAIL', 'by Otp Email')}
          </Tab>
          <Tab
            active={isOptCellphone}
            onClick={() => handleChangeOtpType('cellphone')}
          >
            {t('BY_OTP_PHONE', 'by Otp Phone')}
          </Tab>
        </Tabs>
        {confirmTab === 'password' && (
          <FormController>
            <Input
              type='password'
              name='password'
              placeholder={t('TYPE_YOUR_PASSWORD_TO_CONFIRM_DELETE', 'Type your password to confirm delete.')}
              ref={register({
                required: t(
                  'VALIDATION_ERROR_REQUIRED',
                  'Password is required'
                ).replace('_attribute_', t('PASSWORD', 'Password'))
              })}
              onChange={(e) => handleChangeInput(e)}
              autoComplete='off'
              autoCapitalize='off'
            />
          </FormController>
        )}
        {!willVerifyOtpState && confirmTab === 'otp' && otpType === 'email' && (
          <FormController>
            <Input
              type='email'
              name='email'
              placeholder={t('EMAIL', 'Email')}
              defaultValue={user?.email}
              ref={register({
                required: t(
                  'VALIDATION_ERROR_REQUIRED',
                  'Email is required'
                ).replace('_attribute_', t('EMAIL', 'Email')),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t(
                    'VALIDATION_ERROR_EMAIL',
                    'Invalid email address'
                  ).replace('_attribute_', t('EMAIL', 'Email'))
                }
              })}
              onChange={(e) => handleChangeInput(e)}
              autoComplete='off'
              autoCapitalize='off'
            />
          </FormController>
        )}
        {!willVerifyOtpState && confirmTab === 'otp' && otpType === 'cellphone' && (
          <FormController>
            <InputPhoneNumber
              isUser
              user={user}
              value={userPhoneNumber}
              setValue={handleChangePhoneNumber}
              handleIsValid={setIsValidPhoneNumber}
            />
          </FormController>
        )}
        {(!willVerifyOtpState &&
          <Button
            borderRadius='8px'
            color='primary'
            type='submit'
            disabled={checkPasswordStatus.loading}
          >
            {checkPasswordStatus.loading
              ? t('LOADING', 'Loading')
              : confirmTab === 'otp'
                ? t('GET_VERIFY_CODE', 'Get verify code')
                : t('CONFIRM', 'Confirm')}
          </Button>
        )}
        {willVerifyOtpState && !checkCodeState?.loading && (
          <>
            <CountdownTimer>
              <span>{formatSeconds(otpLeftTime)}</span>
            </CountdownTimer>

            <OtpWrapper>
              <OtpInput
                value={otpState}
                onChange={otp => setOtpState(otp)}
                numInputs={numOtpInputs}
                containerStyle='otp-container'
                inputStyle='otp-input'
                placeholder={otpPlaceholder}
                isInputNum
                shouldAutoFocus
                isDisabled={otpLeftTime === 0}
              />
            </OtpWrapper>
            <ResendCode
              disabled={otpLeftTime > 520}
              onClick={handleSendOtp}
            >
              {t('RESEND_AGAIN', 'Resend again')}?
            </ResendCode>
            <Button
              borderRadius='8px'
              type='button'
              color='primary'
              onClick={() => {
                setWillVerifyOtpState(false)
              }}
            >
              {t('CANCEL', 'Cancel')}
            </Button>
          </>
        )}

      </WrapperCheckPassword>

      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </Modal>
  )
}

export const ConfirmAdmin = (props) => {
  const checkPasswordControlProps = {
    ...props,
    UIComponent: ConfirmAdminUI
  }
  return (
    <>
      {props.open && (
        <CheckPasswordController {...checkPasswordControlProps} />
      )}
    </>
  )
}
