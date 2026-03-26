const CategoryService = require('../services/CategoryService');

class CategoryController {
  // GET /categories
  async index(req, res) {
    try {
      const categories = await CategoryService.getAll();
      return res.json(categories);
    } catch (error) {
      console.error('Erro ao listar categorias:', error);
      return res.status(500).json({ error: 'Erro interno ao listar categorias' });
    }
  }

  // GET /categories/:id
  async show(req, res) {
    try {
      const { id } = req.params;
      const category = await CategoryService.getById(id);

      if (!category) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }

      return res.json(category);
    } catch (error) {
      console.error('Erro ao buscar categoria:', error);
      return res.status(500).json({ error: 'Erro interno ao buscar categoria' });
    }
  }

  // POST /categories
  async store(req, res) {
    try {
      const category = await CategoryService.create(req.body);
      return res.status(201).json(category);
    } catch (error) {
      console.error('Erro ao criar categoria:', error);
      return res.status(400).json({ error: 'Erro ao criar categoria', details: error.message });
    }
  }

  // PUT /categories/:id
  async update(req, res) {
    try {
      const { id } = req.params;
      const category = await CategoryService.update(id, req.body);
      return res.json(category);
    } catch (error) {
      console.error('Erro ao atualizar categoria:', error);

      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }

      return res.status(400).json({ error: 'Erro ao atualizar categoria', details: error.message });
    }
  }

  // DELETE /categories/:id
  async delete(req, res) {
    try {
      const { id } = req.params;
      await CategoryService.delete(id);
      return res.status(200).json({ message: 'Categoria deletada com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar categoria:', error);

      if (error.code === 'CATEGORY_NOT_FOUND') {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }

      return res.status(400).json({ error: 'Erro ao deletar categoria' });
    }
  }
}

module.exports = new CategoryController();
