import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AppleLogin as AppleLoginController, useLanguage, useConfig } from 'ordering-components'
import FaApple from '@meronex/icons/fa/FaApple'
import {
  AppleButton,
  IconWrapper,
  Content
} from './styles'

const AppleLoginUI = (props) => {
  const {
    isSignup,
    initLoginApple,
    handleAppleLoginClick
  } = props

  const location = useLocation()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()

  useEffect(() => {
    const result = location.hash
    if (result) {
      const divisions = result?.split('&', 4)
      const state = divisions?.[0]?.split('state=', 2)?.[1]
      const code = divisions?.[1]?.split('code=', 2)?.[1]
      const idToken = divisions?.[2]?.split('id_token=', 2)?.[1]
      if (code) {
        handleAppleLoginClick({ state, code, idToken })
      }
    }
  }, [Object.keys(configs).length])

  return (
    <AppleButton
      onClick={() => initLoginApple()}
      isSignup={isSignup}
    >
      <Content isSignup={isSignup}>
        <IconWrapper>
          <FaApple />
        </IconWrapper>
        <div>{t('LOGIN_WITH_APPLE', 'Login with Apple')}</div>
      </Content>
    </AppleButton>
  )
}

export const AppleLogin = (props) => {
  const propss = {
    ...props,
    UIComponent: AppleLoginUI
  }
  return <AppleLoginController {...propss} />
}
