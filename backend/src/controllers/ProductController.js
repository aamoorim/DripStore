const ProductService = require('../services/ProductService');

class ProductController {
  async index(req, res) {
    try {
      const products = await ProductService.getAll();
      return res.json(products);
    } catch (error) {
      console.error('Erro ao listar produtos:', error);
      return res.status(500).json({ error: 'Erro interno ao listar produtos' });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductService.getById(id);

      if (!product) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

      return res.json(product);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      return res.status(500).json({ error: 'Erro interno ao buscar produto' });
    }
  }

  async store(req, res) {
    try {
      const product = await ProductService.create(req.body);
      return res.status(201).json(product);
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      return res.status(400).json({ error: 'Erro ao criar produto', details: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductService.update(id, req.body);
      return res.json(product);
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      return res.status(400).json({ error: 'Erro ao atualizar produto', details: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await ProductService.delete(id);
      return res.status(204).send();
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
      return res.status(400).json({ error: 'Erro ao deletar produto' });
    }
  }
}

module.exports = new ProductController();