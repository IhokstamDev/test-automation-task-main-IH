  //Check Login page is visible
  
  describe('Form', () => {
    beforeEach(() => {
        
      cy.visit('http://localhost:3000')
    })
  
    it('Should view various page components', () => {
        cy.get('.sc-gsTEea').should('be.visible')
        cy.get('#username').should('be.visible')
        cy.get('#password').should('be.visible')

        
    })
  })