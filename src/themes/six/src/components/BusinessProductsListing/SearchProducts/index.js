import React from 'react'

import { Select } from '../../../styles/Select'
import { SearchBar } from '../../SearchBar'
import { useTheme } from 'styled-components'
import { useLanguage, useOrderingTheme } from 'ordering-components'

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
  const [orderingTheme] = useOrderingTheme()
  const showSort = !orderingTheme?.theme?.business_view?.components?.header?.components?.business?.components?.sort?.hidden
  const searchLayout = theme?.business_view?.components?.product_search?.components?.layout?.type

  return (
    <>
      <SearchBar
        onSearch={handleChangeSearch}
        search={searchValue}
        placeholder={t('SEARCH_PRODUCTS', theme?.defaultLanguages?.SEARCH_PRODUCTS || 'Search Products')}
        lazyLoad={businessState?.business?.lazy_load_products_recommended}
        disablePadding={props.disablePadding}
      />
      {showSort && searchLayout !== 'floating' && (
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
