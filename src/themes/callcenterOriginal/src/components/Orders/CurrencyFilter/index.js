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
  const [searchValue, setSearchValue] = useState('')

  const placeholder = (
    <PlaceholderTitle>
      {t('SELECT_A_CURRENCY', 'Select a currency')}
    </PlaceholderTitle>
  )

  const [countryTypes, setCountryTypes] = useState([])

  useEffect(() => {
    const _countryList = []
    const _groupsOption = currencyList
      .filter(option => option?.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      .map((country) => {
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
  }, [currencyList, searchValue])

  return (
    <MultiSelect
      placeholder={placeholder}
      defaultValue={filterValues.currency}
      options={countryTypes}
      onChange={(code) => handleChangeCurrency(code)}
      optionInnerMaxHeight='200px'
      isShowSearchBar
      searchBarIsCustomLayout
      searchBarIsNotLazyLoad
      searchValue={searchValue}
      handleChangeSearch={(val) => setSearchValue(val)}
    />
  )
}
