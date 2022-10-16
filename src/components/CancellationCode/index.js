import React from 'react'
import { useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import { Hero, BgImg, HeroText, LogoImg, Content, Segment, InputWrapper, BusinessSearch } from './styles'
import { Button } from '../../themes/five/src/styles/Buttons'
import { Input } from '../../themes/five/src/styles/Inputs'

export const CancellationCodeUI = props => {

  const {
    bgUrl,
    logoUrl,
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
          <h1 className="title">{t('TEXT_1', 'SITE OUT OF SERVICE')}</h1>
          <h4 className="sub-title">{t('TEXT_2', 'This website has been archived or suspended in accordance with our')}</h4>
          <b className="terms">{t('TEXT_3', 'Terms of Service')}</b>
        </HeroText>
      </Hero>
      <Content>
          <p>If you are the <b>owner</b> of this website contact us to</p>
          <p>reactivate your website.</p>
          <Button color='primary'>Contact us</Button>
      </Content>
      <Segment>
          <p>If you are a <b>customer</b> let the owner know you midd this</p>
          <p>website, just write your email below.</p>
          <InputWrapper>
          <BusinessSearch>
              <Input
              name='Email'
              placeholder={t('PLACEHOLDER_TEST', 'Email')}
            />
          </BusinessSearch>
              <Button color='primary'>
                {t('SEND', 'Send')}
              </Button>
            </InputWrapper>
      </Segment>
    </>
  )
}
