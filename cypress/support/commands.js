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

Cypress.Commands.add('cadastro', (senha, nome) => { 
    cy.get('[data-qa="password"]').type(senha, {log: false})
    cy.get('[data-qa="days"]').select('24')
    cy.get('[data-qa="months"]').select('10')
    cy.get('[data-qa="years"]').select('1991')
    cy.get('[data-qa="first_name"]').type(nome)
    cy.get('[data-qa="last_name"]').type('Silva')
    cy.get('[data-qa="address"]').type('Rua Alvaro Cordeiro 90')
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('#state').type('Rio de Janeiro')
    cy.get('#city').type('Rio de Janeiro')
    cy.get('#zipcode').type('21545450')
    cy.get('#mobile_number').type('21983665474')
    cy.get('[data-qa="create-account"]').click()



 })