import React from 'react'
import { mount } from '@cypress/react'
import { UserProfileForm } from '../components/UserProfileForm'
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

describe('Mounting User Profile Form component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <UserProfileForm
          userData={userData}
          useSessionUser
        />
      </ProviderMock>
    )
    cy.get('input[type=file]').should('exist')
    cy.get('h1').should('contain.text', `${userData.name} ${userData.lastname}`)
    cy.get('p').should('contain.text', `${userData.email}`)
    cy.get('p').should('contain.text', `+${userData.country_phone_code} ${userData.cellphone}`)
  })
})
