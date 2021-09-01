import React from 'react'
import { BusinessBranchList } from '../BusinessBrandList'
import { BusinessBranchListing as BusinessBranchListingController } from './naked'
import {
  BranchListingContainer
} from './styles'

const BusinessBranchListingUI = (props) => {
  const {
    brandListState
  } = props

  return (
    <BranchListingContainer>
      {
        brandListState?.loading ? (
          [...Array(4).keys()].map(i => (
            <BusinessBranchList key={i} isSkeleton />
          ))
        ) : (
          brandListState?.branches?.length > 0 && (
            brandListState?.branches.map((branch, i) => (
              <BusinessBranchList
                {...props}
                branch={branch}
                key={i}
              />
            ))
          )
        )
      }
    </BranchListingContainer>
  )
}

export const BusinessBranchListing = (props) => {
  const businessBranchListingProps = {
    ...props,
    UIComponent: BusinessBranchListingUI
  }
  return <BusinessBranchListingController {...businessBranchListingProps} />
}
