import React from 'react'
import { SignUpBusiness as SignUpBusinessController } from '../../../src/themes/five/src/components/SignUpBusiness'
import { HelmetTags } from '../../components/HelmetTags'

export const SignUpBusiness = (props) => {
  return (
    <>
      <HelmetTags page='signup_business' />
      <SignUpBusinessController {...props} />
    </>
  )
}

export default SignUpBusiness
