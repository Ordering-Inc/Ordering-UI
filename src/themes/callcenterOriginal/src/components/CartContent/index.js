import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useEvent, useConfig, useOrder } from 'ordering-components'
import { Container, NotCarts, Title, WrapperContainer } from './styles'

import { Cart } from '../../../../five/src/components/Cart'
import { Button } from '../../styles/Buttons'

export const CartContent = (props) => {
  const {
    carts,
    isOpenCart,
    isOrderStateCarts,
    isCartPopover,
    isForceOpenCart,
    setPreorderBusiness
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [events] = useEvent()
  const [orderState] = useOrder()
  const [{ configs }] = useConfig()

  const [currentCartUuid, setCurrentCartUuid] = useState(null)
  const checkoutMultiBusinessEnabled = configs?.checkout_multi_business_enabled?.value === '1'

  const handleAddProduct = (product, cart) => {
    setCurrentCartUuid(cart?.uuid)
  }

  const handleSetCurrentCartUuid = () => {
    setCurrentCartUuid(null)
  }

  const handleClickCheckout = () => {
    const cartsAvailable = Object.values(orderState?.carts)?.filter(cart => cart?.valid && cart?.status !== 2)
    if (cartsAvailable.length === 1) {
      events.emit('go_to_page', { page: 'checkout', params: { cartUuid: cartsAvailable[0]?.uuid } })
    } else {
      const groupKeys = {}
      cartsAvailable.forEach(_cart => {
        groupKeys[_cart?.group?.uuid]
          ? groupKeys[_cart?.group?.uuid] += 1
          : groupKeys[_cart?.group?.uuid ?? 'null'] = 1
      })

      if (
        (Object.keys(groupKeys).length === 1 && Object.keys(groupKeys)[0] === 'null') ||
        Object.keys(groupKeys).length > 1
      ) {
        events.emit('go_to_page', { page: 'multi_cart' })
      } else {
        events.emit('go_to_page', {
          page: 'multi_checkout',
          params: {
            cartUuid: cartsAvailable[0]?.group?.uuid
          }
        })
      }
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
    <Container>
      <WrapperContainer>
        <Title>{t('YOUR_CART', 'Your cart')}</Title>
        {checkoutMultiBusinessEnabled && carts?.length > 0 && (
          <Button onClick={handleClickCheckout} color='primary'>{t('CHECKOUT', 'Checkout')}</Button>
        )}
      </WrapperContainer>
      {isOrderStateCarts && carts?.length > 0 &&
        carts.map(cart => (
          <React.Fragment key={cart.uuid}>
            {cart.products.length > 0 && (
              <Cart
                isCartPending={cart?.status === 2}
                cart={cart}
                isOpenCart={isOpenCart}
                isCartPopover={isCartPopover}
                isCheckout={window.location.pathname === `/checkout/${cart?.uuid}`}
                isForceOpenCart={isForceOpenCart}
                currentCartUuid={currentCartUuid}
                isProducts={cart.products.length}
                onClickCheckout={props.onClose}
                setPreorderBusiness={setPreorderBusiness}
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
  )
}
