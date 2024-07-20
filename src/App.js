import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Registro from './Registro'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login />}></Route>
        <Route path='/Registro' element={ <Registro />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;