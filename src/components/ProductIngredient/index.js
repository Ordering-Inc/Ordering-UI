import React from 'react'
import { ProductIngredient as ProductIngredientController } from 'ordering-components'

import { Container } from './styles'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'

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
          <MdCheckBox />
        ) : (
          <MdCheckBoxOutlineBlank disabled />
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
