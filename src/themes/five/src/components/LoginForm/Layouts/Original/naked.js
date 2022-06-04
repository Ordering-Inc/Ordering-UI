import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import parsePhoneNumber from 'libphonenumber-js'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useEvent } from '../../contexts/EventContext'
// import { useConfig } from '../../contexts/ConfigContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useSession, useApi, useEvent, useConfig, useLanguage } from 'ordering-components'

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
  const [checkPhoneCodeState, setCheckPhoneCodeState] = useState({ loading: false, result: { error: false } })
  const [events] = useEvent()
  const [{ configs }] = useConfig()
  const [reCaptchaValue, setReCaptchaValue] = useState(null)
  const [isReCaptchaEnable, setIsReCaptchaEnable] = useState(false)

  if (!useLoginByEmail && !useLoginByCellphone) {
    defaultLoginTab = 'none'
  } else if (defaultLoginTab === 'email' && !useLoginByEmail && useLoginByCellphone) {
    defaultLoginTab = 'cellphone'
  } else if (defaultLoginTab === 'cellphone' && !useLoginByCellphone && useLoginByEmail) {
    defaultLoginTab = 'email'
  }

  const [loginTab, setLoginTab] = useState(defaultLoginTab || (useLoginByCellphone && !useLoginByEmail ? 'cellphone' : 'email'))
  const [, { login, logout }] = useSession()
  const [, t] = useLanguage()

  /**
   * Default fuction for login workflow
   * @param {object} credentials Login credentials email/cellphone and password
   */
  const handleLoginClick = async (values) => {
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

      if (isReCaptchaEnable && window?.grecaptcha) {
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
        }
        events.emit('userLogin', result)
        if (handleSuccessLogin) {
          handleSuccessLogin(result)
        }

        if (urlToRedirect) {
          window.location.href = `${window.location.origin}${urlToRedirect}`
        }
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

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          loginTab={loginTab}
          credentials={credentials}
          verifyPhoneState={verifyPhoneState}
          checkPhoneCodeState={checkPhoneCodeState}
          setCheckPhoneCodeState={handleSetCheckPhoneCodeState}
          handleChangeInput={handleChangeInput}
          handleButtonLoginClick={handleButtonLoginClick || handleLoginClick}
          handleChangeTab={handleChangeTab}
          handleSendVerifyCode={sendVerifyPhoneCode}
          handleCheckPhoneCode={checkVerifyPhoneCode}
          enableReCaptcha={isReCaptchaEnable}
          handleReCaptcha={setReCaptchaValue}
        />
      )}
    </>
  )
}

LoginForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Function to change default login behavior
   */
  handleButtonLoginClick: PropTypes.func,
  /**
   * Function to get login success event
   * @param {Object} user User with session data
   */
  handleSuccessLogin: PropTypes.func,
  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: PropTypes.bool,
  /**
   * Enable/Disable login by email
   */
  useLoginByEmail: PropTypes.bool,
  /**
   * Enable/Disable login by cellphone
   */
  useLoginByCellphone: PropTypes.bool,
  /**
   * Selected tab by default
   * You can choose between 'email' or 'cellphone'
   */
  defaultLoginTab: PropTypes.string,
  /**
   * Components types before login form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after login form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Url to signup page
   * Url to create element link to signup page
   */
  linkToSignup: PropTypes.string,
  /**
   * Url to forgot password page
   * Url to create element link to signup page
   */
  linkToForgetPassword: PropTypes.string,
  /**
   * Element to custom link to signup
   * You can provide de link element as react router Link or your custom Anchor to signup page
   */
  elementLinkToSignup: PropTypes.element,
  /**
   * Element to custo link to forgot password
   * You can provide de link element as react router Link or your custom Anchor to forgot password page
   */
  elementLinkToForgotPassword: PropTypes.element
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
