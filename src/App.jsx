import { BrowserRouter, Route, Routes, Navigate  } from 'react-router'
import './index.css'
import './login.css'
import './destinos.css'
import { Home } from './pages/Home'
import { Registrohome } from './pages/Registrohome'
import { Destinos } from './pages/Destinos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Registrohome" element={<Registrohome />} />
        <Route path="/destinos" element={<Destinos />} />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
