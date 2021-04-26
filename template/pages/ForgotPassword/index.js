import React from 'react'
import { ForgotPasswordForm } from '../../../src/themes/two/src/components/ForgotPasswordForm'
import { HelmetTags } from '../../components/HelmetTags'

export const ForgotPassword = (props) => {
  return (
    <>
      <HelmetTags page='forgotpassword' />
      <ForgotPasswordForm {...props} />
    </>
  )
}
