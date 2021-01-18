context('LoginForm', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Check UI', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('div').contains('Login with Email').should('be.visible').click()
    cy.get('input[type="email"]').should('be.visible')
    cy.get('input[type="password"]').should('be.visible')
    cy.get('button').contains('Login').should('be.visible')
    cy.get('div').contains('Login with Cellphone').should('be.visible').click()
    cy.get('input[name=cellphone]').should('be.visible')
  })

  it('Login by email', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('div').contains('Login with Email').click()
    cy.get('input[name=email]').type('superadmin@ordering.co')
    cy.get('input[name=password]').type('1234567890')
    cy.get('button').contains('Login').click()
    cy.wait('@postLogin').its('status').should('eq', 200)
  })

  it('Login by cellphone', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('div').contains('Login with Cellphone').click()
    cy.get('[type="tel"]').type('0123495721')
    cy.get('input[name=password]').type('1234567890')
    cy.get('button').contains('Login').click()
    cy.wait('@postLogin').its('status').should('eq', 200)
  })

  it('Login by facebook', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('.sc-qPlga > .sc-fzqARJ').click()
  })
})
