import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../VistaCliente/Estilos.css';
import axios from 'axios';

function RegistroCliente() {
  const [formData, setFormData] = useState({
    Nombre: '',
    Usuario: '',
    Contrasena: '',
    ConfirmarContrasena: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const enviar = async (event) => {
    event.preventDefault();

    if (formData.Contraseña !== formData.ConfirmarContraseña) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/Register_Cliente", formData);
      alert("Éxito: " + response.data.message);
      navigate('/LoginCliente'); // Redirige al login después de registrarse con éxito
    } catch (error) {
      console.error(error);
      alert("Error al enviar los datos: " + error.message);
    }
  };

  return (
    <div className='register-container'>
      <h2>Registro</h2>
      <form onSubmit={enviar}>

        <input
        value={formData.Nombre}
        onChange={handleChange} 
        type="text" 
        className="input-group form-control" 
        placeholder="Nombre" 
        name="Nombre" 
        required 
        />
        <input
          value={formData.Usuario}
          onChange={handleChange} 
          type="text" 
          className="input-group form-control" 
          placeholder="Usuario" 
          name="Usuario" 
          required
        />
        <input
          value={formData.Contrasena}
          onChange={handleChange} 
          type="text" 
          className="input-group form-control" 
          placeholder="Contrasena" 
          name="Contrasena" 
          required
        />
        <input
        value={formData.ConfirmarContrasena}
        onChange={handleChange} 
        type="text" 
        className="input-group form-control" 
        placeholder="ConfirmarContrasena" 
        name="ConfirmarContrasena" 
        required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegistroCliente;
