const express = require('express');
const router = express.Router();

// Import controllers
const ProductController = require('../controllers/ProductController');
const { register, login } = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');

// Import middleware
const validateToken = require('../middlewares/authMiddleware');

// Rotas de Autenticação
router.post('/register', register);
router.post('/login', login);

// Rotas de Produtos
router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.show);

// Rotas protegidas (GET, POST, PUT, DELETE) com Middleware
// Rotas de Produtos
router.post('/products', validateToken, ProductController.store);
router.put('/products/:id', validateToken, ProductController.update);
router.delete('/products/:id', validateToken, ProductController.delete);

// Rotas de Usuários
router.get('/users/:id', validateToken, UserController.getUserById);
router.post('/users', validateToken, UserController.createUser);
router.put('/users/:id', validateToken, UserController.updateUser);
router.delete('/users/:id', validateToken, UserController.deleteUser);

module.exports = router;
