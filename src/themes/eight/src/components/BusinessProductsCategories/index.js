import React from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  BusinessProductsCategories as ProductsCategories,
  useUtils,
  useLanguage
} from 'ordering-components'
import BsChevronRight from '@meronex/icons/bs/BsChevronRight'
import { useTheme } from 'styled-components'
import { NotFoundSource } from '../../../../../components/NotFoundSource'

import {
  CategoriesContainer,
  CategoryCard,
  WrapImage,
  CategoryImage,
  CategoryName,
  WrapperNotFound
} from './styles'

const BusinessProductsCategoriesUI = (props) => {
  const {
    isSkeleton,
    categories,
    handlerClickCategory,
    featured,
    searchValue,
    handleClearSearch,
    handleSearchRedirect
  } = props

  const [, t] = useLanguage()
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
            {categories && categories.length > 0 && categories.map(category => (
              <CategoryCard
                key={category.id}
                onClick={() => handlerClickCategory(category)}
              >
                <WrapImage>
                  <CategoryImage bgimage={optimizeImage(category.image || theme.images?.dummies?.businessLogo)} />
                </WrapImage>
                <CategoryName>{category.name}</CategoryName>
                <BsChevronRight />
              </CategoryCard>
            ))}
          </>
        ) : (
          <>
            {[...Array(10).keys()].map(i => (
              <CategoryCard key={i}>
                <WrapImage isSkeleton>
                  <Skeleton width={90} height={90} />
                  <CategoryImage />
                </WrapImage>
                <CategoryName>
                  <Skeleton width={100} />
                </CategoryName>
              </CategoryCard>
            ))}
          </>
        )}
        {
          !isSkeleton && categories.length === 0 && (
            <WrapperNotFound>
              <NotFoundSource
                content={!searchValue ? t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time') : t('ERROR_NOT_FOUND_CATEGORIES', 'No categories found, please change filters.')}
                btnTitle={!searchValue ? t('SEARCH_REDIRECT', 'Go to Businesses') : t('CLEAR_FILTERS', 'Clear filters')}
                onClickButton={() => !searchValue ? handleSearchRedirect() : handleClearSearch('')}
              />
            </WrapperNotFound>
          )
        }
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
