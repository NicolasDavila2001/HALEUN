import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Lecciones from './pages/Lecciones';
import Modelos from './pages/Modelos';
import Conversacion from './pages/Conversacion';
import Examen from './pages/Examen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/lecciones" element={<Lecciones />} />
        <Route path="/modelos" element={<Modelos />} />
        <Route path="/conversacion" element={<Conversacion />} />
        <Route path="/examen" element={<Examen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;