describe('Pesquisa de produtos', () => {
  beforeEach(()=>{
    cy.visit('https://automationexercise.com/')
    cy.url().should('eq','https://automationexercise.com/')

  })

  it('Visualização apenas dos produtos pesquisados', () => {
    //Act
    cy.get('[href="/products"]').click()
    cy.get('#search_product').type('blue')
    cy.get('[id="submit_search"]').click()
    //Assert
    cy.get('[class="title text-center"]').should('contain','Searched Products')
    cy.get('[class="productinfo text-center"] > p').should('have.length.greaterThan',0).each(($el) =>{
        expect($el.text().toLowerCase()).to.include('blue')

    })

    

  })
})