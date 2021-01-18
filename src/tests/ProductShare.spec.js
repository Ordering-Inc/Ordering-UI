import React from 'react'
import { mount } from '@cypress/react'
import { ProductShare } from '../components/ProductShare'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Product share component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <ProductShare />
      </ProviderMock>
    )
    cy.get('svg').should('be.visible').click()
    cy.get('div.a2a_kit').should('be.visible')
  })
})
