Cypress.Commands.add('verficarMensagemNoToast', mensagem => {
  cy.get('.toast').should('be.visible').should('have.text', mensagem)
})

Cypress.Commands.add('selecionarOpcaoNaCombobox', (labelCampo, opcao) => {
    cy.get(`label[for="${labelCampo}"]`).parent().as(`campo-${labelCampo}`)
        cy.get(`@campo-${labelCampo}`).click()
        cy.get(`@campo-${labelCampo}`).contains(opcao).click()
})