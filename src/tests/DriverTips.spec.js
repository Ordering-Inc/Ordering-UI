import React from 'react'
import { mount } from '@cypress/react'
import { DriverTips } from '../components/DriverTips'
import ProviderMock from '../__mocks__/ProviderMock'

const driverTipsOptions = [1, 2, 3, 4, 5]
describe('Mounting Coupon control component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <DriverTips
          businessId={41}
          driverTipsOptions={driverTipsOptions}
          useOrderContext
        />
      </ProviderMock>
    )
    cy.get('#driver-tip-container').find('div').should('have.length', driverTipsOptions.length)
  })
})
