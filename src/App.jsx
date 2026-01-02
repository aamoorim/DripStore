import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'; 
import Routes from './routes/Path'; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes /> {/* Chama as rotas */}
    </BrowserRouter>
  );
}

export default App;
