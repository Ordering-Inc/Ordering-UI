import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components'
import { Button, Checkbox } from '../../../styles'
import { SearchBar } from '../SearchBar'

import {
  ChannelsContainer,
  SearchBarWrapper,
  ButtonGroup,
  ChannelItem
} from './styles'

export const SelectSites = (props) => {
  const {
    isAddMode,
    isDisabled,
    selectedSitesIds,
    allSites,
    handleSelectSite,
    handleSelectAllSites,
    handleSelectNoneSites,
    handleUpdateClick,
    handleAddClick
  } = props

  const [, t] = useLanguage()
  const [searchValue, setSearchValue] = useState(null)
  const [filteredSites, setFilteredSites] = useState([])

  useEffect(() => {
    let _filteredSites = []
    if (searchValue) {
      _filteredSites = allSites.filter(site => site?.name?.toLowerCase().includes(searchValue?.toLowerCase()))
    } else {
      _filteredSites = [...allSites]
    }
    setFilteredSites(_filteredSites)
  }, [searchValue])

  return (
    <ChannelsContainer>
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
          onClick={() => handleSelectAllSites()}
        >
          {t('SELECT_ALL', 'Select all')}
        </Button>
        <Button
          color='secundaryDark'
          onClick={() => handleSelectNoneSites()}
        >
          {t('SELECT_NONE', 'Select none')}
        </Button>
      </ButtonGroup>
      {filteredSites.map(site => (
        <ChannelItem
          key={site.id}
        >
          <Checkbox
            checked={selectedSitesIds.includes(site.id)}
            onChange={(e) => handleSelectSite(e.target.checked, site.id)}
          />
          <span>{site.name}</span>
        </ChannelItem>
      ))}

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
    </ChannelsContainer>
  )
}
