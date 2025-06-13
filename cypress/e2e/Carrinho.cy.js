describe('Carrinho', () => {
  beforeEach(()=>{
    
    cy.visit('https://automationexercise.com/')
    cy.url().should('eq','https://automationexercise.com/')

  })

  it('Adicionar produto ao carrinho', () => {
    //Arrange
    cy.get('[href="/products"]').click()
    //Act
    
    cy.get('[data-product-id="1"]').first().click({force: true})
    cy.contains('View Cart').click()
    //Assert
    cy.get('[id="product-1"]').should('exist')
    

    
  })

  it(' Verificar a quantidade de produto no carrinho após adição múltipla', () => {
    
    //Act
    cy.get('[href="/product_details/1"]').click()
    cy.get('#quantity').clear().type(4)
    cy.get('[type="button"]').click()
    cy.get('u').click()
    //Assert
    cy.get('[class="disabled"]').should('have.text','4')
    

    
  })


  it('Realizar checkout com sucesso', () => {
    
    cy.ProcessoCheckout()
    cy.get('[data-qa="name-on-card"]').type('nome')
    cy.get('[data-qa="card-number"]').type('123456')
    cy.get('[data-qa="cvc"]').type('311')
    cy.get('[data-qa="expiry-month"]').type('11')
    cy.get('[data-qa="expiry-year"]').type('2028')
    cy.get('[data-qa="pay-button"]').click()
    cy.get('[data-qa="order-placed"]').should('have.text','Order Placed!')
    cy.get('[data-qa="continue-button"]').click()




    
  })

  it.only('Realizar checkout sem numero do cartão', () => {

    cy.ProcessoCheckout()
    cy.get('[data-qa="name-on-card"]').type('nome')
    cy.get('[data-qa="cvc"]').type('311')
    cy.get('[data-qa="expiry-month"]').type('11')
    cy.get('[data-qa="expiry-year"]').type('2028')
    cy.get('[data-qa="pay-button"]').click()
    cy.get('[data-qa="card-number"]').then(($card) => {
        expect($card[0].checkValidity()).to.be.false
        expect($card[0].validationMessage).to.include('Preencha este campo')

    })
    cy.get('[href="/view_cart"]').click()
    cy.get('[data-product-id="1"]').click()



    
  })




})