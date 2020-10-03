import React, { useState } from 'react'
import {
  ProductForm as ProductOptions,
  useSession,
  useLanguage,
  useOrder
} from 'ordering-components'

import { formatPrice } from '../../utils'

import { ProductIngredient } from '../ProductIngredient'
import { ProductOption } from '../ProductOption'
import { ProductOptionSubOption } from '../ProductOptionSubOption'
import { LoginForm } from '../LoginForm'

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
  ProductComment
} from './styles'

const ProductOptionsUI = (props) => {
  const {
    editMode,
    isSoldOut,
    product,
    productCart,
    increment,
    decrement,
    showOption,
    maxProductQuantity,
    errors,
    handleSave,
    handleChangeIngredientState,
    handleChangeSuboptionState
  } = props

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

  return (
    <ProductContainer>
      <WrapperImage>
        <ProductImage bgimage={product?.images} />
      </WrapperImage>
      <ProductInfo>
        <div>
          <h1>{product?.name}</h1>
          {product?.description && <p>{product?.description}</p>}
        </div>
        <ProductEdition>
          {product?.ingredients.length > 0 && (<SectionTitle>Ingredients</SectionTitle>)}
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
                <div key={option.id}>
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
            <SectionTitle>Special comment</SectionTitle>
            <textarea
              rows={4}
              defaultValue={productCart.comment}
            />
          </ProductComment>
        </ProductEdition>
        <ProductActions>
          {productCart && (
            <div>
              <Button
                className={`incdec ${(isSoldOut || productCart.quantity === 1) ? 'disabled' : ''}`}
                circle
                outline
                onClick={decrement}
                disabled={productCart.quantity === 1 || isSoldOut}
              >-
              </Button>
              <span>{productCart.quantity}</span>
              <Button
                className={`incdec ${(maxProductQuantity <= 0 || isSoldOut || productCart.quantity >= maxProductQuantity) ? 'disabled' : ''}`}
                circle
                outline
                onClick={increment}
                disabled={maxProductQuantity <= 0 || productCart.quantity >= maxProductQuantity || isSoldOut}
              >+
              </Button>
            </div>)}

          {productCart && !isSoldOut && auth ? (
            <Button
              className={`add ${Object.keys(errors).length > 0 ? 'disabled' : ''}`}
              color='primary'
              onClick={handleSave}
              disabled={maxProductQuantity === 0 || Object.keys(errors).length > 0}
            >
              {orderState.loading ? (
                <span>Loading...</span>
              ) : (
                <span>
                  {editMode ? 'Save' : 'Add to Cart'}
                </span>
              )}
              <span>{productCart.total && formatPrice(productCart.total)}</span>
            </Button>
          ) : (
            <Button
              className={`add ${isSoldOut ? 'disabled' : ''}`}
              color='primary'
              outline
              disabled={isSoldOut}
              onClick={() => setModalIsOpen(true)}
            >
              {isSoldOut ? 'Sold out' : 'Login / Sign Up'}
            </Button>
          )}
        </ProductActions>
      </ProductInfo>
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
