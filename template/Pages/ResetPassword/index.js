import React from 'react'
import { useParams } from 'react-router-dom'
import { HelmetTags } from '../../components/HelmetTags'
import { ResetPassword as ResetPasswordController } from '../../../src/components/ResetPassword'

export const ResetPassword = (props) => {
  const { code, random } = useParams()
  const resetPasswordProps = {
    ...props,
    code: code,
    random: random
  }
  return (
    <>
      <HelmetTags page='resetpassword' />
      <ResetPasswordController {...resetPasswordProps} />
    </>
  )
}
