import React from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, SignupForm as SignUpController } from 'ordering-components'
import {
  SignupBusinessContainer,
  SignUpHeroWrapper,
  SignUpHero,
  SignUpFormWrapper
} from './styles'

const SignUpBusinessUI = () => {
  const theme = useTheme()
  const [, t] = useLanguage()

  return (
    <SignupBusinessContainer>
      <SignUpHeroWrapper>
        <SignUpHero bgimage={theme.images?.general?.businessSignUpHero} />
      </SignUpHeroWrapper>
      <SignUpFormWrapper>
        <h1>{t('SIGN_UP_NOW', 'Sign up now')}</h1>
      </SignUpFormWrapper>
    </SignupBusinessContainer>
  )
}

export const SignUpBusiness = (props) => {
  const signUpBusinessProps = {
    ...props,
    UIComponent: SignUpBusinessUI
  }
  return <SignUpController {...signUpBusinessProps} />
}
