import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import Categorias from '../pages/Categorias';
import MeusPedidos from '../pages/MeusPedidos';
import Login from '../pages/login';
import Register from '../pages/Register';

function Path() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/meus-pedidos" element={<MeusPedidos />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  );
}

export default Path;
