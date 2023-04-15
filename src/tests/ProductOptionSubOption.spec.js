import React from 'react'
import { mount } from '@cypress/react'
import { ProductOptionSubOption } from '../components/ProductOptionSubOption'
import ProviderMock from '../__mocks__/ProviderMock'

const option = { id: 53, extra_id: 49, name: 'Size', image: null, conditioned: false, respect_to: null, min: 1, max: 1, rank: 1, with_half_option: false, allow_suboption_quantity: false, limit_suboptions_by_max: false, enabled: true, suboptions: [{ id: 172, extra_option_id: 53, name: 'small', price: 1, image: null, sku: null, rank: 1, description: null, max: 1, half_price: null, enabled: true }, { id: 173, extra_option_id: 53, name: 'large', price: 3, image: null, sku: null, rank: 1, description: null, max: 1, half_price: null, enabled: true }, { id: 174, extra_option_id: 53, name: 'medium', price: 2, image: null, sku: null, rank: 1, description: null, max: 1, half_price: null, enabled: true }] }
const suboption = { id: 173, extra_option_id: 53, name: 'large', price: 3, image: null, sku: null, rank: 1, description: null, max: 1, half_price: null, enabled: true }
const state = { id: 173, name: 'large', price: 3, selected: false, quantity: 0, position: 'whole', total: 0 }

describe('Mounting Product Option Sub option component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <ProductOptionSubOption
          balance={0}
          option={option}
          suboption={suboption}
          state={state}
        />
      </ProviderMock>
    )

    cy.get('div').should('contain.text', state.name)
  })
})
