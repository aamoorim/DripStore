const express = require('express');
const router = express.Router();

// Import controllers
const ProductController = require('../controllers/ProductController');
const { register, login } = require('../controllers/AuthController');

// Import middleware
const validateToken = require('../middlewares/authMiddleware');

// Rotas de Autenticação
router.post('/register', register);
router.post('/login', login);

// Rotas de Produtos
router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.show);

// Rotas protegidas (POST, PUT, DELETE) com middleware
router.post('/products', validateToken, ProductController.store);
router.put('/products/:id', validateToken, ProductController.update);
router.delete('/products/:id', validateToken, ProductController.delete);

module.exports = router;
