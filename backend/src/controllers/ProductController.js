const ProductService = require('../services/ProductService');

class ProductController {
  async index(req, res) {
    const products = await ProductService.getAll();
    return res.json(products);
  }

  async show(req, res) {
    const { id } = req.params;
    const product = await ProductService.getById(id);
    if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
    return res.json(product);
  }

  async store(req, res) {
    try {
      const product = await ProductService.create(req.body);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar', details: error.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    try {
      const product = await ProductService.update(id, req.body);
      return res.json(product);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar', details: error.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await ProductService.delete(id);
      return res.status(204).send(); 
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao deletar' });
    }
  }
}

module.exports = new ProductController();