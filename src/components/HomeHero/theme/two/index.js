import React from 'react'
import { useTheme } from 'styled-components'
import { useLanguage } from 'ordering-components'
import { GoogleAutoCompletAddressForm } from '../../../GoogleAutoCompletAddressForm/theme/two'

import {
  HeroContainer,
  ContentWrapper,
  Title
} from './styles'

export const HomeHero = (props) => {
  const [, t] = useLanguage()
  const theme = useTheme()

  return (
    <HeroContainer bgimage={theme.images?.general?.homeHero}>
      <ContentWrapper>
        <Title>{t('YOUR_FAVORITE_RESTURANTS', 'Your favorite restaurants, delivered')}</Title>
        <GoogleAutoCompletAddressForm />
      </ContentWrapper>
    </HeroContainer>
  )
}
