import React from 'react'
import { mount } from '@cypress/react'
import { ForgotPasswordForm } from '../components/ForgotPasswordForm'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Forgot password component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <ForgotPasswordForm elementLinkToLogin={<a>Login</a>} />
      </ProviderMock>
    )
    cy.get('div').contains('Login').should('be.visible')
    cy.get('input').type('superadmin@ordering.co')
    cy.get('button[type=submit]').click()
  })
})
