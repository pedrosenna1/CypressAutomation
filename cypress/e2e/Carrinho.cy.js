describe('Carrinho', () => {
  beforeEach(()=>{
    
    cy.visit('https://automationexercise.com/')
    cy.url().should('eq','https://automationexercise.com/')

  })

  it('Compra', () => {
    //Arrange
    cy.get('[href="/products"]').click()
    //Act
    
    cy.get('[data-product-id="1"]').first().click({force: true})
    cy.contains('View Cart').click()
    //Assert
    cy.get('[id="product-1"]').should('exist')
    

    
  })
  
})