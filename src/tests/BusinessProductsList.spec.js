import React from 'react'
import { mount } from '@cypress/react'
import { BusinessProductsList } from '../components/BusinessProductsList'
import ProviderMock from '../__mocks__/ProviderMock'

const categoryState = {
  loading: false,
  pagination: { currentPage: 0, pageSize: 20, totalItems: null, totalPages: 0, nextPageItems: 10 },
  products: [
    {
      id: 1309,
      name: 'MbWrap Southwest (Grilled)',
      price: 12,
      description: '',
      images: 'https://res.cloudinary.com/ordering2/image/upload/v1606324885/xnnoqx0zqlea71f8zong.png',
      category_id: 1,
      inventoried: true,
      quantity: 0,
      featured: false,
      enabled: true,
      upselling: false,
      in_offer: false,
      offer_price: null,
      rank: null
    }
  ]
}

const categories = [
  { id: null, name: 'All' },
  { id: 1, name: 'ONE#01' },
  { id: 2, name: 'ONE#02' },
  { id: 3, name: 'ONE#03' }
]

describe('Mounting Business Products List component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <BusinessProductsList
          categories={categories}
          category={{ id: null, name: 'All' }}
          categoryState={categoryState}
          businessId={41}
        />
      </ProviderMock>
    )
    cy.get('div#container h3').contains(categories[1].name).should('be.visible')
  })
})
