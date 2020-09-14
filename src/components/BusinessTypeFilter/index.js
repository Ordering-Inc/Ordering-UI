import React from 'react'
import { BusinessTypeFilter as BusinessTypeFilterController } from 'ordering-components'

import { Tabs, Tab } from '../../styles/Tabs'

import { TypeContainer } from './styles'

const BusinessTypeFilterUI = (props) => {
  const {
    businessTypes,
    handleChangeBusinessType
  } = props
  return (
    <TypeContainer>
      <Tabs variant='primary'>
        {businessTypes && businessTypes.length > 0 && businessTypes.map((type, i) => (
          <Tab key={i} onClick={() => handleChangeBusinessType(type.value)}>
            {type.key}
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
    businessTypes: [
      { key: 'All', value: null },
      { key: 'Food', value: 'food' },
      { key: 'Alcohol', value: 'alcohol' },
      { key: 'Groceries', value: 'groceries' },
      { key: 'Laundry', value: 'laundry' }
    ]
  }

  return (
    <BusinessTypeFilterController {...businessTypeFilterProps} />
  )
}
