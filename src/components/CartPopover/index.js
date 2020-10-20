import React, { useEffect, useRef } from 'react'
import { IoIosBasket } from 'react-icons/io'
import { usePopper } from 'react-popper'
import {
  HeaderItem,
  PopoverBody,
  PopoverArrow,
  WrapperCarts,
  WrappNotCarts
} from './styles'
import { useOrder, useLanguage } from 'ordering-components'
import { useLocation } from 'react-router-dom'
import notFound from '../../../template/assets/not-found.svg'

import { Cart } from '../Cart'

export const CartPopover = (props) => {
  const location = useLocation()
  const { open, auth } = props
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

  const cartsWithProducts = Object.values(orderState?.carts).filter(cart => cart.products.length > 0)

  useEffect(() => {
    forceUpdate && forceUpdate()
  }, [open, orderState])

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    const outsideModal = !window.document.getElementById('app-modals') || !window.document.getElementById('app-modals').contains(e.target)
    if (outsidePopover && outsidePopoverMenu && outsideModal) {
      props.onClose && props.onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    return () => window.removeEventListener('mouseup', handleClickOutside)
  }, [open])

  useEffect(() => {
    props.onClose()
  }, [auth])

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', width: '450px', maxHeight: '70vh', overflowY: 'auto' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }

  const uuidParams = () => {
    const { pathname } = location
    const splited = pathname.split('/')
    if (splited[1] === 'checkout') {
      return splited[2] && splited[2]
    }
    return 'no-checkout'
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderItem ref={referenceElement} onClick={props.onClick}>
        <span>
          <IoIosBasket />
          {cartsWithProducts.length > 0 && <p>{cartsWithProducts.length}</p>}
        </span>
      </HeaderItem>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        <WrapperCarts>
          {orderState.carts && cartsWithProducts.length > 0 &&
            cartsWithProducts.map(cart => (
              <React.Fragment key={cart.uuid}>
                {cart.products.length > 0 && (
                  <Cart
                    cart={cart}
                    isProducts={cart.products.length}
                    onClickCheckout={props.onClose}
                    isHideCheckoutButtom={uuidParams() && (uuidParams() !== cart.uuid || uuidParams() === 'no-checkout')}
                  />
                )}
              </React.Fragment>
            ))}
          {cartsWithProducts.length === 0 && (
            <WrappNotCarts>
              <img src={notFound} alt='notFound' />
              <h1>{t('CART_ERROR', 'You don\'t have carts available')}</h1>
            </WrappNotCarts>
          )}
        </WrapperCarts>
        <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
      </PopoverBody>
    </div>
  )
}
