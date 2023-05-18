import React from 'react';
import Navbar from './components/statics/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/statics/footer/Footer';
import './App.css'
import Login from './paginas/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUruario';


function App() {
  return (
    < >
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route  path='/' element = {<Login />}/>
          <Route path='/login' element = {<Login />}/>
          <Route path='/home' element = {<Home />}/>
          <Route path="/cadastrousuario" element={<CadastroUsuario/>} />
          
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
