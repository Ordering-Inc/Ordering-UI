import React, { useState, useEffect, useRef } from 'react'
import {
  ProductOptionSuboption as ProductSubOptionController,
  useUtils,
  useLanguage
} from 'ordering-components'
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
  Text,
  SubOptionThumbnail,
  LeftOptionContainer,
  RightOptionContainer
} from './styles'
import MdCheckBox from '@meronex/icons/md/MdCheckBox'
import MdCheckBoxOutlineBlank from '@meronex/icons/md/MdCheckBoxOutlineBlank'
import RiRadioButtonFill from '@meronex/icons/ri/RiRadioButtonFill'
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
    changePosition,
    isSoldOut,
    setIsScrollAvailable,
    onChange,
    pizzaType,
    productCart
  } = props

  const disableIncrement = option?.limit_suboptions_by_max ? (balance === option?.max || state.quantity === suboption.max) : state.quantity === suboption?.max || (!state.selected && balance === option?.max)
  const price = option?.with_half_option && suboption?.half_price && state.position !== 'whole' ? suboption?.half_price : suboption?.price
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [showMessage, setShowMessage] = useState(false)
  const dirtyRef = useRef(null)

  const handleIncrement = (e) => {
    e.stopPropagation()
    increment()
  }

  const handleDecrement = (e) => {
    e.stopPropagation()
    decrement()
  }

  const handlePosition = (e, position) => {
    e.stopPropagation && e.stopPropagation()
    changePosition(position)
  }

  const handleSuboptionClick = () => {
    dirtyRef.current = true
    toggleSelect()
    if (balance === option?.max && option?.suboptions?.length > balance && !(option?.min === 1 && option?.max === 1) && !state.selected) {
      setShowMessage(true)
    }
  }

  useEffect(() => {
    if (!(balance === option?.max && option?.suboptions?.length > balance && !(option?.min === 1 && option?.max === 1) && !state.selected)) {
      setShowMessage(false)
    }
  }, [balance])

  useEffect(() => {
    if (balance === option?.max && state?.selected && dirtyRef) {
      if (dirtyRef?.current !== null) {
        dirtyRef.current = false
        setIsScrollAvailable(true)
      }
    }
  }, [state?.selected])

  useEffect(() => {
    if (dirtyRef?.current || !suboption?.preselected || !option?.respect_to) return
    const newState = { ...state, selected: suboption?.preselected, quantity: state.selected ? 0 : 1 }
    onChange(newState, suboption, option)
  }, [suboption, dirtyRef, option])

  useEffect(() => {
    if (pizzaType.type?.toLowerCase?.() === 'mitad y mitad' && option?.with_half_option) {
      const option = Object.values(productCart?.options || {})?.find(option => option?.name?.toLowerCase?.() === 'elige tus ingredientes' && Object.values(option?.suboptions)?.length > 0)
      const alreadyRight = Object.values(option?.suboptions || {})?.some(suboption => suboption?.position === 'right')
      if (pizzaType.right && !alreadyRight) {
        if (state?.selected) {
          handlePosition({}, 'right')
        }
      } else if (pizzaType.left || alreadyRight) {
        if (state?.selected) {
          handlePosition({}, 'left')
        }
      }
    }
  }, [pizzaType.type, state?.selected, suboption?.id])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container onClick={() => handleSuboptionClick()}>
        <LeftOptionContainer>
          <IconControl>
            {((option?.min === 0 && option?.max === 1) || option?.max > 1) ? (
              state?.selected ? (
                <MdCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank disabled />
              )
            ) : (
              state?.selected ? (
                <RiRadioButtonFill />
              ) : (
                <MdRadioButtonUnchecked disabled />
              )
            )}
          </IconControl>
          {suboption.image && suboption.image !== '-' && (
            <SubOptionThumbnail src={suboption.image} />
          )}
          <Text>
            <div>{suboption?.name}</div>
          </Text>
        </LeftOptionContainer>
        <RightOptionContainer>

          <QuantityControl>
            {option?.allow_suboption_quantity && state?.selected && (
              <>
                <BsDashCircle
                  disabled={state.quantity === 0 || isSoldOut}
                  onClick={handleDecrement}
                />
                {state.quantity}
                <BsPlusCircle
                  disabled={disableIncrement || isSoldOut}
                  onClick={handleIncrement}
                />
              </>
            )}
          </QuantityControl>
          <PositionControl>
            {
              option?.with_half_option && state?.selected && (
                <>
                  <BsCircleHalf
                    className={[
                      pizzaType.center ? 'disabled' : '',
                      pizzaType.type === 'Mitad y mitad' && 'disable-clicks',
                      'reverse',
                      state.selected && state.position === 'left' ? 'selected' : null].filter(classname => classname).join(' ')}
                    onClick={(e) => handlePosition(e, 'left')}
                  />
                  <BsCircleFill
                    className={[
                      !pizzaType.center && pizzaType.type === 'Mitad y mitad' ? 'disabled' : '',
                      state.selected && state.position === 'whole' ? 'selected' : null].filter(classname => classname).join(' ')}
                    onClick={(e) => handlePosition(e, 'whole')}
                  />
                  <BsCircleHalf
                    className={[
                      pizzaType.center ? 'disabled' : '',
                      pizzaType.type === 'Mitad y mitad' && 'disable-clicks',
                      state.selected && state.position === 'right' ? 'selected' : null].filter(classname => classname).join(' ')}
                    onClick={(e) => handlePosition(e, 'right')}
                  />
                </>
              )
            }
          </PositionControl>
        </RightOptionContainer>
        <SuboptionPrice>
          {price > 0 && (
            <>+ {parsePrice(price)}</>
          )}
        </SuboptionPrice>
      </Container>
      {showMessage && (
        <Text noMargin>
          <span>{`${t('OPTIONS_MAX_LIMIT', 'Maximum options to choose')}: ${option?.max}`}</span>
        </Text>
      )}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
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
