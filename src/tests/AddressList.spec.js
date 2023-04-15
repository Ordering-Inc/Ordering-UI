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
          accessToken='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGl2NC1zdGFnaW5nLm9yZGVyaW5nLmNvXC92NDAwXC9lblwvbHVpc3Y0XC9hdXRoIiwiaWF0IjoxNjExNzg0MzQ1LCJleHAiOjE2NDMzMjAzNDUsIm5iZiI6MTYxMTc4NDM0NSwianRpIjoiU2hzdmprTXV5YzZvUVFsMSIsInN1YiI6MjYwLCJsZXZlbCI6M30.I6Y_dVsKZHy5PITORU4mISo2gHj9YDevUUJEmv0X0og'
        />
      </ProviderMock>
    )
    cy.wait(4000)
    cy.get('button').contains('Add Address').should('exist')

    cy.log('Test functionality')
    cy.get('button').contains('Add Address').click()
    cy.get('div.popup-dialog').should('be.visible')
  })
})
