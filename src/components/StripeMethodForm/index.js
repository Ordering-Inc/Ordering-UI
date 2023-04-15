import React, { useState, useEffect } from 'react'
import { PaymentRequestButtonElement, useStripe } from '@stripe/react-stripe-js'
import { CardForm as CardFormController, useLanguage } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { Container } from './styles'
export const StripeMethodFormUI = (props) => {
  const {
    cart,
    handleSource,
    handleCancel,
    paymethod
  } = props

  const [, t] = useLanguage()
  const stripe = useStripe()
  const [paymentRequest, setPaymentRequest] = useState(null)
  const [methodUnavailable, setMethodUnavailable] = useState(false)

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: cart?.business?.name,
          amount: Math.floor((cart?.balance || cart?.total) * 100)
        },
        requestPayerName: true,
        requestPayerEmail: true
      })
      pr.canMakePayment().then(result => {
        if (result) {
          setPaymentRequest(pr)
        } else {
          setMethodUnavailable(true)
        }
      })
      pr.on('paymentmethod', async (e) => {
        e.complete('success')
        handleCancel()
        handleSource({
          ...e?.paymentMethod?.card,
          id: e.paymentMethod.id,
          type: e.paymentMethod.type,
          source_id: e?.paymentMethod?.id,
          card: {
            brand: e.paymentMethod.card.brand,
            last4: e.paymentMethod.card.last4
          }
        })
      })
    }
  }, [stripe])

  return (
    <Container>
      {methodUnavailable ? (
        <h2>{paymethod === 'google_pay' ? t('GOOGLE_PAY_UNAVAILABLE', 'Google pay unavailable') : t('APPLE_PAY_UNAVAILABLE', 'Apple pay unavailable')}</h2>
      ) : (
        <>
          {paymentRequest ? (
            <PaymentRequestButtonElement options={{ paymentRequest }} />
          ) : (
            <Skeleton />
          )}
        </>
      )}
    </Container>
  )
}

export const StripeMethodForm = (props) => {
  const propsController = {
    ...props,
    UIComponent: StripeMethodFormUI
  }
  return <CardFormController {...propsController} />
}
