import React from 'react'
import { mount } from '@cypress/react'
import { SearchBar } from '../components/SearchBar'
import ProviderMock from '../__mocks__/ProviderMock'

const placeholder = 'Search Businesses'

describe('Mounting Search Bar component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <SearchBar
          placeholder={placeholder}
        />
      </ProviderMock>
    )
    cy.get('input').invoke('attr', 'placeholder').should('contain', placeholder)
  })
})
