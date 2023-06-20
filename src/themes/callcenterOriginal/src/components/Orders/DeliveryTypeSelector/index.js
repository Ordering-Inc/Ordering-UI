import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components'
import { MultiSelect } from '../../../styles/MultiSelect'

import {
  Option,
  PlaceholderTitle
} from './styles'

export const DeliveryTypeSelector = (props) => {
  const {
    filterValues,
    handleChangeDeliveryType
  } = props

  const [, t] = useLanguage()

  const [searchValue, setSearchValue] = useState('')
  const [deliveryTypes, setDeliveryTypes] = useState([])

  const deliveryTypeList = [
    { value: 1, name: t('DELIVERY', 'Delivery') },
    { value: 2, name: t('PICKUP', 'Pickup') },
    { value: 3, name: t('EAT_IN', 'Eat in') },
    { value: 4, name: t('CURBSIDE', 'Curbside') },
    { value: 5, name: t('DRIVE_THRU', 'Drive thru') }
  ]

  useEffect(() => {
    const _deliveryTypes = deliveryTypeList
      .filter(option => option?.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      .map((type) => {
        return {
          value: type.value,
          content: (
            <Option>{type.name}</Option>
          )
        }
      })
    setDeliveryTypes(_deliveryTypes)
  }, [searchValue])

  const placeholder = <PlaceholderTitle>{t('SELECT_DELIVERY_TYPE', 'Select delivery type')}</PlaceholderTitle>

  return (
    <MultiSelect
      placeholder={placeholder}
      defaultValue={filterValues.deliveryTypes}
      options={deliveryTypes}
      onChange={(deliveryType) => handleChangeDeliveryType(deliveryType)}
      isShowSearchBar
      searchBarIsCustomLayout
      searchBarIsNotLazyLoad
      searchValue={searchValue}
      handleChangeSearch={(val) => setSearchValue(val)}
    />
  )
}
