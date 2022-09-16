import React, { useState } from 'react'

import {
  ProductsList,
  ProductsListContainer
} from './styles'

import { AutoScroll } from '../../AutoScroll'
import { SingleProductCard } from '../../SingleProductCard'
import { SingleProductCard as SingleProductCardPF } from '../../SingleProductCard/layouts/pfchangs'
import { Modal } from '../../Modal'
import { ProductForm } from '../../ProductForm'
import { ProductForm as ProductFormPFChangs } from '../../ProductForm/layouts/pfchangs'
import { useTheme } from 'styled-components'

export const PreviousProductsOrdered = (props) => {
  const {
    products,
    handleUpdateProducts,
    onBusinessClick
  } = props
  const [curProduct, setCurProduct] = useState(null)
  const theme = useTheme()
  const layout = theme?.layouts?.business_view?.components?.layout?.type
  const SingleProductCardComponent = layout === 'pfchangs'
    ? SingleProductCardPF
    : SingleProductCard

  const ProductFormComponent = layout === 'pfchangs' ? ProductFormPFChangs : ProductForm

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
          {products?.map(product => (
            <SingleProductCardComponent
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
        hideCloseDefault={layout === 'pfchangs'}
      >
        {(!!curProduct) && (
          <ProductFormComponent
            businessSlug={curProduct?.business?.slug}
            useKioskApp={props?.useKioskApp}
            businessId={curProduct?.businessId}
            categoryId={curProduct?.category_id}
            productId={curProduct?.product_id}
            onSave={handleRedirectToCart}
            closeModalProductForm={closeModalProductForm}
          />
        )}
      </Modal>
    </ProductsListContainer>
  )
}
