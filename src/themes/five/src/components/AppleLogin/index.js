import React from 'react'
import { AppleLogin as AppleLoginController, useLanguage } from 'ordering-components'
import { AppleButton } from './styles'
import FaApple from '@meronex/icons/fa/FaApple'

const AppleLoginUI = (props) => {
  const {
    initLoginApple
  } = props

  const [, t] = useLanguage()

  return (
    <AppleButton
      initialIcon
      color='secondary'
      onClick={() => initLoginApple()}
    >
      <FaApple />
      <div>{t('CONTINUE_WITH_APPLE', 'Continue with Apple')}</div>
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
