import React from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useEvent } from 'ordering-components'
import { FindAddressForm } from '../FindAddressForm'

import {
  HeroContainer,
  ContentWrapper,
  Title,
  WrapSignLink
} from './styles'

export const HomeHero = (props) => {
  const [, t] = useLanguage()
  const theme = useTheme()
  const [events] = useEvent()
  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <HeroContainer bgimage={theme.images?.general?.homeHero}>
        <ContentWrapper>
          <Title>{t('TITLE_THREE_HOME', 'Hungry? You’re in the right place')}</Title>
          <FindAddressForm />
          <WrapSignLink>
            <a
              onClick={() => handleGoToPage({ page: 'signin' })}
            >
              <span>{t('SIGN_IN', 'Sign in')}</span> {t('for your recent address')}
            </a>
          </WrapSignLink>
        </ContentWrapper>
      </HeroContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
