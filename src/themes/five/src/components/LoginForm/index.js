import React from 'react'
import { LoginForm as LoginFormOld } from './Layouts/Old'
import { LoginForm as LoginFormOriginal } from './Layouts/Original'
import { LoginForm as LoginFormRed } from './Layouts/Red'
import { LoginForm as LoginFormStarbucks } from './Layouts/Starbucks'
import { layoutType } from '../../../../../utils'

export const LoginForm = (props) => {
  if (layoutType === 1) return <LoginFormOriginal {...props} />
  if (layoutType === 2) return <LoginFormStarbucks {...props} />
  if (layoutType === 3) return <LoginFormOld {...props} />
  if (layoutType === 4) return <LoginFormRed {...props} />
  return <LoginFormOriginal {...props} />
}
