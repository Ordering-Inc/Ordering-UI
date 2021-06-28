import React from 'react'

/**
 * Component to render product option suboption
 */
export const ProductOptionSuboption = (props) => {
  const {
    UIComponent,
    balance,
    option,
    suboption,
    onChange
  } = props

  /**
   * Predefine default values for suboption state
   */
  const selected = props.state.selected || props.state.quantity > 0
  let quantity = 0
  if (selected && props.state.quantity && props.state.quantity > 0) {
    quantity = props.state.quantity
  } else if (selected) {
    quantity = 1
  }
  const position = props.state.position || 'whole'
  const price = option.with_half_option && suboption.half_price && position !== 'whole' ? suboption.half_price : suboption.price

  /**
   * Set current state
   */
  const state = { id: suboption.id, name: suboption.name, price, selected, quantity, position, total: price * quantity }

  /**
   * Run onChange function with new state
   * @param {object} newState State with changes
   */
  const changeState = (newState) => {
    onChange && onChange(newState, suboption, option)
  }

  /**
   * Select/unselect the suboption
   * @param {boolean} isSelected native prop
   */
  const toggleSelect = () => {
    console.log('state: ', state);
    console.log('option: ', option);
    console.log('balance: ', balance);
    console.log('condition: ', !state.selected && option.limit_suboptions_by_max && balance === option.max);
    if (!state.selected && option.limit_suboptions_by_max && balance === option.max) {
      return
    }
    changeState({
      ...state,
      quantity: state.selected ? 0 : 1,
      selected: !state.selected
    })
  }

  /**
   * Increment suboption quantity
   */
  const increment = () => {
    if (option.limit_suboptions_by_max && balance === option.max) {
      return
    }
    if (!option.limit_suboptions_by_max && state.quantity === suboption.max) {
      return
    }
    changeState({
      ...state,
      selected: state.quantity === 0 ? true : state.selected,
      quantity: state.quantity + 1,
      total: state.price * (state.quantity + 1)
    })
  }

  /**
   * Decrement suboption quantity
   */
  const decrement = () => {
    if (state.quantity === 0) {
      return
    }
    changeState({
      ...state,
      selected: state.quantity === 1 ? false : state.selected,
      quantity: state.quantity - 1,
      total: state.price * (state.quantity - 1)
    })
  }

  /**
   * Change position of the suboption
   * @param {string} position Position of the suboption
   */
  const changePosition = (position) => {
    const price = option.with_half_option && suboption.half_price && position !== 'whole' ? suboption.half_price : suboption.price
    changeState({
      ...state,
      position,
      price,
      total: price * state.quantity
    })
  }

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            state={state}
            increment={increment}
            decrement={decrement}
            changePosition={changePosition}
            toggleSelect={toggleSelect}
          />
        )
      }
    </>
  )
}

ProductOptionSuboption.defaultProps = {
  state: {},
  balance: 0
}
