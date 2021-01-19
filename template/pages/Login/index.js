import React from 'react'
import { LoginForm } from '../../../src/components/LoginForm'
import { HelmetTags } from '../../components/HelmetTags'

export const Login = (props) => {
  return (
    <>
      <HelmetTags page='login' />
      <LoginForm {...props} />
    </>
  )
}
