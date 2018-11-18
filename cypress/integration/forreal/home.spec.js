describe('Home page', function() {
    it('Visits the home page and checks for image', function() {
      cy.visit('/home')

      cy.get('img').should('be.visible');
    })
  })