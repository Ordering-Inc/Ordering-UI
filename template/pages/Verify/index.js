import React from 'react'
import { UserVerification } from '../../../src/themes/five/src/components/UserVerification'
import { HelmetTags } from '../../components/HelmetTags'

export const VerifyPage = (props) => {
  return (
    <>
      <HelmetTags page='user-verification' />
      <UserVerification {...props} />
    </>
  )
}
