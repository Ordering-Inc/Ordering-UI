import React from 'react'
import { mount } from '@cypress/react'
import { AddressesPopover } from '../components/AddressesPopover'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Addresses popover component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <AddressesPopover open />
      </ProviderMock>
    )
    cy.wait(4000)
    cy.get('form').should('be.visible')
  })
})
