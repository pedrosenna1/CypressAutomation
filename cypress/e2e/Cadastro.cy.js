/// <reference types="cypress" />

describe('Cadastro usuário', () => {
  const timestamp = Date.now()
  const nome = 'Pedro'
  const email = `admin+${timestamp}@gmail.com`
  const emailCadastrado = 'admin@admin.com'
  const senha = '123456'

  beforeEach(()=>{
    cy.visit('https://automationexercise.com/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('[href="/login"]').click()
    cy.get('[class="signup-form"] > h2').should('have.text','New User Signup!')


  })

  it('Cadastro novo usuario com e-mail ainda não utilizado', () => {
    //act
    cy.get('[data-qa="signup-name"]').type(nome)
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()
    //assert
    cy.get(':nth-child(1) > b').should('contain','Account Information')
    })

  it('Cadastro novo usuário com credenciais válidas', () => {
    //Arrange: configura o cenário
    cy.get('[data-qa="signup-name"]').type(nome)
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()
    cy.get(':nth-child(1) > b').should('contain','Account Information')

    //Act: executa a ação
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