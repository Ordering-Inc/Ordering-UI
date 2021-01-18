import React from 'react'
import { mount } from '@cypress/react'
import { UserPopover } from '../components/UserPopover'
import ProviderMock from '../__mocks__/ProviderMock'
import { capitalize } from '../utils'

const optionsList = [
  { name: 'testing#1', pathname: '/profile' },
  { name: 'testing#2', pathname: '/profile/orders' }
]

describe('Mounting User Popover component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <UserPopover
          open
          optionsList={optionsList}
        />
      </ProviderMock>
    )
    cy.get('a').each(($a, $i) => {
      cy.wrap($a).should('contain.text', capitalize(optionsList[$i].name))
    })
  })
})
