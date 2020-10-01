import React from 'react'
import { StripeElementsForm as StripeElementsFormController } from 'ordering-components'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import {
  ErrorMessage
} from './styles'

import { CardForm } from '../CardForm'

const StripeElementsFormUI = (props) => {
  const {
    publicKey,
    handleSource,
    businessId,
    requirements,
    onNewCard,
    toSave,
    onCancel
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
            handleCancel={onCancel}
          />
        </Elements>
      ) : (
        <ErrorMessage>Something is wrong!</ErrorMessage>
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
