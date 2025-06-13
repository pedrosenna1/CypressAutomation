// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('LoginValido',() => {
    cy.get('[data-qa="login-email"]').type('pedrotjb13@hotmail.com')
    cy.get('[data-qa="login-password"]').type('123456', {log: false})
    cy.get('[data-qa="login-button"]').click()
    cy.get(':nth-child(10) > a').should('contain','Logged in')
})

Cypress.Commands.add('ProcessoCheckout', () =>{
    cy.get('[href="/product_details/1"]').click()
    cy.get('#quantity').clear().type(4)
    cy.get('[type="button"]').click()
    cy.get('u').click()
    cy.get('[class="disabled"]').should('have.text','4')
    cy.get('[class="btn btn-default check_out"]').should('have.text',"Proceed To Checkout").click()
    cy.get('.modal-body > :nth-child(2) > a > u').click()
    cy.LoginValido()
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    cy.get('[class="btn btn-default check_out"]').should('have.text',"Proceed To Checkout").click()
    
    cy.get('[href="/product_details/1"]').should('exist')
    cy.get('[class="disabled"]').should('have.text','4')
    cy.contains('Your delivery address').should('be.visible')
    cy.get('.cart_price > p').invoke('text').then((valor)=>{
        expect(valor).to.contain('500')

    })
    cy.get('[class="cart_total_price"]').invoke('text').then((total)=>{
        expect(total).to.contain('2000')

    })
    cy.get('.form-control').type('texto')
    cy.get(':nth-child(7) > .btn').click()


})