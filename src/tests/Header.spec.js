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
    cy.get('.sc-puFaA > #select-input > .sc-AxiKw').should('be.visible').click()
    cy.get('.sc-fznzqM').should('be.visible').click()
    cy.get('.sc-fzokOt').should('be.visible').click()
    cy.get('.gIyccs').should('be.visible')
    cy.get('.yRYjz').should('be.visible')
    cy.get('.sc-fzplWN > #select-input > .sc-AxiKw').should('be.visible').click()
  })
})
