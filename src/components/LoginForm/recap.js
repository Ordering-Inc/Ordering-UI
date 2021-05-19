import React from 'react'
import { ReCaptchaComponent } from './styles'
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

  return (
    <>
      {configs && Object.keys(configs).length > 0 && configs?.security_recaptcha_auth?.value === '1' &&
      (<ReCaptchaComponent>
          <ReCAPTCHA
            sitekey='6LdBOtsaAAAAAMwRUxicO0YeupKxNUyhG2TfTMPu'
            onChange={onChange}
          />
        </ReCaptchaComponent>
      )}
    </>
  )
}
