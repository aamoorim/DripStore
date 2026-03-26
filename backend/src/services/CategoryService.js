const prisma = require('../config/prisma');

class CategoryService {
  // Lista todas as categorias
  async getAll() {
    return await prisma.category.findMany();
  }

  // Busca categoria por ID
  async getById(id) {
    return await prisma.category.findUnique({
      where: { id: Number(id) },
    });
  }

  // Cria categoria
  async create(data) {
    // data vem direto do req.body
    return await prisma.category.create({
      data,
    });
  }

  // Atualiza categoria
  async update(id, data) {
    return await prisma.category.update({
      where: { id: Number(id) },
      data,
    });
  }

  // Deleta categoria
  async delete(id) {
    const numericId = Number(id);

    const exists = await prisma.category.findUnique({
      where: { id: numericId },
    });

    if (!exists) {
      const error = new Error('CATEGORY_NOT_FOUND');
      error.code = 'CATEGORY_NOT_FOUND';
      throw error;
    }

    return await prisma.category.delete({
      where: { id: numericId },
    });
  }
}

module.exports = new CategoryService();