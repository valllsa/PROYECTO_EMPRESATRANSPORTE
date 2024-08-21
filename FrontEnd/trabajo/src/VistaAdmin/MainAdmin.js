import React, { useState, useEffect } from 'react';
import './styles_admin.css';

const MainAdmin = () => {
    const [camiones, setCamiones] = useState([]);
    const [newCamion, setNewCamion] = useState({ matricula: '', capacidad: 0, consumo: 0, cargaActual: 0 });
    const [selectedCamion, setSelectedCamion] = useState(null);
    const [carga, setCarga] = useState(0);

    // Cargar camiones del localStorage cuando el componente se monta
    useEffect(() => {
        const storedCamiones = JSON.parse(localStorage.getItem('camiones')) || [];
        setCamiones(storedCamiones);
    }, []);

    // Guardar camiones en localStorage cuando cambian
    useEffect(() => {
        localStorage.setItem('camiones', JSON.stringify(camiones));
    }, [camiones]);

    const handleRegisterCamion = () => {
        setCamiones([...camiones, newCamion]);
        setNewCamion({ matricula: '', capacidad: 0, consumo: 0, cargaActual: 0 });
    };

    const handleSelectCamion = (camion) => {
        setSelectedCamion(camion);
    };

    const handleUpdateCamion = () => {
        setCamiones(camiones.map(c => c.matricula === selectedCamion.matricula ? selectedCamion : c));
        setSelectedCamion(null);
    };

    const handleAssignCamion = () => {
        const camionAsignado = camiones.find(c => c.capacidad >= carga && c.cargaActual === 0);
        if (camionAsignado) {
            camionAsignado.cargaActual = carga;
            setCamiones([...camiones]);
            alert(`Camión con matrícula ${camionAsignado.matricula} asignado a la carga de ${carga} kg.`);
        } else {
            alert("No hay camiones disponibles con suficiente capacidad.");
        }
    };

    // Función para eliminar un camión
    const handleDeleteCamion = (matricula) => {
        const updatedCamiones = camiones.filter(c => c.matricula !== matricula);
        setCamiones(updatedCamiones);
    };
    const handleLogout = () => {
        window.location.href = '/PaginaBienvenida'; // Redirigir al usuario a la página de inicio de sesión
    };

    return (
        <div className="container1">
            <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
        <div className="container">
            <h1>Gestión de Camiones</h1>
            
            <h2>Registrar Nuevo Camión</h2>
            <input 
                type="text" 
                placeholder="Matrícula" 
                value={newCamion.matricula} 
                onChange={(e) => setNewCamion({ ...newCamion, matricula: e.target.value })} 
            />
            <input 
                type="number" 
                placeholder="Capacidad de carga (kg)" 
                value={newCamion.capacidad} 
                onChange={(e) => setNewCamion({ ...newCamion, capacidad: parseInt(e.target.value) })} 
            />
            <input 
                type="number" 
                placeholder="Consumo de gasolina (gal/km)" 
                value={newCamion.consumo} 
                onChange={(e) => setNewCamion({ ...newCamion, consumo: parseFloat(e.target.value) })} 
            />
            <button onClick={handleRegisterCamion}>Registrar Camión</button>

            <h2>Lista de Camiones</h2>
            <ul>
                {camiones.map((camion, index) => (
                    <li key={index}>
                        {`Matrícula: ${camion.matricula}, Capacidad: ${camion.capacidad} kg, Consumo: ${camion.consumo} gal/km, Carga Actual: ${camion.cargaActual} kg`}
                        <button onClick={() => handleSelectCamion(camion)}>Editar</button>
                        <button onClick={() => handleDeleteCamion(camion.matricula)}>Eliminar</button>
                    </li>
                ))}
            </ul>

            {selectedCamion && (
                <div>
                    <h2>Actualizar Información del Camión</h2>
                    <input 
                        type="number" 
                        placeholder="Capacidad de carga (kg)" 
                        value={selectedCamion.capacidad} 
                        onChange={(e) => setSelectedCamion({ ...selectedCamion, capacidad: parseInt(e.target.value) })} 
                    />
                    <input 
                        type="number" 
                        placeholder="Consumo de gasolina (gal/km)" 
                        value={selectedCamion.consumo} 
                        onChange={(e) => setSelectedCamion({ ...selectedCamion, consumo: parseFloat(e.target.value) })} 
                    />
                    <button onClick={handleUpdateCamion}>Actualizar Camión</button>
                </div>
            )}

            <h2>Asignar Camión a una Carga</h2>
            <input 
                type="number" 
                placeholder="Peso de la carga (kg)" 
                value={carga} 
                onChange={(e) => setCarga(parseInt(e.target.value))} 
            />
            <button onClick={handleAssignCamion}>Asignar Camión</button>
        </div>
        </div>
    );
};

export default MainAdmin;
