import React from 'react'
import { mount } from '@cypress/react'
import { MomentContent } from '../components/MomentContent'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting MomentContent component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <MomentContent />
      </ProviderMock>
    )
    cy.wait(8000)
    cy.get('[name="days"]').should('be.visible')
    cy.get('[name="hours"]').should('be.visible')
    cy.get('div').contains('As soon as possible').should('be.visible').click()
  })
})
