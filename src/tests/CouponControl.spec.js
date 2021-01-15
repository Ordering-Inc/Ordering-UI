import React from 'react'
import { mount } from '@cypress/react'
import { CouponControl } from '../components/CouponControl'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Coupon control component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <CouponControl
          businessId={41}
        />
      </ProviderMock>
    )
    cy.get('input').should('be.visible')
    cy.get('button').should('be.visible')
  })
})
