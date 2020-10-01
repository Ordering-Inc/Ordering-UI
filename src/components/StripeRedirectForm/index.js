import React from 'react'
import { useForm } from 'react-hook-form'
import { StripeRedirectForm as StripeRedirectFormController, useSession } from 'ordering-components'

import {
  FormRedirect,
  FormGroup,
  ErrorMessage
} from './styles'

import { Button } from '../../styles/Buttons'
import { Input } from '../../styles/Inputs'

const inputStyle = {
  padding: '8px 10px',
  marginTop: '8px'
}

const StripeRedirectFormUI = (props) => {
  const {
    paymethods,
    handleSubmitPaymentMethod
  } = props

  const [{ user }] = useSession()
  const { handleSubmit, register, errors, formState } = useForm()

  return (
    <FormRedirect onSubmit={handleSubmit(handleSubmitPaymentMethod)}>
      <FormGroup>
        <label>Select a payment method</label>
        <select
          style={inputStyle}
          name='type'
          ref={
            register({
              required: true
            })
          }
        >
          <option value=''>Select a payment method</option>
          {paymethods?.length > 0 && paymethods.map((paymethod, i) => (
            <option key={i} value={paymethod.value}>{paymethod.name}</option>
          ))}
        </select>
        {errors.type && errors.type.type === 'required' && (
          <ErrorMessage>This field is required</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <label>Account holder</label>
        <Input
          name='name'
          defaultValue={user.name}
          placeholder='Type an Account holder'
          ref={
            register({
              required: true
            })
          }
        />
        {errors.name && errors.name.type === 'required' && (
          <ErrorMessage>This field is required</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <label>Email</label>
        <Input
          name='email'
          type='email'
          defaultValue={user.email}
          placeholder='Type an email'
          ref={
            register({
              required: true
            })
          }
        />
        {errors.email && errors.email.type === 'required' && (
          <ErrorMessage>This field is required</ErrorMessage>
        )}
      </FormGroup>

      <Button color='primary' type='submit' disabled={formState.isSubmitting}>
        {formState.isSubmitting ? 'Loading...' : 'OK'}
      </Button>
    </FormRedirect>
  )
}

export const StripeRedirectForm = (props) => {
  const stripeRedirectFormProps = {
    ...props,
    UIComponent: StripeRedirectFormUI
  }
  return <StripeRedirectFormController {...stripeRedirectFormProps} />
}
