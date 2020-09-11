import React from 'react'

import { BusinessTypeFilter } from '../../../src/components/BusinessTypeFilter'
import { BusinessController } from '../../../src/components/BusinessController'

export const BusinessListing = (props) => {
  return (
    <>
      <BusinessTypeFilter ordering={props.ordering} />
      <BusinessController ordering={props.ordering} />
    </>
  )
}
