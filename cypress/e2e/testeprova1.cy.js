describe('Testes de Login - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login com usuário válido e senha válida', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
})

  it('Login com usuário válido e senha inválida', () => {
    cy.login('standard_user', '123456')
    cy.get('.error-message-container').should('contain', 'Epic sadface: Username and password do not match any user in this service')
})

  it('Login com usuário inválido e senha válida', () => {
    cy.login('Thales', 'secret_sauce')
    cy.get('.error-message-container').should('contain', 'Epic sadface: Username and password do not match any user in this service')
})


  it('Adicionar um item ao carrinho após login', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_item').first().find('button').click()
    cy.get('.shopping_cart_badge').should('contain', '1')
})

})
