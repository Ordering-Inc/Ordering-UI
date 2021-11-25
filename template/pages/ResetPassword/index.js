import React from 'react'
import { useEvent } from 'ordering-components'
import { HelmetTags } from '../../components/HelmetTags'
import { ResetPassword as ResetPasswordController } from '../../../src/themes/franchise'

export const ResetPassword = (props) => {
  const [events] = useEvent()
  const params = new URLSearchParams(props.location.search)
  const code = params.get('code')
  const random = params.get('random')

  const resetPasswordProps = {
    ...props,
    code: code,
    random: random,
    redirectResetPassword: ({ code, random }) => {
      events.emit('go_to_page', {
        page: 'reset_password',
        search: `?code=${code}&random=${random}`
      })
    },
    redirectLogin: () => {
      events.emit('go_to_page', { page: 'signin' })
    }
  }
  return (
    <>
      <HelmetTags page='resetpassword' />
      <ResetPasswordController {...resetPasswordProps} />
    </>
  )
}
