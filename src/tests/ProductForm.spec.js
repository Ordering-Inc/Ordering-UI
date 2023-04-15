import React from 'react'
import { mount } from '@cypress/react'
import { ProductForm } from '../components/ProductForm'
import ProviderMock from '../__mocks__/ProviderMock'

const product = {
  id: 1304,
  category_id: 249,
  images: 'https://res.cloudinary.com/ordering2/image/upload/v1606327261/e9hov207zdviitts8zkb.png',
  business_id: 41,
  inventoried: false,
  stock: 0,
  name: 'Blue Raspberry-Lemon Side Kick.',
  price: 65,
  code: 'y2ZwEAgJqd',
  comment: null,
  quantity: 1,
  total: 65,
  balance: 1,
  valid_quantity: true,
  ingredients: [],
  options: {},
  valid_menu: true,
  valid: true,
  extras: []
}

describe('Mounting Product form component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <ProductForm
          businessSlug='mcbonalds'
          businessId={41}
          product={product}
        />
      </ProviderMock>
    )
    cy.get('h1').should('be.visible')
    cy.get('[name="icon-share"]').should('be.visible')
    cy.get('textarea').type('test')
    cy.get('.incdec-control > :nth-child(3)').should('be.visible').click()
    cy.get('.incdec-control > :nth-child(1)').should('be.visible')
    cy.get('button').click()
    cy.get('[type="email"]').type('sergio@ordering.co')
    cy.get('[type="password"]').type('test2020')
    cy.get('[type=submit]').contains('Login').click()
  })
})
