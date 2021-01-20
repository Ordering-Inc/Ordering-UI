import React from 'react'
import { mount } from '@cypress/react'
import ProviderMock from '../__mocks__/ProviderMock'
import { ResetPassword } from '../components/ResetPassword'

const code = '1234567890'
const random = '1234567890'
const handleResetPassword = () => { console.log('Reset password fn') }

describe('Mounting Reset Password component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <ResetPassword
          code={code}
          random={random}
          handleResetPassword={handleResetPassword}
        />
      </ProviderMock>
    )
    cy.get('[name="password"]').type('test2020')
    cy.get('[name="confirm-password"]').type('test2020')
    cy.get('button[type="submit"]').click()
  })
})
