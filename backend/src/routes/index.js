const express = require('express');
const router = express.Router();

// Import controllers
const ProductController = require('../controllers/ProductController');
const { register, login } = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');
const CategoryController = require('../controllers/CategoryController');

// Import middleware
const validateToken = require('../middlewares/authMiddleware');

// Rotas de Autenticação
router.post('/register', register);
router.post('/login', login);

// Rotas de Produtos (públicas)
router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.show);

// Rotas de Produtos (protegidas)
router.post('/products', validateToken, ProductController.store);
router.put('/products/:id', validateToken, ProductController.update);
router.delete('/products/:id', validateToken, ProductController.delete);

// Rotas de Usuários (protegidas)
router.get('/users/:id', validateToken, UserController.getUserById);
router.post('/users', validateToken, UserController.createUser);
router.put('/users/:id', validateToken, UserController.updateUser);
router.delete('/users/:id', validateToken, UserController.deleteUser);

// Rotas de Categorias
// GETs públicos
router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.show);

// Escrita protegida por token
router.post('/categories', validateToken, CategoryController.store);
router.put('/categories/:id', validateToken, CategoryController.update);
router.delete('/categories/:id', validateToken, CategoryController.delete);

module.exports = router;