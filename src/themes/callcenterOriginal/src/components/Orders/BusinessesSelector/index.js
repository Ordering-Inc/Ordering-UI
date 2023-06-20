import React, { useEffect, useState } from 'react'
import {
  useLanguage
} from 'ordering-components'
import { MultiSelect } from '../../../styles'
import {
  Option,
  PlaceholderTitle,
  OptionContent,
  OptionName,
  OptionCategory,
  WrapperBusinessImage,
  BusinessImage
} from './styles'

export const BusinessesSelector = (props) => {
  const {
    filterValues,
    businessesList,
    handleChangeBusinesses
  } = props

  const [, t] = useLanguage()
  const [businessTypes, setBusinessTypes] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const Placeholder = <PlaceholderTitle>{t('SELECT_BUSINESS', 'Select business')}</PlaceholderTitle>
  const businessesLoading = [{ value: 'default', content: <Option>{t('BUSINESSES_LOADING', 'Businesses loading')}...</Option> }]

  useEffect(() => {
    const _businessesOptionList = []
    if (!businessesList.loading) {
      const _businessesOption = businessesList.businesses
        .filter(option => option?.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        .map((business) => {
          return {
            value: business.id,
            content: (
              <Option>
                <WrapperBusinessImage>
                  {business.logo && <BusinessImage bgimage={business.logo} />}
                </WrapperBusinessImage>
                <OptionContent>
                  <OptionName>
                    {business.name}
                  </OptionName>
                  <OptionCategory>
                    {business?.alcohol && t('ALCOHOL', 'Alcohol')}
                    {business?.food && t('FOOD', 'Food')}
                    {business?.groceries && t('GROCERIES', 'Groceries')}
                    {business?.laundry && t('LAUNDRY', 'Laundry')}
                  </OptionCategory>
                </OptionContent>
              </Option>
            )
          }
        })

      for (const option of _businessesOption) {
        _businessesOptionList.push(option)
      }
    }

    setBusinessTypes(_businessesOptionList)
  }, [businessesList, searchValue])

  return (
    <>
      {!businessesList.loading ? (
        <MultiSelect
          defaultValue={filterValues.businessIds}
          placeholder={Placeholder}
          options={businessTypes}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          optionBottomBorder
          onChange={(business) => handleChangeBusinesses(business)}
          isShowSearchBar
          searchBarIsCustomLayout
          searchBarIsNotLazyLoad
          searchValue={searchValue}
          handleChangeSearch={(val) => setSearchValue(val)}
        />
      ) : (
        <MultiSelect
          defaultValue='default'
          options={businessesLoading}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          optionBottomBorder
          isShowSearchBar
          searchBarIsCustomLayout
          searchBarIsNotLazyLoad
          searchValue={searchValue}
          handleChangeSearch={(val) => setSearchValue(val)}
        />
      )}
    </>
  )
}
