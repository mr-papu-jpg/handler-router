import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login(){
    const {login}=useAuth();
    const navigate= useNavigate();

    const handleLogin=()=>{
        login("TOKEN_DE_PRUEBA_123");
        navigate("/dashboard",{replace: true});
    }

    return(
        <div style={{ padding: '50px', textAlign: 'canter', }}>
            <h1>Login</h1>
            <button onClick={handleLogin}>Iniciar Sesion</button>
        </div>
    );
}
