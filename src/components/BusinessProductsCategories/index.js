import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessProductsCategories as ProductsCategories } from 'ordering-components'
import { AutoScroll } from '../AutoScroll'

import { CategoriesContainer } from './styles'
import { Tabs, Tab } from '../../styles/Tabs'

const BusinessProductsCategoriesUI = (props) => {
  const {
    isSkeleton,
    categories,
    handlerClickCategory,
    categorySelected,
    featured
  } = props

  return (
    <CategoriesContainer id='container' featured={featured}>
      {!isSkeleton ? (
        <Tabs variant='primary' id='categories'>
          <AutoScroll categories='categories' container='container'>
            {categories && categories.length && categories.map(category => (
              <Tab className={`category ${category.id === 'featured' ? 'special' : ''}`} active={categorySelected?.id === category.id} key={category.name} onClick={() => handlerClickCategory(category)}>
                {category.name}
              </Tab>
            ))}
          </AutoScroll>
        </Tabs>
      ) : (
        <Tabs variant='primary'>
          {[...Array(4).keys()].map(i => (
            <Tab key={i}>
              <Skeleton width={100} />
            </Tab>
          ))}
        </Tabs>
      )}
    </CategoriesContainer>
  )
}

export const BusinessProductsCategories = (props) => {
  const businessProductsCategoriesProps = {
    ...props,
    UIComponent: BusinessProductsCategoriesUI
  }

  return (
    <ProductsCategories {...businessProductsCategoriesProps} />
  )
}
