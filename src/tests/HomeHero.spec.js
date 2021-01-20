import React from 'react'
import { mount } from '@cypress/react'
import { HomeHero } from '../components/HomeHero'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Home Hero component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <HomeHero />
      </ProviderMock>
    )
    cy.get('h1').should('contain.text', 'Welcome')
    cy.get('p').should('contain.text', 'Let’s start to order now')
    cy.get('div').should('contain.text', 'Type an address')
    cy.get('button').contains('Find businesses').should('exist').click()
  })
})
