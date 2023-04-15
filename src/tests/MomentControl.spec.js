import React from 'react'
import { mount } from '@cypress/react'
import { MomentControl } from '../components/MomentControl'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting MomentControl component', () => {
  const currentDate = new Date()
  const momentProps = {
    maxDate: currentDate
  }
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <MomentControl {...momentProps} />
      </ProviderMock>
    )
    cy.get('[name="days"]').should('be.visible')
    cy.get('[name="hours"]').should('be.visible')
  })
})
