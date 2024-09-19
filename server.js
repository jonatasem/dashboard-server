const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para analisar o corpo das requisições
app.use(express.json());

// Middleware para permitir CORS
app.use(cors());

// Importando as rotas
const userRoutes = require('./routes/userRoutes');

// Conexão ao MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Usando as rotas
app.use('/api', userRoutes); // Prefixando as rotas com /api

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

// Middleware para logging de requisições
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});