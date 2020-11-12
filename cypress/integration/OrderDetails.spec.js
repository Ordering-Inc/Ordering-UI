context('Order details', () => {
  it('Check valid order', () => {
    cy.visit('/signin')
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('div').contains('Login with Email').click()
    cy.get('input[name=email]').type('superadmin@ordering.co')
    cy.get('input[name=password]').type('super')
    cy.get('button').contains('Login').click()
    cy.wait('@postLogin').its('status').should('eq', 200)

    cy.visit('/orders/48')
    cy.get('.skeleton-loading').should('be.visible')
    cy.get('.order-header').should('exist')
    cy.get('.order-content').should('exist')
  })

  it('Check invalid order', () => {
    cy.visit('/signin')
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('div').contains('Login with Email').click()
    cy.get('input[name=email]').type('superadmin@ordering.co')
    cy.get('input[name=password]').type('super')
    cy.get('button').contains('Login').click()
    cy.wait('@postLogin').its('status').should('eq', 200)

    cy.visit('/orders/invalidorder696')
    cy.get('#not-found-source').should('be.visible')
  })
})
