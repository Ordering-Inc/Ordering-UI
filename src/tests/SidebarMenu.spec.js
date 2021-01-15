import React from 'react'
import { mount } from '@cypress/react'
import { SidebarMenu } from '../components/SidebarMenu'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Sidebar Menu component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <SidebarMenu />
      </ProviderMock>
    )
    cy.viewport(768, 660)
    cy.get('button[aria-label=menu]').should('be.visible')
    cy.get('button[aria-label=menu]').click()
    cy.get('div#sidebar_menu').should('be.visible')
    cy.get('span').contains('Home').should('be.visible')
    cy.get('span').contains('Sign in').should('be.visible')
    cy.get('span').contains('Sign up').should('be.visible')
  })
})
