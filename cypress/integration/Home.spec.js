context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Check UI', () => {
    cy.get('[name="address-selection"]').should('be.visible')
    cy.get('button[name=find-business]').should('be.visible')
  })

  it('Fails to go to business', () => {
    cy.get('[name="address-selection"]').invoke('val').should('be.empty')
    cy.get('button[name=find-business]').click()
    cy.get('#app-modals').should('be.visible')
  })

  it('Going to business', () => {
    cy.get('input[name="address-selection"]').click({ force: true })
    cy.get('.address-form').should('be.visible')
    cy.get('input[name=address]').type('5th Ave, New York, NY, EE. UU.')
    cy.get('form').submit()
  })
})
