import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RootLayout=()=>{
    const { logout }= useAuth();

    return(
        <div style={{ display: 'flex', minHeigth: '100vh' }}>
            <aside style={{ width: '200px', backgrpund: '#2c3e50', color:'withe', padding: '1rem' }}>
                <nav>
                    <NavLink to="/dashboard" style={({ isActive })=>({ color: isActive ? '#3498db' : 'withe', display: 'block', marginBotton: '10px' })}>
                        Dashboard
                    </NavLink>
                    <NavLink to="/usuarios" style={({ isActive })=>({ color: isActive ? '#3498db': 'withe', display: 'block', marginBotton: '10px' })}>
                        Usuarios
                    </NavLink>
                    <button onClick={logout} style={{ marginTop: '20px' }}>Cerrar Sesion</button>
                </nav>
            </aside>
            <main style={{ flex: 1, padding: '2rem' }}>
                <Outlet/>
            </main>
        </div>
    );
};

export default RootLayout;
