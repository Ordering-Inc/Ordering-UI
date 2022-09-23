import React from 'react'

import {
  ProductsList,
  ProductsListContainer
} from './styles'

import { AutoScroll } from '../../AutoScroll'
import { SingleProfessionalCard } from '../../SingleProfessionalCard'

export const PreviousProfessionalOrdered = (props) => {
  const {
    professionals
  } = props

  return (
    <ProductsListContainer isLoading={professionals?.length < 1}>
      <ProductsList>
        <AutoScroll>
          {professionals?.map(professional => (
            <SingleProfessionalCard
              key={professional?.id}
              professional={professional}
            />
          ))}
        </AutoScroll>
      </ProductsList>
    </ProductsListContainer>
  )
}
