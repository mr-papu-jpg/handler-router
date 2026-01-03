import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound=()=>{
    const navigate= useNavigate();

    return (
        <div style={ styles.container }>
            <h1 style={ styles.title }>400</h1>
            <h2 style= { styles.subtitle }>Ups! pagina no encontrada</h2>
            <p style={styles.text}>
                parece que la ruta que buscas no existeo a sido movida a otra galaxia.
            </p>
            <button onClick={()=>navigate('/dashboard')}
                style={styles.button}
            >
                volver al Dashboard
            </button>
        </div>
    );
};

const styles={
    container:{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'conter',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem'
    },
    title: { fontSize:'brem', margin:0, color: '#de3545'},
    subtitle: { fontSize: '2rem', marginBottom: '1rem' },
    text: { color: '#6c757d', marginBottom:'2rem', maxWidth:'400px' },
    button:{
        padding: '0.8rem 1.5rem',
        fontSize: '1rem',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background 0.3s'
    }
};

export default NotFound;
