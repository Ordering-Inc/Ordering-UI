import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  LoginForm as LoginFormController,
  useLanguage,
  useConfig
} from 'ordering-components'
import { Confirm } from '../Confirm'
import {
  LoginContainer,
  FormSide,
  HeroSide,
  FormInput,
  ForgotPassword,
  SocialIcons,
  TitleHeroSide,
  LoginWith,
  NewOnPlatform
} from './styles'
// import triangle from '../../../template/triangle.svg'

import logoHeader from '../../../template/logo-header.svg'
import { Tabs, Tab } from '../../styles/Tabs'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

import { AiOutlineGoogle, FaApple } from 'react-icons/all'
import { FacebookLoginButton } from '../FacebookLogin'

const LoginFormUI = (props) => {
  const {
    linkToSignup,
    useLoginByEmail,
    useLoginByCellphone,
    hanldeChangeInput,
    hanldeChangeTab,
    handleButtonLoginClick,
    linkToForgetPassword,
    elementLinkToSignup,
    elementLinkToForgotPassword,
    formState,
    loginTab,
    ordering
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const { handleSubmit, register, errors } = useForm()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const onSubmit = async (values) => {
    const error = await formState.result.error
    if (error) {
      console.log(formState.result.result[0])
    }
    handleButtonLoginClick()
  }
  const handleErrors = () => {
    if (errors) {
      setModalIsOpen(true)
    }
  }
  return (
    <LoginContainer>
      <HeroSide>
        <TitleHeroSide>
          <h1>Hello Friend!</h1>
          <p>Enter your credentials and start journey with us.</p>
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

        <NewOnPlatform>
          {elementLinkToSignup && (
            <>
              {t('NEW_ON_PLATFORM')} {elementLinkToSignup}
            </>
          )}
          {linkToSignup && (
            <>
              {t('NEW_ON_PLATFORM')}
              <a href={linkToSignup}>{t('CREATE_AN_ACCOUNT')}</a>
            </>
          )}
        </NewOnPlatform>
        <SocialIcons>
          {configs?.facebook_id && <FacebookLoginButton ordering={ordering} appId={configs.facebook_id.value} />} <FaApple />
          <AiOutlineGoogle />
        </SocialIcons>
        {useLoginByEmail && useLoginByCellphone && (
          <LoginWith>
            <Tabs variant='primary'>
              {useLoginByEmail && (

                <Tab
                  onClick={() => hanldeChangeTab('email')}
                  active={loginTab === 'email'}
                >
                Login by Email
                </Tab>
              )}
              {useLoginByCellphone && (
                <Tab
                  onClick={() => hanldeChangeTab('cellphone')}
                  active={loginTab === 'cellphone'}
                >
                Login by Cellphone
                </Tab>
              )}

            </Tabs>
          </LoginWith>
        )}
        <>
          {(useLoginByCellphone || useLoginByEmail) &&
            (
              <FormInput onSubmit={handleSubmit(onSubmit)}>
                {
                  useLoginByEmail && loginTab === 'email' && (
                    <Input
                      type='email'
                      name='email'
                      placeholder={t('EMAIL')}
                      ref={register({
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      onChange={(e) => hanldeChangeInput(e)}
                    />
                  )
                }
                {
                  useLoginByCellphone && loginTab === 'cellphone' && (
                    <Input
                      type='tel'
                      name='cellphone'
                      placeholder='Cellphone'
                      ref={register({
                        required: 'Cellphone is required'
                      })}
                      onChange={(e) => hanldeChangeInput(e)}
                    />
                  )
                }
                <Input
                  type='password'
                  name='password'
                  placeholder={t('PASSWORD')}
                  ref={register({
                    required: 'Password is required'
                  })}
                  onChange={(e) => hanldeChangeInput(e)}
                />
                <Button color='primary' type='submit' onClick={handleErrors}>
                  {formState.loading ? t('LOADING') : loginTab === 'email' ? t('LOGIN') : 'Get verify Code'}
                </Button>
              </FormInput>
            )}
        </>

        <ForgotPassword>
          {t('FORGOT_YOUT_PASSWORD')} {elementLinkToForgotPassword}
        </ForgotPassword>
        {linkToForgetPassword && (
          <>
            {t('NEW_ON_PLATFORM')}
            <a href={linkToForgetPassword}>{t('RESET_PASSWORD')}</a>
          </>
        )}
      </FormSide>
      {loginTab === 'email' ? (errors.email || errors.password) && modalIsOpen &&
        <Confirm
          title='Error'
          content={errors?.email?.message || errors?.password?.message}
          acceptText='Yes'
          closeText='Cancel'
          open={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          onAccept={() => setModalIsOpen(false)}
          onCancel={() => setModalIsOpen(false)}
        /> : (errors.cellphone || errors.password) && modalIsOpen &&
          <Confirm
            title='Error'
            content={errors?.cellphone?.message || errors?.password?.message}
            acceptText='Yes'
            closeText='Cancel'
            open={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            onAccept={() => setModalIsOpen(false)}
            onCancel={() => setModalIsOpen(false)}
          />}
      {!formState.loading && !errors.email && !errors.cellphone && !errors.password && formState.result?.error && modalIsOpen &&
        <Confirm
          title='Error'
          content={formState.result.result[0]}
          acceptText='Yes'
          closeText='Cancel'
          open={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          onAccept={() => setModalIsOpen(false)}
          onCancel={() => setModalIsOpen(false)}
        />}
    </LoginContainer>

  )
}

export const LoginForm = (props) => {
  const loginControllerProps = {
    ...props,
    UIComponent: LoginFormUI
  }
  return <LoginFormController {...loginControllerProps} />
}
