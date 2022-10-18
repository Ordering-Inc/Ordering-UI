import React from 'react'
import { useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import { Hero, BgImg, HeroText, LogoImg, Content, Segment, InputWrapper, BusinessSearch } from './styles'

export const CancellationComponent = props => {
  const {
    bgUrl,
    logoUrl,
    ButtonComponent,
    InputComponent
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()

  return (
    <>
      <Hero>
        {(bgUrl || theme.images?.general?.businessHero) && (
          <BgImg src={bgUrl || theme.images?.general?.businessHero} alt="bg"/>
        )}
        <HeroText>
        {(logoUrl || theme.images?.logos?.logotype) && (
          <LogoImg src={logoUrl || theme.images?.logos?.logotype} alt="logo"/>
        )}
          <h1 className="title">{t('CANCELLATION_TITLE', 'SITE OUT OF SERVICE')}</h1>
          <h4 className="sub-title" dangerouslySetInnerHTML={{
            __html:t('CANCELLATION_SUBTITLE', 'This website has been archived or suspended in accordance with our :Terms of Service').replace(':Terms of Service', `<b><i>${t('CANCELLATION_TERMS', 'Terms of Service')}</i></b>`)
          }}/>
        </HeroText>
      </Hero>
      <Content>
        <p dangerouslySetInnerHTML={{
            __html:t('CANCELLATION_OWNER_TEXT', 'If you are the :owner of this website contact us to reactivate your website.').replace(':owner', `<b>${t('CANCELLATION_OWNER', 'owner')}</b>`)
          }}/>
          {ButtonComponent &&(
            <ButtonComponent color='primary'>{t('CANCELLATION_CONTACT_US', 'Contact us')}</ButtonComponent>
          )}
      </Content>
      <Segment>
          <p dangerouslySetInnerHTML={{
            __html:t('CANCELLATION_OWNER_TEXT', 'If you are a :customer let the owner know you midd this website, just write your email below.').replace(':customer', `<b>${t('CANCELLATION_CUSTOMER', 'customer')}</b>`)
          }}/>
          <InputWrapper>
          <BusinessSearch>
          {InputComponent &&(
              <InputComponent
              name='Email'
              placeholder={t('CANCELLATION_INPUT_PLACEHOLDER', 'Email')}
            />
          )}
          </BusinessSearch>
          {ButtonComponent &&(
              <ButtonComponent color='primary'>
                {t('CANCELLATION_SEND_BUTTON', 'Send')}
              </ButtonComponent>
          )}
            </InputWrapper>
      </Segment>
    </>
  )
}
