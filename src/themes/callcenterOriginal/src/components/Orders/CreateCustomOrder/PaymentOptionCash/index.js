import React, { useEffect, useState, useRef } from 'react'
import { useUtils, useLanguage } from 'ordering-components'
import { Input } from '../../../../styles'

import {
  PaymentCashContainer,
  FormCash,
  WrapperInput,
  ErrorText
} from './styles'

export const PaymentOptionCash = (props) => {
  const {
    defaultValue,
    orderTotal,
    onChangeData,
    setErrorCash
  } = props
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()

  const [value, setvalue] = useState(defaultValue)
  const el = useRef()
  let timeout = null
  const onChangeCash = (e) => {
    if (!/^(?=.)([+-]?([0-9]*)(\.([0-9]+))?)$/.test(e?.target?.value)) return
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      let cash = parseFloat(e?.target?.value)
      cash = isNaN(cash) ? null : cash
      setvalue(cash)
      if (cash >= orderTotal || !cash) {
        onChangeData && onChangeData({ cash })
      }
    }, 1000)
  }

  useEffect(() => {
    el.current.onkeyup = onChangeCash
  }, [])

  useEffect(() => {
    el.current.value = value || ''
  }, [value])

  useEffect(() => {
    if (value && parseFloat(value) < orderTotal) {
      setErrorCash && setErrorCash(true)
    } else {
      setErrorCash && setErrorCash(false)
    }
  }, [value, orderTotal])

  return (
    <>
      <PaymentCashContainer>
        <FormCash>
          <WrapperInput>
            <label>{t('NOT_EXACT_CASH_AMOUNT', 'Don\'t have exact amount? Let us know with how much will you pay')}</label>
            <Input
              ref={el}
              name='cash'
              type='text'
              placeholder='$0.00'
              onKeyPress={(e) => {
                if (!/^[0-9 .]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
            />
          </WrapperInput>
          {value && parseFloat(value) < orderTotal && (
            <ErrorText>{t('VALUE_GREATER_THAN_TOTAL', 'This value must be greater than order total')}: {parsePrice(orderTotal)}</ErrorText>
          )}
        </FormCash>
      </PaymentCashContainer>
    </>
  )
}

PaymentOptionCash.defaultProps = {
  defaultValue: null
}
