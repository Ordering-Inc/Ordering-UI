import React from 'react'
import { ProductOption as ProductOptionController, useLanguage } from 'ordering-components'

import {
  Container,
  WrapHeader,
  TitleContainer,
  Title,
  Flag,
  OptionThumbnail
} from './styles'

const ProductOptionUI = (props) => {
  const {
    children,
    option
  } = props

  const [, t] = useLanguage()

  let maxMin = `${t('MIN', 'Min')}. ${option.min} - ${t('MAX', 'Max')}. ${option.max}`
  if (option.min === 1 && option.max === 1) {
    maxMin = t('REQUIRED', 'Required')
  } else if (option.min === 0 && option.max > 0) {
    maxMin = `${t('MAX', 'Max')}. ${option.max}`
  } else if (option.min > 0 && option.max === 0) {
    maxMin = `${t('MIN', 'Min')}. ${option.min})`
  }

  return (
    <>
      <Container id={`id_${option?.id}`}>
        <WrapHeader>
          <TitleContainer>
            {option.image && option.image !== '-' && (
              <OptionThumbnail src={option.image} />
            )}
            <Title><span>{option.name}</span></Title>
          </TitleContainer>

          <Flag required={option?.min > 0}>{maxMin}</Flag>
        </WrapHeader>
        {children}
      </Container>
    </>
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
