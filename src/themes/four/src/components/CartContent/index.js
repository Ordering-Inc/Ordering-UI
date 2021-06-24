import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useEvent } from 'ordering-components'
import { Container, NotCarts, Divider } from './styles'

import { Cart } from '../Cart'
import { Button } from '../../styles/Buttons'

export const CartContent = (props) => {
  const {
    carts,
    isOrderStateCarts,
    isCartPopover,
    isForceOpenCart
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

  const handleGoToPage = (data) => {
    props.onClose()
    events.emit('go_to_page', data)
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
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))
      }
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))
      }
      <Container>
        {isOrderStateCarts && carts?.length > 0 &&
          carts.map(cart => (
            <React.Fragment key={cart.uuid}>
              {cart.products.length > 0 && (
                <>
                  <Divider />
                  <Cart
                    isCartPending={cart?.status === 2}
                    cart={cart}
                    isCartPopover={isCartPopover}
                    isCheckout={window.location.pathname === `/checkout/${cart?.uuid}`}
                    isForceOpenCart={isForceOpenCart}
                    currentCartUuid={currentCartUuid}
                    isProducts={cart.products.length}
                    onClickCheckout={props.onClose}
                  />
                </>
              )}
            </React.Fragment>
          ))}
        {(!carts || carts?.length === 0) && (
          <NotCarts>
            <img src={theme.images?.general?.emptyCart} alt='Empty cart' width='150px' loading='lazy' />
            <h1>{t('CARTS_NOT_FOUND', 'You don\'t have carts available')}</h1>
            <Button
              color='primary'
              onClick={() => handleGoToPage({ page: 'search' })}
            >
              {t('SHOP_NOW', 'Shop now')}
            </Button>
          </NotCarts>
        )}
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))
      }
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))
      }
    </>
  )
}
