import React, { useEffect } from 'react'
import { Button } from '../../styles/Buttons'
import { useLocation } from 'react-router-dom'
import { AppleLogin as AppleLoginController } from 'ordering-components'

export const AppleLoginUI = (props) => {
  const {
    initLoginApple,
    handleAppleLoginClick
  } = props
  const location = useLocation()

  useEffect(() => {
    const result = location.hash
    const divisions = result.split('&', 4)
    const state = divisions[0].split('state=', 2)[1]
    const code = divisions[1].split('code=', 2)[1]
    const idToken = divisions[2].split('id_token=', 2)[1]
    if (state === 'statel') {
      handleAppleLoginClick({ state, code, idToken })
    }
  }, [])

  return (
    <Button onClick={initLoginApple}>
      APPLE LOGIN
    </Button>
  )
}

export const AppleLogin = (props) => {
  const propss = {
    ...props,
    UIComponent: AppleLoginUI
  }
  return <AppleLoginController {...propss} />
}
