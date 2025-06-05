describe('Fale conosco', () => {
  beforeEach(()=>{
    cy.visit('https://automationexercise.com/')
    cy.url().should('eq','https://automationexercise.com/')
    cy.get('[href="/login"]').click()
    cy.get('[class="login-form"] > h2').should('have.text','Login to your account')

  })

  it('Envio de mensagem de contato com sucesso', () => {
    cy.get('[class="nav navbar-nav"]').children().eq(7).click()
    cy.get('[data-qa="name"]').type('Pedro')
    cy.get('[data-qa="email"]').type('pedrotjb13@hotmail.com')
    cy.get('#message').type('oi')
    cy.get('[name="upload_file"]').selectFile('cypress/support/files/oi.jpg')
    cy.get('[data-qa="submit-button"]').click()
    cy.on('window:confirm',(msg)=>{
        expect(msg).to.be.eq('Press OK to proceed!')
        return true


    })
    cy.get('.status').should('have.text','Success! Your details have been submitted successfully.')

  })
})