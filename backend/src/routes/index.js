const express = require('express');
const router = express.Router();

// Import controllers
const ProductController = require('../controllers/ProductController');
const { register, login } = require('../controllers/AuthController');

// Rotas de Autenticação
router.post('/register', register);
router.post('/login', login);

// Rotas de Produtos 
router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.show);
router.post('/products', ProductController.store);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.delete);
module.exports = router;