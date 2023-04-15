import React from 'react'
import { mount } from '@cypress/react'
import { VerticalOrdersLayout } from '../components/VerticalOrdersLayout'
import ProviderMock from '../__mocks__/ProviderMock'

const getOrderStatus = () => { console.log('get order status fn') }
const loadMoreOrders = () => { console.log('load more orders fn') }
const onOrderClick = () => { console.log('on order click fn') }
const pagination = {}
const orders = [
  { id: 1, total: 55 },
  { id: 2, total: 55 }
]

describe('Mounting Previous orders component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <VerticalOrdersLayout
          orders={orders}
          pagination={pagination}
          onOrderClick={onOrderClick}
          loadMoreOrders={loadMoreOrders}
          getOrderStatus={getOrderStatus}
        />
      </ProviderMock>
    )
    cy.get('#orders-container').find('div#order-card').should('have.length', orders.length)
    cy.get('p[name=view_order]').should('be.visible')
    cy.get('button').contains('Reorder').should('be.visible')
  })
})
