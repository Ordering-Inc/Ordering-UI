import React from 'react'
import { mount } from '@cypress/react'
import { CardForm } from '../components/CardForm'
import ProviderMock from '../__mocks__/ProviderMock'
import { loadStripe } from '@stripe/stripe-js/pure'
import { Elements } from '@stripe/react-stripe-js'

const publicKey = 'pk_test_SP5YYDD4PdEVfH8U2QJhsVxR'

describe('Mounting Card Form component', () => {
  it('Component UI', () => {
    mount(
      <Elements stripe={loadStripe(publicKey)}>
        <ProviderMock>
          <CardForm />
        </ProviderMock>
      </Elements>
    )
    cy.get('form').should('be.visible')
    cy.get('button').contains('Cancel').should('be.visible')
    cy.get('button').contains('Add').should('be.visible')
  })
})
