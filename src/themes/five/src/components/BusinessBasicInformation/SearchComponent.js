import React from 'react'
import { SearchIconWrapper, SearchWrapper, WrapperSearch } from './styles'
import { Select } from '../../styles/Select'
import { useTheme } from 'styled-components'
import CgSearch from '@meronex/icons/cg/CgSearch'

export const SearchComponent = (props) => {
  const {
    setOpenSearchProducts,
    handleChangeSortBy,
    sortByValue,
    sortByOptions,
    isResponsive
  } = props

  const theme = useTheme()

  const hideSort = theme?.business_view?.components?.header?.components?.business?.components?.sort?.hidden

  return (
    <WrapperSearch id='search-component' isResponsive={isResponsive}>
      <SearchWrapper>
        <SearchIconWrapper
          onClick={() => setOpenSearchProducts(true)}
        >
          <CgSearch />
        </SearchIconWrapper>
        {!hideSort && (
          <Select
            notAsync
            notReload
            options={sortByOptions}
            defaultValue={sortByValue}
            onChange={(val) => handleChangeSortBy && handleChangeSortBy(val)}
          />
        )}
      </SearchWrapper>
    </WrapperSearch>
  )
}
