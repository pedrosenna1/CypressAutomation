

describe('Login', () => {
  beforeEach(()=>{
    cy.visit('https://automationexercise.com/')
    cy.url().should('eq','https://automationexercise.com/')
    cy.get('[href="/login"]').click()
    cy.get('[class="login-form"] > h2').should('have.text','Login to your account')

  })

  it('Login com credenciais válidas', () => {
    cy.LoginValido()
    cy.get('[class="nav navbar-nav"]').children().eq(9).should('contain',' Logged in as ')

  })

  it('Login com senha inválida', () => {
    cy.get('[data-qa="login-email"]').type('pedrotjb13@hotmail.com')
    cy.get('[data-qa="login-password"]').type('1')
    cy.get('[data-qa="login-button"]').click()
    cy.get('[action="/login"] > p').should('have.text','Your email or password is incorrect!')

  })

  it('Login com e-mail inválido', () => {
    cy.get('[data-qa="login-email"]').type('pedrotjb13564@hotmail.com')
    cy.get('[data-qa="login-password"]').type('123456')
    cy.get('[data-qa="login-button"]').click()
    cy.get('[action="/login"] > p').should('have.text','Your email or password is incorrect!')

  })

  it('Login com e-mail sem domínio', () => {
    cy.get('[data-qa="login-email"]').type("pedrotjb13")
    cy.get('[data-qa="login-password"]').type('123456')
    cy.get('[data-qa="login-button"]').click()
    cy.get('[data-qa="login-email"]').then($campo => {
      expect($campo[0].checkValidity()).to.be.false;
      expect($campo[0].validationMessage).to.be.include('Please include  an "@ in the email adress')

    })

  })

  it('Login com campos em branco', () => {
    cy.get('[data-qa="login-button"]').click()
    cy.get('[data-qa="login-email"]').then($campo =>{
      expect($campo[0].checkValidity()).to.be.false;
      expect($campo[0].validationMessage).to.be.include('Please fill out this field')

    })

  })


})