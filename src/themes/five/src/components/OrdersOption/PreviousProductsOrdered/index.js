import React from 'react'

import {
  ProductsList,
  ProductsListContainer
} from './styles'

import { AutoScroll } from '../../AutoScroll'
import { SingleProductCard } from '../../SingleProductCard'
// import Skeleton from 'react-loading-skeleton'

export const PreviousProductsOrdered = (props) => {
  const {
    products
  } = props

  return (
    <ProductsListContainer isLoading={products?.length < 1}>
      <ProductsList>
        <AutoScroll>
          {products?.map(product => (
            <SingleProductCard
              key={product?.id}
              isSoldOut={(product.inventoried && !product.quantity)}
              product={product}
              businessId={product?.business?.id}
            />
          ))}
        </AutoScroll>
      </ProductsList>
    </ProductsListContainer>
  )
}
