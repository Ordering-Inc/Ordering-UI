import React, { useEffect, useState } from 'react'
import { useLanguage, useUtils } from 'ordering-components'
import { useTheme } from 'styled-components'
import { Checkbox, Button } from '../../../styles'
import { SearchBar } from '../SearchBar'
import Skeleton from 'react-loading-skeleton'

import {
  Container,
  SearchBarWrapper,
  ButtonGroup,
  BusinessesContainer,
  BusinessWrapper,
  WrapperImage,
  Image
} from './styles'

export const SelectBusinesses = (props) => {
  const {
    isSkeleton,
    isAddMode,
    isDisabled,
    allBusinesses,
    handleSelectBusiness,
    selectedBusinessIds,
    handleSelectAllBusinesses,
    handleSelectNoneBusinesses,
    handleUpdateClick,
    handleAddClick
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const [searchValue, setSearchValue] = useState(null)
  const [filteredBusinesses, setFilteredBusinesses] = useState([])

  useEffect(() => {
    let _filteredBusinesses = []
    if (searchValue) {
      _filteredBusinesses = allBusinesses.filter(business => business?.name?.toLowerCase().includes(searchValue?.toLowerCase()))
    } else {
      _filteredBusinesses = [...allBusinesses]
    }
    setFilteredBusinesses(_filteredBusinesses)
  }, [searchValue, allBusinesses])

  return (
    <Container>
      <SearchBarWrapper>
        <SearchBar
          placeholder={t('SEARCH', 'Search')}
          isCustomLayout
          search={searchValue}
          onSearch={val => setSearchValue(val)}
        />
      </SearchBarWrapper>
      <ButtonGroup>
        <Button
          color='secundaryDark'
          onClick={() => handleSelectAllBusinesses()}
        >
          {t('SELECT_ALL', 'Select all')}
        </Button>
        <Button
          color='secundaryDark'
          onClick={() => handleSelectNoneBusinesses()}
        >
          {t('SELECT_NONE', 'Select none')}
        </Button>
      </ButtonGroup>
      <BusinessesContainer>
        {isSkeleton ? (
          [...Array(10).keys()].map(i => (
            <BusinessWrapper key={i}>
              <Skeleton width={20} height={20} />
              <WrapperImage isSkeleton>
                <Skeleton width={40} height={40} />
              </WrapperImage>
              <p><Skeleton width={100} /></p>
            </BusinessWrapper>
          ))
        ) : (
          filteredBusinesses.map(business => (
            <BusinessWrapper
              key={business.id}
            >
              <Checkbox
                checked={selectedBusinessIds.includes(business.id)}
                onChange={e => handleSelectBusiness(business.id, e.target.checked)}
              />
              <WrapperImage>
                <Image bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} />
              </WrapperImage>
              <p>{business?.name}</p>
            </BusinessWrapper>
          ))
        )}
      </BusinessesContainer>
      <Button
        borderRadius='8px'
        color='primary'
        disabled={isDisabled}
        onClick={() => {
          isAddMode ? handleAddClick() : handleUpdateClick()
        }}
      >
        {isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save')}
      </Button>
    </Container>
  )
}
