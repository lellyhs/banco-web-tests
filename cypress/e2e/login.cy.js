describe('Login', () => {

  beforeEach(() => {
    //Arrange
    cy.visit(Cypress.expose('URL'))
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //Act
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').type(credenciais.valida.usuario)
      cy.get('#senha').type(credenciais.valida.senha)
    })
    cy.screenshot('apos-preencher-dados-validos')
    cy.get('#login-section > .btn').click()
    cy.screenshot('apos-clicar-em-entrar')
    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    //Act
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').type(credenciais.invalida.usuario)
      cy.get('#senha').type(credenciais.invalida.senha)
    })
    cy.screenshot('apos-preencher-dados-invalidos')
    cy.contains('button', 'Entrar').click()
    //Assert
    cy.get('.toast').should('be.visible').should('have.text', 'Erro no login. Tente novamente.')
  })

})