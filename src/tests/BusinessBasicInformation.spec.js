import React from 'react'
import { mount } from '@cypress/react'
import { BusinessBasicInformation } from '../components/BusinessBasicInformation'
import ProviderMock from '../__mocks__/ProviderMock'

const setOpenBusinessInformation = () => { console.log('set open business information') }
const businessState = {
  loading: false,
  business: {
    header: 'https://picsum.photos/1920/700',
    logo: 'https://picsum.photos/200',
    name: 'Testing',
    reviews: {
      total: 5
    },
    delivery_time: '1:0',
    pickup_time: '1:0',
    distance: 3.4027078537806617,
    delivery_price: 3
  }
}

describe('Mounting Business Basic information component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <BusinessBasicInformation
          businessState={businessState}
          setOpenBusinessInformation={setOpenBusinessInformation}
        />
      </ProviderMock>
    )
    cy.get('#container').should('exist')
    cy.get('.info').should('exist')
    cy.get('.popup').should('exist')
  })
})
