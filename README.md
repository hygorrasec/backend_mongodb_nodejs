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

```
npm install express mongoose cors dotenv
```

3. **Instale o nodemon como dependência de desenvolvimento:**
```
npm install -D nodemon
```

4. **Inicialize o projeto com o nodemon:**
```
npm start
```

5. **Instale a template engine EJS para renderizar o HTML:**
```
npm install ejs
```

6. **Instale o módulo ‘method-override’ para permitir utilizar métodos HTTP além dos tradicionais GET e POST em formulários HTML:**
```
npm install method-override
```
