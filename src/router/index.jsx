import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import NotFound from '../pages/NotFound';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute=()=>{
    const {user}=useAuth();
    return user ? <Outlet/>:<Navigate to='/login' replace />
};

export const router= createBrowserRouter([
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/",
        element: <ProtectedRoute/>,
        children:[
            {
                path:"/",
                element: <RootLayout/>,
                children:[
                    {index: true, element:<Navigate to="/dashboard" replace />},
                    {path: "dashboard", element: <Dashboard/>},
                    {path: "usuarios", element: <Users/>},
                ],
            },
        ],
    },
    {
        path: "*",
        element: <NotFound/>,
    },
]);
