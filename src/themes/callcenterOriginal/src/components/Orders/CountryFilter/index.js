import React, { useEffect, useState } from 'react'
import { useLanguage, CountryList as CountryListControler } from 'ordering-components'
import { MultiSelect } from '../../../styles/MultiSelect'
import { PlaceholderTitle, Option, SkeletonWrapper } from './styles'
import Skeleton from 'react-loading-skeleton'

const CountryFilterUI = (props) => {
  const {
    countriesState,
    filterValues,
    handleChangeCountryCode
  } = props

  const [, t] = useLanguage()

  const [searchValue, setSearchValue] = useState('')
  const [countryTypes, setCountryTypes] = useState([])

  const placeholder = (
    <PlaceholderTitle>
      {t('SELECT_A_COUNTRY', 'Select a country')}
    </PlaceholderTitle>
  )

  useEffect(() => {
    const _countryList = []
    if (!countriesState.loading) {
      const _groupsOption = countriesState.countries
        .filter(option => option?.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        .map((country) => {
          return {
            value: country.code,
            content: (
              <Option>{country.name}</Option>
            )
          }
        })

      for (const option of _groupsOption) {
        _countryList.push(option)
      }
    }
    setCountryTypes(_countryList)
  }, [countriesState, searchValue])

  return (
    <>
      {!countriesState.loading ? (
        <MultiSelect
          placeholder={placeholder}
          defaultValue={filterValues.countryCode}
          options={countryTypes}
          onChange={(code) => handleChangeCountryCode(code)}
          optionInnerMaxHeight='200px'
          isShowSearchBar
          searchBarIsCustomLayout
          searchBarIsNotLazyLoad
          searchValue={searchValue}
          handleChangeSearch={(val) => setSearchValue(val)}
        />
      ) : (
        <SkeletonWrapper>
          <Skeleton style={{ height: '57px' }} />
        </SkeletonWrapper>
      )}
    </>
  )
}

export const CountryFilter = (props) => {
  const countryFilterProps = {
    ...props,
    UIComponent: CountryFilterUI
  }
  return <CountryListControler {...countryFilterProps} />
}
