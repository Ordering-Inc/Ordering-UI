context('Checkout', () => {
  beforeEach(() => {
    cy.login('sergio@ordering.co', 'test2020')
  })

  it('Make an order', () => {
    cy.get('h6').contains('Stainy & Lovely').click()
    cy.get('input[name=search]').type('Blouse', { force: true })

    cy.get('div > h1').contains('Blouse').click()
    cy.get('button.add').click()

    cy.get('.cart-popover').should('exist')
    cy.get('div > h2').contains('Stainy & Lovely').should('exist')
    cy.get('div > h2').contains('Stainy & Lovely').click({ force: true })
    cy.get('div > h3').should($h3 => expect($h3).to.contain('Blouse'))

    cy.get('button').contains('View Order').click()
    cy.get('.payments-list > :nth-child(1)').its('length').should('be.gt', 0)
    cy.get('.payments-list > :nth-child(1)').click()

    cy.get('button').contains('Place Order').should('not.be.disabled').click()
    cy.wait(1500)
    cy.get('.skeleton-loading').should('be.visible')
    cy.get('.order-header').should('exist')
    cy.get('.order-content').should('exist')
  })
})
