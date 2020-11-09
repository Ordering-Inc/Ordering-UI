context('LoginForm', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Check UI', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('img').should('be.visible')
    cy.get('a').contains('CREATE').should('be.visible')
    cy.get('[viewBox="0 0 320 512"]').should('be.visible')
    cy.get('[viewBox="0 0 384 512"]').should('be.visible')
    cy.get('[viewBox="0 0 1024 1024"]').should('be.visible')
    cy.get('div').contains('EMAIL').should('be.visible').click()
    cy.get('[type="email"]').should('be.visible')
    cy.get('[type="password"]').should('be.visible')
    cy.get('button').contains('Login').should('be.visible')
    cy.get('a').contains('CREATE').should('be.visible')
    cy.get('div').contains('CELLPHONE').should('be.visible').click()
    cy.get('input[name=cellphone]').should('be.visible')
    cy.get('button').contains('Get verify code').should('be.visible')
  })

  it('Login by email', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('div').contains('EMAIL').click()
    cy.get('input[name=email]').type('superadmin@ordering.co')
    cy.get('input[name=password]').type('super')
    cy.get('button').contains('Login').click()
    cy.wait('@postLogin').its('status').should('eq', 200)
  })

  it('Login by cellphone', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('div').contains('CELLPHONE').click()
    cy.get('input[name=cellphone]').type('0123495721')
    cy.get('button').contains('Get verify code').click()
    cy.wait('@postLogin').its('status').should('eq', 200)
  })

  it('Login by facebook', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('[viewBox="0 0 320 512"]').click()
  })
})
