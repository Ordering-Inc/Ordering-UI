import React from 'react'
import { mount } from '@cypress/react'
import { FacebookLoginButton } from '../components/FacebookLogin'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Facebook Login Button component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <FacebookLoginButton />
      </ProviderMock>
    )
    cy.get('button').contains('Login with Facebook').should('be.visible').click()
  })
})
