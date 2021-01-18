context('Forgot Password', () => {
  beforeEach(() => {
    cy.visit('/password/forgot')
  })

  it('Check UI', () => {
    cy.server({ method: 'POST' })
    cy.get('input').should('be.visible')
    cy.get('button').contains('Recover Password').should('be.visible')
  })

  it('Recover Password', () => {
    cy.server({ method: 'POST' })
    cy.get('input').type('superadmin@ordering.co')
    cy.get('button').contains('Recover Password').click()
  })
})
