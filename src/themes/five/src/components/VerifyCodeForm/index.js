import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components'
import OtpInput from 'react-otp-input'
import { Button } from '../../styles/Buttons'
import { formatSeconds } from '../../../../../utils'

import {
  Container,
  OtpWrapper,
  DownTimer
} from './styles'

export const VerifyCodeForm = (props) => {
  const {
    otpLeftTime,
    handleSendOtp,
    handleCheckPhoneCode,
    credentials,
    email,
    isPhone
  } = props

  const [, t] = useLanguage()
  const [otpState, setOtpState] = useState('')

  const numOtpInputs = 4

  useEffect(() => {
    if (otpState?.length === numOtpInputs) {
      const { cellphone, country_phone_code: countryPhoneCode } = credentials

      handleCheckPhoneCode({
        cellphone: cellphone,
        country_phone_code: countryPhoneCode,
        code: otpState
      })
    }
  }, [otpState])

  return (
    <Container>
      <p>{t('SENT_VERIFY_CODE_ON_EMAIL', 'We sent you a verication code on _email_').replace('_email_', isPhone ? credentials?.cellphone : email)}</p>
      <DownTimer>{formatSeconds(otpLeftTime)}</DownTimer>
      <OtpWrapper>
        <OtpInput
          value={otpState}
          onChange={otp => setOtpState(otp)}
          numInputs={numOtpInputs}
          containerStyle='otp-container'
          inputStyle='otp-input'
          isInputNum
          shouldAutoFocus
        />
      </OtpWrapper>
      <Button
        color='primaryContrast'
        naked
        onClick={handleSendOtp}
      >
        {t('RESEND_CODE', 'Resend code')}
      </Button>
    </Container>
  )
}
