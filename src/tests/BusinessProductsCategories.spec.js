import React from 'react'
import { mount } from '@cypress/react'
import { BusinessProductsCategories } from '../components/BusinessProductsCategories'
import ProviderMock from '../__mocks__/ProviderMock'

const categories = [
  { id: 1, name: 'test#1' },
  { id: 2, name: 'test#2' },
  { id: 3, name: 'test#3' },
  { id: 4, name: 'test#4' }
]

const categorySelected = { id: 1 }

describe('Mounting Business Products Categories component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <BusinessProductsCategories
          categories={categories}
          categorySelected={categorySelected}
        />
      </ProviderMock>
    )
    cy.get('span#autoscroll').find('div').should('have.length', categories.length)
  })
})
