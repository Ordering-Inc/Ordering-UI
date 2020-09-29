import React, { useEffect, useState } from 'react'
import { VscWarning } from 'react-icons/vsc'
import { Checkout as CheckoutController, useOrder, useSession, useApi, useLanguage } from 'ordering-components'

import {
  Container,
  WrappContainer,
  UserDetailsContainer,
  PaymentMethodContainer,
  DriverTipContainer,
  CartContainer,
  WrapperPlaceOrderButton,
  WarningMessage
} from './styles'

import { Button } from '../../styles/Buttons'

import { AddressDetails } from '../AddressDetails'
import { UserDetails } from '../UserDetails'
import { PaymentOptions } from '../PaymentOptions'
import { DriverTips } from '../DriverTips'
import { Cart } from '../Cart'

const CheckoutUI = (props) => {
  const {
    cart,
    placing,
    businessId,
    businessDetails,
    paymethodSelected,
    handlePaymethodChange,
    handlerClickPlaceOrder
  } = props

  const [{ options }] = useOrder()
  const [, t] = useLanguage()

  return (
    <Container>
      {businessId && (
        <WrappContainer>
          {cart?.status === 2 && (
            <WarningMessage>
              <VscWarning />
              <h1>
                {t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page')}
              </h1>
            </WarningMessage>
          )}
          <AddressDetails
            businessId={businessId}
            apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
          />
          <UserDetailsContainer>
            <div className='user'>
              <UserDetails
                cartStatus={cart?.status}
                businessId={businessId}
                useValidationFields
                useDefualtSessionManager
                useSessionUser
              />
            </div>
            <div className='business'>
              <h1>Business Details</h1>
              <div>
                <p>{businessDetails?.business?.name || '-'}</p>
                <p>{businessDetails?.business?.email || '-'}</p>
                <p>{businessDetails?.business?.cellphone || '-'}</p>
                <p>{businessDetails?.business?.address || '-'}</p>
              </div>
              {businessDetails?.error && businessDetails?.error?.length > 0 && (
                businessDetails?.error.map((e, i) => (
                  <p key={i}>ERROR: [{e}]</p>
                ))
              )}
            </div>
          </UserDetailsContainer>

          {cart?.status !== 2 && (
            <PaymentMethodContainer>
              <h1>Payment Method</h1>
              {businessDetails.business && (
                <PaymentOptions
                  businessId={businessId}
                  paymethods={businessDetails?.business?.paymethods}
                  onPaymentChange={handlePaymethodChange}
                />
              )}
            </PaymentMethodContainer>
          )}

          {options.type === 1 && cart?.status !== 2 && (
            <DriverTipContainer>
              <h1>Driver Tip</h1>
              <DriverTips
                businessId={businessId}
                driverTipsOptions={[0, 10, 15, 20, 25]}
                useOrderContext
              />
            </DriverTipContainer>
          )}

          {cart && (
            <CartContainer>
              <h1>Your Order</h1>
              <Cart
                cart={cart}
                isProducts={cart?.products?.length || 0}
              />
            </CartContainer>
          )}

          {cart?.status !== 2 && (
            <WrapperPlaceOrderButton>
              <Button
                color='primary'
                disabled={!cart?.valid || !paymethodSelected || placing}
                onClick={() => handlerClickPlaceOrder()}
              >
                {placing ? 'Placing...' : 'Place Order'}
              </Button>
            </WrapperPlaceOrderButton>
          )}
        </WrappContainer>
      )}
    </Container>
  )
}

export const Checkout = (props) => {
  const {
    query,
    cartUuid,
    handleOrderRedirect
  } = props

  const [{ carts }, { confirmCart }] = useOrder()
  const [{ token }] = useSession()
  const [ordering] = useApi()

  const [cartState, setCartState] = useState({ loading: false, error: null, cart: null })
  const [businessId, setBusinessId] = useState(null)

  const getOrder = async (cartId) => {
    setCartState({ ...cartState, loading: true })
    const response = await fetch(`${ordering.root}/carts/${cartId}`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } })
    const { error, result } = await response.json()

    if (result.status === 1 && result.order?.uuid) {
      handleOrderRedirect(result.order.uuid)
      setCartState({ ...cartState, loading: false })
    } else if (result.status === 2 && result.paymethod_data.gateway === 'stripe_redirect' && query.get('payment_intent')) {
      try {
        await confirmCart(cartUuid)
        handleOrderRedirect(result.order.uuid)
      } catch (error) {
        console.log(error)
      }
    } else if (result.status === 4) {
      alert('The payment has not been successful, try again!')
    } else {
      setCartState({
        ...cartState,
        loading: false,
        cart: result
      })
      setBusinessId(result.business_id)
    }
  }

  useEffect(() => {
    if (token && cartUuid && !cartState.cart) {
      getOrder(cartUuid)
    }
  }, [token, cartUuid])

  useEffect(() => {
    setBusinessId(
      Object.values(carts).find(cart => cart.uuid === cartUuid)?.business_id
    )
  }, [carts])

  const checkoutProps = {
    ...props,
    UIComponent: CheckoutUI,
    businessId
  }
  return (
    <CheckoutController {...checkoutProps} />
  )
}
