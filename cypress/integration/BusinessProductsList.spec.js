context('Business products list', () => {
  beforeEach(() => {
    cy.login('sergio@ordering.co', 'test2020')
  })

  it('Add product to cart', () => {
    cy.get('h6').contains('Stainy & Lovely').click()
    cy.get('input[name=search]').type('Blouse', { force: true })

    cy.get('div > h1').contains('Blouse').click()
    cy.get('button.add').click()

    cy.get('.cart-popover').should('exist')
  })
})
