import React from 'react'
import { mount } from '@cypress/react'
import { Cms } from '../components/Cms'
import ProviderMock from '../__mocks__/ProviderMock'

const content = 'Sorry, the selected page was not found'

describe('Mounting Cms component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <Cms pageSlug='testing' />
      </ProviderMock>
    )
    cy.get('h1').contains(content).should('be.visible')
    cy.get('Button').contains('Go to pages list').should('be.visible')
  })
})
