import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MultiCheckout as MultiCheckoutController } from '../../../src/themes/five/src/components/MultiCheckout'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent, useLanguage, useOrder } from 'ordering-components'
import { loadStripe } from '@stripe/stripe-js'

export const MultiCheckout = (props) => {
  const [events] = useEvent()
  const { cartUuid } = useParams()
  const [, { confirmMultiCarts }] = useOrder()
  const [, t] = useLanguage()
  const stripePayments = ['stripe', 'stripe_connect', 'stripe_direct', 'google_pay', 'apple_pay']
  const [errors, setErrors] = useState([])

  const actionsBeforePlace = async (paymethod, cart) => {
    if (stripePayments.includes(paymethod.gateway)) {
      try {
        const stripe = await loadStripe(paymethod.paymethod?.credentials?.publishable || paymethod?.paymethod?.credentials?.publishable_key)
        const result = await stripe.confirmCardPayment(cart.paymethod_data.result.client_secret)
        if (result?.paymentIntent?.status === 'succeeded') {
          try {
            const confirmCartRes = await confirmMultiCarts(cartUuid)
            if (confirmCartRes.error) {
              setErrors([confirmCartRes.error.message])
            }
            if (confirmCartRes.result.order?.uuid) {
              events.emit('go_to_page', { page: 'multi_orders', params: { orderId: confirmCartRes.result.order.uuid }, replace: true })
            }
          } catch (error) {
            setErrors([error.message])
          }
        }
        if (result?.error?.code === 'payment_intent_authentication_failure') {
          setErrors([t('CART_STATUS_CANCEL_MESSAGE', 'The payment has not been successful, please try again')])
        }
        return true
      } catch (error) {
        setErrors([error.message])
      }
    } else if (paymethod.gateway === 'stripe_redirect') {
      const stripe = await loadStripe(paymethod.paymethod?.credentials?.publishable)
      const confirmOption = {
        bancontact: {
          name: 'confirmBancontactPayment',
          type: 1
        },
        alipay: {
          name: 'confirmAlipayPayment',
          type: 2
        },
        giropay: {
          name: 'confirmGiropayPayment',
          type: 1
        },
        ideal: {
          name: 'confirmIdealPayment',
          type: 2
        }
      }
      const params = {
        1: {
          payment_method: {
            billing_details: cart.paymethod_data.data.owner
          },
          return_url: `${window.location.origin}/checkout/${cartUuid}`
        },
        2: {
          return_url: `${window.location.origin}/checkout/${cartUuid}`
        }
      }
      stripe[confirmOption[paymethod.data.type]?.name](
        cart.paymethod_data.result.client_secret,
        params[confirmOption[paymethod.data.type]?.type]
      ).then((result) => {
        if (result?.error) {
          setErrors([...errors, result?.error?.message])
        }
      }).catch((e) => {
        setErrors([...errors, e?.message || e?.toString()])
      })
    }
  }
  const multiCheckoutProps = {
    ...props,
    cartUuid,
    errors,
    clearErrors: () => setErrors([]),
    onRedirectPage: (data) => events.emit('go_to_page', data),
    onPlaceOrderClick: (order) => {
      events.emit('go_to_page', { page: 'multi_orders', params: { orderId: order?.id } })
    },
    actionsBeforePlace
  }

  return (
    <>
      <HelmetTags page='multi_checkout' />
      <MultiCheckoutController {...multiCheckoutProps} />
    </>
  )
}

export default MultiCheckout
