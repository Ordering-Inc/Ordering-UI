import React from 'react'
import { VscWarning } from 'react-icons/vsc'
import {
  // ProductsListing,
  useLanguage
} from 'ordering-components'

import { ProductsListing } from '../ProductsListing' // Replace this component in ordering-components

import {
  ProductsContainer,
  WrapContent,
  ProductsNotFound
} from './styles'

import { BusinessBasicInformation } from '../BusinessBasicInformation'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductsList } from '../BusinessProductsList'

const BusinessProductsListingUI = (props) => {
  const {
    isAllCategory,
    categorySelected,
    productsList,
    handlerClickCategory,
    onProductClick
  } = props

  const { business, categories, loading, error } = props.business
  const [, t] = useLanguage()

  return (
    <ProductsContainer>
      {
        !loading && business.id && (
          <>
            <BusinessBasicInformation
              business={props.business}
            />
            <BusinessProductsCategories
              categories={categories}
              categorySelected={categorySelected}
              onClickCategory={handlerClickCategory}
            />
            <WrapContent>
              <BusinessProductsList
                categories={categories}
                productsList={productsList}
                isAllCategory={!isAllCategory}
                onProductClick={onProductClick}
              />
            </WrapContent>
          </>
        )
      }
      {
        !loading && !business.id && (
          <ProductsNotFound>
            <h1>{t('NOT_FOUND_BUSINESS')}</h1>
            <VscWarning />
          </ProductsNotFound>
        )
      }
      {loading && (
        <>
          <BusinessBasicInformation
            business={{ business: {}, loading: true }}
            isSkeleton
          />
          <BusinessProductsCategories
            categories={[]}
            isSkeleton
          />
          <WrapContent>
            <BusinessProductsList
              categories={categories}
              productsList={productsList}
              isAllCategory={!isAllCategory}
              onProductClick={onProductClick}
            />
          </WrapContent>
        </>
      )}
      {error && error.length > 0 && (
        <ProductsNotFound>
          {error.map((e, i) => (
            <p key={i}>ERROR: [{e.message}]</p>
          ))}
        </ProductsNotFound>
      )}
    </ProductsContainer>
  )
}

export const BusinessProductsListing = (props) => {
  const businessProductslistingProps = {
    ...props,
    UIComponent: BusinessProductsListingUI,
    handlerClickCategory: (e) => { console.log(e) }
  }

  return (
    <ProductsListing {...businessProductslistingProps} />
  )
}
