import React from 'react'
import { useLanguage } from 'ordering-components'
import {
  Container,
  FilterWrapper,
  FilterItem,
  Divider,
  SearchWrapper
} from './styles'
import { useTheme } from 'styled-components'
import { Input } from '../../styles/Inputs'
import { Select } from '../../styles/Select'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { SearchBar } from '../SearchBar'

export const ProfessionalBusinessFilter = (props) => {
  const {
    sortByValue,
    sortByOptions,
    handleChangeSortBy,
    handleChangeSearch,
    searchValue,
    business,
    handleChangePriceFilterValues,
    priceFilterValues
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const theme = useTheme()

  return (
    <>
      <SearchWrapper>
        <SearchBar
          onSearch={handleChangeSearch}
          search={searchValue}
          placeholder={t('SEARCH_PRODUCTS', theme?.defaultLanguages?.SEARCH_PRODUCTS || 'Search Products')}
          lazyLoad={business?.lazy_load_products_recommended}
        />
      </SearchWrapper>
      <Container>
        <FilterWrapper>
          <FilterItem>
            <span>{t('PREORDER_STEP_2_TIME_OPTION_MIN', 'Min')}.</span>
            <Input
              value={priceFilterValues?.min || ''}
              onKeyPress={(e) => {
                if (!/^[0-9.]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
              onChange={(e) => handleChangePriceFilterValues('min', e.target.value)}
              placeholder={t('PREORDER_STEP_2_TIME_OPTION_MIN', 'Min')}
            />
          </FilterItem>
          <FilterItem>
            <span>{t('MAX', 'Max')}.</span>
            <Input
              value={priceFilterValues?.max || ''}
              onKeyPress={(e) => {
                if (!/^[0-9.]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
              onChange={(e) => handleChangePriceFilterValues('max', e.target.value)}
              placeholder={t('MAX', 'Max')}
            />
          </FilterItem>
        </FilterWrapper>
        {width > 576 && <Divider />}
        <Select
          notAsync
          notReload
          options={sortByOptions}
          defaultValue={sortByValue}
          onChange={(val) => handleChangeSortBy && handleChangeSortBy(val)}
        />
      </Container>
    </>
  )
}
