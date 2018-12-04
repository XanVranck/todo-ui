describe('Home page', function () {
    it('Opens the todo page and adds a todo for Xan', function () {
        cy.server({
            method: 'POST',
            delay: 1000,
            status: 400,
            response: {
                todo: 'Test Xan',
                done: false,
                owner: 'Xan'
            },
          })
        cy.visit('/todo')

        cy.get('button').contains('Xan').click()
        cy.get('input').should('be.enabled')
        cy.get('input').type('Test Xan')
        cy.get('button').contains('todo toe').click() 
        cy.get('check').should('be.enabled')
    })
})