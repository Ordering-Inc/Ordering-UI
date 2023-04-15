import React from 'react'
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

  const deliveryTypes = [
    { value: 1, content: <Option>{t('DELIVERY', 'Delivery')}</Option> },
    { value: 2, content: <Option>{t('PICKUP', 'Pickup')}</Option> },
    { value: 3, content: <Option>{t('EAT_IN', 'Eat in')}</Option> },
    { value: 4, content: <Option>{t('CURBSIDE', 'Curbside')}</Option> },
    { value: 5, content: <Option>{t('DRIVE_THRU', 'Drive thru')}</Option> }
  ]
  const placeholder = <PlaceholderTitle>{t('SELECT_DELIVERY_TYPE', 'Select delivery type')}</PlaceholderTitle>

  return (
    <MultiSelect
      placeholder={placeholder}
      defaultValue={filterValues.deliveryTypes}
      options={deliveryTypes}
      onChange={(deliveryType) => handleChangeDeliveryType(deliveryType)}
    />
  )
}
