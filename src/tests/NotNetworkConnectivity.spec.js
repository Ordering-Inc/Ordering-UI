import React from 'react'
import { mount } from '@cypress/react'
import { NotNetworkConnectivity } from '../components/NotNetworkConnectivity'
import ProviderMock from '../__mocks__/ProviderMock'

const image = 'https://picsum.photos/600'

describe('Mounting Not Network Connectivity component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <NotNetworkConnectivity
          image={image}
          isOnline={false}
        />
      </ProviderMock>
    )
    cy.get('div#container').should('be.visible')
    cy.get('img#not-network').should('exist')
  })
})
