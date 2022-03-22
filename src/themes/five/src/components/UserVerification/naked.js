import React, { useState } from 'react'
import { useSession, useApi } from 'ordering-components'

/**
 * Component to manage login behavior without UI component
 */
export const UserVerification = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ user, token }, { changeUser }] = useSession()

  const [verifyEmailState, setVerifyEmailState] = useState({
    loadingSendCode: false,
    resultSendCode: null,
    errorSendCode: null,
    loadingCheckCode: false,
    resultCheckCode: null,
    errorCheckCode: null,
  })

  const [verifyPhoneState, setVerifyPhoneState] = useState({
    loadingSendCode: false,
    resultSendCode: null,
    errorSendCode: null,
    loadingCheckCode: false,
    resultCheckCode: null,
    errorCheckCode: null,
  })

  /**
   * function to send verify code for email
   * @param {Object} values object with type, channel, size, email values
   */
  const sendVerifyEmailCode = async (values) => {
    try {
      setVerifyEmailState({ ...verifyEmailState, loadingSendCode: true })
      const response = await fetch(`${ordering.root}/codes/generate`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: values?.type ?? 3,
          channel: values?.channel ?? 1,
          size: values?.size ?? 6,
          email: values?.email,
        })
      })
      const { error, result } = await response.json()
      setVerifyEmailState({
        ...verifyEmailState,
        loadingSendCode: false,
        resultSendCode: error ? null : result,
        errorSendCode: error
          ? typeof result === 'string' ? [result] : result
          : null
      })

    } catch (error) {
      setVerifyEmailState({
        ...verifyEmailState,
        loadingSendCode: false,
        errorSendCode: [error.message]
      })
    }
  }

  /**
   * function to check code for verify user email
   * @param {Object} values object with channel and code values
   */
  const checkVerifyEmailCode = async (values) => {
    try {
      setVerifyEmailState({ ...verifyEmailState, loadingCheckCode: true })
      const response = await fetch(`${ordering.root}/users/${user?.id}/verify`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          channel: values?.channel ?? 1,
          code: values?.code
        })
      })
      const { error, result } = await response.json()

      if (result?.id && !error) {
        changeUser({ ...user, ...result})
      }

      setVerifyEmailState({
        ...verifyEmailState,
        loadingCheckCode: false,
        resultCheckCode: error ? null : result,
        errorSendCode: error
          ? typeof result === 'string' ? [result] : result
          : null
      })

    } catch (error) {
      setVerifyEmailState({
        ...verifyEmailState,
        loadingCheckCode: false,
        errorCheckCode: [error.message]
      })
    }
  }

  /**
   * function for clean errors state
   */
  const cleanErrorsState = (value) => {
    if (value === 'phone') {
      setVerifyPhoneState({
        ...verifyPhoneState,
        errorCheckCode: null,
        errorSendCode: null
      })
      return
    }
    setVerifyEmailState({
      ...verifyEmailState,
      errorCheckCode: null,
      errorSendCode: null
    })
  }

// ----------------------------------------------------------------------------------------------------

  /**
   * function to send verify code with twilio
   * @param {Object} values object with cellphone and country code values
   */
   const sendVerifyPhoneCode = async (values) => {
    try {
      setVerifyPhoneState({
        ...verifyPhoneState,
        loadingSendCode: true,
        errorCheckCode: false
      })
      const response = await fetch(`${ordering.root}/codes/generate`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: values?.type ?? 2,
          channel: values?.channel ?? 2,
          size: values?.size ?? 4,
          cellphone: values?.cellphone,
          country_phone_code: values?.country_phone_code,
        })
      })
      const { error, result } = await response.json()
      setVerifyPhoneState({
        ...verifyPhoneState,
        loadingSendCode: false,
        resultSendCode: error ? null : result,
        errorSendCode: error
          ? typeof result === 'string' ? [result] : result
          : null
      })
    } catch (error) {
      setVerifyPhoneState({
        ...verifyPhoneState,
        loadingSendCode: false,
        errorSendCode: [error.message]
      })
    }
  }

  /**
   * function to verify code with endpoint
   * @param {Object} values object with cellphone and country code values
   */
  const checkVerifyPhoneCode = async (values) => {
    try {
      setVerifyPhoneState({ ...verifyPhoneState, loadingCheckCode: true })
      const response = await fetch(`${ordering.root}/users/${user?.id}/verify`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          channel: values?.channel ?? 2,
          code: values?.code
        })
      })
      const { error, result } = await response.json()
      if (result?.id && !error) {
        changeUser({ ...user, ...result})
      }
      setVerifyPhoneState({
        ...verifyPhoneState,
        loadingCheckCode: false,
        resultCheckCode: error ? null : result,
        errorSendCode: error
          ? typeof result === 'string' ? [result] : result
          : null
      })
    } catch (error) {
      setVerifyPhoneState({
        ...verifyPhoneState,
        loadingCheckCode: false,
        errorCheckCode: [error.message]
      })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          verifyEmailState={verifyEmailState}
          verifyPhoneState={verifyPhoneState}
          sendVerifyEmailCode={sendVerifyEmailCode}
          sendVerifyPhoneCode={sendVerifyPhoneCode}
          checkVerifyEmailCode={checkVerifyEmailCode}
          checkVerifyPhoneCode={checkVerifyPhoneCode}
          cleanErrorsState={cleanErrorsState}
        />
      )}
    </>
  )
}
