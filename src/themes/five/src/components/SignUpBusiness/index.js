import React from 'react'
import { SignUpBusiness as OldSignUpBusiness } from './layouts/OldSignUpBusiness'
import { SignUpBusiness as NewSignUpBusiness } from './layouts/NewSignUpBusiness'

export const SignUpBusiness = (props) => {
  const { layout } = props
  const _layout = layout ?? 'old'
  return (
    <>
      {(_layout === 'old') && <OldSignUpBusiness {...props} />}
      {(_layout === 'new') && <NewSignUpBusiness {...props} />}
    </>
  )
}
