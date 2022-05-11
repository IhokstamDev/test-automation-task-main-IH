  //Rename a cat on the cat management screen
  
  describe('Form', () => {
    beforeEach(() => {
        
      cy.visit('http://localhost:3000')
    })
  
    it('Should perform login', () => {
      cy.get('#username').type('admin')
      cy.get('#password').type('adminpass')
      cy.get('.sc-kstqJO').click()

      cy.get(':nth-child(1) > .sc-hKgJUU > .sc-eCstlR > div').clear();

      cy.get(':nth-child(1) > .sc-hKgJUU > .sc-eCstlR > div').type('JamesUpdated');

      cy.get(':nth-child(1) > .sc-hKgJUU > .sc-fubCzh').click()

    })
  })