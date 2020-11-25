import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import { CardForm as CardFormController, useLanguage } from 'ordering-components'

import {
  FormStripe,
  FormRow,
  ErrorMessage,
  FormActions
} from './styles'

import { Button } from '../../styles/Buttons'

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
}

const CardFormUI = (props) => {
  const {
    error,
    loading,
    handleSubmit,
    handleChange,
    handleCancel
  } = props

  const [, t] = useLanguage()

  return (
    <FormStripe onSubmit={handleSubmit}>
      <FormRow>
        <CardElement
          options={CARD_ELEMENT_OPTIONS}
          onChange={handleChange}
        />
        <ErrorMessage>{error}</ErrorMessage>
      </FormRow>
      <FormActions>
        <Button type='button' onClick={() => handleCancel()}>{t('CANCEL', 'cancel')}</Button>
        <Button
          color='primary'
          type='submit'
        >
          {loading ? t('LOADING', 'Loading...') : t('ADD', 'Add')}
        </Button>
      </FormActions>
    </FormStripe>
  )
}

export const CardForm = (props) => {
  const cardFormProps = {
    ...props,
    UIComponent: CardFormUI
  }
  return <CardFormController {...cardFormProps} />
}
