import React, { useState, useEffect } from 'react'
import OtpInput from 'react-otp-input'
import { useTheme } from 'styled-components'
import { useSession, useLanguage } from 'ordering-components'

import {
  Envelope
} from 'react-bootstrap-icons'

import { VerifyEmail as VerifyEmailController } from './naked'

import { Alert } from '../Confirm'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useCountdownTimer } from '../../../../../hooks/useCountdownTimer'
import { formatSeconds } from '../../../../../utils'

import {
  Container,
  WrapperText,
  FormInput,
  InputWrapper,
  OtpWrapper,
  CountdownTimer,
  InputBeforeIcon,
  ButtonsWrapper
} from './styles'

const VerifyEmailUI = (props) => {
  const {
    verifyEmailState,
    cleanErrorsState,
    sendVerifyEmailCode,
    checkVerifyEmailCode,
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [otpState, setOtpState] = useState('')
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [emailVerification, setEmailVerification] = useState(false)

  const [otpLeftTime, _, resetOtpLeftTime] = useCountdownTimer(600, emailVerification)

  const numOtpInputs = 6

  const handleSendOtp = () => {
    resetOtpLeftTime()
    sendVerifyEmailCode({ email: user?.email })
  }

  const closeAlert = () => {
    setAlertState({ open: false, content: [] })
    cleanErrorsState()
    setOtpState('')
  }

  useEffect(() => {
    if (otpState?.length === numOtpInputs) {
      if (emailVerification) {
        checkVerifyEmailCode({ code: otpState })
        return
      }
    }
  }, [otpState])

  useEffect(() => {
    if (verifyEmailState?.errorSendCode || verifyEmailState?.errorCheckCode) {
      setAlertState({
        open: true,
        content: verifyEmailState?.errorSendCode?.[0]
          ?? verifyEmailState?.errorCheckCode?.[0]
          ?? t('ERROR', 'Error')
      })
    }
  }, [verifyEmailState])

  useEffect(() => {
    if (!verifyEmailState?.loadingSendCode) {
      setEmailVerification(!!verifyEmailState?.resultSendCode)
    }
  }, [verifyEmailState])

  return (
    <Container>
      <FormInput>
        <WrapperText>
          <span>
            {t('VERIFICATION_CODE', 'Verification Code')}
          </span>
          <span>
            {!emailVerification ? (
              t('VERIFICATION_CODE_MESSAGE', 'In order to continue using our platform please verify your email')
            ) : (
              t('VERIFICATION_CODE_SENT_MESSAGE', 'Please type the verification code sent to your email')
            )}
          </span>
        </WrapperText>
        {!emailVerification ? (
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
                    setEmailVerification(false)
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
        )}
      </FormInput>
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

export const VerifyEmail = (props) => {
  const verifyProps = {
    ...props,
    UIComponent: VerifyEmailUI
  }
  return (
    <VerifyEmailController {...verifyProps} />
  )
}
