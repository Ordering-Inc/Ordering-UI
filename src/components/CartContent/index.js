import React from 'react'
import { useTheme } from 'styled-components'
import { useLanguage } from 'ordering-components'
import { Container, NotCarts } from './styles'

import { Cart } from '../Cart'

export const CartContent = (props) => {
  const {
    carts,
    isOrderStateCarts
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  return (
    <Container>
      {isOrderStateCarts && carts.length > 0 &&
        carts.map(cart => (
          <React.Fragment key={cart.uuid}>
            {cart.products.length > 0 && (
              <Cart
                cart={cart}
                isProducts={cart.products.length}
                onClickCheckout={props.onClose}
              />
            )}
          </React.Fragment>
        ))}
      {carts.length === 0 && (
        <NotCarts>
          <img src={theme.images?.general?.notFound} alt='Not Found' />
          <h1>{t('CART_ERROR', 'You don\'t have carts available')}</h1>
        </NotCarts>
      )}
    </Container>
  )
}
