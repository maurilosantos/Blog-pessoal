import React from 'react';
import Navbar from './components/statics/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/statics/footer/Footer';
import './App.css'
import Login from './paginas/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUruario';
import ListaTema from './components/tema/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';


function App() {
  return (
    < >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />

          <Route path='/login' element={<Login />} />

          <Route path='/home' element={<Home />} />

          <Route path="/cadastrousuario" element={<CadastroUsuario />} />

          <Route path="/temas" element={<ListaTema />} />

          <Route path="/postagens" element={<ListaPostagem />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
