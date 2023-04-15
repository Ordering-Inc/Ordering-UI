import React from 'react'
import { mount } from '@cypress/react'
import { NotFoundSource } from '../components/NotFoundSource'
import ProviderMock from '../__mocks__/ProviderMock'

const content = 'Some error has ocurred'

describe('Mounting Not found source component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <NotFoundSource
          content={content}
        />
      </ProviderMock>
    )
    cy.get('h1').contains(content).should('be.visible')
  })
})
