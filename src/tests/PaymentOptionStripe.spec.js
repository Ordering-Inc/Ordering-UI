import React from 'react'
import { mount } from '@cypress/react'
import { PaymentOptionStripe } from '../components/PaymentOptionStripe'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Payment Options component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <PaymentOptionStripe />
      </ProviderMock>
    )
    cy.get('p').should('contain', 'Sorry, you need to login to use this method')
  })
})
