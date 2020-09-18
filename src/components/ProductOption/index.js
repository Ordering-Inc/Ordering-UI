import React from 'react'
import { ProductOption as ProductOptionController } from 'ordering-components'

// import {  } from './styles'

const ProductOptionUI = (props) => {
  const {
    children,
    option,
    error
  } = props

  const optionStyles = {
    padding: 15,
    border: '1px solid',
    borderColor: error ? '#c10000' : '#ccc'
  }

  let maxMin = `(Min: ${option.min} / Max: ${option.max})`
  if (option.min === 1 && option.max === 1) {
    maxMin = '(Required)'
  } else if (option.min === 0 && option.max > 0) {
    maxMin = `(Max: ${option.max})`
  } else if (option.min > 0 && option.max === 0) {
    maxMin = `(Min: ${option.min})`
  }

  return (
    <div style={optionStyles}>
      {option.id}. {option.name} {maxMin}
      {children}
    </div>
  )
}

export const ProductOption = (props) => {
  const productOptionProps = {
    ...props,
    UIComponent: ProductOptionUI
  }

  return (
    <ProductOptionController {...productOptionProps} />
  )
}
