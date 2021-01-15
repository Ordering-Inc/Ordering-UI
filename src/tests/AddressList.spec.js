import React from 'react'
import { mount } from '@cypress/react'
import { AddressList } from '../components/AddressList'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Address List component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <AddressList
          userId={25}
          accessToken='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGl2NC1kZXYub3JkZXJpbmcuY29cL3Y0MDBcL2VuXC9sdWlzdjRcL2F1dGgiLCJpYXQiOjE2MTA2NjYxMTUsImV4cCI6MTY0MjIwMjExNSwibmJmIjoxNjEwNjY2MTE1LCJqdGkiOiJRcFlqaTRLMExWVmJnbjBFIiwic3ViIjoyNSwibGV2ZWwiOjN9.VEuyodluyOY6KrgfPUeXJzf5418kVPbcbN0z7pkwudE'
        />
      </ProviderMock>
    )
    cy.get('button').contains('Add Address').should('exist')
    cy.get('ul#list').should('be.visible')

    cy.log('Test functionality')
    cy.get('button').contains('Add Address').click()
    cy.get('div.popup-dialog').should('be.visible')
  })
})
