import React from 'react'
import { mount } from '@cypress/react'
import { LogoutButton } from '../components/LogoutButton'
import ProviderMock from '../__mocks__/ProviderMock'

const handleClick = () => { console.log('handle click') }
describe('Mounting Logout Button component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <LogoutButton
          onCustomClick={handleClick}
        />
      </ProviderMock>
    )
    cy.get('a').contains('Logout').should('be.visible')
  })
})
