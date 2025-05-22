import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Caja } from './pages/Caja';
import { Configuracion } from './pages/Configuracion';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/caja" element={<Caja />} />
          <Route path="/configuracion" element={<Configuracion />} />
          {/* Ruta para página no encontrada */}
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
