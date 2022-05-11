  //Peform a login on the page
  
  describe('Form', () => {
    beforeEach(() => {
        
      cy.visit('http://localhost:3000')
    })
  
    it('Should perform login', () => {
      cy.get('#username').type('admin')
      cy.get('#password').type('adminpass')
      cy.get('.sc-kstqJO').click()

    })
  })