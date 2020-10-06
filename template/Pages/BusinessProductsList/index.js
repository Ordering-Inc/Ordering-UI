import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { BusinessProductsListing } from '../../../src/components/BusinessProductsListing'

export const BusinessProductsList = (props) => {
  const { store } = useParams()
  const history = useHistory()
  const businessProductsProps = {
    ...props,
    handleSearchRedirect: () => {
      history.push('/search')
    }
  }

  return (
    <BusinessProductsListing {...businessProductsProps} store={store} />
  )
}
