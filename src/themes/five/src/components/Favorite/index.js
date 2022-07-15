import React, { useState } from 'react'
import { useLanguage, useOrder } from 'ordering-components'
import { FavoriteList } from '../FavoriteList'
import { Tabs } from '../../styles/Tabs'
import {
  FavoritesContainer,
  Title,
  TabsContainer,
  Tab,
  ContentWrapper
} from './styles'

export const Favorite = (props) => {
  const [, t] = useLanguage()
  const [orderState] = useOrder()

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
          {tabSelected === 'businesses' && (
            <FavoriteList
              isBusiness
              favoriteURL='favorite_businesses'
              originalURL='business'
              location={`${orderState.options?.address?.location?.lat},${orderState.options?.address?.location?.lng}`}
              propsToFetch={['id', 'name', 'header', 'logo', 'location', 'address', 'ribbon', 'timezone', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']}
            />
          )}
          {tabSelected === 'products' && (
            <FavoriteList
              favoriteURL='favorite_products'
              originalURL='products'
              isProduct
            />
          )}
          {tabSelected === 'orders' && (
            <FavoriteList
              favoriteURL='favorite_orders'
              originalURL='orders'
              isOrder
            />
          )}
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
