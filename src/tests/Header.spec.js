import React from 'react'
import { mount } from '@cypress/react'
import { Header } from '../components/Header'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Header component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <Header isHome />
      </ProviderMock>
    )
    cy.wait(4000)
    cy.get('[alt="Logotype"]').should('be.visible')
    cy.get('#select-input').should('be.visible').click()
    cy.get('div').contains('ASAP').should('be.visible').click()
    cy.get('div').contains('Select an address').should('be.visible').click()
    cy.get('[name="signin"]').should('be.visible')
    cy.get('[name="signup"]').should('be.visible')
    cy.get('div').contains('EN').should('be.visible').click()
  })
})
