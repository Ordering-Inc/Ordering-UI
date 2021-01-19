import React from 'react'
import { mount } from '@cypress/react'
import { ReviewOrder } from '../components/ReviewOrder'
import ProviderMock from '../__mocks__/ProviderMock'

const order = {
  id: 607,
  business_id: 21
}
const setIsReviewed = () => console.log('toggle review fn')
describe('Mounting Order Reviews component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <ReviewOrder order={order} setIsReviewed={setIsReviewed} />
      </ProviderMock>
    )
    cy.get(':nth-child(6) > .sc-AxhUy > :nth-child(1)').click()
    cy.get(':nth-child(7) > .sc-AxhUy > :nth-child(1)').click()
    cy.get(':nth-child(8) > .sc-AxhUy > :nth-child(1)').click()
    cy.get(':nth-child(9) > .sc-AxhUy > :nth-child(1)').click()
    cy.get('.sc-fznZeY').type('test')
    cy.get('button[type=submit]').click()
  })
})
