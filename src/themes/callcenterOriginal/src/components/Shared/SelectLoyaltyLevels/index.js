import React, { useState, useEffect } from 'react'
import { useLanguage, PointsWalletLevels as PointsWalletLevelsController } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { SearchBar } from '../SearchBar'
import { Button, Checkbox } from '../../../styles'

import {
  Container,
  SearchBarWrapper,
  ButtonGroup,
  LevelItem
} from './styles'

const SelectLoyaltyLevelsUI = (props) => {
  const {
    levelList,

    isAddMode,
    isDisabled,
    handleAddPromotion,
    handleUpdateClick,

    selectedLoyaltyLevelIds,
    handleSelectLoyaltyLevel,
    handleSelectAllLoyaltyLevels
  } = props
  const [, t] = useLanguage()
  const [searchValue, setSearchValue] = useState(null)
  const [filteredLevels, setFilteredLevels] = useState([])

  useEffect(() => {
    if (levelList.loading) return
    let _filteredLevels = []
    if (searchValue) {
      _filteredLevels = levelList.levels.filter(level => level?.name?.toLowerCase().includes(searchValue?.toLowerCase()))
    } else {
      _filteredLevels = [...levelList.levels]
    }
    setFilteredLevels(_filteredLevels)
  }, [searchValue, levelList])

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
          onClick={() => handleSelectAllLoyaltyLevels(filteredLevels.reduce((ids, level) => [...ids, level.id], []))}
        >
          {t('SELECT_ALL', 'Select all')}
        </Button>
        <Button
          color='secundaryDark'
          onClick={() => handleSelectAllLoyaltyLevels([])}
        >
          {t('SELECT_NONE', 'Select none')}
        </Button>
      </ButtonGroup>
      {levelList.loading ? (
        [...Array(10).keys()].map(i => (
          <LevelItem key={i}>
            <Skeleton width={18} height={18} />
            <span className='name'>
              <Skeleton width={100} />
            </span>
          </LevelItem>
        ))
      ) : (
        filteredLevels.map(level => (
          <LevelItem key={level.id}>
            <Checkbox
              checked={selectedLoyaltyLevelIds.includes(level.id)}
              onChange={e => handleSelectLoyaltyLevel(e.target.checked, level.id)}
            />
            <span className='name'>{level.name}</span>
          </LevelItem>
        ))
      )}
      <Button
        borderRadius='8px'
        color='primary'
        disabled={isDisabled}
        onClick={() => {
          isAddMode ? handleAddPromotion() : handleUpdateClick()
        }}
      >
        {isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save')}
      </Button>
    </Container>
  )
}

export const SelectLoyaltyLevels = (props) => {
  const levelsProps = {
    ...props,
    UIComponent: SelectLoyaltyLevelsUI
  }
  return <PointsWalletLevelsController {...levelsProps} />
}
