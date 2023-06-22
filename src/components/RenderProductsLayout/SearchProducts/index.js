import React from 'react'

import { Select } from '../../../styles/Select'
import { SearchBar } from '../../SearchBar'
import { useTheme } from 'styled-components'
import { useLanguage } from 'ordering-components'

export const SearchProducts = (props) => {
  const {
    handleChangeSearch,
    searchValue,
    businessState,
    sortByOptions,
    sortByValue,
    handleChangeSortBy
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const showSort = !theme?.business_view?.components?.header?.components?.business?.components?.sort?.hidden

  return (
    <>
      <SearchBar
        onSearch={handleChangeSearch}
        search={searchValue}
        placeholder={t('SEARCH_PRODUCTS', theme?.defaultLanguages?.SEARCH_PRODUCTS || 'Search Products')}
        lazyLoad={businessState?.business?.lazy_load_products_recommended}
      />
      {showSort && (
        <Select
          notAsync
          notReload
          options={sortByOptions}
          defaultValue={sortByValue}
          onChange={(val) => handleChangeSortBy && handleChangeSortBy(val)}
        />
      )}
    </>
  )
}
