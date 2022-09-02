import React, { useState, useEffect } from 'react'
import {
  ProductOptionSuboption as ProductSubOptionController,
  useUtils,
  useLanguage
} from 'ordering-components'

import {
  Container,
  SuboptionPrice,
  Text
} from './styles'

const ProductOptionSubOptionUI = (props) => {
  const {
    state,
    balance,
    option,
    suboption,
    toggleSelect,
    setIsScrollAvailable
  } = props

  const price = option?.with_half_option && suboption?.half_price && state.position !== 'whole' ? suboption?.half_price : suboption?.price
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [isDirty, setIsDirty] = useState(false)

  const isDisabled = balance === option?.max && option?.suboptions?.length > balance && !(option?.min === 1 && option?.max === 1) && !state.selected
  const handleSuboptionClick = () => {
    toggleSelect()
    setIsDirty(true)
  }

  useEffect(() => {
    if (balance === option?.max && state?.selected && isDirty) {
      setIsDirty(false)
      setIsScrollAvailable(true)
    }
  }, [state?.selected])

  return (
    <Container onClick={() => handleSuboptionClick()} isSelected={state?.selected} disabled={isDisabled}>
      <Text>
        <div>{suboption?.name}</div>
      </Text>
      <SuboptionPrice>
        {price > 0 && (
          <>+ {parsePrice(price)}</>
        )}
      </SuboptionPrice>
    </Container>
  )
}

export const ProductOptionSubOption = (props) => {
  const productOptionSubOptionProps = {
    ...props,
    UIComponent: ProductOptionSubOptionUI,
    isOrigin: true
  }

  return (
    <ProductSubOptionController {...productOptionSubOptionProps} />
  )
}
