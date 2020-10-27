import React from 'react'
import { ProductOptionSuboption as ProductSubOptionController, useConfig } from 'ordering-components'
import BsCircleFill from '@meronex/icons/bs/BsCircleFill'
import BsCircleHalf from '@meronex/icons/bs/BsCircleHalf'
import BsDashCircle from '@meronex/icons/bs/BsDashCircle'
import BsPlusCircle from '@meronex/icons/bs/BsPlusCircle'

import {
  Container,
  SuboptionPrice,
  QuantityControl,
  PositionControl,
  IconControl,
  Text
} from './styles'
import MdCheckBox from '@meronex/icons/md/MdCheckBox'
import MdCheckBoxOutlineBlank from '@meronex/icons/md/MdCheckBoxOutlineBlank'
import MdRadioButtonChecked from '@meronex/icons/md/MdRadioButtonChecked'
import MdRadioButtonUnchecked from '@meronex/icons/md/MdRadioButtonUnchecked'

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

  const [, { parsePrice }] = useConfig()

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
      <IconControl>
        {option.max > 1 ? (
          state?.selected ? (
            <MdCheckBox />
          ) : (
            <MdCheckBoxOutlineBlank disabled />
          )
        ) : (
          state?.selected ? (
            <MdRadioButtonChecked />
          ) : (
            <MdRadioButtonUnchecked disabled />
          )
        )}
      </IconControl>
      <Text>{suboption.name}</Text>
      {option.allow_suboption_quantity && (
        <QuantityControl>
          <BsDashCircle
            disabled={state.quantity === 0}
            onClick={handleDecrement}
          />
          {state.quantity}
          <BsPlusCircle
            disabled={disableIncrement}
            onClick={handleIncrement}
          />
        </QuantityControl>
      )}
      {
        option.with_half_option && (
          <PositionControl>
            <BsCircleHalf
              className={['reverse', state.selected && state.position === 'left' ? 'selected' : null].filter(classname => classname).join(' ')}
              onClick={(e) => handlePosition(e, 'left')}
            />
            <BsCircleFill
              className={[state.selected && state.position === 'whole' ? 'selected' : null].filter(classname => classname).join(' ')}
              onClick={(e) => handlePosition(e, 'whole')}
            />
            <BsCircleHalf
              className={[state.selected && state.position === 'right' ? 'selected' : null].filter(classname => classname).join(' ')}
              onClick={(e) => handlePosition(e, 'right')}
            />
          </PositionControl>
        )
      }
      <SuboptionPrice>
        + {parsePrice(price)}
      </SuboptionPrice>
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
