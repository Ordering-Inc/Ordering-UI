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
    isAllCategory,
    categories,
    onProductClick
  } = props

  const { products, loading, error } = props.productsList

  return (
    <ProductsContainer>
      {
        !loading && isAllCategory && (
          <>
            {
              categories.map(category => (
                <WrapAllCategories key={category.id}>
                  <h3>{category.name}</h3>
                  <ProductsListing>
                    {products?.map(product => product.category_id === category.id && (
                      <SingleProductCard
                        key={product.id}
                        isSoldOut={product.inventoried && !product.quantity}
                        product={product}
                        onProductClick={onProductClick}
                      />
                    ))}
                  </ProductsListing>
                </WrapAllCategories>
              ))
            }
          </>
        )
      }
      {
        !loading && !isAllCategory && (
          <ProductsListing>
            {products?.map((product) => (
              <SingleProductCard
                key={product.id}
                isSoldOut={product.inventoried && !product.quantity}
                product={product}
                onProductClick={onProductClick}
              />
            ))}
          </ProductsListing>
        )
      }
      {loading && (
        <ProductsListing>
          {[...Array(12).keys()].map(i => (
            <SingleProductCard
              key={i}
              isSkeleton
            />))}
        </ProductsListing>
      )}
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
