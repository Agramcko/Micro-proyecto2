import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import './login.css'
import { Home } from './pages/Home'
import { Registrohome } from './pages/Registrohome'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Registrohome" element={<Registrohome />} />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
