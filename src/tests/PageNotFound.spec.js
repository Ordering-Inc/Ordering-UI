import React from 'react'
import { mount } from '@cypress/react'
import { PageNotFound } from '../components/PageNotFound'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Page not found component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <PageNotFound />
      </ProviderMock>
    )
    cy.get('h1').contains('PAGE NOT FOUND').should('be.visible')
  })
})
