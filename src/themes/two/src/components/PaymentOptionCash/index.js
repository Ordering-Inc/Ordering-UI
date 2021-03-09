import React, { useEffect, useState } from 'react'
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
  const [{ parsePrice }] = useUtils()

  const [value, setvalue] = useState(null)

  const handleChangeCash = (e) => {
    let cash = parseFloat(e?.target?.value)
    cash = isNaN(cash) ? null : cash
    setvalue(cash)
    onChangeData && onChangeData({ cash })
  }

  useEffect(() => {
    if (value && parseFloat(value) < orderTotal) {
      setErrorCash && setErrorCash(true)
    } else {
      setErrorCash && setErrorCash(false)
    }
  }, [value, orderTotal])

  return (
    <PaymentCashContainer>
      <FormCash>
        <WrapperInput>
          <label>{t('NOT_EXACT_CASH_AMOUNT', 'Don\'t have exact amount? Let us know with how much will you pay')}</label>
          <Input
            name='cash'
            type='text'
            placeholder='0'
            onChange={handleChangeCash}
          />
        </WrapperInput>
        {value && parseFloat(value) < orderTotal && (
          <ErrorText>{t('VALUE_GREATER_THAN_TOTAL', 'This value must be greater than order total')}: {parsePrice(orderTotal)}</ErrorText>
        )}
      </FormCash>
    </PaymentCashContainer>
  )
}
