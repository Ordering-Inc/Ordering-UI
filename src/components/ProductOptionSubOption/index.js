import React from 'react'
import { ProductOptionSuboption as ProductSubOptionController } from 'ordering-components'

// import {  } from './styles'

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

  const optionStyles = {
    borderBottom: '1px solid #ccc',
    padding: 10,
    backgroundColor: state.selected ? '#eee' : null
  }

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
    <>
      <div onClick={() => toggleSelect()} style={optionStyles}>
        <p style={{ margin: 0 }}>{suboption.id}. {suboption.name} ${price}</p>
        {
          option.allow_suboption_quantity && (
            <div>
              Quantity:
              <button onClick={handleDecrement} disabled={state.quantity === 0}>-</button>
              {state.quantity}
              <button onClick={handleIncrement} disabled={disableIncrement}>+</button>
            </div>
          )
        }
        {
          option.with_half_option && (
            <div>
              Position:
              <button onClick={(e) => handlePosition(e, 'left')} disabled={!state.selected || state.position === 'left'}>Left</button>
              <button onClick={(e) => handlePosition(e, 'whole')} disabled={!state.selected || state.position === 'whole'}>Whole</button>
              <button onClick={(e) => handlePosition(e, 'right')} disabled={!state.selected || state.position === 'right'}>Right</button>
            </div>
          )
        }
      </div>
    </>
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
