import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'; 
import Routes from './routes/Path'; 
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes /> {/* Chama as rotas */}
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
