import React from 'react'
import { mount } from '@cypress/react'
import { InputPhoneNumber } from '../components/InputPhoneNumber'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting InputPhoneNumber component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <InputPhoneNumber />
      </ProviderMock>
    )
    cy.get('input').type('4241234567').should('exist')
  })
})
