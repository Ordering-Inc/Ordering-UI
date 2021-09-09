import React from 'react'
import { useTheme } from 'styled-components'
import { useSession, useEvent, useLanguage } from 'ordering-components'
import {
  HeroContainer,
  ContentWrapper,
  Title,
  Slogan,
  OrderTypeSelectContainer,
  OrderTypeItem,
  OrderTypeInfo
} from './styles'

export const HomeHero = (props) => {
  const [{ auth }] = useSession()
  const [, t] = useLanguage()
  const [events] = useEvent()

  const theme = useTheme()
  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  const handleAddressInput = () => {
    if (auth) {
      handleGoToPage({ page: 'address_list' })
    } else {
      handleGoToPage({ page: 'address' })
    }
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <HeroContainer>
        <ContentWrapper>
          <Title>{t('TITLE_HOME_8', theme?.defaultLanguages?.TITLE_HOME || 'What type of order can we get started for you?')}</Title>
          <Slogan>{t('SUBTITLE_HOME_8', theme?.defaultLanguages?.SUBTITLE_HOME || 'Order ahead for pickup or let us deliver to your location')}</Slogan>
          <OrderTypeSelectContainer>
            <OrderTypeItem onClick={handleAddressInput}>
              <img src={theme.images.orderTypes.pickup} alt='pickup' />
              <OrderTypeInfo>
                <span>{t('PICKUP', 'Pickup')}</span>
                <p>{t('Feugiat ipsum est egestas nulla diam dolor.')}</p>
              </OrderTypeInfo>
            </OrderTypeItem>
            <OrderTypeItem onClick={handleAddressInput}>
              <img src={theme.images.orderTypes.delivery} alt='delivery' />
              <OrderTypeInfo>
                <span>{t('DELIVERY', 'Delivery')}</span>
                <p>{t('Feugiat ipsum est egestas nulla diam dolor.')}</p>
              </OrderTypeInfo>
            </OrderTypeItem>
            <OrderTypeItem onClick={handleAddressInput}>
              <img src={theme.images.orderTypes.eatIn} alt='eat in' />
              <OrderTypeInfo>
                <span>{t('EAT_IN', 'Eat in')}</span>
                <p>{t('Feugiat ipsum est egestas nulla diam dolor.')}</p>
              </OrderTypeInfo>
            </OrderTypeItem>
            <OrderTypeItem onClick={handleAddressInput}>
              <img src={theme.images.orderTypes.curbside} alt='curbside' />
              <OrderTypeInfo>
                <span>{t('CURBSIDE', 'Curbside')}</span>
                <p>{t('Feugiat ipsum est egestas nulla diam dolor.')}</p>
              </OrderTypeInfo>
            </OrderTypeItem>
            <OrderTypeItem onClick={handleAddressInput}>
              <img src={theme.images.orderTypes.driveThru} alt='drive thru' />
              <OrderTypeInfo>
                <span>{t('DRIVE_THRU', 'Drive thru')}</span>
                <p>{t('Feugiat ipsum est egestas nulla diam dolor.')}</p>
              </OrderTypeInfo>
            </OrderTypeItem>
          </OrderTypeSelectContainer>
        </ContentWrapper>
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
