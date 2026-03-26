const prisma = require('../config/prisma');

class ProductService {
  // Obter lista de produtos (Com paginação e filtros se desejar futuramente)
  async getAll() {
    return await prisma.product.findMany({
      include: { images: true, categories: true, options: true },
    });
  }

  // Obter informações do produto pelo ID
  async getById(id) {
    return await prisma.product.findUnique({
      where: { id: Number(id) },
      include: { images: true, categories: true, options: true },
    });
  }

  // Criação de produto (relacionamentos opcionais)
  async create(data) {
    const {
      category_ids, // opcional
      images,       // opcional
      options,      // opcional
      ...productData // campos simples: name, slug, description, price, etc.
    } = data;

    const createData = {
      ...productData,
    };

    // Só conecta categorias se vier um array válido
    if (Array.isArray(category_ids) && category_ids.length > 0) {
      createData.categories = {
        connect: category_ids.map((id) => ({ id })),
      };
    }

    // Só cria imagens se vier um array válido
    if (Array.isArray(images) && images.length > 0) {
      createData.images = {
        create: images,
      };
    }

    // Só cria options se vier um array válido
    if (Array.isArray(options) && options.length > 0) {
      createData.options = {
        create: options,
      };
    }

    return await prisma.product.create({ data: createData });
  }

  // Atualização de produto
  async update(id, data) {
    return await prisma.product.update({
      where: { id: Number(id) },
      data,
    });
  }

  // Deletar produto
  async delete(id) {
    const numericId = Number(id);

    // Verifica se o produto existe
    const exists = await prisma.product.findUnique({
      where: { id: numericId },
    });

    if (!exists) {
      // Lança um erro específico que o controller pode tratar
      const error = new Error('PRODUCT_NOT_FOUND');
      error.code = 'PRODUCT_NOT_FOUND';
      throw error;
    }

    // Se existe, deleta
    return await prisma.product.delete({
      where: { id: numericId },
    });
  }
}

module.exports = new ProductService();