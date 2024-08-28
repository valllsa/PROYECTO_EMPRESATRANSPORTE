import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './stylesBienvenida.css';

const BienvenidaAdmin = () => { 
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
            
            <div>
                <h1>Bienvenido Administrador</h1>
            </div>
        </div>
    );
};

export default BienvenidaAdmin;
