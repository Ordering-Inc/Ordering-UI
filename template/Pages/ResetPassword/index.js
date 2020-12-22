import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { ResetPassword as ResetPasswordController } from '../../../src/components/ResetPassword'

export const ResetPassword = (props) => {
  const params = new URLSearchParams(props.location.search)
  const code = params.get('code')
  const random = params.get('random')

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
