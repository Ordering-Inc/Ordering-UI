import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'

import {
  ProductForm as ProductOptions,
  useSession,
  useLanguage,
  useOrder
} from 'ordering-components'

import { formatPrice, scrollTo } from '../../utils'
import { useWindowSize } from '../../hooks/useWindowSize'

import { ProductIngredient } from '../ProductIngredient'
import { ProductOption } from '../ProductOption'
import { ProductOptionSubOption } from '../ProductOptionSubOption'
import { LoginForm } from '../LoginForm'
import { ProductShare } from '../ProductShare'

import { Modal } from '../Modal'
import { Button } from '../../styles/Buttons'

import {
  ProductContainer,
  WrapperImage,
  ProductImage,
  ProductInfo,
  ProductEdition,
  SectionTitle,
  ProductActions,
  ProductComment,
  SkeletonBlock
} from './styles'

const ProductOptionsUI = (props) => {
  const {
    businessSlug,
    editMode,
    isSoldOut,
    productObject,
    productCart,
    increment,
    decrement,
    showOption,
    maxProductQuantity,
    errors,
    handleSave,
    handleChangeIngredientState,
    handleChangeSuboptionState,
    handleChangeCommentState
  } = props

  const { product, loading, error } = productObject

  const windowSize = useWindowSize()
  const [{ auth }] = useSession()
  const [, t] = useLanguage()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [orderState] = useOrder()

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const handleSuccessLogin = (user) => {
    if (user) {
      closeModal()
    }
  }

  const handleSaveProduct = () => {
    const isErrors = Object.values(errors).length > 0
    if (!isErrors) {
      handleSave && handleSave()
      return
    }
    const myElement = document.getElementsByClassName('error')[0]
    const container = document.getElementById('product_edition')
    const topPos = myElement.offsetTop - container.offsetTop
    scrollTo(container, topPos, 1250)
  }

  return (
    <ProductContainer id={`${windowSize.width <= 1200 && 'product_edition'}`}>
      {loading && (
        <SkeletonBlock width={90}>
          <Skeleton variant='rect' height={50} />
          <Skeleton variant='rect' height={50} />
          <Skeleton variant='rect' height={200} />
        </SkeletonBlock>
      )}

      {product && !loading && !error && (
        <ProductShare
          slug={businessSlug}
          categoryId={product?.category_id}
          productId={product?.id}
        />
      )}

      {!loading && !error && product && (
        <>
          <WrapperImage>
            <ProductImage bgimage={product?.images} />
          </WrapperImage>
          <ProductInfo>
            <div>
              <h1>{product?.name}</h1>
              {product?.description && <p>{product?.description}</p>}
            </div>
            <ProductEdition id={`${windowSize.width > 1200 && 'product_edition'}`}>
              {product?.ingredients.length > 0 && (<SectionTitle>{t('INGREDIENTS', 'Ingredients')}</SectionTitle>)}
              {product?.ingredients.map(ingredient => (
                <ProductIngredient
                  key={ingredient.id}
                  onChange={handleChangeIngredientState}
                  state={productCart.ingredients[`id:${ingredient.id}`]}
                  ingredient={ingredient}
                />
              ))}
              {
                product?.extras.map(extra => extra.options.map(option => {
                  const currentState = productCart.options[`id:${option.id}`] || {}
                  return (
                    <div key={option.id} className={`${errors[`id:${option.id}`] && 'error'}`}>
                      {
                        showOption(option) && (
                          <ProductOption
                            option={option}
                            currentState={currentState}
                            error={errors[`id:${option.id}`]}
                          >
                            {
                              option.suboptions.map(suboption => {
                                const currentState = productCart.options[`id:${option.id}`]?.suboptions[`id:${suboption.id}`] || {}
                                const balance = productCart.options[`id:${option.id}`]?.balance || 0
                                return (
                                  <ProductOptionSubOption
                                    key={suboption.id}
                                    onChange={handleChangeSuboptionState}
                                    balance={balance}
                                    option={option}
                                    suboption={suboption}
                                    state={currentState}
                                  />
                                )
                              })
                            }
                          </ProductOption>
                        )
                      }
                    </div>
                  )
                }))
              }
              <ProductComment>
                <SectionTitle>{t('SPECIAL_COMMENT', 'Special comment')}</SectionTitle>
                <textarea
                  rows={4}
                  defaultValue={productCart.comment}
                  onChange={handleChangeCommentState}
                  disabled={!(productCart && !isSoldOut && maxProductQuantity)}
                />
              </ProductComment>
            </ProductEdition>
            <ProductActions>
              {productCart && !isSoldOut && maxProductQuantity > 0 && (
                <div>
                  <Button
                    className='incdec'
                    circle
                    outline
                    onClick={decrement}
                    disabled={productCart.quantity === 1 || isSoldOut}
                  >-
                  </Button>
                  <span>{productCart.quantity}</span>
                  <Button
                    className='incdec'
                    circle
                    outline
                    onClick={increment}
                    disabled={maxProductQuantity <= 0 || productCart.quantity >= maxProductQuantity || isSoldOut}
                  >+
                  </Button>
                </div>)}

              {productCart && !isSoldOut && maxProductQuantity && auth ? (
                <Button
                  className={`add ${(maxProductQuantity === 0 || Object.keys(errors).length > 0) ? 'disabled' : ''}`}
                  color='primary'
                  onClick={() => handleSaveProduct()}
                >
                  {orderState.loading ? (
                    <span>{t('LOADING', 'Loading...')}</span>
                  ) : (
                    <span>
                      {editMode ? t('SAVE', 'Save') : t('ADD_TO_CART', 'Add to Cart')}
                    </span>
                  )}
                  <span>{productCart.total && formatPrice(productCart.total)}</span>
                </Button>
              ) : (
                <Button
                  className={`add ${!(productCart && !isSoldOut && maxProductQuantity) ? 'soldout' : ''}`}
                  color='primary'
                  outline
                  disabled={isSoldOut || maxProductQuantity === 0}
                  onClick={() => setModalIsOpen(true)}
                >
                  {isSoldOut || maxProductQuantity === 0 ? t('SOLD_OUT', 'Sold out') : t('LOGIN_SIGNUP', 'Login / Sign Up')}
                </Button>
              )}
            </ProductActions>
          </ProductInfo>
        </>
      )}

      {modalIsOpen && (
        <Modal
          title={t('LOGIN')}
          open={modalIsOpen}
          closeOnBackdrop={false}
          onClose={() => closeModal()}
        >
          <LoginForm
            ordering={props.ordering}
            handleSuccessLogin={handleSuccessLogin}
          />
        </Modal>)}

      {error && error.length > 0 && error.map((e, i) => (
        <p key={i}>Error: [{e}]</p>
      ))}
    </ProductContainer>
  )
}

export const ProductForm = (props) => {
  const productOptionsProps = {
    ...props,
    UIComponent: ProductOptionsUI
  }

  return (
    <ProductOptions {...productOptionsProps} />
  )
}
