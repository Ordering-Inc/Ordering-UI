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
  const [searchValue, setSearchValue] = useState('')
  const placeholder = <PlaceholderTitle>{t('SELECT_PAYMETHOD', 'Select paymethod')}</PlaceholderTitle>
  const paymthodsLoading = [{ value: 'default', content: <Option>{t('PAYMETHODS_LOADING', 'Paymethods loading')}...</Option> }]

  useEffect(() => {
    const _paymthodsOptionList = []
    if (!paymethodsList.loading) {
      const _paymthodsOption = paymethodsList.paymethods
        .filter(option => option?.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        .map((paymethod) => {
          return {
            value: paymethod.id,
            content: (
              <Option>{t(paymethod?.gateway?.toUpperCase(), paymethod.name)}</Option>
            )
          }
        })

      for (const option of _paymthodsOption) {
        _paymthodsOptionList.push(option)
      }
    }

    setPaymethodsTypes(_paymthodsOptionList)
  }, [paymethodsList, searchValue])

  return (
    <>
      {!paymethodsList.loading ? (
        <MultiSelect
          defaultValue={filterValues.paymethodIds}
          placeholder={placeholder}
          options={paymethodsTypes}
          optionBottomBorder
          onChange={(paymethod) => handleChangePaymethodType(paymethod)}
          isShowSearchBar
          searchBarIsCustomLayout
          searchBarIsNotLazyLoad
          searchValue={searchValue}
          handleChangeSearch={(val) => setSearchValue(val)}
        />
      ) : (
        <MultiSelect
          defaultValue='default'
          options={paymthodsLoading}
          optionBottomBorder
          isShowSearchBar
          searchBarIsCustomLayout
          searchBarIsNotLazyLoad
          searchValue={searchValue}
          handleChangeSearch={(val) => setSearchValue(val)}
        />
      )}
    </>
  )
}
