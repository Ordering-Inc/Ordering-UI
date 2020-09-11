import React from 'react'
import {
  ForgotPasswordForm,
  useLanguage
} from 'ordering-components'
import {
  LoginContainer,
  FormSide,
  HeroSide,
  FormInput,
  TitleHeroSide
} from './styles'
// import triangle from '../../../template/triangle.svg'

import logoHeader from '../../../template/logo-header.svg'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

const ForgotPasswordUI = (props) => {
  const {
    hanldeChangeInput,
    handleButtonForgotPasswordClick
  } = props
  const [, t] = useLanguage()
  return (
    <LoginContainer>
      <HeroSide>
        <TitleHeroSide>
          <h1>Forgot your password?</h1>
          <p>Enter your email addres and we'll send you a link to reset your password.</p>
        </TitleHeroSide>
        {/* <div style={{ position: "absolute" }}>
          <img
            src={triangle}
            style={{
              display: "inline-block",
              width: "1000px",
              height: "700px",
            }}
          />
        </div> */}
      </HeroSide>
      <FormSide>
        <img src={logoHeader} alt='Logo login' />
        {(
          <FormInput>
            <Input
              type='email'
              name='email'
              placeholder='Email'
              onChange={(e) => hanldeChangeInput(e)}
            />
            <Button color='primary' onClick={() => handleButtonForgotPasswordClick()}>
              {t('FRONT_RECOVER_PASSWORD')}
            </Button>
          </FormInput>
        )}
      </FormSide>
    </LoginContainer>
  )
}

export const ForgotPassword = (props) => {
  const ForgotPasswordProps = {
    ...props,
    UIComponent: ForgotPasswordUI
  }
  return <ForgotPasswordForm {...ForgotPasswordProps} />
}
