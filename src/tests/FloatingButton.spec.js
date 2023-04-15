import React from 'react'
import { mount } from '@cypress/react'
import { FloatingButton } from '../components/FloatingButton'
import ProviderMock from '../__mocks__/ProviderMock'

const handleClick = () => { console.log('handle click') }
const btnText = 'Testing'

describe('Mounting Floating button component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <FloatingButton
          btnText={btnText}
          btnValue={10}
          handleClick={handleClick}
        />
      </ProviderMock>
    )
    cy.get('button').contains(btnText).should('be.visible')
  })
})
