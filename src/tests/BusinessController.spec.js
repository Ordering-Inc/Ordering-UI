import React from 'react'
import { mount } from '@cypress/react'
import { BusinessController } from '../components/BusinessController'
import ProviderMock from '../__mocks__/ProviderMock'

const handleBusinessClick = () => { console.log('handle business click') }
const business = {
  header: 'https://picsum.photos/1920/700',
  logo: 'https://picsum.photos/200',
  name: 'Testing',
  reviews: {
    total: 5
  },
  delivery_time: '1:0',
  pickup_time: '1:0',
  distance: 3.4027078537806617,
  delivery_price: 3,
  open: true
}

describe('Mounting Business Controller component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <BusinessController
          business={business}
          handleCustomClick={handleBusinessClick}
          orderType={1}
        />
      </ProviderMock>
    )
    cy.get('.info').should('exist')
  })
})
