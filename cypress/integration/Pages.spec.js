context('Pages', () => {
  beforeEach(() => {
    cy.visit('/pages/OrderingPages')
  })

  it('Check UI', () => {
    cy.get('#cms').should('be.visible')
  })
})
