context('Forgot Password', () => {
  beforeEach(() => {
    cy.visit('/password/forgot')
  })

  it('Check UI', () => {
    cy.server({ method: 'POST' })
    cy.get('img').should('be.visible')
    cy.get('[type="email"]').should('be.visible')
    cy.get('button').contains('PASSWORD').should('be.visible')
  })

  it('Recover Password', () => {
    cy.server({ method: 'POST' })
    cy.get('[type="email"]').type('superadmin@ordering.co')
    cy.get('button').contains('PASSWORD').click()
  })
})
