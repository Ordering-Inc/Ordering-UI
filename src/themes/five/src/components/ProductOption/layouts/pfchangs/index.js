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
    option,
    pfchangs
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
        <WrapHeader pfchangs={pfchangs}>
          <TitleContainer pfchangs={pfchangs}>
            {option.image && option.image !== '-' && (
              <OptionThumbnail src={option.image} />
            )}
            <Title><span>{option.name}</span></Title>
            {option?.min > 0 && (
              <Flag required={option?.min > 0}>{t('REQUIRED', 'Required')}</Flag>
            )}
          </TitleContainer>
          {!(option.min === 1 && option.max === 1) ? (
            <Flag>{maxMin}</Flag>
          ) : (
            <Flag>{t('SELECT_1_OPTION', 'Select 1 option')}</Flag>
          )}
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
