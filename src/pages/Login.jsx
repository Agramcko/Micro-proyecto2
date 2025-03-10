import React, { useState } from 'react';
import { app } from '../credenciales';


import { getAuth, onAuthStateChanged } from 'firebase/auth';
const auth = getAuth(app);




export const Login = () => {

    const [user, setUser] = useState(null);

    onAuthStateChanged(auth, (userConnected) => {
        if (userConnected) {
            setUser(userConnected);

        } else {
            setUser(null);
        }

    })


    return (
        <div>
            {user? <h1>Usuario conectado</h1>: <h1>No hay usuario</h1>}
        </div>
    )
}