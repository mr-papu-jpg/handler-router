import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard=()=>{
    const { user }= useAuth();

    return(
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Panel de control</h1>
                <p>Bienvenido de nuevo a la plataforma.</p>
                </header>
                <section style={styles.stateGrid}>
                    <div style={styles.card}>
                        <h2>Estado del Token</h2>
                        <code style={styles.code}>
                            { user ? 'Activo (protrgido)':'No encontrado' }
                        </code>
                    </div>
                    <div>
                        <h3>Secion Iniciada</h3>
                        <p>{ new Date().toLocaleDateString() }</p>
                    </div>
                </section>

                <div style={ styles.infoBox }>
                    <h4>Proximos pasos</h4>
                    <ul>
                        <li>Navega a la seccion de <b>Usuarios</b> para probar la carga de datos con Axios.</li>
                        <li>Prueba a <b>Cerrar Sesion</b> pars verificar el Guardian de Rutas te expulsa al Login.</li>
                        <li>Intenta escribir una URL loca ( como/chocolate ) para ver la pagina 404.</li>
                    </ul>
                </div>
            </div>
    );
};

const styles={
    container: { maxWidth: '800px' },
    header: { marginBottom: '2rem' },
    stateGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))',
        gap: '1rem',
        marginBottom: '2rem'
    },
    card: {
        padding: '1.5rem',
        borderRadius: '10px',
        backgroundColor: '#f8f9fa',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        border: '1px solid #dee2e6'
    },
    code: { color: '#e83e8c', wordBreak: 'break-all' },
    infoBox: {
        padding: '1rem',
        backgroundColor: '#e7f3ff',
        borderRadius: '8px',
        borderLeft: '5px solid #007bff'
    }
};

export default Dashboard;
