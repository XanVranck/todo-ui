describe('navbar', function () {
    it('clicks the home button', function () {
        cy.visit('/')

        cy.get('h1').contains('Angular app')
        cy.get('h1').click().get('img').should('be.visible');
    })
})

describe('navbar', function () {
    it('clicks the todo button', function () {
        cy.visit('/')

        cy.contains('Todo').click()
        .get('p').contains('todo');
    })
})