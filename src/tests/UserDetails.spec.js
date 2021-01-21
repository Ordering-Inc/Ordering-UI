import React from 'react'
import { mount } from '@cypress/react'
import { UserDetails } from '../components/UserDetails'
import ProviderMock from '../__mocks__/ProviderMock'

const userData = {
  name: 'testing',
  middle_name: 'test',
  lastname: 'foo',
  second_lastname: 'bar',
  email: 'test@testing.com',
  cellphone: '4149797652',
  country_phone_code: 58
}

describe('Mounting User Details component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <UserDetails
          userData={userData}
          cartStatus={2}
          businessId={41}
          useValidationFields
          useDefualtSessionManager
          useSessionUser
          isCheckout
        />
      </ProviderMock>
    )
    cy.wait(8000)
    cy.get('h1').should('contain.text', 'Customer details')
    cy.get('p').should(
      'contain.text',
      `Name: ${userData?.name} ${userData?.middle_name} ${userData?.lastname} ${userData?.second_lastname}`
    )
    cy.get('p').should('contain.text', `Email: ${userData?.email}`)
    cy.get('p').should('contain.text', `Phone / Mobile: +${userData?.country_phone_code} ${userData?.cellphone}`)
  })
})
