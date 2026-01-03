import { useEffect, useState } from "react";
import api from '../api/axiosConfig';

export default function Users(){
    const [ users, setUsers ]= useState([]);

    useEffect(()=>{
        const controller= new AbortController();
        api.get('/users', { signal: controller.signal })
            .then(res=>{
                console.log("Lo que llega de la API:", res.data);
                setUsers(res.data)
            })
            .catch(err=>console.error(err));
        return ()=>controller.abort();
    },[]);

    return(
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {Array.isArray(users) && users.map(u => (
    <li key={u.id}>{u.name} - {u.email}</li>
  ))}
            </ul>
        </div>
    );
}
