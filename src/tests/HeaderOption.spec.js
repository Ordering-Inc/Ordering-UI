import React from 'react'
import { mount } from '@cypress/react'
import { HeaderOption } from '../components/HeaderOption'
import ProviderMock from '../__mocks__/ProviderMock'

const variant = 'moment'

describe('Mounting Header Option component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <HeaderOption variant={variant} />
      </ProviderMock>
    )
    cy.get('div').should('contain.text', 'ASAP')
    cy.get('svg#icon').should('be.visible')
  })
})
