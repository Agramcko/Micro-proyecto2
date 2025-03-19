import { BrowserRouter, Route, Routes, Navigate  } from 'react-router'
import './index.css'
import './login.css'
import './destinos.css'
import './contactos.css'
import './experiencia.css'
import { Home } from './pages/Home'
import { Registrohome } from './pages/Registrohome'
import { Destinos } from './pages/Destinos'
import { Contactos } from './pages/Contactos'
import { Experiencias } from './pages/Experiencias'
import { Reservas } from './pages/Reservas'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Registrohome" element={<Registrohome />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
