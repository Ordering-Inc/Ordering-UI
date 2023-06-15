import React from 'react'
import { StripeElementsForm as StripeElementsFormController, useLanguage } from 'ordering-components'
import { loadStripe } from '@stripe/stripe-js/pure'
import { Elements } from '@stripe/react-stripe-js'
import { CardForm } from '../CardForm'
import { StripeMethodForm } from '../StripeMethodForm'

import {
  ErrorMessage
} from './styles'

const StripeElementsFormUI = (props) => {
  const {
    publicKey,
    handleSource,
    businessId,
    requirements,
    onNewCard,
    toSave,
    onCancel,
    paymethod,
    cart,
    handlePlaceOrder,
    methodsPay,
    cartGroup
  } = props
  const [, t] = useLanguage()
  return (
    <>
      {publicKey ? (
        <Elements stripe={loadStripe(publicKey)}>
          {methodsPay?.includes(paymethod) ? (
            <StripeMethodForm
              cart={cart}
              cartGroup={cartGroup}
              handleSource={handleSource}
              onNewCard={onNewCard}
              toSave={toSave}
              requirements={requirements}
              businessId={businessId}
              handleCancel={onCancel}
              paymethod={paymethod}
              handlePlaceOrder={handlePlaceOrder}
            />
          ) : (
            <CardForm
              handleSource={handleSource}
              onNewCard={onNewCard}
              toSave={toSave}
              isSplitForm
              requirements={requirements}
              businessId={businessId}
              handleCancel={onCancel}
              businessIds={props.businessIds}
            />
          )}
        </Elements>
      ) : (
        <ErrorMessage>{t('SOMETHING_WRONG', 'Something is wrong!')}</ErrorMessage>
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
