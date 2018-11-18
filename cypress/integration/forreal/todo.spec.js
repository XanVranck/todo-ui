describe('Home page', function() {
    it('Opens the todo page (for now)', function() {
      cy.visit('/todo')

      cy.get('p').contains('todo')
    })
  })