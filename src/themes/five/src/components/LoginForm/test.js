import React, { useState, useEffect } from 'react'
import parsePhoneNumber from 'libphonenumber-js'
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
export const LoginForm = (props) => {
  const {
    UIComponent,
    handleButtonLoginClick,
    handleSuccessLogin,
    useLoginByEmail,
    useLoginByCellphone,
    useDefualtSessionManager,
    urlToRedirect,
    allowedLevels,
    handleCustomLogin,
    notificationState
  } = props

  const [ordering] = useApi()
  let { defaultLoginTab } = props
  const [formState, setFormState] = useState({ loading: false, result: { error: false } })
  const [credentials, setCredentials] = useState({ email: '', cellphone: '', password: '' })
  const [verifyPhoneState, setVerifyPhoneState] = useState({ loading: false, result: { error: false } })
  const [verifyEmailState, setVerifyEmailState] = useState({
    loading: false,
    loadingSendCode: false,
    result: null,
    resultSendCode: null,
    error: null,
    errorSendCode: null
  })
  const [checkPhoneCodeState, setCheckPhoneCodeState] = useState({ loading: false, result: { error: false } })
  const [events] = useEvent()
  const [{ configs }] = useConfig()
  const [reCaptchaValue, setReCaptchaValue] = useState(null)
  const [isReCaptchaEnable, setIsReCaptchaEnable] = useState(false)

  const isEmailVerificationRequired = true ?? configs?.verification_email_required?.value === '1'
  const emailVerificationCodeSize = 6

  if (!useLoginByEmail && !useLoginByCellphone) {
    defaultLoginTab = 'none'
  } else if (defaultLoginTab === 'email' && !useLoginByEmail && useLoginByCellphone) {
    defaultLoginTab = 'cellphone'
  } else if (defaultLoginTab === 'cellphone' && !useLoginByCellphone && useLoginByEmail) {
    defaultLoginTab = 'email'
  }

  const [loginTab, setLoginTab] = useState(defaultLoginTab || (useLoginByCellphone && !useLoginByEmail ? 'cellphone' : 'email'))
  const [sessionState, { login, logout }] = useSession()
  const [, t] = useLanguage()

  /**
   * Default fuction for login workflow
   * @param {object} credentials Login credentials email/cellphone and password
   */
  const handleLoginClick = async (values) => {
    setVerifyEmailState({
      ...verifyEmailState,
      error: null,
      errorSendCode: null
    })

    if (handleCustomLogin) {
      handleCustomLogin(values || credentials, loginTab)
      return
    }

    try {
      const _credentials = {
        [loginTab]: values && values[loginTab] || credentials[loginTab],
        password: values && values?.password || credentials.password
      }
      if (isReCaptchaEnable) {
        if (reCaptchaValue === null) {
          setFormState({
            result: {
              error: true,
              result: t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The captcha validation is required')
            },
            loading: false
          })
          return
        } else {
          _credentials.verification_code = reCaptchaValue
        }
      }
      setFormState({ ...formState, loading: true })

      if (_credentials?.cellphone?.includes('+')) {
        const parsedNumber = parsePhoneNumber(_credentials.cellphone)
        const cellphone = parsedNumber?.nationalNumber

        _credentials.cellphone = cellphone
      }

      if (notificationState?.notification_token) {
        _credentials.notification_app = notificationState.notification_app
        _credentials.notification_token = notificationState.notification_token
      }

      const { content: { error, result } } = await ordering.users().auth(_credentials)

      if (isReCaptchaEnable) {
        window.grecaptcha.reset()
        setReCaptchaValue(null)
      }

      if (!error) {
        if (useDefualtSessionManager) {
          if (allowedLevels && allowedLevels?.length > 0) {
            const { level, session } = result
            const access_token = session?.access_token
            if (!allowedLevels.includes(level)) {
              try {
                const { content: logoutResp } = await ordering.setAccessToken(access_token).users().logout()
                if (!logoutResp.error) {
                  logout()
                }
                setFormState({
                  result: {
                    error: true,
                    result: ['YOU_DO_NOT_HAVE_PERMISSION']
                  },
                  loading: false
                })
              } catch (error) {
                setFormState({
                  result: {
                    error: true,
                    result: error.message
                  },
                  loading: false
                })
              }
              return
            }
          }
          login({
            user: result,
            token: result.session?.access_token
          })
          // if (!isEmailVerificationRequired) {
          //   login({
          //     user: result,
          //     token: result.session?.access_token
          //   })
          // } else {
          //   if (!result?.email_verified) {
          //     sendVerifyEmailCode({
          //       type: 3,
          //       channel: 1,
          //       size: 6,
          //       email: result.email
          //     })
          //   } else {
          //     login({
          //       user: result,
          //       token: result.session?.access_token
          //     })
          //   }
          // }
        }
        events.emit('userLogin', result)
        if (handleSuccessLogin) {
          handleSuccessLogin(result)
        }

        if (urlToRedirect) {
          window.location.href = `${window.location.origin}${urlToRedirect}`
        }
        // if (!isEmailVerificationRequired || result?.email_verified) {
        // }
      }
      setFormState({
        result: {
          error,
          result
        },
        loading: false
      })
    } catch (err) {
      setFormState({
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  useEffect(() => {
    setIsReCaptchaEnable(props.isRecaptchaEnable && configs &&
      Object.keys(configs).length > 0 &&
      configs?.security_recaptcha_auth?.value === '1')
  }, [configs])

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  /**
   * Change current selected tab
   * @param {string} tab Reference tab email or cellphone
   */
  const handleChangeTab = (tab) => {
    setLoginTab(tab)
  }

  /**
   * function to send verify code with twilio
   * @param {Object} values object with cellphone and country code values
   */
  const sendVerifyPhoneCode = async (values) => {
    try {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: false } })
      setVerifyPhoneState({ ...verifyPhoneState, loading: true })
      const response = await fetch(`${ordering.root}/auth/sms/twilio/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cellphone: values.cellphone,
          country_phone_code: `+${values.country_phone_code}`
        })
      })
      const res = await response.json()
      setVerifyPhoneState({
        ...verifyPhoneState,
        loading: false,
        result: res
      })

    } catch (error) {
      setVerifyPhoneState({
        ...verifyPhoneState,
        loading: false,
        result: {
          error: error.message
        }
      })
    }
  }

  const handleSetCheckPhoneCodeState = (data) => {
    const values = data || { loading: false, result: { error: false } }
    setCheckPhoneCodeState(values)
  }

  /**
   * function to verify code with endpoint
   * @param {Object} values object with cellphone and country code values
   */
  const checkVerifyPhoneCode = async (values) => {
    const body = {
      ...values
    }
    try {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, loading: true })
      if (notificationState?.notification_token) {
        body.notification_token = notificationState.notification_token
        body.notification_app = notificationState.notification_app
      }
      const response = await fetch(`${ordering.root}/auth/sms/twilio`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const res = await response.json()
      if (!res?.error && res?.result?.id) {
        login({
          user: res?.result,
          token: res?.result?.session?.access_token
        })
        if (handleSuccessLogin) {
          handleSuccessLogin(res?.result)
        }
      }
      setCheckPhoneCodeState({
        ...checkPhoneCodeState,
        loading: false,
        result: res
      })
    } catch (error) {
      setCheckPhoneCodeState({
        ...checkPhoneCodeState,
        loading: false,
        result: {
          error: error.message
        }
      })
    }
  }

  /**
   * function to send verify code with twilio for email
   * @param {Object} values object with cellphone and country code values
   */
   const sendVerifyEmailCode = async (values) => {
    try {
      setVerifyEmailState({ ...verifyEmailState, loading: true })
      const response = await fetch(`${ordering.root}/codes/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })
      const { error, result } = await response.json()
      setVerifyEmailState({
        ...verifyEmailState,
        loading: false,
        result: error ? null : result,
        error: error ? result : null
      })

    } catch (error) {
      setVerifyEmailState({
        ...verifyEmailState,
        loading: false,
        error: error.message
      })
    }
  }

  /**
   * function to send verify code with twilio for email
   * @param {Object} values object with cellphone and country code values
   */
   const handleSendEmailVerifyCode = async (values) => {
    try {
      setVerifyEmailState({ ...verifyEmailState, loadingSendCode: true })
      const response = await fetch(`${ordering.root}/users/${sessionState.user?.id}/user_verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
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

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          loginTab={loginTab}
          credentials={credentials}
          verifyPhoneState={verifyPhoneState}
          verifyEmailState={verifyEmailState}
          checkPhoneCodeState={checkPhoneCodeState}
          setCheckPhoneCodeState={handleSetCheckPhoneCodeState}
          handleChangeInput={handleChangeInput}
          handleButtonLoginClick={handleButtonLoginClick || handleLoginClick}
          handleChangeTab={handleChangeTab}
          handleSendVerifyCode={sendVerifyPhoneCode}
          handleSendVerifyEmailCode={sendVerifyEmailCode}
          handleSendEmailVerifyCode={handleSendEmailVerifyCode}
          handleCheckPhoneCode={checkVerifyPhoneCode}
          enableReCaptcha={isReCaptchaEnable}
          handleReCaptcha={setReCaptchaValue}
        />
      )}
    </>
  )
}

LoginForm.defaultProps = {
  defaultLoginTab: 'email',
  useLoginByEmail: true,
  useDefualtSessionManager: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
