import React, { useEffect, useRef } from 'react'
import { useLanguage, useEvent } from 'ordering-components'
// import { Input } from '../../styles/Inputs'
import { SearchBar } from '../SearchBar'
import { useTheme } from 'styled-components'
import { BusinessProductsList } from '../BusinessProductsList'

import {
  Container,
  BackDropContainer,
  SearchContainer,
  SearchHeader,
  SearchBarWrapper,
  CancelButton,
  LogoHeader,
  BusinessProductsListContainer,
  BusinessProductsListWrapper
} from './styles'

export const SearchProducts = (props) => {
  const {
    onClose,
    searchValue,
    handleChangeSearch,
    business,
    featuredProducts,
    categorySelected
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [events] = useEvent()
  const searchRef = useRef()
  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  useEffect(() => {
    searchRef?.current?.focus && searchRef.current.focus()
  }, [searchRef?.current])

  return (
    <Container>
      <SearchContainer>
        <SearchHeader>
          <LogoHeader
            onClick={() => handleGoToPage({ page: 'search' })}
          >
            <img alt='Logotype' width='170px' height='45px' src={theme?.images?.logos?.logotype} loading='lazy' />
          </LogoHeader>
          <SearchBarWrapper>
            <SearchBar
              forceFocus
              onSearch={handleChangeSearch}
              search={searchValue}
              placeholder={t('SEARCH_PRODUCTS', 'Search Products')}
              lazyLoad={business?.lazy_load_products_recommended}
              forwardRef={searchRef}
            />
          </SearchBarWrapper>
          <CancelButton
            onClick={onClose}
          >
            {t('CANCEL', 'Cancel')}
          </CancelButton>
        </SearchHeader>
      </SearchContainer>
      {searchValue && (
        <BusinessProductsListContainer>
          <BusinessProductsListWrapper>
            <BusinessProductsList
              {...props}
              categories={[
                { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                ...business?.categories.sort((a, b) => a.rank - b.rank)
              ]}
              featured={featuredProducts}
              category={categorySelected}
              businessId={business?.id}
              handleClearSearch={handleChangeSearch}
            />
          </BusinessProductsListWrapper>
        </BusinessProductsListContainer>
      )}
      <BackDropContainer
        onClick={onClose}
      />
    </Container>
  )
}
