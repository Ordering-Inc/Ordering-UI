import React from 'react'
import { ProductOptionSuboption as ProductSubOptionController } from 'ordering-components'
import { IoIosRadioButtonOn, IoIosRadioButtonOff } from 'react-icons/io'
import { RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine } from 'react-icons/ri'
import { BsCircleHalf } from 'react-icons/bs'

import { formatPrice } from '../../utils'

import { Button } from '../../styles/Buttons'

import {
  Container,
  WrapperInfo,
  WrapperActions,
  WrapperIncrementsDecrements
} from './styles'

const ProductOptionSubOptionUI = (props) => {
  const {
    state,
    increment,
    decrement,
    balance,
    option,
    suboption,
    toggleSelect,
    changePosition
  } = props

  const handleIncrement = (e) => {
    e.stopPropagation()
    increment()
  }

  const handleDecrement = (e) => {
    e.stopPropagation()
    decrement()
  }

  const handlePosition = (e, position) => {
    e.stopPropagation()
    changePosition(position)
  }

  const disableIncrement = option.limit_suboptions_by_max ? balance === option.max : state.quantity === suboption.max || (!state.selected && balance === option.max)
  const price = option.with_half_option && suboption.half_price && state.position !== 'whole' ? suboption.half_price : suboption.price
  return (
    <Container onClick={() => toggleSelect()}>
      <WrapperInfo>
        <span>
          {state?.selected ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
        </span>
        <span>
          {suboption.name}
        </span>
      </WrapperInfo>
      <WrapperActions>
        {option.allow_suboption_quantity && (
          <WrapperIncrementsDecrements>
            <Button
              className={`incdec ${state.quantity === 0 ? 'disabled' : ''}`}
              circle
              outline
              onClick={handleDecrement}
              disabled={state.quantity === 0}
            >-
            </Button>
            <span>{state.quantity}</span>
            <Button
              className={`incdec ${disableIncrement ? 'disabled' : ''}`}
              circle
              outline
              onClick={handleIncrement}
              disabled={disableIncrement}
            >+
            </Button>
          </WrapperIncrementsDecrements>
        )}
        {option.with_half_option && (
          <div>
            <span onClick={(e) => handlePosition(e, 'left')} disabled={!state.selected || state.position === 'left'}>
              {state.selected && state.position === 'left' ? (
                <BsCircleHalf className='reverse' />
              ) : (
                <RiCheckboxBlankCircleLine />
              )}
            </span>
            <span onClick={(e) => handlePosition(e, 'whole')} disabled={!state.selected || state.position === 'whole'}>
              {state.selected && state.position === 'whole' ? (
                <RiCheckboxBlankCircleFill />
              ) : (
                <RiCheckboxBlankCircleLine />
              )}
            </span>
            <span onClick={(e) => handlePosition(e, 'right')} disabled={!state.selected || state.position === 'right'}>
              {state.selected && state.position === 'right' ? (
                <BsCircleHalf />
              ) : (
                <RiCheckboxBlankCircleLine />
              )}
            </span>
          </div>
        )}
        <div>
          <span>+ {formatPrice(price)}</span>
        </div>
      </WrapperActions>
    </Container>
  )
}

export const ProductOptionSubOption = (props) => {
  const productOptionSubOptionProps = {
    ...props,
    UIComponent: ProductOptionSubOptionUI
  }

  return (
    <ProductSubOptionController {...productOptionSubOptionProps} />
  )
}
