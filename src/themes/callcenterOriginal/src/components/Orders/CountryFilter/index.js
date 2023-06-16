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

  const placeholder = (
    <PlaceholderTitle>
      {t('SELECT_A_COUNTRY', 'Select a country')}
    </PlaceholderTitle>
  )

  const [countryTypes, setCountryTypes] = useState([])

  useEffect(() => {
    const _countryList = []
    if (!countriesState.loading) {
      const _groupsOption = countriesState.countries.map((country) => {
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
  }, [countriesState])

  return (
    <>
      {!countriesState.loading ? (
        <MultiSelect
          placeholder={placeholder}
          defaultValue={filterValues.countryCode}
          options={countryTypes}
          onChange={(code) => handleChangeCountryCode(code)}
          optionInnerMaxHeight='200px'
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
