import React from 'react'
import { ForgotPasswordForm } from '../../../src/themes/uber/src/components/ForgotPasswordForm'
import { HelmetTags } from '../../components/HelmetTags'

export const ForgotPassword = (props) => {
  return (
    <>
      <HelmetTags page='forgotpassword' />
      <ForgotPasswordForm {...props} />
    </>
  )
}
