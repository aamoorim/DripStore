const prisma = require('../config/prisma');
const bcrypt = require('bcrypt');

// GET - Buscar usuário por ID
async function getUserById(req, res) {
  try {
    const { id } = req.params;
    
    // Só permite consultar se o usuário logado for o mesmo
    if (req.user.id !== Number(id)) {
      return res.status(403).json({ message: 'Não autorizado' });
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        firstname: true,
        surname: true,
        email: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
}

// POST - Criar usuário
async function createUser(req, res) {
  try {
    const { firstname, surname, email, password } = req.body;

    if (!firstname || !surname || !email || !password) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: 'Email já cadastrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        firstname,
        surname,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        firstname: true,
        surname: true,
        email: true,
      },
    });

    return res.status(201).json(user);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
}

// PUT - Atualizar usuário
async function updateUser(req, res) {
  try {
    const { id } = req.params;

    // Só permite atualizar se o usuário logado for o mesmo
    if (req.user.id !== Number(id)) {
      return res.status(403).json({ message: 'Não autorizado' });
    }

    const { firstname, surname, email, password } = req.body;

    const userExists = await prisma.user.findUnique({ where: { id: Number(id) } });

    if (!userExists) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    let updatedData = { firstname, surname, email };

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashedPassword;
    }

    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: updatedData,
      select: { id: true, firstname: true, surname: true, email: true },
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
}

// DELETE - Deletar usuário
async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    // Só permite deletar se o usuário logado for o mesmo
    if (req.user.id !== Number(id)) {
      return res.status(403).json({ message: 'Não autorizado' });
    }

    const userExists = await prisma.user.findUnique({ where: { id: Number(id) } });

    if (!userExists) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    await prisma.user.delete({ where: { id: Number(id) } });

    return res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
}

module.exports = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};