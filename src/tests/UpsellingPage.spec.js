import React from 'react'
import { mount } from '@cypress/react'
import { UpsellingPage } from '../components/UpsellingPage'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Upselling Page component', () => {
  const business = {
    currency: 'USD',
    header: 'https://res.cloudinary.com/ordering2/image/upload/v1562277717/tiznbig1lvmegwemunpn.png',
    logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562277711/bk6kvzrnfkvqgav9qi7j.png',
    name: 'McBonalds',
    service_fee: 9,
    slug: 'mcbonalds',
    tax: 10,
    tax_type: 1
  }
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <UpsellingPage
          businessId={41}
          business={business}
          cartProducts={[]}
          onClose={() => {}}
          onAccept={() => {}}
          openUpselling
          canOpenUpselling
          setCanOpenUpselling={() => {}}
          handleUpsellingPage={() => {}}
        />
      </ProviderMock>
    )
    cy.get('.popup-component').should('be.visible')
    cy.get('div[name="Chipotle BBQ Snack Wrap (Grilled or Crispy)"]').should('be.visible')
  })
})
