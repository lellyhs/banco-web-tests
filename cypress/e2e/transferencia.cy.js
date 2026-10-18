
describe('Transferencias', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })

    it('Deve transferir com valor válido', () => {
        cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '500')
        cy.verficarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro ao tentar transferir mais de 5000 sem token', () => {
        cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '6000')
        cy.verficarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })

})