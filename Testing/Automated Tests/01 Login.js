import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('User is at the login page', () => {
    cy.visit('http://localhost:3000')
})

When('User enters username as {string} and password as {string}', (username, password) => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
})

And('User clicks on login button', () => {
    cy.get('.sc-kstqJO').click()
})

Then('User is able to successfully login to the Website', () => {
    cy.get('.sc-gsTEea').should('be.visible', {timeout: 10000})
})