import React, { useEffect, useRef } from 'react'
import { usePopper } from 'react-popper'
import {
  HeaderItem,
  PopoverBody,
  PopoverArrow
} from './styles'
import { useOrder } from 'ordering-components'

import CartIcon from '../../../template/assets/cart-icon.svg'
import { Cart } from '../Cart'

export const CartPopover = (props) => {
  const { open } = props
  const [orderState] = useOrder()
  // const [, t] = useLanguage()
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
        <img src={CartIcon} alt='cart' width='28' height='28' />
      </HeaderItem>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        <div>
          {orderState.carts && Object.keys(orderState.carts).length > 0 &&
            Object.values(orderState.carts).map(cart => (
              <Cart
                key={cart.uuid}
                cart={cart}
              />
            ))}
        </div>
        <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
      </PopoverBody>
    </div>
  )
}
