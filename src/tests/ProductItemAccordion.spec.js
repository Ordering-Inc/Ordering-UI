import React from 'react'
import { mount } from '@cypress/react'
import { ProductItemAccordion } from '../components/ProductItemAccordion'
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
  ingredients: {},
  options: {},
  valid_menu: true,
  valid: true
}

describe('Mounting Product Item Accordion component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <ProductItemAccordion
          isCartProduct
          product={product}
        />
      </ProviderMock>
    )
    cy.get('div.info span').contains(product.quantity).should('be.visible')
    cy.get('div.info div h3').contains(product.name).should('be.visible')
  })
})
