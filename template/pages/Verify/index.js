import React from 'react'
import { VerifyEmail } from '../../../src/themes/five/src/components/VerifyEmail'
import { HelmetTags } from '../../components/HelmetTags'

export const VerifyPage = (props) => {
  return (
    <>
      <HelmetTags page='verify-email' />
      <VerifyEmail {...props} />
    </>
  )
}
