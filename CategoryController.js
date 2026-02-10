const CategoryService = require('../services/CategoryService');

class CategoryController {

  async index(req, res) {
    try {
      const categories = await CategoryService.getAll();
      return res.json(categories);
    } catch (error) {
      console.error('Erro ao obter categorias:', error);
      return res.status(500).json({ 
        error: 'Erro interno no servidor',
        details: error.message 
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const category = await CategoryService.getById(id);

      if (!category) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }

      return res.json(category);
    } catch (error) {
      console.error('Erro ao obter categoria:', error);
      return res.status(500).json({ 
        error: 'Erro interno no servidor',
        details: error.message 
      });
    }
  }

  async store(req, res) {
    try {
      const category = await CategoryService.create(req.body);
      return res.status(201).json(category);
    } catch (error) {
      console.error('Erro ao criar categoria:', error);
      return res.status(400).json({
        error: 'Erro ao criar categoria',
        details: error.message
      });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    try {
      const category = await CategoryService.update(id, req.body);
      return res.json(category);
    } catch (error) {
      console.error('Erro ao atualizar categoria:', error);
      return res.status(400).json({
        error: 'Erro ao atualizar categoria',
        details: error.message
      });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await CategoryService.delete(id);
      return res.status(204).send();
    } catch (error) {
      console.error('Erro ao deletar categoria:', error);
      return res.status(400).json({ error: 'Erro ao deletar categoria' });
    }
  }
}

module.exports = new CategoryController();
