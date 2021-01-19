import React from 'react'
import { mount } from '@cypress/react'
import { ProductIngredient } from '../components/ProductIngredient'
import ProviderMock from '../__mocks__/ProviderMock'

const ingredient = { id: 7, product_id: 1318, name: 'ingredient#1', image: null }
const state = { id: 7, name: 'uno', selected: true }

describe('Mounting Product Ingredient component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <ProductIngredient
          state={state}
          ingredient={ingredient}
        />
      </ProviderMock>
    )
    cy.get('div span').contains(ingredient.name).should('be.visible')
  })
})
