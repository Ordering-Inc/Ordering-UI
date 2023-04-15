import React from 'react'
import { mount } from '@cypress/react'
import { BusinessItemAccordion } from '../components/BusinessItemAccordion'
import ProviderMock from '../__mocks__/ProviderMock'

const cart = {
  uuid: '9c99f26b-4600-4456-bd22-259120e5d666',
  total: 10,
  business: {
    name: 'McBonalds',
    slug: 'mcbonalds',
    logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562277711/bk6kvzrnfkvqgav9qi7j.png',
    header: 'https://res.cloudinary.com/ordering2/image/upload/v1562277717/tiznbig1lvmegwemunpn.png',
    service_fee: 9,
    tax_type: 1,
    tax: 0,
    currency: 'USD'
  }
}

describe('Mounting Business Item Accordion component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <BusinessItemAccordion
          uuid={cart.uuid}
          isProducts
          orderTotal={cart.total}
          business={cart.business}
          isValidProducts
        />
      </ProviderMock>
    )
    cy.wait(4000)
    cy.get('div.total > p').contains(`${cart.total},00 $`).should('be.visible')
    cy.get('div.info > h2').contains(cart.business.name).should('be.visible')
  })
})
