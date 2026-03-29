import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import Categorias from '../pages/Categorias';
import MeusPedidos from '../pages/MeusPedidos';
import Login from '../pages/login';
import Register from '../pages/Register';
import RegisterDetails from '../pages/RegisterDetails';
import ProductDetails from '../pages/ProductDetails';
import FinalizarCompra from '../pages/FinalizarCompra';
import MiniCartExpanded from '../pages/MiniCartExpanded';

function Path() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/produto/:id" element={<ProductDetails />} />
      <Route path="/meus-pedidos" element={<MeusPedidos />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path='/register/details' element={<RegisterDetails/>}/>
      <Route path='/finalizar-compra' element={<FinalizarCompra/>}/>
      <Route path='/mini-cart-expanded' element={<MiniCartExpanded/>}/>
    </Routes>
  );
}

export default Path;
