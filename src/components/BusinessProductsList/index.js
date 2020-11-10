import React from 'react'
import { ProductsList, useLanguage } from 'ordering-components'

import { SingleProductCard } from '../SingleProductCard'
import { NotFoundSource } from '../NotFoundSource'

import {
  ProductsContainer,
  ProductsListing,
  WrapAllCategories,
  ErrorMessage
} from './styles'

const BusinessProductsListUI = (props) => {
  const {
    errors,
    businessId,
    category,
    categories,
    categoryState,
    isBusinessLoading,
    onProductClick,
    handleSearchRedirect
  } = props

  const [, t] = useLanguage()

  return (
    <ProductsContainer>
      {category.id && (
        <ProductsListing>
          {
            categoryState.products?.map(product => (
              <SingleProductCard
                key={product.id}
                isSoldOut={(product.inventoried && !product.quantity)}
                product={product}
                businessId={businessId}
                onProductClick={onProductClick}
              />
            ))
          }
        </ProductsListing>
      )}

      {
        !category.id && categories.filter(category => category.id !== null).map((category, i, _categories) => {
          const products = categoryState.products?.filter(product => product.category_id === category.id) || []
          return (
            <React.Fragment key={category.id}>
              {
                products.length > 0 && (
                  <WrapAllCategories>
                    <h3>{category.name}</h3>
                    <ProductsListing>
                      {
                        products.map(product => (
                          <SingleProductCard
                            key={product.id}
                            isSoldOut={product.inventoried && !product.quantity}
                            businessId={businessId}
                            product={product}
                            onProductClick={onProductClick}
                          />
                        ))
                      }
                      {
                        categoryState.loading && (i + 1) === _categories.length && [...Array(categoryState.pagination.nextPageItems).keys()].map(i => (
                          <SingleProductCard
                            key={`skeleton:${i}`}
                            isSkeleton
                          />
                        ))
                      }
                    </ProductsListing>
                  </WrapAllCategories>
                )
              }
            </React.Fragment>
          )
        })
      }

      {
        (categoryState.loading || isBusinessLoading) && (
          <ProductsListing>
            {[...Array(categoryState.pagination.nextPageItems).keys()].map(i => (
              <SingleProductCard
                key={`skeleton:${i}`}
                isSkeleton
              />
            ))}
          </ProductsListing>
        )
      }

      {
        !categoryState.loading && !isBusinessLoading && categoryState.products.length === 0 && (
          <NotFoundSource
            content={t('ERROR_NOT_FOUND_PRODUCTS', 'No products found, please change filters.')}
            btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
            onClickButton={handleSearchRedirect}
          />
        )
      }

      {errors && errors.length > 0 && (
        errors.map((e, i) => (
          <ErrorMessage key={i}>ERROR: [{e}]</ErrorMessage>
        ))
      )}
    </ProductsContainer>
  )
}

export const BusinessProductsList = (props) => {
  const businessProductsListProps = {
    ...props,
    UIComponent: BusinessProductsListUI
  }

  return (
    <ProductsList {...businessProductsListProps} />
  )
}
