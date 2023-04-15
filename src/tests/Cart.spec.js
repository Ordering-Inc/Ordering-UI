import React from 'react'
import { mount } from '@cypress/react'
import { Cart } from '../components/Cart'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Cart component', () => {
  const cart = {
    business: {
      currency: 'USD',
      header: 'https://res.cloudinary.com/ordering2/image/upload/v1562277717/tiznbig1lvmegwemunpn.png',
      logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562277711/bk6kvzrnfkvqgav9qi7j.png',
      name: 'McBonalds',
      service_fee: 9,
      slug: 'mcbonalds',
      tax: 10,
      tax_type: 1
    },
    business_id: 41,
    paymethod_data: null,
    products: [{
      balance: 1,
      business_id: 41,
      category_id: 249,
      code: 'u_BXNwZsRH',
      comment: null,
      id: 1304,
      images: 'https://res.cloudinary.com/ordering2/image/upload/v1606327261/e9hov207zdviitts8zkb.png',
      inventoried: false,
      name: 'Blue Raspberry-Lemon Side Kick.',
      price: 65,
      quantity: 1,
      total: 65,
      valid: true,
      valid_menu: true,
      valid_quantity: true
    }],
    quantity: 1,
    service_fee: 5.318181818181818,
    status: 0,
    subtotal: 59.09090909090909,
    tax: 5.909090909090909,
    total: 70.31818181818181,
    user_id: 18,
    uuid: '972dc9dd-85c7-4e8f-a7d0-848983010eaa',
    valid_schedule: true,
    valid_products: true,
    valid: true
  }
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <Cart cart={cart} isProducts={1} />
      </ProviderMock>
    )
    cy.get('.cart').should('be.visible').click()
    cy.get('div').contains('total').should('be.visible')
  })
})
