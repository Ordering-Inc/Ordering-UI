import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  CardElement,
  CardNumberElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js'

// import { useSession } from '../../../contexts/SessionContext'
// import { useApi } from '../../../contexts/ApiContext'
// import { useLanguage } from '../../../contexts/LanguageContext'
import { useSession, useApi, useLanguage } from 'ordering-components'

/**
 * Component to manage card form for stripe elements form behavior without UI component
 */
export const CardForm = (props) => {
  const {
    UIComponent,
    requirements,
    toSave,
    handleSource,
    onNewCard,
    handleCustomSubmit,
    isSplitForm
  } = props

  const [{ user }] = useSession()
  const [ordering] = useApi()

  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [, t] = useLanguage()

  /**
   * POST the token ID to backend.
   * @param {*string} param0 payment method id
   * @param {*object} user object with user info from session provider
   * @param {*string} businessId string to know your business
   */
  const stripeTokenHandler = async (tokenId, user, businessId) => {
    const result = await fetch(`${ordering.root}/payments/stripe/cards`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${user?.session?.access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        business_id: businessId,
        gateway: 'stripe',
        token_id: tokenId,
        user_id: user?.id
      })
    })
    const response = await result.json()
    onNewCard && onNewCard(response.result)
  }

  /**
   * Handle real-time validation errors from the card Element
   * @param {*event} event
   */
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message)
    } else {
      setError(null)
    }
  }

  /**
   * Handle form submission
   * @param {event} event
   */
  const handleSubmit = async (event) => {
    if (handleCustomSubmit) {
      const card = elements?.getElement(CardElement)
      return handleCustomSubmit(card)
    }
    setLoading(true)
    event.preventDefault()
    let card = elements?.getElement(CardElement)
    if (isSplitForm) {
      card = elements?.getElement(CardNumberElement)
    }

    if (!requirements) {
      if (!stripe) {
        setError(t('STRIPE_LOAD_ERROR', 'Failed to load Stripe properly'))
        return
      }
      const result = await stripe.createPaymentMethod({
        type: 'card',
        card: card,
        billing_details: {
          name: `${user.name} ${user.lastname}`,
          email: user.email,
          address: user.address
        }
      })
      if (result.error) {
        setLoading(false)
        setError(result.error.message)
      } else {
        setLoading(false)
        setError(null)
        handleSource && handleSource({
          id: result?.paymentMethod.id,
          type: 'card',
          card: {
            brand: result?.paymentMethod.card.brand,
            last4: result?.paymentMethod.card.last4
          }
        })
        // props.handlerToken(result?.paymentMethod)
      }
    } else {
      if (!stripe) {
        setError(t('STRIPE_LOAD_ERROR', 'Faile to load Stripe properly'))
        return
      }
      const result = await stripe.confirmCardSetup(
        requirements,
        {
          payment_method: {
            card,
            billing_details: {
              name: `${user.name} ${user.lastname}`,
              email: user.email,
              address: user.address
            }
          }
        }
      )
      if (result.error) {
        setLoading(false)
        setError(result.error.message)
      } else {
        setLoading(false)
        setError(null)
        toSave && stripeTokenHandler(result.setupIntent.payment_method, user, props.businessId)
      }
    }
  }

  return (
    <UIComponent
      {...props}
      handleSubmit={handleSubmit}
      error={error}
      loading={loading}
      handleChange={handleChange}
    />
  )
}

CardForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Business id to get cards from API
   */
  businessId: PropTypes.number,
  /**
   * Save client secret id used in stripe for create a payment method
   */
  clientSecret: PropTypes.string,
  /**
   * Autosave cart
   */
  autosave: PropTypes.bool,
  /**
   * method used for handle card token created
   */
  handlerToken: PropTypes.func,
  /**
   * handleCustomClick, function to get click event and return card selected without default behavior
   */
  handleCustomSubmit: PropTypes.func
}

CardForm.defaultProps = {
  autosave: true
}
