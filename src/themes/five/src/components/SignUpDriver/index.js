import React from 'react'
import { SignUpDriver as OldSignUpDriver } from './layouts/OldSignUpDriver'
import { SignUpDriver as NewSignUpDriver } from './layouts/NewSignUpDriver'

export const SignUpDriver = (props) => {
  const { layout } = props
  const _layout = layout ?? 'old'
  return (
    <>
      {(_layout === 'old') && <OldSignUpDriver {...props} />}
      {(_layout === 'new') && <NewSignUpDriver {...props} />}
    </>
  )
}
