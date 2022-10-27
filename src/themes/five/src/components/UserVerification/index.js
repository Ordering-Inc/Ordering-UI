import React, { useState, useEffect } from 'react'
import OtpInput from 'react-otp-input'
import {
  UserVerification as UserVerificationController,
  UserFormDetails as UserFormController,
  useSession,
  useLanguage,
  useConfig
} from 'ordering-components'

import { Envelope } from 'react-bootstrap-icons'

import { Alert } from '../Confirm'
import { Modal } from '../Modal'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useCountdownTimer } from '../../../../../hooks/useCountdownTimer'
import { formatSeconds } from '../../../../../utils'
import { InputPhoneNumber } from '../../../../../components/InputPhoneNumber'
import { UserFormDetailsUI } from '../UserFormDetails'

import {
  Container,
  WrapperText,
  FormInput,
  InputWrapper,
  OtpWrapper,
  CountdownTimer,
  InputBeforeIcon,
  ButtonsWrapper,
  WarningText
} from './styles'

const UserDetails = (props) => {
  const userDetailsProps = {
    ...props,
    isEdit: true,
    useValidationFields: true,
    useDefualtSessionManager: true,
    UIComponent: UserFormDetailsUI
  }

  return <UserFormController {...userDetailsProps} />
}

const UserVerificationUI = (props) => {
  const {
    verifyEmailState,
    verifyPhoneState,
    sendVerifyEmailCode,
    sendVerifyPhoneCode,
    checkVerifyEmailCode,
    checkVerifyPhoneCode,
    cleanErrorsState
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ auth, user }] = useSession()
  const [otpState, setOtpState] = useState('')
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [verificationState, setVerificationState] = useState({ email: false, phone: false })

  const [phoneState, setPhoneState] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const isEmailVerifyRequired = auth && configs?.verification_email_required?.value === '1' && !user?.email_verified
  const isPhoneVerifyRequired = auth && configs?.verification_phone_required?.value === '1' && !user?.phone_verified

  const phoneLength = phoneState?.cellphone && phoneState?.country_phone_code && phoneState?.cellphone?.split('')?.length
  const lastNumbers = phoneState?.cellphone && phoneState?.country_phone_code && phoneState?.cellphone?.split('').fill('*', 0, phoneLength - 2).join('')

  const [otpLeftTime, , resetOtpLeftTime] = useCountdownTimer(
    600,
    isEmailVerifyRequired
      ? verificationState.email
      : verificationState.phone
  )

  const numOtpInputs = isEmailVerifyRequired ? 6 : 4

  const handleSendOtp = (opt) => {
    resetOtpLeftTime()
    if (opt === 'phone') {
      sendVerifyPhoneCode({
        cellphone: phoneState?.cellphone,
        country_phone_code: phoneState?.country_phone_code
      })
      return
    }
    sendVerifyEmailCode({ email: user?.email })
  }

  const closeAlert = () => {
    setAlertState({ open: false, content: [] })
    cleanErrorsState()
    cleanErrorsState('phone')
    setOtpState('')
  }

  const setupUserPhoneNumber = () => {
    if (!user || !user?.cellphone || !user?.country_phone_code) return
    setPhoneState({
      cellphone: user?.cellphone,
      country_phone_code: user?.country_phone_code,
      formatted: `+${user?.country_phone_code} ${user?.cellphone}`
    })
  }

  useEffect(() => {
    if (otpState?.length === numOtpInputs) {
      if (verificationState.email) {
        checkVerifyEmailCode({ code: otpState })
        return
      }
      if (verificationState.phone) {
        checkVerifyPhoneCode({
          cellphone: phoneState?.cellphone,
          country_phone_code: +(phoneState?.country_phone_code),
          code: otpState
        })
      }
    }
  }, [otpState])

  useEffect(() => {
    if (verifyEmailState?.errorSendCode || verifyEmailState?.errorCheckCode) {
      setAlertState({
        open: true,
        content: verifyEmailState?.errorSendCode?.[0] ??
          verifyEmailState?.errorCheckCode?.[0] ??
          t('ERROR', 'Error')
      })
    }

    if (verifyPhoneState?.errorSendCode || verifyPhoneState?.errorCheckCode) {
      setAlertState({
        open: true,
        content: verifyPhoneState?.errorSendCode?.[0] ??
          verifyPhoneState?.errorCheckCode?.[0] ??
          t('ERROR', 'Error')
      })
    }
  }, [verifyEmailState, verifyPhoneState])

  useEffect(() => {
    if (!verifyEmailState?.loadingSendCode && isEmailVerifyRequired) {
      setVerificationState({
        ...verificationState,
        email: !!verifyEmailState?.resultSendCode
      })
    }
    if (!verifyPhoneState?.loadingSendCode && isPhoneVerifyRequired && !isEmailVerifyRequired) {
      setVerificationState({
        ...verificationState,
        phone: !!verifyPhoneState?.resultSendCode
      })
    }
  }, [verifyEmailState, verifyPhoneState])

  useEffect(() => {
    if (otpState) {
      setOtpState('')
    }
  }, [verificationState])

  useEffect(() => {
    setupUserPhoneNumber()
  }, [user])

  return (
    <Container>
      <FormInput>
        <WrapperText>
          <span>
            {t('VERIFICATION_CODE', 'Verification Code')}
          </span>
          {isEmailVerifyRequired && (
            <span>
              {!verificationState.email ? (
                t('VERIFICATION_EMAIL_CODE_MESSAGE', 'In order to continue using our platform please verify your email')
              ) : (
                t('VERIFICATION_EMAIL_CODE_SENT_MESSAGE', 'Please type the verification code sent to your email')
              )}
            </span>
          )}

          {isPhoneVerifyRequired && !isEmailVerifyRequired && (
            <span>
              {!verificationState.phone ? (
                `${t('VERIFICATION_PHONE_CODE_MESSAGE', 'In order to continue using our platform please verify your phone number')}`
              ) : (
                `${t('VERIFICATION_PHONE_CODE_SENT_MESSAGE', 'Please, enter the verification code we sent to your mobile ending with :number').replace(':number', lastNumbers)}`
              )}
            </span>
          )}
        </WrapperText>

        {isEmailVerifyRequired && (
          !verificationState.email ? (
            <>
              <InputWrapper>
                <Input
                  readOnly
                  type='email'
                  name='email'
                  aria-label='email'
                  placeholder={user?.email}
                  autoComplete='off'
                />
                <InputBeforeIcon>
                  <Envelope />
                </InputBeforeIcon>
              </InputWrapper>
              <Button
                type='button'
                color='primary'
                disabled={verifyEmailState?.loadingSendCode || verifyEmailState?.loadingCheckCode}
                onClick={handleSendOtp}
              >
                {t('SEND_CODE', 'Send code')}
              </Button>
            </>
          ) : (
            <>
              <CountdownTimer error={otpLeftTime === 0}>
                <span>{formatSeconds(otpLeftTime)}</span>
              </CountdownTimer>

              <OtpWrapper>
                <OtpInput
                  value={otpState}
                  onChange={otp => setOtpState(otp)}
                  numInputs={numOtpInputs}
                  containerStyle='otp-container'
                  inputStyle='otp-input'
                  placeholder={new Array(numOtpInputs).fill(0).join('')}
                  isInputNum
                  shouldAutoFocus
                />
              </OtpWrapper>

              <ButtonsWrapper>
                <div style={{ width: '48%' }}>
                  <Button
                    type='button'
                    color='secundary'
                    disabled={verifyEmailState?.loadingSendCode || verifyEmailState?.loadingCheckCode}
                    onClick={() => {
                      setVerificationState({
                        ...verificationState,
                        email: false
                      })
                    }}
                  >
                    {t('CANCEL', 'Cancel')}
                  </Button>
                </div>
                <div style={{ width: '48%' }}>
                  <Button
                    type='button'
                    color='secundary'
                    disabled={verifyEmailState?.loadingSendCode || verifyEmailState?.loadingCheckCode}
                    onClick={handleSendOtp}
                  >
                    {t('RESEND_AGAIN', 'Resend again?')}
                  </Button>
                </div>
              </ButtonsWrapper>
            </>
          )
        )}

        {isPhoneVerifyRequired && !isEmailVerifyRequired && (
          !verificationState.phone ? (
            phoneState?.formatted ? (
              <>
                <InputWrapper phone>
                  <InputPhoneNumber
                    user={user}
                    value={phoneState?.formatted}
                    disabled={!!phoneState?.formatted}
                    setValue={() => {}}
                    handleIsValid={() => {}}
                  />
                </InputWrapper>
                <Button
                  type='button'
                  color='primary'
                  disabled={verifyPhoneState?.loadingSendCode || verifyPhoneState?.loadingCheckCode}
                  onClick={() => handleSendOtp('phone')}
                >
                  {t('SEND_CODE', 'Send code')}
                </Button>
              </>
            ) : (
              <>
                <WarningText>
                  {t('WARNING_PHONE_CODE_VALIDATION', 'Please update your phone number to continue')}
                </WarningText>
                <Button
                  type='button'
                  color='primary'
                  onClick={() => setModalIsOpen(true)}
                >
                  {t('UPDATE_PROFILE', 'Update profile')}
                </Button>
              </>
            )
          ) : (
            <>
              <CountdownTimer error={otpLeftTime === 0}>
                <span>{formatSeconds(otpLeftTime)}</span>
              </CountdownTimer>

              <OtpWrapper>
                <OtpInput
                  value={otpState}
                  onChange={otp => setOtpState(otp)}
                  numInputs={numOtpInputs}
                  containerStyle='otp-container'
                  inputStyle='otp-input'
                  placeholder={new Array(numOtpInputs).fill(0).join('')}
                  isInputNum
                  shouldAutoFocus
                />
              </OtpWrapper>

              <ButtonsWrapper>
                <div style={{ width: '48%' }}>
                  <Button
                    type='button'
                    color='secundary'
                    disabled={verifyPhoneState?.loadingSendCode || verifyPhoneState?.loadingCheckCode}
                    onClick={() => {
                      setVerificationState({
                        ...verificationState,
                        phone: false
                      })
                    }}
                  >
                    {t('CANCEL', 'Cancel')}
                  </Button>
                </div>
                <div style={{ width: '48%' }}>
                  <Button
                    type='button'
                    color='secundary'
                    disabled={verifyPhoneState?.loadingSendCode || verifyPhoneState?.loadingCheckCode}
                    onClick={() => handleSendOtp('phone')}
                  >
                    {t('RESEND_AGAIN', 'Resend again?')}
                  </Button>
                </div>
              </ButtonsWrapper>
            </>
          )
        )}
      </FormInput>

      {modalIsOpen && (
        <Modal
          title={t('UPDATE_PROFILE', 'Update Profile')}
          open={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          width='700px'
        >
          <UserDetails
            user={user}
            handleSuccessUpdate={() => setModalIsOpen(false)}
          />
        </Modal>
      )}

      <Alert
        title={t('VERIFY_EMAIL', 'Verify email')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </Container>
  )
}

export const UserVerification = (props) => {
  const verifyProps = {
    ...props,
    UIComponent: UserVerificationUI
  }
  return (
    <UserVerificationController {...verifyProps} />
  )
}
