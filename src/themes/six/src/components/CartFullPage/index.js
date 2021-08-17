import React, { useEffect, useState } from 'react'
import { CartInfo } from '../CartInfo'
import { Cart } from '../Cart'
import { useEvent } from 'ordering-components'
import {
  Container,
  Layout,
  LeftPanel,
  RightPanel
} from './styles'
export const CartFullPage = (props) => {
  const {
    goBack,
    currentCart,
    business,
    individualBusinessCart
  } = props
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
        <Layout className='fullpage-layout'>
          <LeftPanel>
            <CartInfo handleGoBackPage={goBack} cart={currentCart} businessName={business.name} />
          </LeftPanel>
          <RightPanel>
            <Cart
              isCartPending={currentCart?.status === 2}
              cart={currentCart}
              isCheckout={window.location.pathname === `/checkout/${currentCart?.uuid}`}
              isForceOpenCart='true'
              currentCartUuid={currentCartUuid}
              isProducts={currentCart.products?.length}
              onClickCheckout={props.onClose}
              individualBusinessCart={individualBusinessCart}
            />
          </RightPanel>
        </Layout>
      </Container>
    </>
  )
}
