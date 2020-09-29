import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import { CardForm as CardFormController } from 'ordering-components'
import './style.css'

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
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
    handleChange
  } = props
  return (
    <form className='stripe' onSubmit={handleSubmit}>
      <div className='form-row'>
        <label htmlFor='card-element'>
          Credit or debit card
        </label>
        <CardElement
          id='card-element'
          options={CARD_ELEMENT_OPTIONS}
          onChange={handleChange}
        />
        <div className='card-errors' role='alert'>{error}</div>
      </div>
      <button type='submit'>{loading ? 'Loading...' : 'Ok'}</button>
    </form>
  )
}

export const CardForm = (props) => {
  const cardFormProps = {
    ...props,
    UIComponent: CardFormUI
  }
  return <CardFormController {...cardFormProps} />
}
