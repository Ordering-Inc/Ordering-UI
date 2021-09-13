import React from 'react'
import { ReviewProduct as ReviewProductController } from './naked'
import {
  ReviewProductContainer
} from './styles'

const ReviewProductUI = (props) => {
  return (
    <ReviewProductContainer>
      ReviewProduct
    </ReviewProductContainer>
  )
}

export const ReviewProduct = (props) => {
  const reviewProductProps = {
    ...props,
    UIComponent: ReviewProductUI
  }
  return <ReviewProductController {...reviewProductProps} />
}
