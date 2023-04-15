import React from 'react'
import { mount } from '@cypress/react'
import { Footer } from '../components/Footer'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Footer component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <Footer />
      </ProviderMock>
    )
    cy.get('h1[name="title-1"]').should('be.visible')
    cy.get('h1[name="title-2"]').should('be.visible')
    cy.get('h1[name="title-3"]').should('be.visible')
    cy.get('a').contains('Ordering').should('be.visible').click()
    cy.get('[aria-label="link2"]').should('be.visible').click()
    cy.get('[aria-label="link3"]').should('be.visible').click()
    cy.get('[aria-label="link4"]').should('be.visible').click()
    cy.get('[aria-label="link5"]').should('be.visible').click()
    cy.get('[aria-label="link6"]').should('be.visible').click()
    cy.get('[aria-label="facebook"] > svg').should('be.visible').click()
    cy.get('[aria-label="instagram"] > svg').should('be.visible').click()
    cy.get('[aria-label="twitter"] > svg').should('be.visible').click()
    cy.get('[aria-label="youtube"] > svg').should('be.visible').click()
    cy.get('[aria-label="whatsapp"] > svg').should('be.visible').click()
    cy.get('[name="copy"]').should('be.visible')
  })
})
