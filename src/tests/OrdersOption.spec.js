import React from 'react'
import { mount } from '@cypress/react'
import { OrdersOption } from '../components/OrdersOption'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Orders Option component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <OrdersOption
          activeOrders
        />
      </ProviderMock>
    )

    cy.get('h1').should('contain.text', 'Sorry, no results found')
  })
})
