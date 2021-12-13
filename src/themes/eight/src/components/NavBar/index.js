import React from 'react'
import { useHistory } from 'react-router-dom'
import BsChevronLeft from '@meronex/icons/bs/BsChevronLeft'
import { useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import { SearchBar } from '../SearchBar'

import {
  NavBarContainer,
  BackButton,
  NavBarTitle,
  SearchBarWrapper
} from './styles'

export const NavBar = (props) => {
  const {
    title,
    handleGoBack,
    searchValue,
    handleChangeSearch,
    lazyLoad,
    isSearchShow,
    placeholder
  } = props

  const history = useHistory()
  const [, t] = useLanguage()
  const theme = useTheme()

  return (
    <NavBarContainer>
      <BackButton
        onClick={() => handleGoBack ? handleGoBack() : history.goBack()}
      >
        <BsChevronLeft />
        <span>{t('SHOPPING_SECOND_WHERE_BACK_BUTTON', theme.defaultLanguages?.SHOPPING_SECOND_WHERE_BACK_BUTTON || 'Back')}</span>
      </BackButton>
      <NavBarTitle
        isSearchShow={isSearchShow}
      >
        {title}
      </NavBarTitle>
      {isSearchShow && (
        <SearchBarWrapper>
          <SearchBar
            isCustomLayout
            onSearch={handleChangeSearch}
            search={searchValue}
            placeholder={placeholder || ''}
            lazyLoad={lazyLoad}
          />
        </SearchBarWrapper>
      )}
    </NavBarContainer>
  )
}
