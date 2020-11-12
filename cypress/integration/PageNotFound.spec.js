context('Page not found', () => {
  beforeEach(() => {
    cy.visit('/test/dummy/false')
  })

  it('Check UI', () => {
    cy.get('img[alt=error404]').should('be.visible')
  })
})
