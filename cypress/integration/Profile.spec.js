context('Home Page', () => {
  beforeEach(() => {
    cy.login('sergio@ordering.co', 'test2020')
  })

  it('Check UI', () => {
    cy.get('.sc-fzoJus > svg > path').click()
    cy.get('.sc-fznyYp > :nth-child(1)').click()
    cy.get('.user-image').should('exist')
    cy.get('.user-form').should('exist')
  })
})
