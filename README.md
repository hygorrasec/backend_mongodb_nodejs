# Trabalho de Banco de Dados Não Relacional

Este trabalho foi criado por Hygor Rasec em 24/04/2024 para a disciplina de Banco de Dados Não Relacional do curso de Engenharia de Software, ministrada pelo professor Fabrício Dias.

## Instalação das Dependências

Para rodar o servidor, é preciso instalar algumas dependências. Siga os passos abaixo:

1. **Crie o arquivo package.json com as configurações padrão:**
```
npm init -y
```

2. **Instale as seguintes bibliotecas:**
- Express: É um framework para Node.js.
- Mongoose: É uma biblioteca para modelar objetos MongoDB.
- Cors: É um middleware para habilitar o CORS (Cross-Origin Resource Sharing) em uma aplicação Node.js.
- Dotenv: Usado para ocultar informações sensíveis do projeto.
- EJS: Template engine EJS para renderizar o HTML.
- method-override: Permite utilizar métodos HTTP além dos tradicionais GET e POST em formulários HTML

```
npm install express mongoose cors dotenv ejs method-override
```

2. **Instale o nodemon como dependência de desenvolvimento:**
```
npm install -D nodemon
```

3. **Inicialize o projeto com o nodemon:**
```
npm start
```

## Tela Users
![Tela Users](https://github.com/hygorrasec/backend_mongodb_nodejs/blob/main/imgs/users.png)

## Tela Edit
![Tela Edit](https://github.com/hygorrasec/backend_mongodb_nodejs/blob/main/imgs/edit.png)

## Tela MongoDB
![Tela MongoDB](https://github.com/hygorrasec/backend_mongodb_nodejs/blob/main/imgs/mongodb.png)
