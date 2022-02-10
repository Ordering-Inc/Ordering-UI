import React from 'react'
import { LoginForm } from '../../../src/themes/callcenterOriginal/src/components/LoginForm'
import { HelmetTags } from '../../components/HelmetTags'
import { useLocation } from 'react-router-dom'

export const Login = (props) => {
  const location = useLocation()

  const loginProps = {
    ...props,
    urlToRedirect: location?.state?.from || null
  }
  return (
    <>
      <HelmetTags page='login' />
      <LoginForm {...loginProps} />
    </>
  )
}
