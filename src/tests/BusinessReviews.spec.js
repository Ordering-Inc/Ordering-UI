import React from 'react'
import { mount } from '@cypress/react'
import { BusinessReviews } from '../components/BusinessReviews'
import ProviderMock from '../__mocks__/ProviderMock'

const business = {
  id: 1232,
  name: 'testing',
  reviews: {
    total: 2,
    reviews: [
      {
        id: 1,
        total: 2,
        comment: 'lorem',
        quality: 3,
        delivery: 2,
        service: 4,
        package: 1
      },
      {
        id: 2,
        total: 3,
        comment: 'ipsum',
        quality: 3,
        delivery: 3,
        service: 3,
        package: 3
      }
    ]
  }
}

describe('Mounting Business Reviews component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <BusinessReviews
          businessId={22}
          reviews={business.reviews.reviews}
          businessName={business.name}
          stars={business.reviews.total}
        />
      </ProviderMock>
    )
    cy.get('h3').contains(`Reviews of ${business.name}`).should('be.visible')
    cy.get('div#content').find('div#review').should('have.length', business.reviews.reviews.length)
  })
})
