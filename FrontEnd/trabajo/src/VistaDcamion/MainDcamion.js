import React, { useState } from 'react';

const MainDcamion = () => {
  const [mantenimiento, setMantenimiento] = useState({
    fechaUltimoMantenimiento: '',
    tipoMantenimiento: '',
    observaciones: '',
  });

  const [estadoCamion, setEstadoCamion] = useState({
    cargaActual: 0,
    consumoCombustible: 0,
  });

  const handleMantenimientoChange = (e) => {
    setMantenimiento({
      ...mantenimiento,
      [e.target.name]: e.target.value,
    });
  };

  const handleEstadoCamionChange = (e) => {
    setEstadoCamion({
      ...estadoCamion,
      [e.target.name]: e.target.value,
    });
  };

  const actualizarMantenimiento = () => {
    // Aquí podrías realizar una llamada a una API para guardar los datos
    console.log('Información de mantenimiento actualizada:', mantenimiento);
  };

  const consultarEstadoCamion = () => {
    // Aquí podrías realizar una llamada a una API para obtener el estado del camión
    console.log('Estado actual del camión:', estadoCamion);
  };

  const handleLogout = () => {
    window.location.href = '/PaginaBienvenida'; // Redirigir al usuario a la página de inicio de sesión
  };

  return (
    <div className="container1">
      <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
      <div className="container">
        <h1>Panel de Control del Camión</h1>

        {/* Mantenimiento y Actualización */}
        <div style={{ marginBottom: '40px' }}>
          <h2>Mantenimiento y Actualización</h2>
          <div style={{ marginBottom: '10px' }}>
            <label>Fecha del Último Mantenimiento:</label>
            <input
              type="date"
              name="fechaUltimoMantenimiento"
              value={mantenimiento.fechaUltimoMantenimiento}
              onChange={handleMantenimientoChange}
              style={{ marginLeft: '10px', padding: '8px', width: '100%', border: '1px solid #003366', borderRadius: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Tipo de Mantenimiento:</label>
            <input
              type="text"
              name="tipoMantenimiento"
              value={mantenimiento.tipoMantenimiento}
              onChange={handleMantenimientoChange}
              placeholder="Ej. Cambio de aceite, llantas, revisión general"
              style={{ marginLeft: '10px', padding: '8px', width: '100%', border: '1px solid #003366', borderRadius: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Observaciones:</label>
            <textarea
              name="observaciones"
              value={mantenimiento.observaciones}
              onChange={handleMantenimientoChange}
              placeholder="Añadir observaciones relevantes"
              style={{ marginLeft: '10px', padding: '8px', width: '100%', border: '1px solid #003366', borderRadius: '5px' }}
            />
          </div>
          <button
            onClick={actualizarMantenimiento}
            style={{ padding: '10px 20px', backgroundColor: '#003366', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
          >
            Actualizar Mantenimiento
          </button>
        </div>

        {/* Consultar Estado del Camión */}
        <div>
          <h2>Consulta del Estado del Camión</h2>
          <div style={{ marginBottom: '10px' }}>
            <label>Carga Actual (kg):</label>
            <input
              type="number"
              name="cargaActual"
              value={estadoCamion.cargaActual}
              onChange={handleEstadoCamionChange}
              style={{ marginLeft: '10px', padding: '8px', width: '100%', border: '1px solid #003366', borderRadius: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Consumo de Combustible (gal/km):</label>
            <input
              type="number"
              name="consumoCombustible"
              value={estadoCamion.consumoCombustible}
              onChange={handleEstadoCamionChange}
              style={{ marginLeft: '10px', padding: '8px', width: '100%', border: '1px solid #003366', borderRadius: '5px' }}
            />
          </div>
          <button
            onClick={consultarEstadoCamion}
            style={{ padding: '10px 20px', backgroundColor: '#003366', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
          >
            Consultar Estado
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainDcamion;
