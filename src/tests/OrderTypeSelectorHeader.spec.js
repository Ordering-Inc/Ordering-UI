import React from 'react'
import { mount } from '@cypress/react'
import { OrderTypeSelectorHeader } from '../components/OrderTypeSelectorHeader'
import ProviderMock from '../__mocks__/ProviderMock'

const Block = (props) => (
  <div>
    <p>{props.text}</p>
  </div>
)
const configTypes = [1, 2, 3]
const defaultValue = 2
const orderTypes = [
  { value: 1, content: <Block text='Test#1' />, showOnSelected: <Block text='Test#1' /> },
  { value: 2, content: <Block text='Test#2' />, showOnSelected: <Block text='Test#2' /> },
  { value: 3, content: <Block text='Test#3' />, showOnSelected: <Block text='Test#3' /> }
]

describe('Mounting Order Type Selector Header component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <OrderTypeSelectorHeader
          configTypes={configTypes}
          orderTypes={orderTypes}
          defaultValue={defaultValue}
        />
      </ProviderMock>
    )
    cy.get('div#select-input').should('exist').click({ force: true })
    cy.get('div#list').find('div#item').should('have.length', orderTypes.length)
  })
})
