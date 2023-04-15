import React from 'react'
import { mount } from '@cypress/react'
import { AddressDetails } from '../components/AddressDetails'
import ProviderMock from '../__mocks__/ProviderMock'

const address = '5th av. New York.'

describe('Mounting Address details component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <AddressDetails
          businessId={22}
          addressToShow={address}
        />
      </ProviderMock>
    )
    cy.get('h4').contains(address).should('be.visible')
    cy.get('img#google-maps-image').should('be.visible')
  })
})
