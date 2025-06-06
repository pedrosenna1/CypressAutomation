describe('Produtos e detalhes do produto', () => {
  beforeEach(()=>{
    cy.visit('https://automationexercise.com/')
    cy.url().should('eq','https://automationexercise.com/')

  })

  it('Acesso à página de produtos', () => {
    //Act
    cy.get('[class="nav navbar-nav"]').children().eq(1).click()
    //Assert
    cy.get('[class="title text-center"]').should('contain','All Products')

  })

  it.only('Acesso detalhes produto', () => {
    //Arrange
    cy.get('[class="nav navbar-nav"]').children().eq(1).click()
    cy.get('[class="title text-center"]').should('contain','All Products')
    //Act
    cy.get('[href="/product_details/1"]').click()

    //Assert
    cy.get('[class="product-information"] > h2').should('have.text','Blue Top')
    cy.get('[class="product-information"] > p').should('contain','Category: Women > Tops')
    cy.get('[class="product-information"] > span').should('contain','Rs. 500')
    cy.get('[class="product-information"]').should('contain','Availability:')
        .and('contain', 'Condition:')
        .and('contain', 'Brand:')
  })
})
