Cypress.Commands.add('login', (username, password) => {
  // Corrigido para usar seletores 'data-test', que são mais robustos.
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});