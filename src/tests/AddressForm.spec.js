import React from 'react'
import { mount } from '@cypress/react'
import { AddressForm } from '../components/AddressForm'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Address Form component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <AddressForm />
      </ProviderMock>
    )

    cy.get('div.address-form').should('be.visible')
    cy.wait(4000)
    cy.get('form').should('be.visible')
    cy.get('input.input-autocomplete').should('be.visible')
    cy.get('button.gps-button').should('be.visible')
    cy.get('input.internal_number').should('be.visible')
    cy.get('input.zipcode').should('be.visible')
    cy.get('textarea').should('be.visible')
    cy.get('button').contains('Cancel').should('exist')
  })
})
