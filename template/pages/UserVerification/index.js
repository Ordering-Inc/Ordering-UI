import React from 'react'
import { UserVerification as UserVerificationController } from '../../../src/themes/five/src/components/UserVerification'
import { HelmetTags } from '../../components/HelmetTags'

export const UserVerification = (props) => {
  return (
    <>
      <HelmetTags page='user-verification' />
      <UserVerificationController {...props} />
    </>
  )
}
