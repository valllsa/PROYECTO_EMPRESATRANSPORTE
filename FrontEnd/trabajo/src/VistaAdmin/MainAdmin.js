import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles_admin.css';
import axios from 'axios';


const MainAdmin = () => { 
    const [formData, setFormData] = useState({
        Matricula: '',
        Capacidad: '',
        Gasolina: '',
        CargaActual: 0
    });

    const [camiones, setCamiones] = useState([]);
    const [selectedCamion, setSelectedCamion] = useState(null);
    const [carga, setCarga] = useState(0);

    useEffect(() => {
        // Obtener los camiones registrados al cargar el componente
        const fetchCamiones = async () => {
            try {
                const response = await axios.get("http://localhost:4000/ListaCam");
                setCamiones(response.data);
            } catch (error) {
                console.error("Error al obtener los camiones:", error);
            }
        };
        fetchCamiones();
    }, []);

    const enviar = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:4000/ListaCam", formData);
            alert("Éxito: " + response.data.message);
            
            // Actualizar la lista de camiones
            setCamiones([...camiones, formData]);

            // Reiniciar el formulario
            setFormData({
                Matricula: '',
                Capacidad: '',
                Gasolina: '',
                CargaActual: 0
            });
        } catch (error) {
            console.error(error);
            alert("Error al enviar los datos: " + error.message);
        }
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSelectCamion = (camion) => {
        setSelectedCamion(camion);
    };

    const handleUpdateCamion = () => {
        setCamiones(camiones.map(c => c.Matricula === selectedCamion.Matricula ? selectedCamion : c));
        setSelectedCamion(null);
    };

    const handleAssignCamion = () => {
        const camionAsignado = camiones.find(c => c.Capacidad >= carga && c.CargaActual === 0);
        if (camionAsignado) {
            camionAsignado.CargaActual = carga;
            setCamiones([...camiones]);
            alert(`Camión con matrícula ${camionAsignado.Matricula} asignado a la carga de ${carga} kg.`);
        } else {
            alert("No hay camiones disponibles con suficiente capacidad.");
        }
    };

    const handleDeleteCamion = (matricula) => {
        const updatedCamiones = camiones.filter(c => c.Matricula !== matricula);
        setCamiones(updatedCamiones);
    };

    const handleLogout = () => {
        alert("Redirigiendo a la página de inicio de sesión...");
        window.location.href = '/PaginaBienvenida'; // Redirigir al usuario a la página de inicio de sesión
    };

    return ( 
            
                 <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Tu Marca</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/solicitudes">Solicitudes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/MainAdmin">Camiones</Link> {/* Cambia el enlace aquí */}
                            </li>
                        </ul>
                        <div className="ml-auto d-flex align-items-center">
                            <button type="button" onClick={handleLogout} className="btn btn-primary">Cerrar Sesión</button>
                        </div>
                    </div>
                </div>
            </nav>
                <h1>Gestión de Camiones</h1>
                
                <h2>Registrar Nuevo Camión</h2>
                <form onSubmit={enviar}>
                    <input 
                        type="text" 
                        placeholder="Matrícula" 
                        name="Matricula"
                        value={formData.Matricula} 
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="number" 
                        placeholder="Capacidad de carga (kg)" 
                        name="Capacidad"
                        value={formData.Capacidad} 
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="number" 
                        placeholder="Consumo de gasolina (gal/km)" 
                        name="Gasolina"
                        value={formData.Gasolina} 
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Registrar Camión</button>
                </form>

                <h2>Camiones Registrados</h2>
                <table className="camiones-table">
                    <thead>
                        <tr>
                            <th>Matrícula</th>
                            <th>Capacidad (kg)</th>
                            <th>Consumo (gal/km)</th>
                            <th>Carga Actual (kg)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {camiones.map((camion, index) => (
                            <tr key={index}>
                                <td>{camion.Matricula}</td>
                                <td>{camion.Capacidad}</td>
                                <td>{camion.Gasolina}</td>
                                <td>{camion.CargaActual}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
};

export default MainAdmin;