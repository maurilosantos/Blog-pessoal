import React from 'react';
import Navbar from './components/statics/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/statics/footer/Footer';
import './App.css'
import Login from './paginas/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    < >
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route  path='/' element = {<Login />}/>
          <Route path='/login' element = {<Login />}/>
          <Route path='/home' element = {<Home />}/>

        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
