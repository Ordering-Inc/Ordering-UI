context('Order details', () => {
  beforeEach(() => {
    cy.login('sergio@ordering.co', 'test2020')
  })

  it('Check valid order', () => {
    cy.visit('/orders/608')
    cy.get('.skeleton-loading').should('be.visible')
    cy.get('.order-header').should('exist')
    cy.get('.order-content').should('exist')
  })

  it('Check invalid order', () => {
    cy.visit('/orders/invalidorder696')
    cy.get('#not-found-source').should('be.visible')
  })
})
