import React, { useEffect, useState } from 'react'
import { useLanguage, useUtils } from 'ordering-components'
import { useTheme } from 'styled-components'
import { DefaultSelect as Select } from '../../../../styles'
import {
  SelectWrapper,
  Option
} from './styles'

export const SelectBusinesses = (props) => {
  const {
    businessList,
    selectedBusiness,
    setSelectedBusiness
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const [businessOptions, setBusinessOptions] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const onChange = (val) => {
    const findStore = businessList?.businesses.find(store => store?.slug === val)
    setSelectedBusiness(findStore)
    setSearchValue('')
  }

  useEffect(() => {
    if (businessList?.loading || !businessList?.businesses) return
    const _businessOptions = []
    businessList.businesses.filter(business => (business?.name || '').toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())).map(business => {
      _businessOptions.push({
        value: business?.slug,
        content: (
          <Option>
            <img src={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} alt='' />
            <span>{business?.name}</span>
          </Option>
        )
      })
    })
    setBusinessOptions(_businessOptions)
  }, [businessList, searchValue])

  useEffect(() => {
    if (!selectedBusiness || businessList?.loading || !businessList?.businesses) return
    const found = businessList.businesses.find(store => store?.slug === selectedBusiness?.slug)
    if (!found) setSelectedBusiness(null)
  }, [businessList, selectedBusiness])

  return (
    <SelectWrapper>
      <p>{t('SELECT_BUSINESS', 'Select business')}</p>
      <Select
        placeholder={<Option>{t('SELECT_BUSINESS', 'Select business')}</Option>}
        options={businessOptions}
        defaultValue={selectedBusiness?.slug}
        onChange={onChange}
        optionInnerMaxHeight='300px'
        isShowSearchBar
        searchValue={searchValue}
        handleChangeSearch={setSearchValue}
      />
    </SelectWrapper>
  )
}
