describe('Home page', function() {
    it('Visits the home page', function() {
      cy.visit('localhost:4200')

      cy.get('img').should('be.visible');
    })
  })