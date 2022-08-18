import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useEvent } from 'ordering-components'
import { Container, NotCarts, Title } from './styles'

import { Cart } from '../Cart'

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

  const [currentCartUuid, setCurrentCartUuid] = useState(null)

  const handleAddProduct = (product, cart) => {
    setCurrentCartUuid(cart?.uuid)
  }

  const handleSetCurrentCartUuid = () => {
    setCurrentCartUuid(null)
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
          <Title>{t('YOUR_CART', 'Your cart')}</Title>
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
