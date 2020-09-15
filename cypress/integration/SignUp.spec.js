context('Sign Up', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8300/signup')
  })

  it('Check UI', () => {
    cy.server({ method: 'POST' })
    cy.get('img').should('be.visible')
    cy.get('[viewBox="0 0 320 512"]').should('be.visible')
    cy.get('[viewBox="0 0 384 512"]').should('be.visible')
    cy.get('[viewBox="0 0 1024 1024"]').should('be.visible')
    cy.get('div').contains('Email').should('be.visible').click()
    cy.get('[type="text"]').should('be.visible')
    cy.get('[type="email"]').should('be.visible')
    cy.get('[type="password"]').should('be.visible')
    cy.get('button').contains('SIGNUP').should('be.visible')
  })

  it('Signing Up', () => {
    cy.server({ method: 'POST' })
    cy.get('[type="text"]').type('Name')
    cy.get('[type="email"]').type('superadmin@ordering.co')
    cy.get('[type="password"]').type('super')
    cy.get('button').contains('SIGNUP').click()
  })
})
