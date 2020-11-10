context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/profile')
  })

  it('Check UI', () => {
    cy.get('.user-image').should('exist')
    cy.get('.user-form').should('exist')
  })
})
