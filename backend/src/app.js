const express = require('express');
const routes = require('./routes'); // Importa o index.js da pasta routes

const app = express();

app.use(express.json());
app.use(routes); // Diz ao express para usar as rotas definidas

module.exports = app;