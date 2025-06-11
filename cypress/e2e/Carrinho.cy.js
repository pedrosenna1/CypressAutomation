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


  it.only('Realizar checkout', () => {
    
    //Act
    cy.get('[href="/product_details/1"]').click()
    cy.get('#quantity').clear().type(4)
    cy.get('[type="button"]').click()
    cy.get('u').click()
    cy.get('[class="disabled"]').should('have.text','4')
    cy.get('[class="btn btn-default check_out"]').should('have.text',"Proceed To Checkout").click()
    cy.get('.modal-body > :nth-child(2) > a > u').click()
    cy.LoginValido()
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    cy.get('[class="btn btn-default check_out"]').should('have.text',"Proceed To Checkout").click()
    //Assert
    cy.get('[href="/product_details/1"]').should('exist')
    cy.get('[class="disabled"]').should('have.text','4')
    cy.contains('Your delivery address').should('be.visible')
    cy.get('.cart_price > p').invoke('text').then((valor)=>{
        expect(valor).to.contain('500')

    })
    cy.get('[class="cart_total_price"]').invoke('text').then((total)=>{
        expect(total).to.contain('2000')

    })
    cy.get('.form-control').type('texto')
    cy.get(':nth-child(7) > .btn').click()
    cy.get('[data-qa="name-on-card"]').type('nome')
    cy.get('[data-qa="card-number"]').type('123456')
    cy.get('[data-qa="cvc"]').type('311')
    cy.get('[data-qa="expiry-month"]').type('11')
    cy.get('[data-qa="expiry-year"]').type('2028')
    cy.get('[data-qa="pay-button"]').click()
    cy.get('[data-qa="order-placed"]').should('have.text','Order Placed!')
    cy.get('[data-qa="continue-button"]').click()




    
  })



})