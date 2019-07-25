Vitrine com Minicart e QuickView

## Rodar

* Instale as dependências do projeto rodando `npm i`
* Rode o projeto com o comando `npm start`

## Serviço Rest

Criar o backend não é o foco deste teste, portanto está sendo disponibilizado um serviço Rest que deve ser utilizado para recuperar a lista de produtos do projeto.

Para rodar o serviço, é necessário instalar o json-server:

`npm install -g json-server`

Após isso, rodar o comando: `json-server -p 4000 --watch rest-api/products.json`

Isso irá disponibilizar uma api REST rodando no endereço http://localhost:4000/products.

Um produto especifico pode ser acessado através da url http://localhost:4000/products/{id};
