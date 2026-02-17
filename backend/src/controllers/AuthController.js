const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../config/prisma');
require('dotenv').config();

// Registro de usuário
async function register(req, res) {
  try {
    const { firstname, surname, email, password } = req.body;

    // Verifica se o usuário já existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email já cadastrado' });
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Salva o usuário no banco
    const user = await prisma.user.create({
      data: {
        firstname,
        surname,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({
      id: user.id,
      firstname: user.firstname,
      surname: user.surname,
      email: user.email,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro interno' });
  }
}

// Login de usuário
async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Verifica se o usuário existe
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Email ou senha inválidos' });
    }

    // Verifica a senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Email ou senha inválidos' });
    }

    // Gera token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'secretkey',
      { expiresIn: '1h' }
    );

    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro interno' });
  }
}

module.exports = { register, login };
