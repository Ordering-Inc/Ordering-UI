import React from 'react'
import {
  LoginForm as LoginFormController,
  useLanguage
} from 'ordering-components'
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
    loginTab,
    ordering
  } = props
  const [, t] = useLanguage()
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
      <FormSide withCellphone={loginTab === 'cellphone'}>
        <img src={logoHeader} alt='Logo login' />
        {loginTab !== 'cellphone' && (
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
        )}

        {loginTab !== 'cellphone' && (
          <SocialIcons>
            <FacebookLoginButton ordering={ordering} appId='' /> <FaApple /> <AiOutlineGoogle />
          </SocialIcons>
        )}
        {useLoginByEmail && useLoginByCellphone && (
          <LoginWith>
            <Tabs variant='primary'>
              <Tab
                onClick={() => hanldeChangeTab('email')}
                active={loginTab === 'email'}
              >
                Login by Email
              </Tab>
              <Tab
                onClick={() => hanldeChangeTab('cellphone')}
                active={loginTab === 'cellphone'}
              >
                Login by Cellphone
              </Tab>
            </Tabs>
          </LoginWith>
        )}
        {loginTab === 'email' ? (
          <FormInput>
            <Input
              type='email'
              name='email'
              placeholder={t('EMAIL')}
              onChange={(e) => hanldeChangeInput(e)}
            />
            <Input
              type='password'
              name='password'
              placeholder={t('PASSWORD')}
              onChange={(e) => hanldeChangeInput(e)}
            />
            <Button color='primary' onClick={() => handleButtonLoginClick()}>
              {t('LOGIN')}
            </Button>
          </FormInput>
        ) : (
          <FormInput>
            <Input
              name='cellphone'
              placeholder='Cellphone'
              onChange={(e) => hanldeChangeInput(e)}
            />
            <Button color='primary' onClick={() => handleButtonLoginClick()}>
              Get verify code
            </Button>
          </FormInput>
        )}
        {elementLinkToForgotPassword && loginTab !== 'cellphone' && (
          <ForgotPassword>
            {t('FORGOT_YOUT_PASSWORD')} {elementLinkToForgotPassword}
          </ForgotPassword>
        )}
        {linkToForgetPassword && (
          <>
            {t('NEW_ON_PLATFORM')}
            <a href={linkToForgetPassword}>{t('RESET_PASSWORD')}</a>
          </>
        )}
      </FormSide>
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
