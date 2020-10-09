import React from 'react'
import { BusinessTypeFilter as BusinessTypeFilterController, useLanguage } from 'ordering-components'

import { Tabs, Tab } from '../../styles/Tabs'

import { TypeContainer } from './styles'

const BusinessTypeFilterUI = (props) => {
  const {
    businessTypes,
    currentTypeSelected,
    handleChangeBusinessType
  } = props
  const [, t] = useLanguage()
  return (
    <TypeContainer>
      <Tabs variant='primary'>
        {businessTypes && businessTypes.length > 0 && businessTypes.map((type) => (
          <Tab className='category' active={type.value === currentTypeSelected} key={type.value} onClick={() => handleChangeBusinessType(type.value)}>
            {t(`BUSINESS_TYPE_${type.value ? type.value.toUpperCase() : 'ALL'}`, type.key)}
          </Tab>
        ))}
      </Tabs>
    </TypeContainer>
  )
}

export const BusinessTypeFilter = (props) => {
  const businessTypeFilterProps = {
    ...props,
    UIComponent: BusinessTypeFilterUI,
    businessTypes: props.businessTypes || [
      { key: 'All', value: null },
      { key: 'Food', value: 'food' },
      { key: 'Alcohol', value: 'alcohol' },
      { key: 'Groceries', value: 'groceries' },
      { key: 'Laundry', value: 'laundry' }
    ],
    defaultBusinessType: props.defaultBusinessType || null,
    onChangeBusinessType: props.handleChangeBusinessType
  }

  return (
    <BusinessTypeFilterController {...businessTypeFilterProps} />
  )
}
