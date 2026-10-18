# Banco Web Tests

Este projeto contém testes automatizados de interface para um sistema bancário web, utilizando Cypress. A suíte cobre fluxos de autenticação e transferências bancárias, validando o comportamento principal da aplicação em nível de experiência do usuário.

## Tecnologias utilizadas

- Cypress
- JavaScript
- Fixtures para dados de teste
- Relatórios HTML com `cypress-mochawesome-reporter`

## Pré-requisitos

Antes de executar os testes, certifique-se de que:

- o Node.js e o npm estejam instalados;
- a aplicação web alvo esteja rodando localmente em `http://localhost:4000`;
- o projeto tenha as dependências instaladas.

## Instalação

```bash
npm install
```

## Execução dos testes

### Modo headless (linha de comando)

```bash
npm test
```

### Modo interativo (interface do Cypress)

```bash
npx cypress open
```

### Execução de um cenário específico

```bash
npx cypress run --spec cypress/e2e/login.cy.js
npx cypress run --spec cypress/e2e/transferencia.cy.js
```

## Estrutura do projeto

```text
banco-web-tests/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── transferencia.cy.js
│   ├── fixtures/
│   │   └── credenciais.json
│   ├── reports/
│   │   └── html/
│   └── support/
│       ├── commands.js
│       ├── e2e.js
│       └── commands/
│           ├── common.js
│           ├── login.js
│           └── transferencia.js
├── cypress.config.js
├── package.json
├── README.md
└── package-lock.json
```

## Casos de teste cobertos

### Login
- Login com credenciais válidas
- Login com credenciais inválidas
- Validação da mensagem de erro exibida no toast

### Transferência
- Transferência com valor válido
- Bloqueio de transferência acima de R$ 5.000,00 sem autenticação

## Dados de teste

Os dados de autenticação estão em `cypress/fixtures/credenciais.json` e incluem:

- usuário válido
- senha válida
- usuário inválido
- senha inválida

## Relatórios

Os relatórios HTML gerados ficam na pasta:

```text
cypress/reports/html/
```

## Observações

A configuração do Cypress aponta para a URL base:

```js
baseUrl: 'http://localhost:4000'
```

Portanto, a aplicação alvo deve estar disponível nessa porta para que os testes possam rodar corretamente.

## Autor

Projeto desenvolvido para fins de estudo e automação de testes de interface web.
