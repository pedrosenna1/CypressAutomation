/// <reference types="cypress" />
import cadastroUsuario from "../../pages/cadastroUsuario"
import visitarPagina from "../../pages/visitarPagina"
const visitPage = new visitarPagina
const cadastrarUsuario = new cadastroUsuario

describe('Cadastro usuário', () => {
  const timestamp = Date.now()
  const nome = 'Pedro'
  const email = `admin+${timestamp}@gmail.com`
  const emailCadastrado = 'admin@admin.com'
  const senha = '123456'

  beforeEach(()=>{
    visitPage.visit()
    visitPage.assertUrl()
    visitPage.submit()
    visitPage.assertPage()


  })

  it('Cadastro novo usuario com e-mail ainda não utilizado', () => {
    //act
    cadastrarUsuario.typeNome(nome)
    cadastrarUsuario.typeEmail(email)
    cadastrarUsuario.signupSubmit()
    //assert
    cadastrarUsuario.assertPage()
    })

  it.only('Cadastro novo usuário com credenciais válidas', () => {
    //Arrange: configura o cenário
    cadastrarUsuario.typeNome(nome)
    cadastrarUsuario.typeEmail(email)
    cadastrarUsuario.signupSubmit()
    cadastrarUsuario.assertPage()

    //Act: executa a ação
    cy.cadastro(senha,nome)


    // Assert: verifica o resultado
    cy.url().should('contain','account_created')
    cy.get('[data-qa="account-created"] > b').should('have.text','Account Created!')


  })

  it('Cadastro novo usuario com e-mail ja utilizado', () => {
    //Act: executa a ação
    cy.get('[data-qa="signup-name"]').type(nome)
    cy.get('[data-qa="signup-email"]').type(emailCadastrado)
    cy.get('[data-qa="signup-button"]').click()

    // Assert: verifica o resultado
    cy.contains('Email Address already exist!').should('be.visible')

    })

  it('Cadastro novo usuario sem e-mail', () => {
    //Act: executa a ação
    cy.get('[data-qa="signup-name"]').type(nome)
    cy.get('[data-qa="signup-button"]').click()
    cy.wait(1000)

    // Assert: verifica o resultado
    cy.get('[data-qa="signup-email"]').then($campo => {
      expect($campo[0].checkValidity()).to.be.false;
      expect($campo[0].validationMessage).to.be.eq('Please fill out this field.')
    })

    })

  
})