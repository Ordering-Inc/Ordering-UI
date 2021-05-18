import React from 'react'
import { ReCaptchaComponent } from './styles'
import ReCAPTCHA from 'react-google-recaptcha'
import { useConfig } from 'ordering-components'

export const ReCaptcha = (props) => {
  // const {
  //   UIComponent
  // } = props

  const [{ configs }] = useConfig()

  /**
   * Change reCaptcha
   */
  const onChange = (value) => {
    console.log('Captcha value:', value)
  }

  return (
    <>
      {configs && Object.keys(configs).length > 0 && configs?.security_recaptcha_auth?.value === '1' &&
      (<ReCaptchaComponent>
          <ReCAPTCHA
            sitekey='Your client site key'
            onChange={onChange}
          />
        </ReCaptchaComponent>
      )}
    </>
  )
}
