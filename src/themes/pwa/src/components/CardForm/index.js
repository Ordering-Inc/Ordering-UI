import React from 'react'
import {
  CardElement,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from '@stripe/react-stripe-js'
import { CardForm as CardFormController, useLanguage } from 'ordering-components'

import {
  FormStripe,
  FormRow,
  ErrorMessage,
  FormActions,
  SplitFormElement,
  Label,
  CardNumber,
  ExpiryCsv,
  Expiry,
  Cvs
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
    SplitForm
  } = props

  const [, t] = useLanguage()

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <FormStripe onSubmit={handleSubmit}>
        <FormRow>
          {!SplitForm ? (
            <CardElement
              options={CARD_ELEMENT_OPTIONS}
              onChange={handleChange}
            />
          ) : (
            <SplitFormElement>
              <CardNumber>
                <Label>Card number</Label>
                <CardNumberElement
                  options={CARD_ELEMENT_OPTIONS}
                  onChange={handleChange}
                />
              </CardNumber>
              <ExpiryCsv>
                <Expiry>
                  <Label>Expiration date</Label>
                  <CardExpiryElement
                    options={CARD_ELEMENT_OPTIONS}
                    onChange={handleChange}
                  />
                </Expiry>
                <Cvs>
                  <Label>CVC</Label>
                  <CardCvcElement
                    options={CARD_ELEMENT_OPTIONS}
                    onChange={handleChange}
                  />
                </Cvs>
              </ExpiryCsv>
            </SplitFormElement>
          )}
          <ErrorMessage>{error}</ErrorMessage>
        </FormRow>
        <FormActions>
          <Button
            color='primary'
            type='submit'
            disabled={loading}
          >
            {loading ? t('LOADING', 'Loading...') : t('ADD_CARD', 'Add card')}
          </Button>
        </FormActions>
      </FormStripe>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const CardForm = (props) => {
  const cardFormProps = {
    ...props,
    isSplitForm: props.SplitForm,
    UIComponent: CardFormUI
  }
  return <CardFormController {...cardFormProps} />
}
