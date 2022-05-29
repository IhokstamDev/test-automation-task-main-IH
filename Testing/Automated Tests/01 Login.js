import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const SUBMIT_BUTTON_SELECTOR = '.sc-kstqJO';

Given('User is at the login page', () => {
    cy.visit('http://localhost:3000')
})

When('User enters username as {string} and password', (username) => {
    cy.get('#username').type(username)
    cy.get('#password').type(Cypress.env('passwordadmin'), { log: false })
})

And('User clicks on login button', () => {
    cy.get(SUBMIT_BUTTON_SELECTOR).click()
})

Then('User is able to successfully login to the Website', () => {
    cy.get('.sc-gsTEea').should('be.visible', {timeout: 10000})
})