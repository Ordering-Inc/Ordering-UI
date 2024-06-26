import React from 'react'
import { useTheme } from 'styled-components'
import { useConfig, useLanguage } from 'ordering-components'
import {
  HeroContainer,
  ContentWrapper,
  Title,
  Slogan,
  OrderTypes
} from './styles'
import { OrderTypeSelectorHeader } from '../../../../../../six/src/components/OrderTypeSelectorHeader'
export const StarbucksHomeHero = (props) => {
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ configs }] = useConfig()
  const orderTypeStyle = 'Rectangle'
  const allOrderTypes = [1, 2, 3, 4, 5]
  const configTypes = configs?.order_types_allowed?.value.split('|').filter(value => (allOrderTypes.includes(Number(value)))).map(value => Number(value)) || []

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <HeroContainer bgimage={theme.images?.general?.homeHero}>
        <ContentWrapper>
          <Title>{t(theme?.defaultLanguages?.TITLE_HOME || 'What type of order can we get started for you?')}</Title>
          <Slogan>{t(theme?.defaultLanguages?.SUBTITLE_HOME || 'Order ahead for pickup or let us deliver to your location.')}</Slogan>
        </ContentWrapper>
        <OrderTypes>
          <OrderTypeSelectorHeader configTypes={configTypes} orderTypeStyle={orderTypeStyle} />
        </OrderTypes>
      </HeroContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
