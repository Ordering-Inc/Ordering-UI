import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useEvent, useConfig, useOrder, useUtils } from 'ordering-components'
import { Container, MultiCartPriceContainer, NotCarts, Title, WrapperContainer } from './styles'

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
  const [{ parsePrice }] = useUtils()
  const [{ configs }] = useConfig()

  const [currentCartUuid, setCurrentCartUuid] = useState(null)
  const checkoutMultiBusinessEnabled = configs?.checkout_multi_business_enabled?.value === '1'

  const totalCartsPrice = carts?.length && carts.reduce((total, cart) => { return total + cart?.total }, 0)
  const totalCartsFee = carts?.length && carts
    ?.filter((cart) => cart?.status !== 1 && cart?.valid)
    ?.reduce((total, cart) => { return total + (cart?.delivery_price_with_discount) }, 0)

  const handleAddProduct = (product, cart) => {
    setCurrentCartUuid(cart?.uuid)
  }

  const handleSetCurrentCartUuid = () => {
    setCurrentCartUuid(null)
    props.onClose && props.onClose()
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
    <>
      <Container>
        {!isSlideBar && (
          <WrapperContainer>
            <Title>{t('YOUR_CART', 'Your cart')}</Title>
            {checkoutMultiBusinessEnabled && carts?.length > 0 && (
              <Button onClick={handleClickCheckout} color='primary'>{t('CHECKOUT', 'Checkout')}</Button>
            )}
          </WrapperContainer>
        )}
        {isOrderStateCarts && carts?.length > 0 && (
          <>
            {carts.map(cart => (
              <React.Fragment key={cart.uuid}>
                {cart.products.length > 0 && (
                  <Cart
                    cart={cart}
                    isCartPending={cart?.status === 2}
                    isOpenCart={isOpenCart}
                    isCartPopover={isCartPopover}
                    isCheckout={window.location.pathname === `/checkout/${cart?.uuid}` && !isCartPopover}
                    isForceOpenCart={isForceOpenCart}
                    currentCartUuid={currentCartUuid}
                    isProducts={cart.products.length}
                    onClickCheckout={props.onClose}
                    setPreorderBusiness={setPreorderBusiness}
                    businessConfigs={cart?.business?.configs}
                    hideCouponInput={configs?.multi_business_checkout_coupon_input_style?.value === 'group'}
                    hideDeliveryFee={configs?.multi_business_checkout_show_combined_delivery_fee?.value === '1'}
                    hideDriverTip={configs?.multi_business_checkout_show_combined_driver_tip?.value === '1'}
                  />
                )}
              </React.Fragment>
            ))}
            {checkoutMultiBusinessEnabled && !!carts.length && (
              <MultiCartPriceContainer>
                {!!totalCartsFee &&
                  configs?.multi_business_checkout_show_combined_delivery_fee?.value === '1' &&
                  (
                    <span>
                      <p>{t('TOTAL_DELIVERY_FEE', 'Total delivery fee')}</p>
                      <p>{parsePrice(totalCartsFee)}</p>
                    </span>
                  )}
                {carts.reduce((sum, cart) => sum + cart?.driver_tip, 0) > 0 &&
                  configs?.multi_business_checkout_show_combined_driver_tip?.value === '1' &&
                  (
                    <span>
                      <p>{t('DRIVER_TIP', 'Driver tip')}</p>
                      <p>{parsePrice(carts.reduce((sum, cart) => sum + cart?.driver_tip, 0))}</p>
                    </span>
                  )}
                <div>
                  <h4>{t('TOTAL_FOR_ALL_CARTS', 'Total for all Carts')}</h4>
                  <h4>{parsePrice(totalCartsPrice)}</h4>
                </div>
                <span>
                  <p>{t('CART_GROUP_MESSAGE_ALERT', 'Discounts may be applied at the time of payment for this group.')}</p>
                </span>
              </MultiCartPriceContainer>
            )}
          </>
        )}
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
