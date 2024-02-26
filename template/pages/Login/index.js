import React from 'react'
import { LoginForm } from '../../../src/components/LoginForm'
import { HelmetTags } from '../../components/HelmetTags'
import { useLocation } from 'react-router-dom'
import settings from '../../config'

const Login = (props) => {
  const location = useLocation()

  const loginProps = {
    ...props,
    urlToRedirect: location?.state?.from || null,
    isDisableButtons: true,
    allowedLevels: [0, 9],
    useRootPoint: settings?.use_root_point,
    isCustomerMode: true
  }
  return (
    <>
      <HelmetTags page='login' />
      <LoginForm {...loginProps} />
    </>
  )
}

export default Login
