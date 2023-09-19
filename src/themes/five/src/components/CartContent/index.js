import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useEvent, useSession } from 'ordering-components'
import { BackToMenuButton, Container, NotCarts, NotCartsPFChangs, Title } from './styles'

import { Cart } from '../Cart'
import { Cart as CartPFChangs } from '../Cart/layouts/pfchangs'
import { Button } from '../../styles/Buttons'

export const CartContent = (props) => {
  const {
    carts,
    isOrderStateCarts,
    isCartPopover,
    isForceOpenCart,
    setPreorderBusiness,
    isOpenCart,
    isSlideBar,
    onClose
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [events] = useEvent()
  const cartLayout = theme?.layouts?.header?.components?.cart?.components?.layout?.type
  const [{ auth }] = useSession()
  const [currentCartUuid, setCurrentCartUuid] = useState(null)
  const showCarts = cartLayout === 'pfchangs' ? auth && isOrderStateCarts && carts?.length > 0 : isOrderStateCarts && carts?.length > 0
  const handleAddProduct = (product, cart) => {
    setCurrentCartUuid(cart?.uuid)
  }

  const handleSetCurrentCartUuid = () => {
    setCurrentCartUuid(null)
  }

  const CartComponents = cartLayout === 'pfchangs'
    ? CartPFChangs
    : Cart

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
        {!isSlideBar && cartLayout !== 'pfchangs' && (
          <Title>{t('YOUR_CART', 'Your cart')}</Title>
        )}
        {showCarts &&
          carts.map(cart => (
            <React.Fragment key={cart.uuid}>
              {cart.products.length > 0 && (
                <CartComponents
                  isCartPending={cart?.status === 2}
                  cart={cart}
                  isCartPopover={isCartPopover}
                  isCheckout={window.location.pathname === `/checkout/${cart?.uuid}` && !isCartPopover}
                  isForceOpenCart={isForceOpenCart}
                  currentCartUuid={currentCartUuid}
                  isProducts={cart.products.length}
                  onClickCheckout={props.onClose}
                  onClose={props.onClose}
                  setPreorderBusiness={setPreorderBusiness}
                  isOpenCart={isOpenCart}
                />
              )}
            </React.Fragment>
          ))}
        {((!carts || carts?.length === 0) || (!auth && cartLayout === 'pfchangs')) && (
          <>
            {cartLayout === 'pfchangs' ? (
              <NotCartsPFChangs>
                <h1>{t('YOUR_CART_IS_EMPTY', 'Your cart is empty')}</h1>
                <h2>{t('GET_STARTED_ADD_TASTY_FOOD', 'Get started and add some tasty food')}</h2>
                <Button color='primary' onClick={onClose}>
                  {t('BACK', 'Back')}
                </Button>
              </NotCartsPFChangs>
            ) : (
              <NotCarts>
                <img src={theme.images?.general?.notFound} alt='Not Found' width='200px' height='122px' loading='lazy' />
                <h1>{t('NO_PRODUCTS_TO_CART', 'You have no products added to the cart')}</h1>
              </NotCarts>
            )}
          </>
        )}
        {(carts?.length > 0 && isSlideBar && (
          <BackToMenuButton onClick={onClose}>
            <p>
              {t('BACK_TO_MENU', 'Back to menu')}
            </p>
          </BackToMenuButton>
        ))}
      </Container>
    </>
  )
}
