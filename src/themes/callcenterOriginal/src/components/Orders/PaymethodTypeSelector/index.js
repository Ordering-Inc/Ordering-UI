import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components'
import { MultiSelect } from '../../../styles/MultiSelect'

import { Option, PlaceholderTitle } from './styles'

export const PaymethodTypeSelector = (props) => {
  const {
    paymethodsList,
    filterValues,
    handleChangePaymethodType
  } = props

  const [, t] = useLanguage()
  const [paymethodsTypes, setPaymethodsTypes] = useState([])
  const placeholder = <PlaceholderTitle>{t('SELECT_PAYMETHOD', 'Select paymethod')}</PlaceholderTitle>
  const paymthodsLoading = [{ value: 'default', content: <Option>{t('PAYMETHODS_LOADING', 'Paymethods loading')}...</Option> }]

  useEffect(() => {
    const _paymthodsOptionList = []
    if (!paymethodsList.loading) {
      const _paymthodsOption = paymethodsList.paymethods.map((paymethod) => {
        return {
          value: paymethod.id,
          content: (
            <Option>{paymethod.name}</Option>
          )
        }
      })

      for (const option of _paymthodsOption) {
        _paymthodsOptionList.push(option)
      }
    }

    setPaymethodsTypes(_paymthodsOptionList)
  }, [paymethodsList])

  return (
    <>
      {!paymethodsList.loading ? (
        <MultiSelect
          defaultValue={filterValues.paymethodIds}
          placeholder={placeholder}
          options={paymethodsTypes}
          optionBottomBorder
          onChange={(paymethod) => handleChangePaymethodType(paymethod)}
        />
      ) : (
        <MultiSelect
          defaultValue='default'
          options={paymthodsLoading}
          optionBottomBorder
        />
      )}
    </>
  )
}
