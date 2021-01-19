import React from 'react'
import { mount } from '@cypress/react'
import { Messages } from '../components/Messages'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Messages component', () => {
  const order = {
    id: 1000,
    business_id: 47,
    created_at: '2021-01-14 21:28:50',
    driver: null,
    business: {
      name: 'DakotaWine',
      app_id: 'Ordering app'
    }
  }

  const messages = {
    loading: false,
    error: null,
    messages: [
      {
        author: { id: 1, name: 'super', lastname: 'admin', level: 1 },
        author_id: 1,
        change: null,
        id: 2500,
        type: 2,
        created_at: '2021-01-14 21:28:50',
        comment: 'test'
      },
      {
        author: { id: 1, name: 'super', lastname: 'admin', level: 1 },
        author_id: 1,
        change: null,
        id: 2501,
        created_at: '2021-01-14 21:28:50',
        type: 2,
        comment: 'test'
      }
    ]
  }
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <Messages business order={order} messagesToShow={messages} orderId={order.id} />
      </ProviderMock>
    )
  })
})
