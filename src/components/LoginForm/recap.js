import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useConfig } from 'ordering-components'

export const requestTypeEnum = Object.freeze({ LOGIN: 'login', SIGN_UP: 'signup' })

export const ReCaptcha = (props) => {
  const {
    /**
     * login: to validate if security_recaptcha_auth is true
     * signup: to validate if security_recaptcha_signup is true
     */
    requestType,
    handleReCaptcha
  } = props

  const [{ configs }] = useConfig()

  /**
   * Change reCaptcha
   */
  const onChange = (value) => {
    handleReCaptcha(value)
  }

  const shouldShowReCaptcha = () => {
    if (configs && Object.keys(configs).length > 0 &&
      configs?.security_recaptcha_auth?.value === '1' &&
      requestType === requestTypeEnum.LOGIN) {
      configs.recaptcha = true
      return true
    } else if (configs && Object.keys(configs).length > 0 &&
      configs?.security_recaptcha_signup?.value === '1' &&
      requestType === requestTypeEnum.SIGN_UP) {
      return true
    }
    return false
  }

  const getReCaptChaSiteKey = () => {
    if (configs && Object.keys(configs).length > 0 && configs?.security_recaptcha_site_key?.value) {
      return configs?.security_recaptcha_site_key.value
    }
    throw new Error('ReCaptcha component: the config doesn\'t have recaptcha site key')
  }

  return (
    <>
      {shouldShowReCaptcha() &&
      (<ReCAPTCHA
        sitekey={getReCaptChaSiteKey()}
        onChange={onChange}
      />)}
    </>
  )
}
