import React from 'react'
import { mount } from '@cypress/react'
import { GoogleGpsButton } from '../components/GoogleGpsButton'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Google Gps Button component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <GoogleGpsButton />
      </ProviderMock>
    )
    cy.get('button').contains('GPS').should('be.visible')
  })
})
