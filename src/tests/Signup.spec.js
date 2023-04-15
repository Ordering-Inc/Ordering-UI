import React from 'react'
import { mount } from '@cypress/react'
import { SignUpForm } from '../components/SignUpForm'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Sign up component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <SignUpForm />
      </ProviderMock>
    )
    cy.get('[name="name"]').should('be.visible').type('test')
    cy.get('[name="lastname"]').should('be.visible').type('test')
    cy.get('[name="email"]').should('be.visible').type('test@ordering.co')
    cy.get('[name="middle_name"]').should('be.visible').type('test')
    cy.get('[name="second_lastname"]').should('be.visible').type('test')
    cy.get('.PhoneInputInput').should('be.visible').type('584141234123')
    cy.get('[name="password"]').should('be.visible').type('test2021')
    cy.get('button[type=submit]').click()
  })
})
