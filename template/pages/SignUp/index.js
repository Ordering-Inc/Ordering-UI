import React from 'react'
import { SignUpForm } from '../../../src/themes/callcenterOriginal/src/components/SignUpForm'
import { HelmetTags } from '../../components/HelmetTags'

export const SignUp = (props) => {
  return (
    <>
      <HelmetTags page='signup' />
      <SignUpForm {...props} />
    </>
  )
}
