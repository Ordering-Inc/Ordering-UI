import React from 'react'
import { SignUpForm as SignUpFormOriginal } from './Layouts/Original'
import { SignUpForm as SignUpFormOld } from './Layouts/Old'
import { SignUpForm as SignUpFormStarbucks } from './Layouts/Starbucks'
import { SignUpForm as SignUpFormRed } from './Layouts/Red'
import { layoutType } from '../../../../../utils'

export const SignUpForm = (props) => {
  if (layoutType === 1) return <SignUpFormOriginal {...props} />
  if (layoutType === 2) return <SignUpFormStarbucks {...props} />
  if (layoutType === 3) return <SignUpFormOld {...props} />
  if (layoutType === 4) return <SignUpFormRed {...props} />

  return <SignUpFormOriginal {...props} />
}
