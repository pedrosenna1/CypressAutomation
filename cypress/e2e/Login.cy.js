

describe('Login', () => {
  beforeEach(()=>{
    cy.visit('https://automationexercise.com/')
    cy.url().should('eq','https://automationexercise.com/')
    cy.get('[href="/login"]').click()
    cy.get('[class="login-form"] > h2').should('have.text','Login to your account')

  })

  it('Login com credenciais válidas', () => {
    //act
    cy.LoginValido()
    //assert
    cy.get('[class="nav navbar-nav"]').children().eq(9).should('contain',' Logged in as ')

  })

  it('Login com senha inválida', () => {
    //act
    cy.get('[data-qa="login-email"]').type('pedrotjb13@hotmail.com')
    cy.get('[data-qa="login-password"]').type('1')
    cy.get('[data-qa="login-button"]').click()
    //assert
    cy.get('[action="/login"] > p').should('have.text','Your email or password is incorrect!')

  })

  it('Login com e-mail inválido', () => {
    //act
    cy.get('[data-qa="login-email"]').type('pedrotjb13564@hotmail.com')
    cy.get('[data-qa="login-password"]').type('123456')
    cy.get('[data-qa="login-button"]').click()
    //assert
    cy.get('[action="/login"] > p').should('have.text','Your email or password is incorrect!')

  })

  it('Login com e-mail sem domínio', () => {
    //act
    cy.get('[data-qa="login-email"]').type("pedrotjb13")
    cy.get('[data-qa="login-password"]').type('123456')
    cy.get('[data-qa="login-button"]').click()
    //assert
    cy.get('[data-qa="login-email"]').then($campo => {
      expect($campo[0].checkValidity()).to.be.false;
      expect($campo[0].validationMessage).to.include("Please include an '@' in the email address")

    })

  })

  it('Login com campos em branco', () => {
    //act
    cy.get('[data-qa="login-button"]').click()
    //assert
    cy.get('[data-qa="login-email"]').then($campo =>{
      expect($campo[0].checkValidity()).to.be.false;
      expect($campo[0].validationMessage).to.include('Please fill out this field')

    })

  })


})