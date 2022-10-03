import React from 'react'
import { SignUpDriver as SignUpDriverController } from '../../../src/themes/five/src/components/SignUpDriver'
import { HelmetTags } from '../../components/HelmetTags'

export const SignUpDriver = (props) => {
  return (
    <>
      <HelmetTags page='signup_driver' />
      <SignUpDriverController {...props} />
    </>
  )
}
