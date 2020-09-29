import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { Checkout as CheckoutController, useOrder, useSession, useApi } from 'ordering-components'

import {
  Container,
  WrappContainer,
  UserDetailsContainer,
  PaymentMethodContainer,
  DriverTipContainer,
  CartContainer,
  WrapperPlaceOrderButton
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

  return (
    <Container>
      {businessId && (
        <WrappContainer>
          <AddressDetails
            businessId={businessId}
            apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
          />
          <UserDetailsContainer>
            <div className='user'>
              <UserDetails
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

          {options.type === 1 && (
            <DriverTipContainer>
              <h1>Driver Tip</h1>
              <DriverTips
                businessId={businessId}
                driverTipsOptions={[0, 10, 15, 20, 25]}
                useOrderContext
                // handlerChangeDriverOption={(value) => handlerValues({ field: 'driver_tips', value: value / 100 })}
              />
            </DriverTipContainer>
          )}

          <CartContainer>
            <h1>Your Order</h1>
            <Cart
              cart={cart}
              isProducts={cart.products.length}
            />
          </CartContainer>

          <WrapperPlaceOrderButton>
            <Button
              color='primary'
              disabled={!cart?.valid || !paymethodSelected || placing}
              onClick={() => handlerClickPlaceOrder()}
            >
              {placing ? 'Placing...' : 'Place Order'}
            </Button>
          </WrapperPlaceOrderButton>
        </WrappContainer>
      )}
    </Container>
  )
}

export const Checkout = (props) => {
  const { cartUuid } = useParams()
  const [{ carts }, { confirmCart }] = useOrder()
  const [{ token }] = useSession()
  const [ordering] = useApi()
  const [cartState, setCartState] = useState({ loading: false, error: null, cart: null })
  const [businessId, setBusinessId] = useState(null)

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }
  const query = useQuery()

  const actionsBeforePlace = async (paymethod, cart) => {
    switch (paymethod.gateway) {
      case 'stripe':
      case 'stripe_connect':
      case 'stripe_direct': {
        const stripe = await loadStripe(paymethod.paymethod.credentials.publishable)
        await stripe.confirmCardPayment(cart.paymethod_data.result.client_secret)
        return true
      }
      case 'stripe_redirect': {
        const stripe = await loadStripe(paymethod.paymethod.credentials.publishable)
        stripe.confirmBancontactPayment(
          cart.paymethod_data.result.client_secret,
          {
            payment_method: {
              billing_details: cart.paymethod_data.data.owner
            },
            return_url: `http://localhost:8300/checkout/${cartUuid}`
          }
        ).then((result) => {
          console.log(result)
        })
        return true
      }
      default:
        return true
    }
  }

  const getOrder = async (cartId) => {
    setCartState({ ...cartState, loading: true })
    const response = await fetch(`${ordering.root}/carts/${cartId}`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } })
    const { error, result } = await response.json()
    // console.log(error, result)
    if (result.status === 1 && result.order?.uuid) {
      alert(`REDIRECT TO /orders/${result.order.uuid}`)
      setCartState({ ...cartState, loading: false })
    } else if (result.status === 2 && result.paymethod_data.gateway === 'stripe_redirect' && query.get('payment_intent')) {
      console.log('Confirm order')
      // const result = await confirmCart(cartUuid)
      // console.log(result)
    } else {
      setCartState({
        ...cartState,
        loading: false,
        cart: result
      })
    }
  }

  useEffect(() => {
    setBusinessId(
      Object.values(carts).find(cart => cart.uuid === cartUuid)?.business_id
    )
  }, [carts])

  useEffect(() => {
    if (token && cartUuid && !cartState.cart) {
      getOrder(cartUuid)
    }
  }, [token, cartUuid])

  const checkoutProps = {
    ...props,
    UIComponent: CheckoutUI,
    cartUuid,
    businessId,
    actionsBeforePlace,
    onPlaceOrderClick: (data, paymethod, cart) => {
      console.log('onPlaceOrderClick event', data, paymethod, cart)
      if (cart.order?.uuid) {
        alert(`REDIRECT TO /orders/${cart.order.uuid}`)
      }
    }
  }
  return (
    <CheckoutController {...checkoutProps} />
  )
}
