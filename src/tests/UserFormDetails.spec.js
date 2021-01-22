import React from 'react'
import { mount } from '@cypress/react'
import { UserFormDetailsUI } from '../components/UserFormDetails'
import ProviderMock from '../__mocks__/ProviderMock'

const validationFields = {
  loading: false,
  fields: {
    checkout: {
      name: {
        id: 1,
        name: 'Name',
        code: 'name',
        validate: 'checkout',
        type: 'text',
        required: true,
        enabled: true
      },
      lastname: {
        id: 2,
        name: 'Last Name',
        code: 'lastname',
        validate: 'checkout',
        type: 'text',
        required: true,
        enabled: true
      },
      email: {
        id: 3,
        name: 'Email',
        code: 'email',
        validate: 'checkout',
        type: 'text',
        required: true,
        enabled: true
      },
      cellphone: {
        id: 4,
        name: 'Mobile phone',
        code: 'mobile_phone',
        validate: 'checkout',
        type: 'text',
        required: true,
        enabled: true
      },
      middle_name: {
        id: 55,
        name: 'Middle name',
        code: 'middle_name',
        validate: 'checkout',
        type: 'text',
        required: true,
        enabled: true
      },
      second_lastname: {
        id: 56,
        name: 'Second lastname',
        code: 'second_lastname',
        validate: 'checkout',
        type: 'text',
        required: true,
        enabled: true
      }
    }
  }
}

const showField = (fieldName) => {
  return (!validationFields.loading && !validationFields.fields?.checkout[fieldName]) ||
    (!validationFields.loading && validationFields.fields?.checkout[fieldName] &&
      validationFields.fields?.checkout[fieldName].enabled)
}

const isRequiredField = (fieldName) => {
  return !validationFields.loading &&
    validationFields.fields?.checkout[fieldName] &&
    validationFields.fields?.checkout[fieldName].enabled &&
    validationFields.fields?.checkout[fieldName].required
}

describe('Mounting User Form Details component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <UserFormDetailsUI
          validationFields={validationFields}
          showField={showField}
          isRequiredField={isRequiredField}
          isCheckout
          isEdit
        />
      </ProviderMock>
    )

    cy.get('form').find('input').should('have.length', Object.keys(validationFields.fields.checkout).length)
  })
})
