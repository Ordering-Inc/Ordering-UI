import React from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  BusinessProductsCategories as ProductsCategories,
  useUtils
} from 'ordering-components'
import { useTheme } from 'styled-components'

import {
  CategoriesContainer,
  CategoryCard,
  WrapImage,
  CategoryImage,
  CategoryName
} from './styles'

const BusinessProductsCategoriesUI = (props) => {
  const {
    isSkeleton,
    categories,
    handlerClickCategory,
    featured
  } = props

  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <CategoriesContainer featured={featured}>
        {!isSkeleton ? (
          <>
            {categories && categories.length && categories.map(category => (
              <CategoryCard
                key={category.id}
                onClick={() => handlerClickCategory(category)}
              >
                <WrapImage>
                  <CategoryImage bgimage={optimizeImage(category.image || theme.images?.dummies?.businessLogo)} />
                </WrapImage>
                <CategoryName>{category.name}</CategoryName>
              </CategoryCard>
            ))}
          </>
        ) : (
          <>
            {[...Array(10).keys()].map(i => (
              <CategoryCard key={i}>
                <WrapImage>
                  <CategoryImage />
                </WrapImage>
                <CategoryName>
                  <Skeleton width={100} />
                </CategoryName>
              </CategoryCard>
            ))}
          </>
        )}
      </CategoriesContainer>

      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
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
