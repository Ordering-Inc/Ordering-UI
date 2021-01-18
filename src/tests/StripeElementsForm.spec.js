import React from 'react'
import { mount } from '@cypress/react'
import { StripeElementsForm } from '../components/StripeElementsForm'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Stripe Elements Form component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <StripeElementsForm />
      </ProviderMock>
    )
    cy.get('p').contains('Something is wrong!').should('be.visible')
  })
})
