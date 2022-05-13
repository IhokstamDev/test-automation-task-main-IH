import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('User is at the login page', () => {
    cy.visit('http://localhost:3000')
})

When('User logs in', () => {
    cy.get('#username').type('admin')
    cy.get('#password').type('adminpass')
})

And('User clicks on login button', () => {
    cy.get('.sc-kstqJO').click()
})

//https://stackoverflow.com/questions/52430983/how-do-you-check-the-equality-of-the-inner-text-of-a-element-using-cypress

And('User renames 1st cat to bob', () => {
    
    cy.get('.sc-bdfBQB > div > :nth-child(1)').click();

    cy.get(':nth-child(1) > .sc-hKgJUU > .sc-eCstlR > div').clear();

    cy.get(':nth-child(1) > .sc-hKgJUU > .sc-eCstlR > div').type('bob');

    cy.get(':nth-child(1) > .sc-hKgJUU > .sc-fubCzh').click()
})

Then('Awesomeness value is sum of ASCII value of the characters', () => {

    //if (sumOfASCIIValues(cy.get(':nth-child(1) > .sc-hKgJUU > .sc-eCstlR > div'))

    //cy.get(':nth-child(1) > .sc-hKgJUU > .sc-eCstlR > div').should('be.visible', {timeout: 10000})

    //bob has value of ASCII 307
    cy.get(':nth-child(1) > .sc-kEjbQP > :nth-child(4)').should('have.text', '623')
    
})

/*function sumOfASCIIValues (name, ASCIISum)
{

var test = "Otto";

var sum = 0;

for (var i = 0; i < test.length; i++) {
	console.log(test[i] + " " + test.charCodeAt(i)  );
	
	sum += test.charCodeAt(i);
	
	//ch.charCodeAt(test[i]);
}

console.log(sum);

if (ASCIISum == sum)
return true;
else return false;
}*/

