import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessProductsCategories as ProductsCategories } from 'ordering-components'

import { CategoriesContainer, CategoriesWrap } from './styles'
import { Tab } from '../../../../styles/Tabs'

const BusinessProductsCategoriesUI = (props) => {
  const {
    isSkeleton,
    categories,
    handlerClickCategory,
    categorySelected,
    featured
  } = props

  const ProductCategories = () => {
    return (
      categories && categories.length && categories.map(category => (
        <Tab
          key={category.name}
          className={`category ${category.id === 'featured' ? 'special' : ''}`}
          active={categorySelected?.id === category.id}
          onClick={() => handlerClickCategory(category)}
          borderBottom
        >
          {category.name}
        </Tab>
      ))
    )
  }

  return (
    <CategoriesContainer className='category-lists' featured={featured}>
      {!isSkeleton ? (
        <CategoriesWrap variant='primary'>
          <ProductCategories />
        </CategoriesWrap>
      ) : (
        <CategoriesWrap variant='primary'>
          {[...Array(4).keys()].map(i => (
            <div key={i}>
              <Skeleton width={100} />
            </div>
          ))}
        </CategoriesWrap>
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
