const prisma = require('../config/prisma');

class ProductService {
  // Obter lista de produtos (Com paginação e filtros se desejar futuramente)
  async getAll() {
    return await prisma.product.findMany({
      include: { images: true, categories: true, options: true }
    });
  }

  // Obter informações do produto pelo ID
  async getById(id) {
    return await prisma.product.findUnique({
      where: { id: Number(id) },
      include: { images: true, categories: true, options: true }
    });
  }

  // Criação de produto 
  async create(data) {
    const { category_ids, images, options, ...productData } = data;
    return await prisma.product.create({
      data: {
        ...productData,
        categories: { connect: category_ids.map(id => ({ id })) },
        images: { create: images },
        options: { create: options }
      }
    });
  }

  // Atualização de produto
  async update(id, data) {
    return await prisma.product.update({
      where: { id: Number(id) },
      data: data
    });
  }

  // Deletar produto
  async delete(id) {
    return await prisma.product.delete({
      where: { id: Number(id) }
    });
  }
}

module.exports = new ProductService();