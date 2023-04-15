import React from 'react'
import { mount } from '@cypress/react'
import { LanguageSelector } from '../components/LanguageSelector'
import ProviderMock from '../__mocks__/ProviderMock'

const languages = [
  { code: 'one', name: 'Test#1' },
  { code: 'two', name: 'Test#2' },
  { code: 'three', name: 'Test#3' }
]

const currentLanguage = 'two'

describe('Mounting Language Selector component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <LanguageSelector
          languages={languages}
          currentLanguage={currentLanguage}
          handlerCustomChangeLanguage={() => { console.log('handlerCustomChangeLanguage') }}
          notReload
        />
      </ProviderMock>
    )
    cy.get('div#select-input').should('exist').click()
    cy.get('div#list').find('div#item').should('have.length', languages.length)
  })
})
