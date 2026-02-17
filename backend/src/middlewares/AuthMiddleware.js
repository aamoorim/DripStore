const jwt = require('jsonwebtoken');
require('dotenv').config();

function validateToken(req, res, next) {
  const protectedMethods = ['POST', 'PUT', 'DELETE'];

  // Se não for um método protegido, libera
  if (!protectedMethods.includes(req.method)) {
    return next();
  }

  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(400).json({ message: 'Authorization header é obrigatório' });
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(400).json({ message: 'Formato inválido. Use: Bearer <token>' });
  }

  const token = parts[1];

  // Verifica se o token JWT é válido
  jwt.verify(token, process.env.JWT_SECRET || 'secretkey', (err, decoded) => {
    if (err) {
      return res.status(400).json({ message: 'Token inválido ou expirado' });
    }

    // Adiciona os dados do usuário decodificados na requisição
    req.user = decoded;
    next();
  });
}

module.exports = validateToken;