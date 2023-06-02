import React from 'react'
import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement } from '@stripe/react-stripe-js'
import { CardForm as CardFormController, useLanguage, useValidationFields } from 'ordering-components'
import {
  FormStripe,
  FormRow,
  ErrorMessage,
  FormActions,
  CardNumberField,
  CardExpiryCvcField,
  CardExpiryField,
  CardCvcField,
  CardZipcodeField,
  ZipcodeField
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
  },
  showIcon: true
}

const CardFormUI = (props) => {
  const {
    error,
    errorExpiry,
    errorCvc,
    loading,
    handleSubmit,
    handleChange,
    isSplitForm,
    handleChangeExpiry,
    handleChangeCvc,
    errorZipcode
  } = props

  const [, t] = useLanguage()
  const [validationFields] = useValidationFields()
  const zipCodeEnabled = validationFields?.fields?.card?.zipcode?.enabled
  const zipCodeRequired = validationFields?.fields?.card?.zipcode?.required

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
          {!isSplitForm ?
            <>
              <CardElement
                options={CARD_ELEMENT_OPTIONS}
                onChange={handleChange}
              />
              <ErrorMessage>{error}</ErrorMessage>
            </> :
            <>
              <CardNumberField>
                <label>{t('CARD_NUMBER', 'Card number')}</label>
                <CardNumberElement
                  options={CARD_ELEMENT_OPTIONS}
                  onChange={handleChange}
                />
                <ErrorMessage>{error}</ErrorMessage>
              </CardNumberField>
              <CardExpiryCvcField>
                <CardExpiryField>
                  <label>{t('EXPIRE_DATE', 'Expire date')}</label>
                  <CardExpiryElement
                    options={CARD_ELEMENT_OPTIONS}
                    onChange={handleChangeExpiry}
                  />
                  <ErrorMessage>{errorExpiry}</ErrorMessage>
                </CardExpiryField>
                <CardCvcField>
                  <label>{t('CVC', 'CVC')}</label>
                  <CardCvcElement
                    options={CARD_ELEMENT_OPTIONS}
                    onChange={handleChangeCvc}
                  />
                  <ErrorMessage>{errorCvc}</ErrorMessage>
                </CardCvcField>
              </CardExpiryCvcField>
              {zipCodeEnabled && (
                <CardZipcodeField>
                  <label>{t('ZIPCODE', 'Zipcode')}</label>
                  <ZipcodeField
                    name='zipcode'
                    placeholder={`${t('ZIPCODE', 'Zipcode')}${zipCodeRequired ? '*' : ''}`}
                    options={CARD_ELEMENT_OPTIONS}
                    onChange={handleChange}
                  />
                  {errorZipcode && (
                    <ErrorMessage>{t('ZIPCODE_IS_INCOMPLETED', 'The zipcode is incompleted.')}</ErrorMessage>
                  )}
                </CardZipcodeField>
              )}
            </>
          }
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
    UIComponent: CardFormUI
  }
  return <CardFormController {...cardFormProps} />
}
