import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const SUBMIT_BUTTON_SELECTOR = '.sc-kstqJO';

Given('User is at the login page', () => {
    cy.visit('http://localhost:3000')
})

When('User enters username as {string} and password', (username) => {
    cy.get('#username').type(username)
    cy.get('#password').type(Cypress.env('passwordadmin')) 
})

And('User clicks on login button', () => {
    cy.get(SUBMIT_BUTTON_SELECTOR).click()
})

And('User renames cat', () => {
    
    cy.get(':nth-child(1) > .sc-hKgJUU > .sc-eCstlR > div').clear();

    cy.get(':nth-child(1) > .sc-hKgJUU > .sc-eCstlR > div').type('James Admin');

    cy.get(':nth-child(1) > .sc-hKgJUU > .sc-fubCzh').click()
})

Then('User is able to view the renamed cat', () => {
    cy.get(':nth-child(1) > .sc-hKgJUU > .sc-eCstlR > div').should('be.visible', {timeout: 10000})
})