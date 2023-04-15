import React from 'react'
import { mount } from '@cypress/react'
import { StripeRedirectForm } from '../components/StripeRedirectForm'
import ProviderMock from '../__mocks__/ProviderMock'

const paymethods = [
  { name: 'Bancontact', value: 'bancontact' },
  { name: 'Alipay', value: 'alipay' },
  { name: 'Giropay', value: 'giropay' },
  { name: 'iDEAL', value: 'ideal' }
]

describe('Mounting Stripe Redirect Form component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <StripeRedirectForm
          paymethods={paymethods}
        />
      </ProviderMock>
    )
    cy.get('select').select('Alipay').should('have.value', 'alipay')
    cy.get('input[name=name]').type('User name')
    cy.get('input[name=email]').type('User@email.com')
    cy.get('Button').contains('OK').should('be.visible').click()
  })
})
