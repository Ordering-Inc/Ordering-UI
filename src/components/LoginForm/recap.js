import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useConfig } from 'ordering-components'

export const ReCaptcha = (props) => {
  const {
    handleReCaptcha
  } = props

  const [{ configs }] = useConfig()

  /**
   * Change reCaptcha
   */
  const onChange = (value) => {
    handleReCaptcha(value)
  }

  const getReCaptChaSiteKey = () => {
    if (configs && Object.keys(configs).length > 0 && configs?.security_recaptcha_site_key?.value) {
      return configs?.security_recaptcha_site_key.value
    }
    throw new Error('ReCaptcha component: the config doesn\'t have recaptcha site key')
  }

  return (
    <ReCAPTCHA
      sitekey={getReCaptChaSiteKey()}
      onChange={onChange}
    />
  )
}
