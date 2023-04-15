import React from 'react'
import { mount } from '@cypress/react'
import { SpinnerLoader } from '../components/SpinnerLoader'
import ProviderMock from '../__mocks__/ProviderMock'

const content = 'Loading'

describe('Mounting Spinner Loader component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <SpinnerLoader
          content={content}
        />
      </ProviderMock>
    )
    cy.get('h1').contains(content).should('be.visible')
    cy.get('div.spinner').should('be.visible')
  })
})
