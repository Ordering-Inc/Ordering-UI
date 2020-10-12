import React from 'react'
import { ProductOption as ProductOptionController } from 'ordering-components'

import {
  Container,
  WrapHeader,
  Title,
  Flag
} from './styles'

const ProductOptionUI = (props) => {
  const {
    children,
    option
  } = props

  let maxMin = `(Min: ${option.min} / Max: ${option.max})`
  if (option.min === 1 && option.max === 1) {
    maxMin = '(Required)'
  } else if (option.min === 0 && option.max > 0) {
    maxMin = `(Max: ${option.max})`
  } else if (option.min > 0 && option.max === 0) {
    maxMin = `(Min: ${option.min})`
  }

  return (
    <Container>
      <WrapHeader>
        <Title>{option.name}</Title>
        <Flag>{maxMin}</Flag>
      </WrapHeader>
      {children}
    </Container>
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
