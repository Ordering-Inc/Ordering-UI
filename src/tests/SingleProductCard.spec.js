import React from 'react'
import { mount } from '@cypress/react'
import { SingleProductCard } from '../components/SingleProductCard'
import ProviderMock from '../__mocks__/ProviderMock'

const product = {
  name: 'Foo',
  description: 'Bar',
  price: 5,
  images: 'https://picsum.photos/200'
}

describe('Mounting Single Product Card component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <SingleProductCard
          product={product}
          businessId={41}
        />
      </ProviderMock>
    )
    cy.get('h1').contains(product.name).should('be.visible')
    cy.get('p').contains(product.description).should('be.visible')
    cy.get('span').contains(product.price).should('be.visible')
    cy.get('div.image').should('be.visible')
  })
})
