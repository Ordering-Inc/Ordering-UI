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
    business,
    productsList,
    paginationProducts
  } = props

  const elementsList = isAllCategory && !business?.business?.lazy_load_products_recommended
    ? { loading: business?.loading, error: business?.error, categories: business?.business?.categories }
    : { ...productsList, categories: business?.business?.categories, isFromProductsList: true }

  return (
    <ProductsContainer>
      {isAllCategory && elementsList.isFromProductsList && (
        elementsList?.categories?.map(category => (
          <WrapAllCategories key={category.id}>
            <h3>{category.name}</h3>
            <ProductsListing>
              {elementsList?.products?.map(product => product.category_id === category.id && (
                <SingleProductCard
                  key={product.id}
                  isSoldOut={product.inventoried && !product.quantity}
                  product={product}
                />
              ))}
            </ProductsListing>
          </WrapAllCategories>
        ))
      )}

      {isAllCategory && !elementsList.isFromProductsList && (
        elementsList?.categories?.map(category => (
          <WrapAllCategories key={category.id}>
            <h3>{category.name}</h3>
            <ProductsListing>
              {category?.products?.map(product => (
                <SingleProductCard
                  key={product.id}
                  isSoldOut={product.inventoried && !product.quantity}
                  product={product}
                />
              ))}
            </ProductsListing>
          </WrapAllCategories>
        ))
      )}

      {!isAllCategory && (
        <ProductsListing>
          {elementsList?.products?.map((product) => (
            <SingleProductCard
              key={product.id}
              isSoldOut={product.inventoried && !product.quantity}
              product={product}
            />
          ))}
        </ProductsListing>
      )}

      {elementsList?.loading && (
        <ProductsListing>
          {[...Array(paginationProducts.nextPageItems ? paginationProducts.nextPageItems : 12).keys()].map(i => (
            <SingleProductCard
              key={i}
              isSkeleton
            />))}
        </ProductsListing>
      )}

      {elementsList?.loading && (elementsList?.products?.length === 0 || elementsList?.categories?.length === 0) && (
        <div>
          <h1>Not Found elements</h1>
        </div>
      )}

      {elementsList?.error && elementsList?.length > 0 && (
        elementsList?.error.map((e, i) => (
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
