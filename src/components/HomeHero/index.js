import React from 'react'
import {
  HeroContainer,
  ContentWrapper,
  Title,
  Slogan
} from './styles'

import { Button } from '../../styles/Buttons'
import { Input } from '../../styles/Inputs'

export const HomeHero = (props) => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <Title>All We need is Food</Title>
        <Slogan>Let's start to order food now</Slogan>
        <Input />
        <Button color='primary'>
          Find Business
        </Button>
      </ContentWrapper>
    </HeroContainer>
  )
}
