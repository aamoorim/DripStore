const ProductService = require('../services/ProductService');

class ProductController {
  async store(req, res) {
    try {
      const product = await ProductService.create(req.body);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar produto', details: error.message });
    }
  }

  async index(req, res) {
    const products = await ProductService.getAll();
    return res.json(products);
  }
}

module.exports = new ProductController();