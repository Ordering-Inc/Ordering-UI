import React, { useState, useEffect } from 'react'
import {
  useSession,
  useLanguage,
  useApi,
  useEvent,
  useConfig
} from 'ordering-components'

/**
 * Component to manage login behavior without UI component
 */
export const VerifyEmail = (props) => {
  const {
    UIComponent
  } = props

  const [verifyEmailState, setVerifyEmailState] = useState({
    loadingSendCode: false,
    resultSendCode: null,
    errorSendCode: null,
    loadingCheckCode: false,
    resultCheckCode: null,
    errorCheckCode: null,
  })

  const [ordering] = useApi()

  /**
   * function to send verify code for email
   * @param {Object} values object with cellphone and country code values
   */
  const sendVerifyEmailCode = async (values) => {
    try {
      setVerifyEmailState({ ...verifyEmailState, loadingSendCode: true })
      const response = await fetch(`${ordering.root}/codes/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
        errorSendCode: error ? result : null
      })

    } catch (error) {
      setVerifyEmailState({
        ...verifyEmailState,
        loadingSendCode: false,
        errorSendCode: error.message
      })
    }
  }

  /**
   * function to check code for verify user email
   * @param {Object} values object with cellphone and country code values
   */
  const checkVerifyEmailCode = async (values) => {
    try {
      setVerifyEmailState({ ...verifyEmailState, loadingCheckCode: true })
      const response = await fetch(`${ordering.root}/users/${sessionState.user?.id}/user_verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          channel: values?.channel ?? 1,
          code: values?.code
        })
      })
      const { error, result } = await response.json()
      setVerifyEmailState({
        ...verifyEmailState,
        loadingCheckCode: false,
        resultCheckCode: error ? null : result,
        errorCheckCode: error ? result : null
      })

    } catch (error) {
      setVerifyEmailState({
        ...verifyEmailState,
        loadingCheckCode: false,
        errorCheckCode: error.message
      })
    }
  }

  /**
   * function for clean errors state
   */
  const cleanErrorsState = () => {
    setVerifyEmailState({
      ...verifyEmailState,
      errorCheckCode: null,
      errorSendCode: null
    })
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          verifyEmailState={verifyEmailState}
          cleanErrorsState={cleanErrorsState}
          sendVerifyEmailCode={sendVerifyEmailCode}
          checkVerifyEmailCode={checkVerifyEmailCode}
        />
      )}
    </>
  )
}
