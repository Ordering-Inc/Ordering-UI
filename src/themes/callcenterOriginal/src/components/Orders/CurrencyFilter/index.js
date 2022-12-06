import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components'
import { MultiSelect } from '../../../styles/MultiSelect'
import { PlaceholderTitle, Option } from './styles'
import { currencyList } from '../../../../../../config/constants'

export const CurrencyFilter = (props) => {
  const {
    filterValues,
    handleChangeCurrency
  } = props

  const [, t] = useLanguage()

  const placeholder = (
    <PlaceholderTitle>
      {t('SELECT_A_CURRENCY', 'Select a currency')}
    </PlaceholderTitle>
  )

  const [countryTypes, setCountryTypes] = useState([])

  useEffect(() => {
    const _countryList = []
    const _groupsOption = currencyList.map((country) => {
      return {
        value: country.value,
        content: (
          <Option>{country.text}</Option>
        )
      }
    })

    for (const option of _groupsOption) {
      _countryList.push(option)
    }
    setCountryTypes(_countryList)
  }, [currencyList])

  return (
    <MultiSelect
      placeholder={placeholder}
      defaultValue={filterValues.currency}
      options={countryTypes}
      onChange={(code) => handleChangeCurrency(code)}
      optionInnerMaxHeight='200px'
    />
  )
}
