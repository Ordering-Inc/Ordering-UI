import React from 'react'
import { ProductIngredient as ProductIngredientController } from 'ordering-components'
import { BiCheckboxSquare, BiCheckbox } from 'react-icons/bi'

import { Container } from './styles'

const ProductIngredientUI = (props) => {
  const {
    state,
    ingredient,
    toggleSelect
  } = props

  return (
    <Container onClick={() => toggleSelect()}>
      <span>
        {state?.selected ? (
          <BiCheckboxSquare />
        ) : (
          <BiCheckbox />
        )}
      </span>
      <span>
        {ingredient.name}
      </span>
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
