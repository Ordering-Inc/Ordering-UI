import React, { useEffect, useState } from 'react'
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
  const [{ loading, carts }] = useOrder()
  const [isGoBack, setIsGoBack] = useState(false)
  const currentCart = Object.values(carts).find(cart => cart?.business?.slug === slug) ?? {}

  useEffect(() => {
    if (loading || !isGoBack) return
    onBusinessRedirect(slug)
  }, [loading, isGoBack])

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
            handleGoBack={() => setIsGoBack(true)}
          />
        </WrapCart>
      )}
    </>
  )
}
