
const prisma = require('../config/prisma');


class CategoryService {

  async getAll() {
    return prisma.category.findMany();
  }

  async getById(id) {
    return prisma.category.findUnique({
      where: { id: Number(id) }
    });
  }

  async create(data) {
    return prisma.category.create({
      data: {
        name: data.name,
        slug: data.slug,
        useInMenu: data.useInMenu ?? data.use_in_menu ?? false
      }
    });
  }

  async update(id, data) {
    // Map snake_case to camelCase for backwards compatibility
    const updateData = {
      ...(data.name && { name: data.name }),
      ...(data.slug && { slug: data.slug }),
      ...(data.useInMenu !== undefined && { useInMenu: data.useInMenu }),
      ...(data.use_in_menu !== undefined && { useInMenu: data.use_in_menu })
    };
    
    return prisma.category.update({
      where: { id: Number(id) },
      data: updateData
    });
  }

  async delete(id) {
    return prisma.category.delete({
      where: { id: Number(id) }
    });
  }
}

module.exports = new CategoryService();
