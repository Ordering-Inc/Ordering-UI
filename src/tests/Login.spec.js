import React from 'react'
import { mount } from '@cypress/react'
import { LoginForm } from '../components/LoginForm'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Login component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <LoginForm
          useLoginByCellphone
          elementLinkToSignup={<a>Create account</a>}
          elementLinkToForgotPassword={<a>Reset password</a>}
        />
      </ProviderMock>
    )

    cy.get('input[type=email]').type('sergio@ordering.co')
    cy.get('input[type=password').type('test2020')
    cy.get('div').contains('Login with Cellphone').click()
    cy.get('input[type="tel"]').type('1234567890')
    cy.get('button[type=submit]').click()
  })
})
