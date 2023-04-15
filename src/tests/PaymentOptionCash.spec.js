import React from 'react'
import { mount } from '@cypress/react'
import { PaymentOptionCash } from '../components/PaymentOptionCash'
import ProviderMock from '../__mocks__/ProviderMock'

const orderTotal = 5

describe('Mounting Payment Option Cash component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <PaymentOptionCash
          orderTotal={orderTotal}
        />
      </ProviderMock>
    )
    cy.get('label').should('contain', 'Don\'t have exact amount? Let us know with how much will you pay')
    cy.get('input[name=cash]').type(4)
    cy.get('p').should('contain', `This value must be greater than order total: ${orderTotal},00 $`)
  })
})
