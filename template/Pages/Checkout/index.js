import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { useHistory, useParams, useLocation } from 'react-router-dom'

import { Checkout } from '../../../src/components/Checkout'

export const CheckoutPage = (props) => {
  const history = useHistory()
  const { cartUuid } = useParams()

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }

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
            return_url: `${window.location.origin}/checkout/${cartUuid}`
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

  const checkoutProps = {
    ...props,
    cartUuid,
    actionsBeforePlace,
    query: useQuery(),
    onPlaceOrderClick: (data, paymethod, cart) => {
      if (cart.order?.uuid) {
        history.push(`/orders/${cart.order?.uuid}`)
      }
    },
    handleOrderRedirect: (uuid) => {
      history.push(`/orders/${uuid}`)
    },
    handleCheckoutRedirect: (uuid) => {
      history.push(`/checkout/${uuid}`)
    },
    handleSearchRedirect: () => {
      history.push('/search')
    }
  }
  return (
    <Checkout {...checkoutProps} />
  )
}
