import React from 'react'
import { useParams } from 'react-router-dom'
import { BusinessProductsListing } from '../../../src/components/BusinessProductsListing'

export const BusinessProductsList = (props) => {
  const { store } = useParams()

  return (
    <BusinessProductsListing {...props} store={store} />
  )
}
