import React, { useState } from 'react'

import {
  ProductsList,
  ProductsListContainer
} from './styles'

import { AutoScroll } from '../../AutoScroll'
import { SingleProductCard } from '../../SingleProductCard'
import { Modal } from '../../Modal'
import { ProductForm } from '../../ProductForm'

export const PreviousProductsOrdered = (props) => {
  const {
    products,
    handleUpdateProducts,
    onBusinessClick
  } = props
  const [curProduct, setCurProduct] = useState(null)

  const closeModalProductForm = () => {
    setCurProduct(null)
  }

  const handleRedirectToCart = () => {
    onBusinessClick(curProduct?.business)
    setCurProduct(null)
  }

  const onProductClick = (product) => {
    setCurProduct(product)
  }

  return (
    <ProductsListContainer isLoading={products?.length < 1}>
      <ProductsList>
        <AutoScroll>
          {products?.filter(product => product?.business?.available)?.map(product => (
            <SingleProductCard
              key={product?.id}
              isSoldOut={(product.inventoried && !product.quantity)}
              product={product}
              businessId={product?.business?.id}
              handleUpdateProducts={handleUpdateProducts}
              onProductClick={(product) => onProductClick(product)}
              isProductId
            />
          ))}
        </AutoScroll>
      </ProductsList>
      <Modal
        width={props?.useKioskApp ? '80%' : '760px'}
        open={!!curProduct}
        closeOnBackdrop
        onClose={() => closeModalProductForm()}
        padding='0'
        isProductForm
        disableOverflowX
      >
        {(!!curProduct) && (
          <ProductForm
            businessSlug={curProduct?.business?.slug}
            useKioskApp={props?.useKioskApp}
            businessId={curProduct?.businessId}
            categoryId={curProduct?.category_id}
            productId={curProduct?.product_id}
            onSave={handleRedirectToCart}
          />
        )}
      </Modal>
    </ProductsListContainer>
  )
}
