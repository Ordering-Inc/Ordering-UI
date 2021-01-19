import React from 'react'
import { mount } from '@cypress/react'
import { BusinessInformation } from '../components/BusinessInformation'
import ProviderMock from '../__mocks__/ProviderMock'

const business = {
  header: 'https://picsum.photos/200',
  logo: 'https://picsum.photos/200',
  name: 'testing',
  description: 'foo bar',
  reviews: {
    total: 5
  },
  delivery_time: '1:0',
  pickup_time: '1:0',
  distance: 5,
  delivery_price: 5
}

describe('Mounting Business Information component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <BusinessInformation
          business={business}
        />
      </ProviderMock>
    )
    cy.get('p').contains(business.description).should('be.visible')
  })
})
