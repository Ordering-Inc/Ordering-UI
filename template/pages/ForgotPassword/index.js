import React from 'react'
import { ForgotPasswordForm } from '../../../src/themes/pwa'
import { HelmetTags } from '../../components/HelmetTags'

export const ForgotPassword = (props) => {
  return (
    <>
      <HelmetTags page='forgotpassword' />
      <ForgotPasswordForm {...props} />
    </>
  )
}
