import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import { Tabs } from '../../styles/Tabs'
import { FavoriteBusinesses } from '../FavoriteBusinesses'
import {
  FavoritesContainer,
  Title,
  TabsContainer,
  Tab,
  ContentWrapper
} from './styles'
import { FavoriteProducts } from '../FavoriteProducts'
import { FavoriteOrders } from '../FavoriteOrders'

export const Favorite = (props) => {
  const [, t] = useLanguage()

  const [tabSelected, setTabSelected] = useState('businesses')

  const tabList = [
    { key: 'businesses', name: t('BUSINESSES', 'Businesses') },
    { key: 'products', name: t('PRODUCTS', 'Products') },
    { key: 'orders', name: t('ORDERS', 'Orders') }
  ]

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <FavoritesContainer>
        <Title>{t('FAVORITES', 'Favorites')}</Title>
        <TabsContainer>
          <Tabs variant='primary'>
            {tabList.map((item, i) => (
              <Tab
                key={i}
                borderBottom
                active={item.key === tabSelected}
                onClick={() => setTabSelected(item.key)}
              >
                {item?.name}
              </Tab>
            ))}
          </Tabs>
        </TabsContainer>
        <ContentWrapper>
          {tabSelected === 'businesses' && <FavoriteBusinesses />}
          {tabSelected === 'products' && <FavoriteProducts />}
          {tabSelected === 'orders' && <FavoriteOrders />}
        </ContentWrapper>
      </FavoritesContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
