import React from 'react'
import { ProductsList } from 'ordering-components'

import { SingleProductCard } from '../SingleProductCard'

import {
  ProductsContainer,
  ProductsListing,
  WrapAllCategories,
  ErrorMessage
} from './styles'

const BusinessProductsListUI = (props) => {
  const {
    category,
    categories,
    categoryState
  } = props

  return (
    <ProductsContainer>
      {
        category.id && (
          <ProductsListing>
            {
              categoryState.products?.map(product => (
                <SingleProductCard
                  key={product.id}
                  isSoldOut={product.inventoried && !product.quantity}
                  product={product}
                  onProductClick={onProductClick}
                />
              ))
            }
            {
              categoryState.loading && [...Array(categoryState.pagination.nextPageItems).keys()].map(i => (
                <SingleProductCard
                  key={`skeleton:${i}`}
                  isSkeleton
                />
              ))
            }
          </ProductsListing>
        )
      }

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
        !loading && products.length === 0 && (
          <div>
            <h1>Not Found elements</h1>
          </div>
        )
      }
      {error && error.length > 0 && (
        error.map((e, i) => (
          <ErrorMessage key={i}>ERROR: [{e.message}]</ErrorMessage>
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
