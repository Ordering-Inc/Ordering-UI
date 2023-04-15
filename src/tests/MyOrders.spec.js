import React from 'react'
import { mount } from '@cypress/react'
import { MyOrders } from '../components/MyOrders'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting My Orders component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <MyOrders />
      </ProviderMock>
    )
    cy.get('h1').should('contain.text', 'Active Orders')
    cy.get('h1').should('contain.text', 'Previous Orders')
  })
})
