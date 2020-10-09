import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { BusinessProductsListing } from '../../../src/components/BusinessProductsListing'

export const BusinessProductsList = (props) => {
  const { store } = useParams()
  const history = useHistory()

  const businessProductsProps = {
    ...props,
    store,
    productRedirect: ({ slug, category, product }) => {
      if (!category && !product) {
        return history.push(`/store/${slug}`)
      }
      return history.push(`/store/${slug}?category=${category}&product=${product}`)
    },
    handleSearchRedirect: () => {
      history.push('/search')
    }
  }

  return (
    <BusinessProductsListing {...businessProductsProps} />
  )
}
