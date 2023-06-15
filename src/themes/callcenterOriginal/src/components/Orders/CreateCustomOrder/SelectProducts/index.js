import React, { useState, useRef, useEffect } from 'react'
import { useLanguage, useUtils, useOrder } from 'ordering-components'
import { Input, IconButton } from '../../../../styles'
import { DashCircle, PlusCircle, Pencil, Trash } from 'react-bootstrap-icons'
import CgSpinnerTwoAlt from '@meronex/icons/cg/CgSpinnerTwoAlt'
import BiImage from '@meronex/icons/bi/BiImage'
import { Modal, Confirm } from '../../../Shared'
import { ProductForm } from '../ProductForm'

import {
  Container,
  SearchProductsWrapper,
  OptionsToSelectContainer,
  SelectOption,
  WrapperImage,
  CartProductsWrapper,
  ProductQuantityActionsContainer,
  CartProductsConatiner,
  ProductEditDeleteActions
} from './styles'

export const SelectProducts = (props) => {
  const {
    productList,
    getProducts,
    handeUpdateProductCart,
    cart,
    business
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const [, { removeProduct }] = useOrder()

  const searchInputRef = useRef(null)
  const [searchInputFocus, setSearchInputFocus] = useState(false)
  const [openProduct, setOpenProduct] = useState(false)
  const [curProduct, setCurProduct] = useState(null)
  const [selectedProductCart, setSelectedProductCart] = useState(null)
  const [isCartProduct, setIsCartProduct] = useState(false)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  let timeout = null
  const onInputChange = (inputValue) => {
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      getProducts(inputValue)
    }, 750)
  }

  const handleSelectProduct = (product) => {
    setIsCartProduct(false)
    setSelectedProductCart(null)
    setCurProduct(product)
    setOpenProduct(true)
  }

  const handleEditProduct = (product) => {
    setIsCartProduct(true)
    setCurProduct(null)
    setSelectedProductCart(product)
    setOpenProduct(true)
  }

  const closeModalProductForm = () => {
    setCurProduct(null)
    setOpenProduct(false)
  }

  const handleDeleteClick = (product) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete the product?'),
      handleOnAccept: () => {
        removeProduct(product, cart)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  useEffect(() => {
    if (business?.id) {
      searchInputRef.current.value = ''
    }
  }, [business?.id])

  useEffect(() => {
    if (!searchInputFocus || !productList?.products?.length) return
    const el = document.querySelector('.custom-order-content')
    if (el) {
      el.scrollTo({
        top: 300,
        behavior: 'smooth'
      })
    }
  }, [searchInputFocus, productList?.products])

  return (
    <Container>
      <h3>{t('WAHT_WANT_TO_BUY', 'What do you want us to buy?')}</h3>
      <SearchProductsWrapper>
        <Input
          ref={searchInputRef}
          placeholder={t('SEARCH_PRODUCTOS', 'Search products')}
          onChange={e => onInputChange(e.target.value)}
          onFocus={() => setSearchInputFocus(true)}
          onBlur={() => {
            setTimeout(() => {
              setSearchInputFocus(false)
            }, 300)
          }}
        />
        {productList.loading && (
          <span className='loading'>
            <CgSpinnerTwoAlt />
          </span>
        )}
        {searchInputFocus && (
          <OptionsToSelectContainer>
            {productList?.products?.length > 0 ? (
              <>
                {productList?.products?.map(product => (
                  <SelectOption
                    key={product.id}
                    onClick={() => handleSelectProduct(product)}
                  >
                    <WrapperImage>
                      {product?.images ? (
                        <img src={optimizeImage(product?.images, 'h_50,c_limit')} alt='' />
                      ) : (
                        <BiImage />
                      )}
                    </WrapperImage>
                    <span className='name'>{product?.name}</span>
                  </SelectOption>
                ))}
              </>
            ) : (
              <p>
                {
                  productList.loading
                    ? t('LOADING', 'Loading')
                    : t('SEARCH_PRODUCTOS', 'Search products')
                }
              </p>
            )}
          </OptionsToSelectContainer>
        )}
      </SearchProductsWrapper>
      <CartProductsConatiner>
        {cart?.products?.map((product, index) => (
          <CartProductsWrapper key={`${product.id}_${index}`}>
            <SelectOption>
              <WrapperImage>
                {product?.images ? (
                  <img src={optimizeImage(product?.images, 'h_50,c_limit')} alt='' />
                ) : (
                  <BiImage />
                )}
              </WrapperImage>
              <span className='name'>{product?.name}</span>
            </SelectOption>
            <ProductQuantityActionsContainer>
              <IconButton
                color='black'
                disabled={product?.quantity === 1}
                onClick={() => handeUpdateProductCart(product, false)}
              >
                <DashCircle />
              </IconButton>
              <Input
                type='number'
                disabled
                max={product?.maximum_per_order}
                value={product?.quantity}
              />
              <IconButton
                color='black'
                disabled={product?.maximum_per_order === product?.quantity}
                onClick={() => handeUpdateProductCart(product, true)}
              >
                <PlusCircle />
              </IconButton>
            </ProductQuantityActionsContainer>
            <ProductEditDeleteActions>
              <IconButton
                color='black'
                onClick={() => handleEditProduct(product)}
              >
                <Pencil />
              </IconButton>
              <IconButton
                color='black'
                onClick={() => handleDeleteClick(product)}
              >
                <Trash />
              </IconButton>
            </ProductEditDeleteActions>
          </CartProductsWrapper>
        ))}
      </CartProductsConatiner>

      <Modal
        width='760px'
        open={openProduct}
        closeOnBackdrop
        onClose={() => closeModalProductForm()}
        padding='0'
        isProductForm
        disableOverflowX
      >
        <ProductForm
          isCartProduct={isCartProduct}
          product={curProduct}
          productCart={selectedProductCart}
          businessSlug={business?.slug}
          businessId={business?.id}
          categoryId={curProduct?.category_id || selectedProductCart?.category_id}
          productId={curProduct?.id || selectedProductCart?.id}
          onSave={() => setOpenProduct(false)}
          productAddedToCartLength={cart?.products?.reduce((productsLength, Cproduct) => { return productsLength + (Cproduct?.id === curProduct?.id ? Cproduct?.quantity : 0) }, 0) || 0}
        />
      </Modal>

      <Confirm
        title={t('PRODUCT', 'Product')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </Container>
  )
}
