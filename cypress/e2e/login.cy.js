describe('Login', () => {

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //Arrange
    cy.visit('http://localhost:4000')
    //Act
    cy.get('#username').type('julio.lima')
    cy.get('#senha').type('123456')
    cy.get('#login-section > .btn').click()
    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    //Arrange
    cy.visit('http://localhost:4000')
    //Act
    cy.get('#username').type('julio.lima')
    cy.get('#senha').type('654321')
    //cy.get('#login-section > .btn').click()
    cy.contains('button', 'Entrar').click()
    //Assert
    cy.get('.toast').should('be.visible').should('have.text', 'Erro no login. Tente novamente.')  })

})