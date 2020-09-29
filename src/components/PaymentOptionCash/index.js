import React from 'react'
import { useForm } from 'react-hook-form'

import {
  PaymentCashContainer,
  FormCash,
  WrapperInput,
  ErrorText
} from './styles'

import { Input } from '../../styles/Inputs'

export const PaymentOptionCash = (props) => {
  const {
    orderTotal,
    onChangeData
  } = props

  const { handleSubmit, register, errors } = useForm()

  const handleChangeCash = (e) => {
    let cash = parseFloat(e.target.value)
    cash = isNaN(cash) ? null : cash
    onChangeData && onChangeData({ cash })
    handleSubmit(() => {})(e)
  }

  return (
    <PaymentCashContainer>
      <FormCash onSubmit={handleSubmit(() => {})}>
        <WrapperInput>
          <label>Don’t have exact amount? Let us know with how much will you pay</label>
          <Input
            name='cash'
            type='number'
            placeholder='$0.00'
            onChange={handleChangeCash}
            ref={
              register({
                required: true,
                validate: value => {
                  return value === '' || value >= orderTotal
                }
              })
            }
          />
        </WrapperInput>
        {errors.cash && errors.cash.type === 'required' && (
          <ErrorText>This field is required</ErrorText>
        )}
        {errors.cash && errors.cash.type === 'validate' && (
          <ErrorText>This value must be greater than order total: ${orderTotal}</ErrorText>
        )}
      </FormCash>
    </PaymentCashContainer>
  )
}
