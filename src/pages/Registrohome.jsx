import React, { useState } from 'react';
import { app } from '../credenciales';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router';


const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

export const Registrohome = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home'); // Redirigir a la página Home
        } catch (err) {
            if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found') {
                setError('No estás registrado.');
            } else {
                setError('Ocurrió un error. Por favor, intenta de nuevo.');
            }
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/home'); // Redirigir a la página Home
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setError('El correo electrónico ya está en uso.');
            } else if (error.code === 'auth/invalid-email') {
                setError('El correo electrónico no es válido.');
            } else if (error.code === 'auth/weak-password') {
                setError('La contraseña es demasiado débil.');
            } else {
                setError('Error en el registro. Por favor, intenta de nuevo.');
            }
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate('/home'); 
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setError('El correo electrónico ya está en uso.');
            } else {
                setError('Ocurrió un error con el inicio de sesión de Google. Por favor, intenta de nuevo.');
            }
        }
    };

    return (
        <div className="login-container">
            {isRegistering ? (
                <form onSubmit={handleRegister} className="login-form">
                    <h1>Registrarse</h1>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit">Registrar</button>
                    <button type="button" onClick={handleGoogleLogin} className="google-login-btn">Registrarse con Google</button>
                    <p>
                        ¿Ya tienes una cuenta? <span onClick={() => setIsRegistering(false)} className="toggle-link">Inicia sesión</span>
                    </p>
                </form>
            ) : (
                <form onSubmit={handleLogin} className="login-form">
                    <h1>Iniciar Sesión</h1>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit">Ingresar</button>
                    <button type="button" onClick={handleGoogleLogin} className="google-login-btn">Iniciar sesión con Google</button>
                    <p>
                        ¿No tienes una cuenta? <span onClick={() => setIsRegistering(true)} className="toggle-link">Regístrate</span>
                    </p>
                </form>
            )}
        </div>
    );
};