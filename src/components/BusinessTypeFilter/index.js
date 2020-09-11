import React from 'react'
import { BusinessTypeFilter as BusinessTypeFilterController } from 'ordering-components'

import { Tabs, Tab } from '../../styles/Tabs'

import { TypeContainer } from './styles'

const BusinessTypeFilterUI = (props) => {
  const {
    businessTypes,
    onChangeBusinessType
  } = props
  return (
    <TypeContainer>
      <Tabs variant='primary'>
        {businessTypes && businessTypes.length > 0 && businessTypes.map((type, i) => (
          <Tab key={i} onClick={() => onChangeBusinessType(type)}>
            {type}
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
    businessTypes: ['All', 'Food', 'Alcohol', 'Groceries', 'Laundry']
  }

  return (
    <BusinessTypeFilterController {...businessTypeFilterProps} />
  )
}
