import React, { useState } from 'react'
import { ProductOption as ProductOptionController, useLanguage } from 'ordering-components'
import HiOutlineChevronDown from '@meronex/icons/hi/HiOutlineChevronDown'
import HiOutlineChevronUp from '@meronex/icons/hi/HiOutlineChevronUp'
import {
  Container,
  WrapHeader,
  Title,
  Flag,
  WrapOptionTitle
} from './styles'
import { WrapButton } from '../ProductForm/styles'

const ProductOptionUI = (props) => {
  const {
    children,
    option
  } = props

  const [, t] = useLanguage()

  const [openOption, setOpenOption] = useState(true)

  let maxMin = `(${t('MIN', 'Min')}: ${option.min} / ${t('MAX', 'Max')}: ${option.max})`
  if (option.min === 1 && option.max === 1) {
    maxMin = t('REQUIRED', 'Required')
  } else if (option.min === 0 && option.max > 0) {
    maxMin = `(${t('MAX', 'Max')}: ${option.max})`
  } else if (option.min > 0 && option.max === 0) {
    maxMin = `(${t('MIN', 'Min')}: ${option.min})`
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <Container>
        <WrapHeader>
          <WrapOptionTitle>
            <Title>{option.name}</Title>
            <Flag>{maxMin}</Flag>
          </WrapOptionTitle>
          <WrapButton onClick={() => setOpenOption(!openOption)}>
            {openOption ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}
          </WrapButton>
        </WrapHeader>
        {openOption && (
          <>
            {children}
          </>
        )}
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
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
