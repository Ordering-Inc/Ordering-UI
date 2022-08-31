import React from 'react'
import { ProductIngredient as ProductIngredientController } from 'ordering-components'

import { Container } from './styles'

const ProductIngredientUI = (props) => {
  const {
    state,
    ingredient,
    toggleSelect,
    isSoldOut
  } = props

  return (
    <Container isSoldOut={isSoldOut} isSelected={state?.selected && !isSoldOut} onClick={() => toggleSelect()}>
      {ingredient.name}
    </Container>
  )
}

export const ProductIngredient = (props) => {
  const productIngredientProps = {
    ...props,
    UIComponent: ProductIngredientUI
  }

  return (
    <ProductIngredientController {...productIngredientProps} />
  )
}
