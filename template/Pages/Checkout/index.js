import React from 'react'
import { loadStripe } from '@stripe/stripe-js/pure'
import { useParams, useLocation } from 'react-router-dom'

import { Checkout as CheckoutPage } from '../../../src/components/Checkout'
import { useEvent } from 'ordering-components'

const Checkout = (props) => {
  const { cartUuid } = useParams()
  const [events] = useEvent()

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
        events.emit('go_to_page', { page: 'order_detail', params: { orderId: cart.order?.uuid } })
      }
    },
    handleOrderRedirect: (uuid) => {
      events.emit('go_to_page', { page: 'order_detail', params: { orderId: uuid } })
    },
    handleCheckoutRedirect: (uuid) => {
      events.emit('go_to_page', { page: 'checkout', params: { cartUuid: uuid } })
    },
    handleSearchRedirect: () => {
      events.emit('go_to_page', { page: 'search' })
    },
    handleCheckoutListRedirect: () => {
      events.emit('go_to_page', { page: 'checkout' })
    },
    handleStoreRedirect: (store) => {
      events.emit('go_to_page', { page: 'business', params: { store } })
    }
  }
  return (
    <CheckoutPage {...checkoutProps} />
  )
}

export default Checkout
