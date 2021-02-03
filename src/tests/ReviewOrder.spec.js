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
    // cy.get('#list #stars:first-child').should('exist')
    cy.wait(4000)
    cy.get(':nth-child(6) > div > :nth-child(1) > input[type=radio]').first().check({ force: true })
    cy.get(':nth-child(7) > div > :nth-child(1) > input[type=radio]').first().check({ force: true })
    cy.get(':nth-child(8) > div > :nth-child(1) > input[type=radio]').first().check({ force: true })
    cy.get(':nth-child(9) > div > :nth-child(1) > input[type=radio]').first().check({ force: true })
    cy.get('input[placeholder=Comments]').type('test')
    cy.get('button[type=submit]').click()

    cy.get('.popup-dialog').should('exist')
    cy.get('div').should('contain', 'Thank you, Review successfully submitted')
  })
})
