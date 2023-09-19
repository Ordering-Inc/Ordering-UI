import React from 'react'
import { SignUpDriver as SignUpDriverController } from '../../../src/themes/five/src/components/SignUpDriver'
import { HelmetTags } from '../../components/HelmetTags'

export const SignUpDriver = (props) => {
  const SignUpDriverProps = {
    ...props,
    isDriverSignup: true
  }
  return (
    <>
      <HelmetTags page='signup_driver' />
      <SignUpDriverController {...SignUpDriverProps} />
    </>
  )
}

export default SignUpDriver
