require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const PORT = process.env.PORT || 3000;

const express = require('express');  // Importa o express
const cors = require('cors');  // Importa o cors
const methodOverride = require('method-override');  // Importa o method-override
const app = express();  // Cria uma instância do express

// Configurações
app.set('view engine', 'ejs');  // Define o motor de visualização como EJS
app.set('views', 'views');  // Define o diretório de visualização como views

app.use(cors());  // Adiciona o middleware de CORS
app.use(express.json());  // Adiciona o middleware que converte o corpo da requisição para JSON

app.use(express.urlencoded({ extended: true }));  // Adiciona o middleware que converte o corpo da requisição para URL Encoded
app.use(methodOverride('_method'));  // Adiciona o middleware de method-override

// DB Connection
const conn = require('./db/conn');  // Importa a função de conexão com o banco de dados
conn();  // Executa a função de conexão com o banco de dados

// Routes
const routes = require('./routes/router');  // Importa as rotas
app.use('/', routes);  // Adiciona o middleware de rotas

app.listen(PORT, () => {
    console.log(` - Server running on http://localhost:${PORT}/users and created by Hygor Rasec`);
});
