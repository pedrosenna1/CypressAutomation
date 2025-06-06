describe('Test Case Page', () => {
  beforeEach(()=>{
    cy.visit('https://automationexercise.com/')
    cy.url().should('eq','https://automationexercise.com/')

  })

  it('Acesso à página de test cases com êxito', () => {
    //Act
    cy.get('[class="nav navbar-nav"]').children().eq(4).click()
    //Assert
    cy.get('[class="title text-center"]').should('contain','Test Cases')

  })
})