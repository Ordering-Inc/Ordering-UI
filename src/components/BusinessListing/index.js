import React from 'react'
import {
  BusinessContainer,
  BusinessList
} from './styles'

import { BusinessTypeFilter } from '../../../src/components/BusinessTypeFilter'
import { BusinessController } from '../../../src/components/BusinessController'

export const BusinessListing = (props) => {
  return (
    <BusinessContainer>
      <BusinessTypeFilter ordering={props.ordering} />
      <BusinessList>
        {Array(5).fill().map((_, i) => (
          <BusinessController key={i} ordering={props.ordering} />
        ))}
      </BusinessList>
    </BusinessContainer>
  )
}
