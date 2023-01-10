import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useEvent, useConfig, useOrder } from 'ordering-components'
import { Container, NotCarts, Title, WrapperContainer } from './styles'

import { Cart } from '../Cart'
import { Button } from '../../styles/Buttons'

export const CartContent = (props) => {
  const {
    carts,
    isOrderStateCarts,
    isCartPopover,
    isForceOpenCart,
    setPreorderBusiness,
    isOpenCart,
    isSlideBar
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [events] = useEvent()
  const [orderState] = useOrder()
  const [{ configs }] = useConfig()

  const [currentCartUuid, setCurrentCartUuid] = useState(null)
  const checkoutMultiBusinessEnabled = configs?.checkout_multi_business_enabled?.value === '1'
  const openCarts = (Object.values(orderState?.carts)?.filter(cart => cart?.products &&
    cart?.products?.length &&
    cart?.status !== 2 &&
    cart?.valid_schedule &&
    cart?.valid_products &&
    cart?.valid_address &&
    cart?.valid_maximum &&
    cart?.valid_minimum &&
    !cart?.wallets
  ) || null) || []

  const handleAddProduct = (product, cart) => {
    setCurrentCartUuid(cart?.uuid)
  }

  const handleSetCurrentCartUuid = () => {
    setCurrentCartUuid(null)
    props.onClose && props.onClose()
  }

  const handleClickCheckout = () => {
    const cart = carts.find(cart => cart?.group?.uuid)
    const cartSelectedHasGroup = cart?.group?.uuid
    const cartFilterValidation = cart => cart?.valid && cart?.status !== 2
    const cartsGroupLength = cartSelectedHasGroup ? Object.values(orderState.carts).filter(_cart => _cart?.group?.uuid === cartSelectedHasGroup && cartFilterValidation(_cart))?.length : 0
    if (cartsGroupLength > 1 && checkoutMultiBusinessEnabled) {
      events.emit('go_to_page', { page: 'multi_checkout', params: { cartUuid: cart?.group?.uuid } })
      events.emit('cart_popover_closed')
      return
    }
    const cartGroupsCount = {}
    // eslint-disable-next-line no-unused-expressions
    Object.values(orderState.carts).filter(_cart => cartFilterValidation(_cart))?.forEach(_cart => {
      if (cartGroupsCount[_cart?.group?.uuid]) {
        cartGroupsCount[_cart?.group?.uuid] += 1
      } else {
        cartGroupsCount[_cart?.group?.uuid] = 1
      }
    })
    let groupForTheCart
    const groupForAddCartArray = Object.keys(cartGroupsCount).filter(cartGroupUuid => cartGroupsCount[cartGroupUuid] > 0 && cartGroupsCount[cartGroupUuid] < 5)
    const max = Math.max(...groupForAddCartArray.map(uuid => cartGroupsCount[uuid]))
    const indexes = groupForAddCartArray.filter(uuid => cartGroupsCount[uuid] === max)
    if (indexes?.length > 1) {
      groupForTheCart = indexes.find(uuid => uuid !== 'undefined')
    } else {
      groupForTheCart = indexes[0]
    }

    if (checkoutMultiBusinessEnabled && openCarts?.length > 1 && groupForTheCart) {
      events.emit('go_to_page', { page: 'multi_cart', params: { cartUuid: cart?.uuid ?? openCarts[0]?.uuid, cartGroup: groupForTheCart === 'undefined' ? 'create' : groupForTheCart } })
    } else {
      events.emit('go_to_page', { page: 'checkout', params: { cartUuid: cart?.uuid } })
    }
    events.emit('cart_popover_closed')
    props.onClose && props.onClose()
  }

  useEffect(() => {
    events.on('cart_popover_closed', handleSetCurrentCartUuid)
    events.on('cart_product_added', handleAddProduct)
    return () => {
      events.off('cart_popover_closed', handleSetCurrentCartUuid)
      events.off('cart_product_added', handleAddProduct)
    }
  }, [])

  return (
    <>
      <Container>
        {!isSlideBar && (
          <WrapperContainer>
            <Title>{t('YOUR_CART', 'Your cart')}</Title>
            {checkoutMultiBusinessEnabled && (
              <Button onClick={handleClickCheckout} color='primary'>{t('CHECKOUT', 'Checkout')}</Button>
            )}
          </WrapperContainer>
        )}
        {isOrderStateCarts && carts?.length > 0 &&
          carts.map(cart => (
            <React.Fragment key={cart.uuid}>
              {cart.products.length > 0 && (
                <Cart
                  isCartPending={cart?.status === 2}
                  cart={cart}
                  isCartPopover={isCartPopover}
                  isCheckout={window.location.pathname === `/checkout/${cart?.uuid}` && !isCartPopover}
                  isForceOpenCart={isForceOpenCart}
                  currentCartUuid={currentCartUuid}
                  isProducts={cart.products.length}
                  onClickCheckout={props.onClose}
                  setPreorderBusiness={setPreorderBusiness}
                  isOpenCart={isOpenCart}
                />
              )}
            </React.Fragment>
          ))}
        {(!carts || carts?.length === 0) && (
          <NotCarts>
            <img src={theme.images?.general?.notFound} alt='Not Found' width='200px' height='122px' loading='lazy' />
            <h1>{t('NO_PRODUCTS_TO_CART', 'You have no products added to the cart')}</h1>
          </NotCarts>
        )}
      </Container>
    </>
  )
}
