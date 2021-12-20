import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import BsChevronLeft from '@meronex/icons/bs/BsChevronLeft'
import { useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import { SearchBar } from '../SearchBar'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import RiCloseCircleLine from '@meronex/icons/ri/RiCloseCircleLine'

import {
  NavBarContainer,
  BackButton,
  NavBarTitle,
  SearchBarWrapper,
  SearchBarIconWrapper
} from './styles'

export const NavBar = (props) => {
  const {
    title,
    isHideBackButton,
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
  const windowSize = useWindowSize()

  const [isSearchClick, setIsSerchClick] = useState(false)

  return (
    <NavBarContainer>
      {!isHideBackButton && (
        <BackButton
          onClick={() => handleGoBack ? handleGoBack() : history.goBack()}
        >
          <BsChevronLeft />
          <span>{t('SHOPPING_SECOND_WHERE_BACK_BUTTON', theme.defaultLanguages?.SHOPPING_SECOND_WHERE_BACK_BUTTON || 'Back')}</span>
        </BackButton>
      )}
      <NavBarTitle
        isSearchShow={isSearchShow}
      >
        {title}
      </NavBarTitle>
      {isSearchShow && (
        <>
          {(windowSize.width >= 768 || (windowSize.width < 768 && isSearchClick)) && (
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
          {windowSize.width < 768 && (
            <SearchBarIconWrapper>
              {isSearchClick ? (
                <RiCloseCircleLine
                  onClick={() => {
                    handleChangeSearch('')
                    setIsSerchClick(false)
                  }}
                />
              ) : (
                <img
                  src={theme?.images?.general?.searchIcon}
                  onClick={() => setIsSerchClick(true)}
                />
              )}
            </SearchBarIconWrapper>
          )}
        </>
      )}
    </NavBarContainer>
  )
}
