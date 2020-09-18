import React from 'react'
import { ProductForm as ProductOptions, useSession } from 'ordering-components'

import { formatPrice } from '../../utils'

import { ProductIngredient } from '../ProductIngredient'
import { ProductOption } from '../ProductOption'
import { ProductOptionSubOption } from '../ProductOptionSubOption'

import { Button } from '../../styles/Buttons'

import {
  ProductContainer,
  WrapperImage,
  ProductImage,
  ProductInfo,
  ProductEdition,
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

  return (
    <ProductContainer>
      <WrapperImage>
        <ProductImage bgimage={product?.images} />
      </WrapperImage>
      <ProductInfo>
        <h1>{product?.name}</h1>
        {product?.description && <p>{product?.description}</p>}
        <ProductEdition>
          {
            product?.ingredients.map(ingredient => (
              <ProductIngredient
                key={ingredient.id}
                onChange={handleChangeIngredientState}
                state={productCart.ingredients[`id:${ingredient.id}`]}
                ingredient={ingredient}
              />
            ))
          }
          {
            product?.extras.map(extra => extra.options.map(option => {
              const currentState = productCart.options[`id:${option.id}`] || {}
              return (
                <React.Fragment key={option.id}>
                  {
                    showOption(option) && (
                      <ProductOption option={option} currentState={currentState} error={errors[`id:${option.id}`]}>
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
                </React.Fragment>
              )
            }))
          }
          <ProductComment>
            <p>Special comment:</p>
            <textarea
              rows={4}
              defaultValue={productCart.comment}
            />
          </ProductComment>
          {/* {
            isSoldOut && <button type='button' disabled>Sold out</button>
          } */}
          {/* <p>Max: {maxProductQuantity}</p>
          <p>Sold out: {isSoldOut ? 'Yes' : 'No'}</p> */}
        </ProductEdition>
        <ProductActions>
          {productCart && (
            <div>
              <Button
                className='incdec'
                circle
                outline
                onClick={decrement}
                disabled={productCart.quantity === 1}
              >-
              </Button>
              <span>{productCart.quantity}</span>
              <Button
                className='incdec'
                circle
                outline
                onClick={increment}
                disabled={maxProductQuantity <= 0 || productCart.quantity >= maxProductQuantity}
              >+
              </Button>
            </div>)}

          {productCart && !isSoldOut && auth ? (
            <Button
              className='add'
              color='primary'
              onClick={handleSave}
              disabled={maxProductQuantity === 0}
            >
              <span>{editMode ? 'Save' : 'Add to Cart'}</span>
              <span>{productCart.total && formatPrice(productCart.total)}</span>
            </Button>
          ) : (
            <Button
              className='add'
              color='primary'
              outline
              // onClick={} // open login modal
            >
              Login / Sign Up
            </Button>
          )}
        </ProductActions>
      </ProductInfo>
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
