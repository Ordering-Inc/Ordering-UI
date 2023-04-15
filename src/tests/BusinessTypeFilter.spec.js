import React from 'react'
import { mount } from '@cypress/react'
import { BusinessTypeFilter } from '../components/BusinessTypeFilter'
import ProviderMock from '../__mocks__/ProviderMock'

const businessTypes = [
  { key: 'Dummy #1', value: null },
  { key: 'Dummy #2', value: 'dummy2' },
  { key: 'Dummy #3', value: 'dummy3' },
  { key: 'Dummy #4', value: 'dummy4' },
  { key: 'Dummy #5', value: 'dummy5' }
]

const images = [
  { image: 'https://picsum.photos/200', value: 'all' },
  { image: 'https://picsum.photos/200', value: 'dummy2' },
  { image: 'https://picsum.photos/200', value: 'dummy4' },
  { image: 'https://picsum.photos/200', value: 'dummy3' },
  { image: 'https://picsum.photos/200', value: 'dummy5' }
]
describe('Mounting Business type filter component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <BusinessTypeFilter
          businessTypes={businessTypes}
          images={images}
        />
      </ProviderMock>
    )
    cy.get('#container').find('div.category').should('have.length', businessTypes.length)
  })
})
