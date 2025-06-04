describe('Login', () => {
  beforeEach(()=>{
    cy.visit('https://automationexercise.com/')
    cy.url().should('eq','https://automationexercise.com/')
    cy.get('[href="/login"]').click()
    cy.get('[class="login-form"] > h2').should('have.text','Login to your account')

  })

  it('Login com credenciais válidas', () => {
    cy.Loginvalido()
    cy.get('[class="nav navbar-nav"]').children().eq(9).should('contain',' Logged in as ')

  })

  it.only('Login com senha inválida', () => {
    cy.get('[data-qa="login-email"]').type('pedrotjb13@hotmail.com')
    cy.get('[data-qa="login-password"]').type('1')
    cy.get('[data-qa="login-button"]').click()
    cy.get('[action="/login"] > p').should('have.text','Your email or password is incorrect!')

  })
})