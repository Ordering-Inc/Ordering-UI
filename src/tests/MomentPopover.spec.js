import React from 'react'
import { mount } from '@cypress/react'
import { MomentPopover } from '../components/MomentPopover'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting MomentControl component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <MomentPopover open />
      </ProviderMock>
    )
    cy.get('.moment-popover').should('be.visible').click()
  })
})
