import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const SUBMIT_BUTTON_SELECTOR = '.sc-kstqJO';

Given('User is at the login page', () => {
    cy.visit('http://localhost:3007')
})

When('User enters username as normal user and password', () => {
    cy.get('#username').type('user')
    cy.get('#password').type(Cypress.env('passwordnormal'))
})

And('User clicks on login button', () => {
    cy.get(SUBMIT_BUTTON_SELECTOR).click()
})

And('User renames cat as normal user', () => {
    
    cy.get(':nth-child(1) > .sc-hKgJUU > .sc-eCstlR > div').clear();

    cy.get(':nth-child(1) > .sc-hKgJUU > .sc-eCstlR > div').type('James Normal');

    cy.get(':nth-child(1) > .sc-hKgJUU > .sc-fubCzh').click()
})

Then('User is able to view the renamed cat', () => {
    cy.get(':nth-child(1) > .sc-hKgJUU > .sc-eCstlR > div').should('be.visible', {timeout: 10000})
})