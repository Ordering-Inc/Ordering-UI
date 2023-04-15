import React from 'react'
import { mount } from '@cypress/react'
import { Confirm } from '../components/Confirm'
import ProviderMock from '../__mocks__/ProviderMock'

const confirmProps = {
  title: 'Test confirm',
  content: 'testing confirm components',
  acceptText: 'Accept',
  handleClose: () => { console.log('onClose') },
  handleCancel: () => { console.log('onCancel') },
  handleAccept: () => { console.log('onAccept') }
}

describe('Mounting Confirm component', () => {
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <Confirm
          open
          closeOnBackdrop={false}
          title={confirmProps.title}
          content={confirmProps.content}
          acceptText={confirmProps.acceptText}
          onClose={confirmProps.handleClose}
          onCancel={confirmProps.handleCancel}
          onAccept={confirmProps.handleAccept}
        />
      </ProviderMock>
    )
    cy.get('.popup-dialog').should('exist')
    cy.get('h2').should('contain', confirmProps.title)
    cy.get('div').should('contain', confirmProps.content)
    cy.get('button').contains(confirmProps.acceptText).should('be.visible')
    cy.get('button').contains('Cancel').should('be.visible')
  })
})
