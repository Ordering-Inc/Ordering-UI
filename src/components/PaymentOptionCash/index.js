import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useUtils, useLanguage } from 'ordering-components'

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
    onChangeData,
    setErrorCash
  } = props
  const [, t] = useLanguage()

  const { handleSubmit, register, errors } = useForm()
  const [{ parsePrice }] = useUtils()

  const handleChangeCash = (e) => {
    let cash = parseFloat(e?.target?.value)
    cash = isNaN(cash) ? null : cash
    onChangeData && onChangeData({ cash })
    handleSubmit(() => {})(e)
  }

  /**
   * effect for disable the place button on component did mount
   */
  useEffect(() => {
    handleChangeCash()
  }, [])

  /**
   * effect for disable the place button on errors with cash
   */
  useEffect(() => {
    handleError()
  }, [errors])

  const handleError = () => {
    if (errors.cash) {
      setErrorCash(true)
    } else {
      setErrorCash(false)
    }
  }

  return (
    <PaymentCashContainer>
      <FormCash onSubmit={handleSubmit(() => {})}>
        <WrapperInput>
          <label>{t('EXACT_AMMOUNT', 'Don’t have exact amount? Let us know with how much will you pay')}</label>
          <Input
            name='cash'
            type='number'
            placeholder='0'
            onChange={handleChangeCash}
            ref={
              register({
                validate: value => {
                  return value === '' || value >= orderTotal
                }
              })
            }
          />
        </WrapperInput>
        {errors.cash && errors.cash.type === 'required' && (
          <ErrorText>{t('FIELD_REQUIRED', 'This field is required')}</ErrorText>
        )}
        {errors.cash && errors.cash.type === 'validate' && (
          <ErrorText>{t('VALUE_GREATER_THAN_TOTAL', 'This value must be greater than order total')}: {parsePrice(orderTotal)}</ErrorText>
        )}
      </FormCash>
    </PaymentCashContainer>
  )
}
