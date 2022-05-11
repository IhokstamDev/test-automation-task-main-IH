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

And('User renames cat as normal user', () => {
    
    cy.get(':nth-child(1) > .sc-hKgJUU > .sc-eCstlR > div').clear();

    cy.get(':nth-child(1) > .sc-hKgJUU > .sc-eCstlR > div').type('James Normal');

    cy.get(':nth-child(1) > .sc-hKgJUU > .sc-fubCzh').click()
})

Then('User is able to view the renamed cat', () => {
    cy.get(':nth-child(1) > .sc-hKgJUU > .sc-eCstlR > div').should('be.visible', {timeout: 10000})
})