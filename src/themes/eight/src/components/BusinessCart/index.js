import React from 'react'
import { useOrder, useLanguage } from 'ordering-components'
import { NavBar } from '../NavBar'
import { Cart } from '../Cart'
import { WrapCart } from './styles'

export const BusinessCart = (props) => {
  const {
    slug,
    onBusinessRedirect
  } = props

  const [, t] = useLanguage()
  const [{ carts }] = useOrder()
  const currentCart = Object.values(carts).find(cart => cart?.business?.slug === slug) ?? {}

  return (
    <>
      <NavBar
        title={t('LOGIN_LINK_MY_ORDERS', 'My Orders')}
      />
      {currentCart?.products?.length > 0 && (
        <WrapCart
          isExistBottom={document.getElementById('page-footer')}
        >
          <Cart
            isForceOpenCart
            isCustomMode
            cart={currentCart}
            isCartPending={currentCart?.status === 2}
            isProducts={currentCart.products.length}
            handleGoBack={() => onBusinessRedirect(slug)}
          />
        </WrapCart>
      )}
    </>
  )
}
