import React, { useEffect, useRef } from 'react'
import { IoIosBasket } from 'react-icons/io'
import { usePopper } from 'react-popper'
import {
  HeaderItem,
  PopoverBody,
  PopoverArrow,
  NotFound
} from './styles'
import { useOrder, useLanguage } from 'ordering-components'

import { Cart } from '../Cart'

export const CartPopover = (props) => {
  const { open } = props
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()
  const popper = usePopper(referenceElement.current, popperElement.current, {
    placement: 'auto',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement.current } },
      {
        name: 'offset',
        options: {
          offset: [0, 12]
        }
      }
    ]
  })

  const { styles, attributes, forceUpdate } = popper

  useEffect(() => {
    forceUpdate && forceUpdate()
  }, [open, orderState])

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    if (outsidePopover && outsidePopoverMenu) {
      props.onClose && props.onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    return () => window.removeEventListener('mouseup', handleClickOutside)
  }, [open])

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', width: '450px' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderItem ref={referenceElement} onClick={props.onClick}>
        <span>
          <IoIosBasket />
          {Object.keys(orderState.carts).length > 0 && <p>{Object.keys(orderState.carts).length}</p>}
        </span>
      </HeaderItem>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        <div>
          {orderState.carts && Object.keys(orderState.carts).length > 0 &&
            Object.values(orderState.carts).map(cart => (
              <Cart
                key={cart.uuid}
                cart={cart}
                isProducts={cart.products.length}
                onClickCheckout={props.onClose}
              />
            ))}
          {Object.keys(orderState.carts).length === 0 && <NotFound>{t('CART_ERROR', 'You don\'t have cars available')}</NotFound>}
        </div>
        <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
      </PopoverBody>
    </div>
  )
}
