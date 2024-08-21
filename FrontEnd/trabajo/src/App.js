import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginCliente from './Logins/LoginCliente';
import RegistroCliente from './Logins/RegistroCliente';
import LoginAdmin from './Logins/LoginAdmin';
import LoginTrans from './Logins/LoginTrans';
import LoginDcamion from './Logins/LoginDcamion';
import PaginaBienvenida from './Logins/PaginaBienvenida'; 
import MainCliente from './VistaCliente/MainCliente';
import MainAdmin from './VistaAdmin/MainAdmin';
import MainTrans from './VistaTrans/MainTrans';
import MainDcamion from './VistaDcamion/MainDcamion';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaBienvenida />} />
        <Route path="/loginCliente" element={<LoginCliente />} />
        <Route path="/registroCliente" element={<RegistroCliente />} />
        <Route path="/loginAdmin" element={<LoginAdmin/>} />
        <Route path="/loginTrans" element={<LoginTrans/>} />
        <Route path="/loginDcamion" element={<LoginDcamion/>} />
        <Route path="/MainAdmin" element={<MainAdmin/>} />
        <Route path="/MainCliente" element={<MainCliente />} />
        <Route path="/MainTrans" element={<MainTrans />} />
        <Route path="/MainDcamion" element={<MainDcamion />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
