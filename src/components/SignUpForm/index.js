import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  SignupForm as SignUpController,
  useLanguage,
  useConfig
} from 'ordering-components'
import {
  LoginContainer,
  FormSide,
  HeroSide,
  FormInput,
  SocialIcons,
  TitleHeroSide,
  SignUpWith,
  AlreadyRegistered
} from './styles'
// import triangle from '../../../template/triangle.svg'

import logoHeader from '../../../template/logo-header.svg'
import { Tabs, Tab } from '../../styles/Tabs'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

import { AiOutlineGoogle, FaApple } from 'react-icons/all'
import { FacebookLoginButton } from '../FacebookLogin'

const SignUpFormUI = (props) => {
  const {
    hanldeChangeInput,
    handleButtonSignupClick,
    elementLinkToLogin,
    ordering,
    useChekoutFileds,
    validationFields,
    showField,
    isRequiredField,
    formState,
    handleSuccessSignup
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const { handleSubmit, register, errors } = useForm()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const onSubmit = () => {
    handleButtonSignupClick()
    // handleSuccessSignup(formState.result.result)
  }
  if (!(useChekoutFileds && validationFields.loading)) {
    console.log(Object.values(validationFields.fields))
  }
  return (
    <LoginContainer>
      <HeroSide>
        <TitleHeroSide>
          <h1>{t('TITLE_LOGIN', 'Welcome!')}</h1>
          <p>{t('SUBTITLE_LOGIN', 'Enter your personal details and start journey with us.')}</p>
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
        {
          <AlreadyRegistered>
            {elementLinkToLogin && (
              <>
                {t('MOBILE_FRONT_ALREADY_HAVE_AN_ACCOUNT')} {elementLinkToLogin}
              </>
            )}
          </AlreadyRegistered>
        }
        {
          <SocialIcons>
            {configs?.facebook_id && <FacebookLoginButton ordering={ordering} appId={configs.facebook_id.value} />} <FaApple />
            <AiOutlineGoogle />
          </SocialIcons>
        }
        {
          <SignUpWith>
            <Tabs variant='primary'>
              <Tab>{t('SIGNUP_WITH_EMAIL', 'Signup by Email')}</Tab>
              <Tab>{t('SIGNUP_WITH_CELLPHONE', 'Signup by Cellphone')}</Tab>
            </Tabs>
          </SignUpWith>
        }
        {
          (useChekoutFileds && validationFields.loading) && <p>Loading Form...</p>
        }
        <FormInput onSubmit={handleSubmit(onSubmit)}>
          {
            !(useChekoutFileds && validationFields.loading) && (
              <>
                {Object.values(validationFields.fields).map(field => (
                  showField(field.name) && (
                    <Input
                      key={field.id} type={field.enabled && field.required ? field.type : 'hidden'} name={field.code} required={field.required} placeholder={field.name} onChange={hanldeChangeInput} ref={register({
                        required: isRequiredField(field.code) ? 'error' : null
                      })}
                    />)
                ))}
                <Input type='password' name='password' required placeholder='Password' onChange={hanldeChangeInput} />
              </>
            )
          }
          <Button color='primary' type='submit'>
            {t('SIGNUP', 'Sign up')}
          </Button>
        </FormInput>
      </FormSide>
    </LoginContainer>
  )
}

export const SignUpForm = (props) => {
  const loginControllerProps = {
    ...props,
    UIComponent: SignUpFormUI
  }
  return <SignUpController {...loginControllerProps} />
}
