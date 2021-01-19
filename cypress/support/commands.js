// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/signin')
  cy.server({ method: 'POST' })
  cy.route('/*/*/*/auth**').as('postLogin')
  cy.get('div').contains('Login with Email').click()
  cy.get('input[name=email]').type(email)
  cy.get('input[name=password]').type(password)
  cy.get('button').contains('Login').click()
  cy.wait('@postLogin').its('status').should('eq', 200)
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
