import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useSession, useOrder, useLanguage, useConfig, useEvent } from 'ordering-components'
import {
  HeroContainer,
  ContentWrapper,
  Title,
  Slogan,
  HeroContent,
  HomeImage,
  OrderTypeListItemContainer,
  OrderTypeTitle,
  IconTypeButton
} from './styles'

export const OloHomeHero = (props) => {
  const [{ auth }] = useSession()
  const [orderState, { changeType }] = useOrder()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [events] = useEvent()
  const theme = useTheme()
  const configTypes = configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []

  const [newAddressModalOpened, setNewAddressModalOpened] = useState(false)

  const bgImg = theme?.my_products?.components?.images?.components?.homepage_background?.components?.image
  const orderTypeTitle = (type) => theme?.order_types?.components?.[type]?.components?.title
  const orderTypeIcon = (typeValue) => typeValue === 1
    ? theme?.images?.general?.deliveryIco
    : typeValue === 2
      ? theme?.images?.general?.pickupIco
      : typeValue === 3
        ? theme?.images?.general?.eatinIco
        : typeValue === 4
          ? theme?.images?.general?.curbsideIco
          : typeValue === 5
            ? theme?.images?.general?.drivethruIco
            : theme?.images?.general?.deliveryIco

  const handleClickOrderType = (value) => {
    if (!orderState?.loading) {
      changeType(value)
      events.emit('go_to_page', { page: 'search' })
    }
  }

  useEffect(() => {
    return () => setModals({ listOpen: false, formOpen: false })
  }, [])

  useEffect(() => {
    if (newAddressModalOpened) return
    if (auth && !orderState.loading && !orderState?.options?.address?.location) {
      setModals({ ...modals, listOpen: true })
      setNewAddressModalOpened(true)
    }
  }, [auth, orderState, newAddressModalOpened])

  const orderTypes = [
    {
      value: 1,
      text: t('DELIVERY', 'Delivery'),
      description: t('ORDERTYPE_DESCRIPTION_DELIVERY', 'Delivery description'),
      image: theme.images?.deliveryTypes?.delivery
    },
    {
      value: 2,
      text: t('PICKUP', 'Pickup'),
      description: t('ORDERTYPE_DESCRIPTION_PICKUP', 'Pickup description'),
      image: theme.images?.deliveryTypes?.pickUp
    },
    {
      value: 3,
      text: t('EAT_IN', 'Eat in'),
      description: t('ORDERTYPE_DESCRIPTION_EATIN', 'Eat in description'),
      image: theme.images?.deliveryTypes?.eatIn
    },
    {
      value: 4,
      text: t('CURBSIDE', 'Curbside'),
      description: t('ORDERTYPE_DESCRIPTION_CURBSIDE', 'Curbside description'),
      image: theme.images?.deliveryTypes?.curbside
    },
    {
      value: 5,
      text: t('DRIVE_THRU', 'Drive thru'),
      description: t('ORDERTYPE_DESCRIPTION_DRIVETHRU', 'Drive Thru description'),
      image: theme.images?.deliveryTypes?.driveThru
    }
  ]

  return (
    <HeroContainer>
      <ContentWrapper>
        <HeroContent>
          <Title>{t('TITLE_HOME', theme?.defaultLanguages?.TITLE_HOME || 'All We need is Food.')}</Title>
          <Slogan>{t('SUBTITLE_HOME', theme?.defaultLanguages?.SUBTITLE_HOME || 'Let\'s start to order food now')}</Slogan>
          {
            orderTypes && (configTypes ? orderTypes.filter(type => configTypes?.includes(type.value)) : orderTypes).map((item, i) => (
              <OrderTypeListItemContainer
                key={i}
                onClick={() => handleClickOrderType(item.value)}
              >
                <IconTypeButton>
                  <img
                    src={orderTypeIcon(item.value)}
                    width={24}
                    height={24}
                  />
                </IconTypeButton>
                <OrderTypeTitle>{orderTypeTitle(item?.text?.replace(' ', '_')?.toLowerCase()) || item.text}</OrderTypeTitle>
              </OrderTypeListItemContainer>
            ))
          }
        </HeroContent>
        <HomeImage bgimage={(bgImg || theme.images?.general?.homeHero)} />
      </ContentWrapper>
    </HeroContainer>
  )
}
