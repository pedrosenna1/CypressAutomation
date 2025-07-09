class visitarPagina{
    visit() {
        cy.visit('https://automationexercise.com/')
        

    }

    assertUrl(){
        cy.url().should('eq', 'https://automationexercise.com/')

    }

    submit(){
        cy.get('[href="/login"]').click()

    }

    assertPage(){
        cy.get('[class="signup-form"] > h2').should('have.text','New User Signup!')


    }


}

export default visitarPagina