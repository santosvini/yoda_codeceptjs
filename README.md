﻿# Projeto yoda_codeceptjs 📝

## Status: 🚧 Em Andamento

Projeto de testes end-to-end(E2E), com a utilização de Page Objects Model(POM).

## Pre-requisitos

Este projeto utiliza das versões `v16.18.0` e `v8.19.2` do Node e NPM respectivamente. Use a mesma versão ou superior.

## Instalações

Rode `npm install` (ou `npm i` versão curta) para instalar as dependências do projeto.

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/santosvini/yoda_codeceptjs.git
```

Entre no diretório do projeto

```bash
  cd yoda_codeceptjs/
```

Inicie o servidor (acesse as pasta yoda_codeceptjs).

```bash
  npm run server
```

## Testes

https://github.com/santosvini/yoda_codeceptjs/assets/46813491/783134ba-e44a-4bc2-89f4-eb2fc0cd8f54

### Executando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm test 
```
para rodar em modo headeless, passar o seguinte parametro no arquivo ```codecept.conf.js```

```bash
desiredCapabilities: {
  chromeOptions: {
    args: [ "--headless", "--disable-gpu" "--no-sandbox" ]
    },
  },
```

## Gerar Relatórios

- [DOC CodeceptJS](https://codecept.io/webdriver/)

- Ativar/Gerar o report pela CLI: `npm run mocha`<br>
- Para gerar os relatórios após a execução dos testes, dentro da pasta mochawesome-report: `npm run mochawesome`<br>
- Para verificar os testes e evidências, acessar a pasta mochawesome-report/evidences e mochawesome-report/mochawesome.html

![image](https://github.com/santosvini/yoda_codeceptjs/assets/46813491/3d735de7-5030-4e7d-8d31-438f33e8701b)

## Apoie este projeto

Caso tenha gostado do projeto e da documentação, deixe uma ⭐.

Este projeto foi criado por 💚 [Vini Santos](https://santosvini.github.io/).
