# DashBoard Server

Este projeto é um servidor Node.js que fornece uma API para gerenciamento de usuários. Ele permite que os usuários se registrem, façam login e recuperem informações sobre todos os usuários.

## Índice

- [Descrição](#descrição)
- [Tecnologias Usadas](#tecnologias-usadas)
- [Instalação](#instalação)
- [Uso](#uso)
- [Rotas Disponíveis](#rotas-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Descrição

Este servidor utiliza Express e Mongoose para gerenciar usuários em um banco de dados MongoDB. Ele inclui funcionalidades para registrar novos usuários, autenticar usuários existentes e listar todos os usuários.

## Tecnologias Usadas

- Node.js
- Express
- MongoDB
- Mongoose
- Bcrypt
- Dotenv
- CORS

## Instalação

1. Clone o repositório

2. Navegue até a pasta do projeto

3. Instale as dependências

4. Crie um arquivo `.env` na raiz do projeto e adicione a variável de ambiente para a conexão com o MongoDB:
   plaintext
   MONGODB_URI='sua_uri_do_mongodb'
   

## Uso

1. Para iniciar o servidor, execute:
   
2. O servidor estará disponível em `http://localhost:5000`.

## Rotas Disponíveis

- **POST `/api/users`**: Cria um novo usuário.
  - Exemplo de corpo da requisição:
    json
    {
        "name": "Nome do Usuário",
        "email": "email@exemplo.com",
        "password": "senha"
    }
    

- **GET `/api/users`**: Retorna todos os usuários cadastrados.

- **POST `/api/login`**: Autentica um usuário e retorna uma mensagem de sucesso.
  - Exemplo de corpo da requisição:
    json
    {
        "email": "email@exemplo.com",
        "password": "senha"
    }
    
