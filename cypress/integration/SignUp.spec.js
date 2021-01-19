context('Sign Up', () => {
  beforeEach(() => {
    cy.visit('/signup')
  })

  it('Check UI', () => {
    cy.server({ method: 'POST' })
    cy.get('[name="name"]').should('be.visible')
    cy.get('[name="lastname"]').should('be.visible')
    cy.get('[name="email"]').should('be.visible')
    cy.get('[name="middle_name"]').should('be.visible')
    cy.get('[name="second_lastname"]').should('be.visible')
    cy.get('[name="password"]').should('be.visible')
    cy.get('.PhoneInputInput').should('be.visible')
    cy.get('button').contains('Sign up').should('be.visible')
  })

  it('Signing Up', () => {
    cy.server({ method: 'POST' })
    cy.get('[name="email"]').type('superadmin@ordering.co')
    cy.get('[name="password"]').type('1234567890')
    cy.get('[name="name"]').type('test1')
    cy.get('[name="lastname"]').type('test2')
    cy.get('[name="middle_name"]').type('test3')
    cy.get('[name="second_lastname"]').type('test4')
    cy.get('.PhoneInputInput').type('58 4141234123')
    cy.get('button').contains('Sign up').click()
  })
})
