import React from 'react'
import { StripeElementsForm as StripeElementsFormController } from 'ordering-components'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { CardForm } from '../CardForm'

const StripeElementsFormUI = (props) => {
  const {
    publicKey,
    handleSource,
    businessId,
    requirements,
    onNewCard,
    toSave
  } = props
  return (
    <>
      {publicKey ? (
        <Elements stripe={loadStripe(publicKey)}>
          <CardForm
            handleSource={handleSource}
            onNewCard={onNewCard}
            toSave={toSave}
            requirements={requirements}
            businessId={businessId}
          />
        </Elements>
      ) : (
        <p>Something is wrong :(</p>
      )}
    </>
  )
}

export const StripeElementsForm = (props) => {
  const stripeElementsFormProps = {
    ...props,
    UIComponent: StripeElementsFormUI
  }
  return <StripeElementsFormController {...stripeElementsFormProps} />
}
