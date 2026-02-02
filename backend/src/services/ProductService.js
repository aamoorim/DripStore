const prisma = require('../config/prisma');

class ProductService {
  async create(data) {
    const { 
      category_ids, // Array de IDs: [1, 2]
      images,       // Array de objetos: [{ path: 'url.jpg' }]
      options,      // Array de objetos: [{ title: 'Cor', values: 'Azul' }]
      ...productData 
    } = data;

    return await prisma.product.create({
      data: {
        ...productData,
        // Relacionamento N:N com Categorias
        categories: {
          connect: category_ids.map(id => ({ id }))
        },
        // Relacionamento 1:N com Imagens
        images: {
          create: images
        },
        // Relacionamento 1:N com Opções
        options: {
          create: options
        }
      }
    });
  }

  async getAll() {
    return await prisma.product.findMany({
      include: {
        images: true,
        categories: true,
        options: true
      }
    });
  }
}

module.exports = new ProductService();