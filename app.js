const PORT = 3000;

const express = require("express");  // Importa o express
const cors = require("cors");  // Importa o cors
const app = express();  // Cria uma instância do express

app.use(cors());  // Adiciona o middleware de CORS
app.use(express.json());  // Adiciona o middleware que converte o corpo da requisição para JSON

// DB Connection
const conn = require("./db/conn");  // Importa a função de conexão com o banco de dados
conn();  // Executa a função de conexão com o banco de dados

// Routes
const routes = require("./routes/router");  // Importa as rotas
app.use("/api", routes);  // Adiciona o middleware de rotas

app.listen(PORT, () => {
    console.log("Servidor Online! Conectado na porta: " + PORT);
});


