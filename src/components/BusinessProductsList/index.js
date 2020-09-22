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
    categories
    // business,
    // productsList,
    // paginationProducts
  } = props

  // const { products, loading, error } = props.productsList
  const { productsToShow, loading, error } = props.categoriesToShow

  const getCategoryName = (categoryId) => categories.find(category => category.id === categoryId)?.name

  return (
    <ProductsContainer>
      {
        !loading && Object.keys(productsToShow).length === 0 && (
          <div>
            <h1>Not Found elements</h1>
          </div>
        )
      }

      {
        Object.keys(productsToShow).map(category => (
          <WrapAllCategories key={productsToShow[category].categoryId}>
            {isAllCategory && <h3>{getCategoryName(productsToShow[category].categoryId)}</h3>}
            <ProductsListing>
              {productsToShow[category]?.products.map(product => (
                <SingleProductCard
                  key={product.id}
                  isSoldOut={product.inventoried && !product.quantity}
                  product={product}
                />
              ))}
            </ProductsListing>
          </WrapAllCategories>
        ))
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

      {error && error.length > 0 && (
        error.map((e, i) => (
          <ErrorMessage key={i}>ERROR: [{e.message}]</ErrorMessage>
        ))
      )}
    </ProductsContainer>
    // <ProductsContainer>
    //   {
    //     !loading && products?.length === 0 && (
    //       <div>
    //         <h1>Not Found elements</h1>
    //       </div>
    //     )
    //   }

  //   {
  //     isAllCategory && categories.map(category => (
  //       <WrapAllCategories key={category.id}>
  //         <h3>{category.name}</h3>
  //         <ProductsListing>
  //           {products.map(product => product.category_id === category.id && (
  //             <SingleProductCard
  //               key={product.id}
  //               isSoldOut={product.inventoried && !product.quantity}
  //               product={product}
  //             />
  //           ))}
  //         </ProductsListing>
  //       </WrapAllCategories>
  //     ))
  //   }

  //   {
  //     !isAllCategory && (
  //       <ProductsListing>
  //         {products.map((product) => (
  //           <SingleProductCard
  //             key={product.id}
  //             isSoldOut={product.inventoried && !product.quantity}
  //             product={product}
  //           />
  //         ))}
  //       </ProductsListing>
  //     )
  //   }

  // {loading && (
  //   <ProductsListing>
  //     {[...Array(paginationProducts.nextPageItems ? paginationProducts.nextPageItems : 12).keys()].map(i => (
  //       <SingleProductCard
  //         key={i}
  //         isSkeleton
  //       />))}
  //   </ProductsListing>
  // )}

  // {error && error.length > 0 && (
  //   error.map((e, i) => (
  //     <ErrorMessage key={i}>ERROR: [{e.message}]</ErrorMessage>
  //   ))
  // )}
  // </ProductsContainer>
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
