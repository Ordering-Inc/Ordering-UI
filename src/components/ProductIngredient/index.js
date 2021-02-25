import React from 'react'
import { ProductIngredient as ProductIngredientController } from 'ordering-components'

import { WrapIngredient } from './styles'
import MdCheckBox from '@meronex/icons/md/MdCheckBox'
import MdCheckBoxOutlineBlank from '@meronex/icons/md/MdCheckBoxOutlineBlank'

const ProductIngredientUI = (props) => {
  const {
    state,
    ingredient,
    toggleSelect
  } = props

  return (
    <>
      <WrapIngredient onClick={() => toggleSelect()}>
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
      </WrapIngredient>
    </>
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
