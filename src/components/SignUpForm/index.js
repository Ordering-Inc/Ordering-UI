import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Confirm } from '../Confirm'

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
    handleSuccessSignup,
    useLoginByCellphone,
    useLoginByEmail
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const { handleSubmit, register, errors } = useForm()
  const [modalIsOpen, setModalIsOpen] = useState(true)

  const onSubmit = () => {
    handleButtonSignupClick()
    if (!formState.loading && formState.result.result && !formState.result.error) {
      handleSuccessSignup(formState.result.result)
    }
  }

  const handleErrors = () => {
    if (errors) {
      setModalIsOpen(true)
    }
  }
  const inputs = [
    { name: 'name', placeholder: 'Firstname', requiredMessage: 'Name is required', type: 'text' },
    { name: 'email', placeholder: 'Email', requiredMessage: 'Email is required', type: 'text' },
    { name: 'password', placeholder: 'Password', requiredMessage: 'Password is required', type: 'password' }
  ]

  const Alert = (name, content) => (
    <>
      <Confirm
        title='Error'
        content={name ? errors[name].message : content}
        acceptText='Yes'
        closeText='Cancel'
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        onAccept={() => setModalIsOpen(false)}
        onCancel={() => setModalIsOpen(false)}
      />
    </>

  )

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
          useLoginByCellphone && useLoginByEmail &&
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
                {
                  inputs.map((_input) => (
                    showField(_input.name) && (
                      <React.Fragment key={_input.name}>
                        <Input
                          name={_input.name}
                          type={_input.type}
                          placeholder={_input.placeholder}
                          onChange={hanldeChangeInput}
                          ref={register({
                            required: isRequiredField(_input.name) ? _input.requiredMessage : null
                          })}
                        />
                      </React.Fragment>
                    )
                  ))
                }
              </>
            )
          }
          <Button color='primary' type='submit' onClick={handleErrors}>
            {formState.loading ? 'loading' : t('SIGNUP', 'Sign up')}
          </Button>
        </FormInput>
      </FormSide>
      <>
        {
          inputs.map(_input => (
            <React.Fragment key={_input.name}>
              {errors[_input.name]?.message && modalIsOpen && Alert(_input.name)}
            </React.Fragment>
          ))
        }
      </>
      {
        !formState.loading && formState.result?.error && modalIsOpen && Alert('', formState.result.result[0])
      }
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
