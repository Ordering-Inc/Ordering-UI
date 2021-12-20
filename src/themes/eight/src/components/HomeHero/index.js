import React from 'react'
import { useTheme } from 'styled-components'
import { useSession, useEvent, useConfig, useOrder, useLanguage } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
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
  const [, { changeType }] = useOrder()
  const [configState] = useConfig()
  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  const handleAddressInput = (orderType) => {
    changeType(orderType)
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

            {configTypes?.includes(1) && (
              <OrderTypeItem onClick={() => handleAddressInput(1)}>
                <img src={theme.images.orderTypes.delivery} alt='delivery' />
                <OrderTypeInfo>
                  <span>{t('DELIVERY', 'Delivery')}</span>
                  <p>{t('Feugiat ipsum est egestas nulla diam dolor.')}</p>
                </OrderTypeInfo>
              </OrderTypeItem>
            )}
            {configTypes?.includes(2) && (
              <OrderTypeItem onClick={() => handleAddressInput(2)}>
                <img src={theme.images.orderTypes.pickup} alt='pickup' />
                <OrderTypeInfo>
                  <span>{t('PICKUP', 'Pickup')}</span>
                  <p>{t('Feugiat ipsum est egestas nulla diam dolor.')}</p>
                </OrderTypeInfo>
              </OrderTypeItem>
            )}
            {configTypes?.includes(3) && (
              <OrderTypeItem onClick={() => handleAddressInput(3)}>
                <img src={theme.images.orderTypes.eatIn} alt='eat in' />
                <OrderTypeInfo>
                  <span>{t('EAT_IN', 'Eat in')}</span>
                  <p>{t('Feugiat ipsum est egestas nulla diam dolor.')}</p>
                </OrderTypeInfo>
              </OrderTypeItem>
            )}
            {configTypes?.includes(4) && (
              <OrderTypeItem onClick={() => handleAddressInput(4)}>
                <img src={theme.images.orderTypes.curbside} alt='curbside' />
                <OrderTypeInfo>
                  <span>{t('CURBSIDE', 'Curbside')}</span>
                  <p>{t('Feugiat ipsum est egestas nulla diam dolor.')}</p>
                </OrderTypeInfo>
              </OrderTypeItem>
            )}
            {configTypes?.includes(5) && (
              <OrderTypeItem onClick={() => handleAddressInput(5)}>
                <img src={theme.images.orderTypes.driveThru} alt='drive thru' />
                <OrderTypeInfo>
                  <span>{t('DRIVE_THRU', 'Drive thru')}</span>
                  <p>{t('Feugiat ipsum est egestas nulla diam dolor.')}</p>
                </OrderTypeInfo>
              </OrderTypeItem>
            )}

            {configState?.loading && (
              [...Array(5).keys()].map(i => (
                <OrderTypeItem key={i}>
                  <Skeleton width={60} height={40} />
                  <OrderTypeInfo>
                    <span><Skeleton width={100} /></span>
                    <p><Skeleton width={200} /></p>
                  </OrderTypeInfo>
                </OrderTypeItem>
              ))
            )}

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
