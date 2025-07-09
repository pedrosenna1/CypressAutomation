class cadastroUsuario {
    typeNome(nome) {
        cy.get('[data-qa="signup-name"]').type(nome)
    }
    typeEmail(email) {
        cy.get('[data-qa="signup-email"]').type(email)

    }
    signupSubmit() {
        cy.get('[data-qa="signup-button"]').click()

    }

    assertPage() {

        cy.get(':nth-child(1) > b').should('contain','Account Information')
    }
    typeSenha(senha) {
        cy.get('[data-qa="password"]').type(senha, {log: false})


    }

    typeEmailCadastrado(emailCadastrado){
        cy.get('[data-qa="signup-email"]').type(emailCadastrado)

    }

    preencherFormularioSignup(nome,email){
        this.typeNome(nome)
        this.typeEmail(email)
        this.signupSubmit()

    }
}

export default cadastroUsuario